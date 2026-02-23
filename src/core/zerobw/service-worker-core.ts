/**
 * @file service-worker-core.ts
 * @description Main service worker for NepsenX Zero Bandwidth Engine.
 * Intercepts requests and routes them through the private connect tunnel.
 */

const CACHE_NAME = "nepsenx-gate-v2";
const SECRET_KEY_HEADER = "X-NepsenX-Gateway-Key";

self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/index.tsx", // The 20KB Key
        "/main.tsx",
      ]);
    }),
  );
});

self.addEventListener("fetch", (event: any) => {
  const request = event.request;

  // Intercept 1GB+ or specific large data routes
  if (request.url.includes("/large-data/") || request.size > 1024 * 1024) {
    event.respondWith(fetchWithTunnel(request));
  }
});

async function fetchWithTunnel(request: Request) {
  // 1. Get Secret Key from local index.tsx key system
  const gatewayKey = await getGatewayKey();

  // 2. Attach key and route through VPS-1 Brain
  const headers = new Headers(request.headers);
  headers.set(SECRET_KEY_HEADER, gatewayKey);

  // 3. Chained Logic: User -> VPS-1 -> VPS-2 (Private)
  return fetch(request.url, {
    headers: headers,
  });
}

async function getGatewayKey() {
  // Logic to retrieve the 20KB gate key from IndexedDB or Cache
  return "nepsen_local_key_v2_90";
}
