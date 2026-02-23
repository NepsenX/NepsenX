/*
 * ═══════════════════════════════════════════════════════════════
 *              CO_SERVER.CPP - HTTP Server for Blackhole.js
 *                  Simple Embedded HTTP/REST API Server
 * ═══════════════════════════════════════════════════════════════
 *
 * This is a simple TCP-based HTTP server that handles requests from
 * blackhole.js and other clients. It processes JSON payloads and 
 * routes them to the CO system.
 */

#include <iostream>
#include <string>
#include <sstream>
#include <map>
#include <vector>
#include <cstring>

#ifdef _WIN32
    #include <winsock2.h>
    #include <ws2tcpip.h>
    #pragma comment(lib, "ws2_32.lib")
    #define close closesocket
#else
    #include <sys/socket.h>
    #include <netinet/in.h>
    #include <unistd.h>
    #include <arpa/inet.h>
#endif

// External CO functions
extern "C" {
    void CO_Init();
    const char* CO_Process(const char* json_data);
}

namespace CO_Server {

    struct HTTPRequest {
        std::string method;
        std::string path;
        std::map<std::string, std::string> headers;
        std::string body;
    };

    struct HTTPResponse {
        int status_code;
        std::string status_message;
        std::map<std::string, std::string> headers;
        std::string body;

        HTTPResponse() : status_code(200), status_message("OK") {
            headers["Content-Type"] = "application/json";
            headers["Access-Control-Allow-Origin"] = "*";
            headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
            headers["Access-Control-Allow-Headers"] = "Content-Type";
        }

        std::string to_string() const {
            std::stringstream ss;
            ss << "HTTP/1.1 " << status_code << " " << status_message << "\r\n";
            
            for (const auto& header : headers) {
                ss << header.first << ": " << header.second << "\r\n";
            }
            
            ss << "Content-Length: " << body.length() << "\r\n";
            ss << "\r\n";
            ss << body;
            
            return ss.str();
        }
    };

    // ═══════════════════════════════════════════════════════════
    // HTTP REQUEST PARSER
    // ═══════════════════════════════════════════════════════════

    HTTPRequest parse_request(const std::string& raw_request) {
        HTTPRequest req;
        std::istringstream stream(raw_request);
        std::string line;

        // Parse request line
        if (std::getline(stream, line)) {
            std::istringstream line_stream(line);
            line_stream >> req.method >> req.path;
        }

        // Parse headers
        while (std::getline(stream, line) && line != "\r") {
            auto colon = line.find(':');
            if (colon != std::string::npos) {
                std::string key = line.substr(0, colon);
                std::string value = line.substr(colon + 2);
                
                // Remove \r if present
                if (!value.empty() && value.back() == '\r') {
                    value.pop_back();
                }
                
                req.headers[key] = value;
            }
        }

        // Parse body
        std::string body;
        while (std::getline(stream, line)) {
            body += line;
        }
        req.body = body;

        return req;
    }

    // ═══════════════════════════════════════════════════════════
    // REQUEST HANDLERS
    // ═══════════════════════════════════════════════════════════

    HTTPResponse handle_status(const HTTPRequest& req) {
        HTTPResponse res;
        res.body = R"({
            "status": "ok",
            "connected": true,
            "version": "10.0.0",
            "server": "CO Model",
            "managers": {
                "memory": true,
                "neural": true,
                "core": true
            }
        })";
        return res;
    }

    HTTPResponse handle_process(const HTTPRequest& req) {
        HTTPResponse res;
        
        try {
            std::cout << "[CO Server] Processing request: " << req.body.substr(0, 100) << "..." << std::endl;
            
            // Route to CO
            const char* result = CO_Process(req.body.c_str());
            
            res.body = std::string(result);
            std::cout << "[CO Server] Response sent" << std::endl;
        }
        catch (const std::exception& e) {
            res.status_code = 500;
            res.status_message = "Internal Server Error";
            res.body = R"({"status":"error","error":")" + std::string(e.what()) + R"("})";
        }
        
        return res;
    }

    HTTPResponse handle_dom_operation(const HTTPRequest& req) {
        HTTPResponse res;
        res.body = R"({"status":"success","result":"DOM operation processed"})";
        return res;
    }

    HTTPResponse handle_render_operation(const HTTPRequest& req) {
        HTTPResponse res;
        res.body = R"({"status":"success","result":"Render operation processed"})";
        return res;
    }

    HTTPResponse handle_options(const HTTPRequest& req) {
        HTTPResponse res;
        res.status_code = 204;
        res.status_message = "No Content";
        res.body = "";
        return res;
    }

    HTTPResponse route_request(const HTTPRequest& req) {
        std::cout << "[CO Server] " << req.method << " " << req.path << std::endl;

        // Handle OPTIONS (CORS preflight)
        if (req.method == "OPTIONS") {
            return handle_options(req);
        }

        // Route based on path
        if (req.path == "/status") {
            return handle_status(req);
        }
        else if (req.path == "/process") {
            return handle_process(req);
        }
        else if (req.path.find("/dom/") == 0) {
            return handle_dom_operation(req);
        }
        else if (req.path.find("/render/") == 0) {
            return handle_render_operation(req);
        }
        else {
            HTTPResponse res;
            res.status_code = 404;
            res.status_message = "Not Found";
            res.body = R"({"status":"error","error":"Endpoint not found"})";
            return res;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // SERVER LOOP
    // ═══════════════════════════════════════════════════════════

    void start_server(int port = 8765) {
        #ifdef _WIN32
        WSADATA wsaData;
        if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
            std::cerr << "[CO Server] WSAStartup failed" << std::endl;
            return;
        }
        #endif

        // Create socket
        int server_socket = socket(AF_INET, SOCK_STREAM, 0);
        if (server_socket < 0) {
            std::cerr << "[CO Server] Failed to create socket" << std::endl;
            return;
        }

        // Set socket options
        int opt = 1;
        setsockopt(server_socket, SOL_SOCKET, SO_REUSEADDR, (char*)&opt, sizeof(opt));

        // Bind to port
        sockaddr_in server_addr{};
        server_addr.sin_family = AF_INET;
        server_addr.sin_addr.s_addr = inet_addr("127.0.0.1");
        server_addr.sin_port = htons(port);

        if (bind(server_socket, (sockaddr*)&server_addr, sizeof(server_addr)) < 0) {
            std::cerr << "[CO Server] Failed to bind to port " << port << std::endl;
            close(server_socket);
            return;
        }

        // Listen
        if (listen(server_socket, 10) < 0) {
            std::cerr << "[CO Server] Failed to listen on socket" << std::endl;
            close(server_socket);
            return;
        }

        std::cout << "\n╔══════════════════════════════════════════════════╗" << std::endl;
        std::cout << "║     CO HTTP SERVER RUNNING                     ║" << std::endl;
        std::cout << "╚══════════════════════════════════════════════════╝\n" << std::endl;
        std::cout << "[CO Server] Listening on http://localhost:" << port << std::endl;
        std::cout << "[CO Server] Endpoints available:" << std::endl;
        std::cout << "  GET  /status     - Server status" << std::endl;
        std::cout << "  POST /process    - Process operations" << std::endl;
        std::cout << "  POST /dom/*      - DOM operations" << std::endl;
        std::cout << "  POST /render/*   - Rendering operations" << std::endl;
        std::cout << "\n[CO Server] Waiting for connections...\n" << std::endl;

        // Accept loop
        while (true) {
            sockaddr_in client_addr{};
            socklen_t client_len = sizeof(client_addr);
            
            int client_socket = accept(server_socket, (sockaddr*)&client_addr, &client_len);
            if (client_socket < 0) {
                continue;
            }

            // Read request
            char buffer[65536] = {0};
            int bytes_read = recv(client_socket, buffer, sizeof(buffer) - 1, 0);
            
            if (bytes_read > 0) {
                buffer[bytes_read] = '\0';
                std::string raw_request(buffer);

                // Parse and route
                HTTPRequest req = parse_request(raw_request);
                HTTPResponse res = route_request(req);

                // Send response
                std::string response_str = res.to_string();
                send(client_socket, response_str.c_str(), response_str.length(), 0);
            }

            close(client_socket);
        }

        close(server_socket);
        
        #ifdef _WIN32
        WSACleanup();
        #endif
    }
}

// ═══════════════════════════════════════════════════════════
// MAIN - Start server
// ═══════════════════════════════════════════════════════════

int main() {
    std::cout << "╔══════════════════════════════════════════════════════════╗" << std::endl;
    std::cout << "║     CO MODEL - HTTP SERVER v10.0                        ║" << std::endl;
    std::cout << "║     Complete Browser Virtualization Backend            ║" << std::endl;
    std::cout << "╚══════════════════════════════════════════════════════════╝\n" << std::endl;

    // Initialize CO system
    std::cout << "[Main] Initializing CO system..." << std::endl;
    CO_Init();

    // Start HTTP server
    CO_Server::start_server(8765);

    return 0;
}

/*
 * ═══════════════════════════════════════════════════════════
 *                   COMPILATION
 * ═══════════════════════════════════════════════════════════
 *
 * Windows:
 * g++ CO_server.cpp CO.cpp managers\*.cpp core\*.cpp Memory\*.cpp NPC\*.cpp -o CO_server.exe -std=c++11 -lws2_32
 *
 * Linux/Mac:
 * g++ CO_server.cpp CO.cpp managers/*.cpp core/*.cpp Memory/*.cpp NPC/*.cpp -o CO_server -std=c++11 -pthread
 *
 * ═══════════════════════════════════════════════════════════
 */
