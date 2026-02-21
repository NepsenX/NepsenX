#ifndef MANAGER_NEURAL_H
#define MANAGER_NEURAL_H

#include <string>
#include <iostream>

class NeuralManager {
public:
    NeuralManager();
    ~NeuralManager();
    
    void init();
    void think(std::string input);
};

#endif
