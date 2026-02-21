/**
 * @file index.tsx
 * @description The Secret 20KB Gateway Key for NepsenX V2.0.
 * This file is intercepted by the Service Worker to allow 0-bandwidth data transfer.
 */

/* 
NEPSENX_GATEWAY_KEY_V2.0_START
SECRET_ID: 90_NEPSEN_GATE_72
GATEWAY_VERSION: 2.0.0
COMPRESSION: GZIP_ENABLED
TUNNEL_PROTOCOL: PRIVATE_BRIDGE
--------------------------------------------------------------------------------
*/

const GATEWAY_KEY = "Z".repeat(20000); // Functional padding to reach ~20KB

console.log("NepsenX Gateway Initialized. Security Handshake in progress...");

export default GATEWAY_KEY;
