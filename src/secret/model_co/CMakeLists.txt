cmake_minimum_required(VERSION 3.10)
project(ModelCO_Weapon)

set(CMAKE_CXX_STANDARD 17)

# Include Directories
include_directories(include)

# Source Files
set(SOURCES
    C_dispatch.cpp
    managers/manager_core.cpp
    managers/manager_memory.cpp
    managers/manager_neural.cpp
    core/c_coda.cpp
    core/c_rt.cpp
    core/c_t.cpp
    core/c_e.cpp
    core/c_p.cpp
)

# Executable for Dispatcher Test
add_executable(ModelCO_Dispatcher ${SOURCES})

# Library for Blackhole Linking
add_library(ModelCO_Lib SHARED ${SOURCES})
