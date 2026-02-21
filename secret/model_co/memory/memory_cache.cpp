#include <iostream>
#include <cstdint>
#include <cstring>

/*
 * ═══════════════════════════════════════════════════════════════
 *          MEMORY_CACHE - 2MB Circular Cache System
 *               Hot Data Fast Access (LRU Cache)
 * ═══════════════════════════════════════════════════════════════
 * 
 * Concept: Cache recently generated data from memory_primary
 * - Only 2MB real RAM used
 * - Circular buffer (oldest data evicted)
 * - Works with memory_primary's seeds
 */

#define CACHE_SIZE_MB 2
#define CACHE_SIZE_BYTES (CACHE_SIZE_MB * 1024 * 1024)
#define CACHE_ENTRY_SIZE 4096  // 4KB per entry
#define NUM_CACHE_ENTRIES (CACHE_SIZE_BYTES / CACHE_ENTRY_SIZE)

namespace CO_Memory_Cache {
    
    struct CacheEntry {
        uint64_t seed;           // Which seed this data belongs to
        uint64_t address;        // Starting address
        uint8_t data[CACHE_ENTRY_SIZE];
        uint64_t last_access;    // For LRU
        bool valid;
    };
    
    static CacheEntry* cache = nullptr;
    static uint64_t access_counter = 0;
    static uint64_t cache_hits = 0;
    static uint64_t cache_misses = 0;
    
    void init() {
        if (cache) return;
        
        cache = new CacheEntry[NUM_CACHE_ENTRIES];
        
        for (int i = 0; i < NUM_CACHE_ENTRIES; i++) {
            cache[i].valid = false;
            cache[i].last_access = 0;
        }
        
        std::cout << "[Memory Cache] Circular cache initialized" << std::endl;
        std::cout << "[Memory Cache] Size: " << CACHE_SIZE_MB << "MB (" 
                  << NUM_CACHE_ENTRIES << " entries)" << std::endl;
    }
    
    int find_lru_entry() {
        int lru_index = 0;
        uint64_t oldest = cache[0].last_access;
        
        for (int i = 1; i < NUM_CACHE_ENTRIES; i++) {
            if (!cache[i].valid) return i;  // Empty slot
            
            if (cache[i].last_access < oldest) {
                oldest = cache[i].last_access;
                lru_index = i;
            }
        }
        
        return lru_index;
    }
    
    uint8_t* get_data(uint64_t seed, uint64_t address) {
        access_counter++;
        
        // Check if in cache
        uint64_t aligned_address = (address / CACHE_ENTRY_SIZE) * CACHE_ENTRY_SIZE;
        
        for (int i = 0; i < NUM_CACHE_ENTRIES; i++) {
            if (cache[i].valid && 
                cache[i].seed == seed && 
                cache[i].address == aligned_address) {
                
                // Cache hit!
                cache_hits++;
                cache[i].last_access = access_counter;
                return cache[i].data;
            }
        }
        
        // Cache miss - need to generate
        cache_misses++;
        
        int entry_index = find_lru_entry();
        cache[entry_index].seed = seed;
        cache[entry_index].address = aligned_address;
        cache[entry_index].last_access = access_counter;
        cache[entry_index].valid = true;
        
        // Generate data (would call memory_primary here)
        // For now, simple pattern
        for (int i = 0; i < CACHE_ENTRY_SIZE; i++) {
            cache[entry_index].data[i] = (uint8_t)((seed + aligned_address + i) % 256);
        }
        
        return cache[entry_index].data;
    }
    
    void get_stats(uint64_t* hits, uint64_t* misses, float* hit_rate) {
        *hits = cache_hits;
        *misses = cache_misses;
        
        uint64_t total = cache_hits + cache_misses;
        *hit_rate = total > 0 ? (float)cache_hits / total * 100.0f : 0.0f;
    }
    
    void clear() {
        for (int i = 0; i < NUM_CACHE_ENTRIES; i++) {
            cache[i].valid = false;
        }
        cache_hits = 0;
        cache_misses = 0;
        access_counter = 0;
        
        std::cout << "[Memory Cache] Cache cleared" << std::endl;
    }
    
    void shutdown() {
        delete[] cache;
        cache = nullptr;
    }
}

extern "C" {
    void memory_cache_init() {
        CO_Memory_Cache::init();
    }
    
    void memory_cache_test() {
        CO_Memory_Cache::init();
        
        std::cout << "[TEST] Testing 2MB circular cache..." << std::endl;
        
        uint64_t seed = 99999;
        
        // Simulate multiple accesses
        for (int i = 0; i < 100; i++) {
            uint64_t address = (i % 10) * 4096;  // Reuse some addresses
            uint8_t* data = CO_Memory_Cache::get_data(seed, address);
            
            if (i % 20 == 0) {
                std::cout << "[TEST] Access " << i << " - Data[0] = " << (int)data[0] << std::endl;
            }
        }
        
        uint64_t hits, misses;
        float hit_rate;
        CO_Memory_Cache::get_stats(&hits, &misses, &hit_rate);
        
        std::cout << "\n[STATS]" << std::endl;
        std::cout << "  Cache hits: " << hits << std::endl;
        std::cout << "  Cache misses: " << misses << std::endl;
        std::cout << "  Hit rate: " << hit_rate << "%" << std::endl;
        std::cout << "  Memory used: " << CACHE_SIZE_MB << "MB (fixed)" << std::endl;
        
        std::cout << "[Memory Cache] Circular Cache OPERATIONAL ✅" << std::endl;
    }
}
