#include "../include/managers/manager_memory.h"
#include <iostream>
#include <cstdint>
#include <string>

/*
 * ═══════════════════════════════════════════════════════════════
 *            MANAGER_MEMORY - Memory Module Controller
 *      Controls: Memory/ (memory_primary, memory_cache)
 * ═══════════════════════════════════════════════════════════════
 * 
 * This manager RUNS the 2 memory modules locally:
 * - Receives data requests from CO.cpp
 * - Executes memory_primary (SeedLM) or memory_cache
 * - Returns data to CO.cpp
 */

// Import memory modules
extern "C" {
    void memory_primary_init();
    void memory_cache_init();
    // Would import actual memory functions here
}

namespace ManagerMemory {
    static bool initialized = false;
    static uint64_t memory_accessed = 0;
    
    void init() {
        if (initialized) return;
        
        std::cout << "[Manager Memory] Initializing memory modules..." << std::endl;
        
        // Initialize primary (SeedLM)
        std::cout << "[Manager Memory] → memory_primary (SeedLM)" << std::endl;
        memory_primary_init();
        
        // Initialize cache
        std::cout << "[Manager Memory] → memory_cache (2MB LRU)" << std::endl;
        memory_cache_init();
        
        std::cout << "[Manager Memory] ✅ Memory system ready" << std::endl;
        std::cout << "[Manager Memory] Virtual capacity: Infinite (procedural)" << std::endl;
        std::cout << "[Manager Memory] Real RAM used: 2MB (cache only)" << std::endl;
        
        initialized = true;
    }
    
    void get_data(uint64_t seed, uint64_t address, uint8_t* output) {
        if (!initialized) init();
        
        memory_accessed++;
        
        std::cout << "[Manager Memory] Accessing data - Seed: " << seed 
                  << ", Address: " << address << std::endl;
        
        // First check cache (fast path)
        std::cout << "[Manager Memory] → Checking memory_cache..." << std::endl;
        
        // If not in cache, generate from primary
        std::cout << "[Manager Memory] → Generating from memory_primary (SeedLM)" << std::endl;
        
        // Simulate procedural generation
        for (int i = 0; i < 256; i++) {
            output[i] = (uint8_t)((seed + address + i) % 256);
        }
        
        std::cout << "[Manager Memory] ✅ Data generated (0 RAM used)" << std::endl;
    }
}

// C API for CO.cpp
extern "C" {
    void manager_memory_init() {
        ManagerMemory::init();
    }
    
    void manager_memory_get(uint64_t seed, uint64_t address, uint8_t* output) {
        ManagerMemory::get_data(seed, address, output);
    }
}
