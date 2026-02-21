#include <windows.h>
#include <iostream>
#include <TlHelp32.h>

/*
 * MODEL CO - DLL INJECTOR
 * Injects blackhole.dll into target game process
 */

DWORD GetProcessIdByName(const wchar_t* processName) {
    HANDLE snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    if (snapshot == INVALID_HANDLE_VALUE) return 0;

    PROCESSENTRY32W entry;
    entry.dwSize = sizeof(PROCESSENTRY32W);

    if (Process32FirstW(snapshot, &entry)) {
        do {
            if (_wcsicmp(entry.szExeFile, processName) == 0) {
                CloseHandle(snapshot);
                return entry.th32ProcessID;
            }
        } while (Process32NextW(snapshot, &entry));
    }

    CloseHandle(snapshot);
    return 0;
}

bool InjectDLL(DWORD processId, const char* dllPath) {
    HANDLE hProcess = OpenProcess(PROCESS_ALL_ACCESS, FALSE, processId);
    if (!hProcess) {
        std::cerr << "[!] Failed to open process. Error: " << GetLastError() << std::endl;
        return false;
    }

    // Allocate memory in target process
    LPVOID allocMem = VirtualAllocEx(hProcess, NULL, strlen(dllPath) + 1, 
                                      MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
    if (!allocMem) {
        std::cerr << "[!] VirtualAllocEx failed. Error: " << GetLastError() << std::endl;
        CloseHandle(hProcess);
        return false;
    }

    // Write DLL path to allocated memory
    if (!WriteProcessMemory(hProcess, allocMem, dllPath, strlen(dllPath) + 1, NULL)) {
        std::cerr << "[!] WriteProcessMemory failed. Error: " << GetLastError() << std::endl;
        VirtualFreeEx(hProcess, allocMem, 0, MEM_RELEASE);
        CloseHandle(hProcess);
        return false;
    }

    // Get LoadLibraryA address
    HMODULE hKernel32 = GetModuleHandleA("kernel32.dll");
    LPVOID loadLibAddr = (LPVOID)GetProcAddress(hKernel32, "LoadLibraryA");

    // Create remote thread to load DLL
    HANDLE hThread = CreateRemoteThread(hProcess, NULL, 0, 
                                         (LPTHREAD_START_ROUTINE)loadLibAddr, 
                                         allocMem, 0, NULL);
    if (!hThread) {
        std::cerr << "[!] CreateRemoteThread failed. Error: " << GetLastError() << std::endl;
        VirtualFreeEx(hProcess, allocMem, 0, MEM_RELEASE);
        CloseHandle(hProcess);
        return false;
    }

    std::cout << "[+] DLL injected successfully!" << std::endl;
    WaitForSingleObject(hThread, INFINITE);

    VirtualFreeEx(hProcess, allocMem, 0, MEM_RELEASE);
    CloseHandle(hThread);
    CloseHandle(hProcess);
    return true;
}

int main(int argc, char** argv) {
    std::cout << "=== MODEL CO - DLL INJECTOR ===" << std::endl;

    if (argc < 3) {
        std::cout << "Usage: injector.exe <process_name> <dll_path>" << std::endl;
        std::cout << "Example: injector.exe Cyberpunk2077.exe blackhole.dll" << std::endl;
        return 1;
    }

    // Convert process name to wide char
    wchar_t wProcessName[MAX_PATH];
    MultiByteToWideChar(CP_ACP, 0, argv[1], -1, wProcessName, MAX_PATH);

    std::cout << "[*] Searching for process: " << argv[1] << std::endl;
    DWORD pid = GetProcessIdByName(wProcessName);

    if (pid == 0) {
        std::cerr << "[!] Process not found. Is the game running?" << std::endl;
        return 1;
    }

    std::cout << "[+] Found process ID: " << pid << std::endl;
    std::cout << "[*] Injecting DLL: " << argv[2] << std::endl;

    if (InjectDLL(pid, argv[2])) {
        std::cout << "[SUCCESS] Model CO Blackhole injected into game!" << std::endl;
        std::cout << "[*] Game is now running through Model CO's virtual hardware." << std::endl;
        return 0;
    } else {
        std::cerr << "[FAILED] Injection failed." << std::endl;
        return 1;
    }
}
