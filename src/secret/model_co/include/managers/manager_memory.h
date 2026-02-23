#ifndef MANAGER_MEMORY_H
#define MANAGER_MEMORY_H

#include <string>

class MemoryManager {
public:
    MemoryManager();
    ~MemoryManager();
    
    void init();
    std::string retrieve_data(unsigned long long seed_id);
    void store_seed(std::string data);
    size_t get_memory_usage(); // Returns current RAM usage
};

#endif
