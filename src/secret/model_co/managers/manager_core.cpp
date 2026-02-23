#include "../include/managers/manager_core.h"
#include <iostream>
#include <string>

/*
 * ═══════════════════════════════════════════════════════════════
 *              MANAGER_CORE - Core Module Controller
 *           Controls: core/ (c_coda, c_rt, c_t, c_e, c_p)
 * ═══════════════════════════════════════════════════════════════
 * 
 * This manager RUNS the 5 core modules locally:
 * - Receives operations from CO.cpp
 * - Executes appropriate core module
 * - Returns results to CO.cpp
 */

// Import core modules
extern "C" {
    void c_coda_dispatch_real();
    void c_rt_trace_real();
    void c_t_compute_real();
    void c_e_init();
    void c_e_process(std::string data);
    void c_p_init();
    void c_p_process(std::string data);
}

namespace ManagerCore {
    static bool initialized = false;
    
    void init() {
        if (initialized) return;
        
        std::cout << "[Manager Core] Initializing 5 core modules..." << std::endl;
        
        // Initialize all cores
        std::cout << "[Manager Core] → c_e (Efficiency Core)" << std::endl;
        c_e_init();
        
        std::cout << "[Manager Core] → c_p (Performance Core)" << std::endl;
        c_p_init();
        
        std::cout << "[Manager Core] ✅ All cores ready" << std::endl;
        initialized = true;
    }
    
    std::string dispatch(const std::string& operation, const std::string& data) {
        if (!initialized) init();
        
        std::cout << "[Manager Core] Dispatching: " << operation << std::endl;
        
        // Route to appropriate core
        if (operation.find("cuda") != std::string::npos || 
            operation.find("gpu") != std::string::npos) {
            // CUDA operations → c_coda
            std::cout << "[Manager Core] → Executing c_coda (CUDA simulation)" << std::endl;
            c_coda_dispatch_real();
            return "CUDA operation complete";
        }
        else if (operation.find("render") != std::string::npos || 
                 operation.find("ray") != std::string::npos) {
            // Rendering → c_rt
            std::cout << "[Manager Core] → Executing c_rt (Ray tracing)" << std::endl;
            c_rt_trace_real();
            return "Rendering complete";
        }
        else if (operation.find("tensor") != std::string::npos || 
                 operation.find("matrix") != std::string::npos) {
            // Tensor ops → c_t
            std::cout << "[Manager Core] → Executing c_t (Tensor core)" << std::endl;
            c_t_compute_real();
            return "Tensor operation complete";
        }
        else if (operation.find("light") != std::string::npos) {
            // Lightweight → c_e
            std::cout << "[Manager Core] → Executing c_e (Efficiency core)" << std::endl;
            c_e_process(data);
            return "Efficiency core processed";
        }
        else {
            // Heavy compute → c_p
            std::cout << "[Manager Core] → Executing c_p (Performance core)" << std::endl;
            c_p_process(data);
            return "Performance core processed";
        }
    }
}

// C API for CO.cpp
extern "C" {
    void manager_core_init() {
        ManagerCore::init();
    }
    
    void manager_core_dispatch(const char* operation, char* output) {
        std::string result = ManagerCore::dispatch(
            std::string(operation), 
            ""
        );
        
        strcpy(output, result.c_str());
    }
}
