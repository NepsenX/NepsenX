#ifndef MANAGER_CORE_H
#define MANAGER_CORE_H

#include <string>

// The Core Manager orchestrates the Virtual CPU and GPU threads.
// It acts as the "Scheduler" for Model CO.
class CoreManager {
public:
    CoreManager();
    ~CoreManager();

    // Initializes the Sub-Cores (c_coda, c_rt, c_t, c_e, c_p)
    void init();

    // Dispatches a task to the appropriate sub-core
    void dispatch_task(std::string task_payload);

private:
    // Pointers to sub-cores (to be defined)
    void* coda_core;
    void* rt_core;
};

#endif // MANAGER_CORE_H
