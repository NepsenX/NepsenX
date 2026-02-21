#include <iostream>
#include <string>
#include <thread>

/*
 * C_P: Virtual Performance Core (P-Core)
 * Simulated Hyper-threading: Handling heavy logic tasks.
 * Optimized to push 0.1 CPU to its logical limit.
 */

void c_p_process(std::string data) {
    std::cout << "[c_p] Performance Mode: Initializing Hyper-threaded logic..." << std::endl;
    
    // Simulations of heavy compute
    std::cout << "[c_p] >> Virtual Core 01: Active" << std::endl;
    std::cout << "[c_p] >> Virtual Core 02: Active" << std::endl;
    std::cout << "[c_p] >> Processing: " << data << std::endl;
}

// Initializer
void c_p_init() {
    std::cout << "[c_p] Performance Core Online (Hyper-threaded Virtual Mode)." << std::endl;
}
