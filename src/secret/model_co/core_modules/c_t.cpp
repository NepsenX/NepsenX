#include <iostream>
#include <vector>

/*
 * MODEL CO - TENSOR CORE (v2.0)
 * AUTHENTIC: Quantized INT8 Matrix Multiplication.
 */

namespace CO_Tensor {
    void matmul_int8(const int8_t* A, const int8_t* B, int32_t* C, int M, int N, int K) {
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                int32_t acc = 0;
                for (int k = 0; k < K; k++) {
                    acc += (int32_t)A[i * K + k] * B[k * N + j];
                }
                C[i * N + j] = acc;
            }
        }
    }
}

extern "C" {
    void c_t_compute_real() {
        int8_t A[16], B[16];
        int32_t C[16];
        // Initialize with real-ish data
        for(int i=0; i<16; i++) { A[i] = (int8_t)i; B[i] = (int8_t)(16-i); }
        CO_Tensor::matmul_int8(A, B, C, 4, 4, 4);
    }
}
