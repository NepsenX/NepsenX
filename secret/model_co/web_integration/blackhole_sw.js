/*
 * ═══════════════════════════════════════════════════════════════
 *          BLACKHOLE SERVICE WORKER v11.0
 *        Complete Resource Interception Before Browser
 * ═══════════════════════════════════════════════════════════════
 *
 * This Service Worker intercepts EVERY network request and routes
 * it through CO Model BEFORE the browser processes it.
 *
 * Intercepts:
 * - HTML files (parsed by CO)
 * - CSS files (computed by CO)
 * - JavaScript (executed by CO)
 * - Images (decoded by CO)
 * - Videos (streamed through CO)
 * - Audio (processed by CO)
 * - Fonts (rendered by CO)
 * - Everything else
 */

const CO_SERVER = "http://localhost:8765";
const CACHE_NAME = "co-blackhole-cache-v11";

// ═══════════════════════════════════════════════════════════════
// SERVICE WORKER INSTALLATION
// ═══════════════════════════════════════════════════════════════

self.addEventListener("install", (event) => {
  console.log("[Blackhole SW] Installing v11.0...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Blackhole SW] Cache opened");
      return cache;
    }),
  );

  // Take control immediately
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[Blackhole SW] Activating...");

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("[Blackhole SW] Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );

  // Take control of all clients immediately
  return self.clients.claim();
});

// ═══════════════════════════════════════════════════════════════
// MAIN FETCH INTERCEPTOR
// ═══════════════════════════════════════════════════════════════

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Skip CO server itself
  if (url.origin === new URL(CO_SERVER).origin) {
    return;
  }

  // Skip chrome extensions, etc.
  if (
    url.protocol === "chrome-extension:" ||
    url.protocol === "moz-extension:"
  ) {
    return;
  }

  console.log("[Blackhole SW] Intercepting:", url.pathname);

  // Route based on resource type
  if (
    url.pathname.endsWith(".html") ||
    url.pathname === "/" ||
    url.pathname.endsWith("/")
  ) {
    event.respondWith(handleHTML(event.request));
  } else if (url.pathname.endsWith(".css")) {
    event.respondWith(handleCSS(event.request));
  } else if (url.pathname.endsWith(".js")) {
    event.respondWith(handleJavaScript(event.request));
  } else if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)$/i)) {
    event.respondWith(handleImage(event.request));
  } else if (url.pathname.match(/\.(mp4|webm|ogg|mov|avi)$/i)) {
    event.respondWith(handleVideo(event.request));
  } else if (url.pathname.match(/\.(mp3|wav|ogg|m4a|aac)$/i)) {
    event.respondWith(handleAudio(event.request));
  } else if (url.pathname.match(/\.(woff|woff2|ttf|otf|eot)$/i)) {
    event.respondWith(handleFont(event.request));
  } else {
    // Generic handler
    event.respondWith(handleGeneric(event.request));
  }
});

// ═══════════════════════════════════════════════════════════════
// RESOURCE HANDLERS
// ═══════════════════════════════════════════════════════════════

async function handleHTML(request) {
  console.log("[Blackhole SW] Processing HTML:", request.url);

  try {
    // Fetch original HTML
    const response = await fetch(request);
    const html = await response.text();

    // Send to CO for processing
    const coResponse = await fetch(`${CO_SERVER}/parse_html`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        html: html,
        operation: "parse_html",
      }),
    });

    if (coResponse.ok) {
      const result = await coResponse.json();

      // CO has processed HTML - use that
      const processedHTML = result.processedHTML || html;

      console.log("[Blackhole SW] HTML processed by CO");

      return new Response(processedHTML, {
        headers: {
          "Content-Type": "text/html",
          "X-Processed-By": "CO-Model-v11",
        },
      });
    }
  } catch (e) {
    console.warn("[Blackhole SW] CO not available, serving original HTML:", e);
  }

  // Fallback: serve original
  return fetch(request);
}

async function handleCSS(request) {
  console.log("[Blackhole SW] Processing CSS:", request.url);

  try {
    const response = await fetch(request);
    const css = await response.text();

    // Send to CO for parsing and optimization
    const coResponse = await fetch(`${CO_SERVER}/parse_css`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        css: css,
        operation: "parse_css",
      }),
    });

    if (coResponse.ok) {
      const result = await coResponse.json();
      const processedCSS = result.processedCSS || css;

      console.log("[Blackhole SW] CSS processed by CO");

      return new Response(processedCSS, {
        headers: {
          "Content-Type": "text/css",
          "X-Processed-By": "CO-Model-v11",
        },
      });
    }
  } catch (e) {
    console.warn("[Blackhole SW] CO not available for CSS:", e);
  }

  return fetch(request);
}

async function handleJavaScript(request) {
  console.log("[Blackhole SW] Processing JavaScript:", request.url);

  // Skip blackhole.js itself
  if (request.url.includes("blackhole")) {
    return fetch(request);
  }

  try {
    const response = await fetch(request);
    const js = await response.text();

    // Send to CO for analysis (and potentially execution)
    const coResponse = await fetch(`${CO_SERVER}/parse_js`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        code: js,
        operation: "parse_js",
      }),
    });

    if (coResponse.ok) {
      const result = await coResponse.json();
      const processedJS = result.processedJS || js;

      console.log("[Blackhole SW] JS processed by CO");

      return new Response(processedJS, {
        headers: {
          "Content-Type": "application/javascript",
          "X-Processed-By": "CO-Model-v11",
        },
      });
    }
  } catch (e) {
    console.warn("[Blackhole SW] CO not available for JS:", e);
  }

  return fetch(request);
}

async function handleImage(request) {
  console.log("[Blackhole SW] Processing Image:", request.url);

  try {
    // Check cache first
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(request);

    if (cached) {
      console.log("[Blackhole SW] Image from cache");
      return cached;
    }

    // Fetch image
    const response = await fetch(request);
    const blob = await response.blob();

    // Convert to base64
    const base64 = await blobToBase64(blob);

    // Send to CO for processing
    const coResponse = await fetch(`${CO_SERVER}/decode_image`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        data: base64,
        mimeType: blob.type,
        operation: "decode_image",
      }),
    });

    if (coResponse.ok) {
      const result = await coResponse.json();

      if (result.processedImage) {
        // CO processed image - use that
        const processedBlob = base64ToBlob(result.processedImage, blob.type);
        const processedResponse = new Response(processedBlob, {
          headers: {
            "Content-Type": blob.type,
            "X-Processed-By": "CO-Model-v11",
          },
        });

        // Cache it
        cache.put(request, processedResponse.clone());

        console.log("[Blackhole SW] Image decoded by CO");
        return processedResponse;
      }
    }

    // Fallback: cache and return original
    cache.put(request, response.clone());
    return response;
  } catch (e) {
    console.warn("[Blackhole SW] Image processing failed:", e);
    return fetch(request);
  }
}

async function handleVideo(request) {
  console.log("[Blackhole SW] Processing Video:", request.url);

  // For now, pass through (streaming video through CO requires more complex implementation)
  // TODO: Implement video frame-by-frame processing

  try {
    const coResponse = await fetch(`${CO_SERVER}/stream_video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        operation: "stream_video",
      }),
    });

    if (coResponse.ok) {
      console.log("[Blackhole SW] Video routed through CO");
      return coResponse;
    }
  } catch (e) {
    console.warn("[Blackhole SW] Video streaming via CO failed:", e);
  }

  return fetch(request);
}

async function handleAudio(request) {
  console.log("[Blackhole SW] Processing Audio:", request.url);

  // Similar to video
  try {
    const coResponse = await fetch(`${CO_SERVER}/stream_audio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        operation: "stream_audio",
      }),
    });

    if (coResponse.ok) {
      console.log("[Blackhole SW] Audio routed through CO");
      return coResponse;
    }
  } catch (e) {
    console.warn("[Blackhole SW] Audio streaming via CO failed:", e);
  }

  return fetch(request);
}

async function handleFont(request) {
  console.log("[Blackhole SW] Processing Font:", request.url);

  try {
    const response = await fetch(request);
    const blob = await response.blob();
    const base64 = await blobToBase64(blob);

    const coResponse = await fetch(`${CO_SERVER}/render_font`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        data: base64,
        mimeType: blob.type,
        operation: "render_font",
      }),
    });

    if (coResponse.ok) {
      const result = await coResponse.json();

      if (result.processedFont) {
        const processedBlob = base64ToBlob(result.processedFont, blob.type);

        console.log("[Blackhole SW] Font rendered by CO");

        return new Response(processedBlob, {
          headers: {
            "Content-Type": blob.type,
            "X-Processed-By": "CO-Model-v11",
          },
        });
      }
    }

    return response;
  } catch (e) {
    console.warn("[Blackhole SW] Font processing failed:", e);
    return fetch(request);
  }
}

async function handleGeneric(request) {
  console.log("[Blackhole SW] Generic resource:", request.url);

  // Log to CO but pass through
  try {
    fetch(`${CO_SERVER}/log_resource`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: request.url,
        type: "unknown",
        operation: "log_resource",
      }),
    }).catch(() => {});
  } catch (e) {
    // Silent fail
  }

  return fetch(request);
}

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result.split(",")[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function base64ToBlob(base64, mimeType) {
  const byteCharacters = atob(base64);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}

// ═══════════════════════════════════════════════════════════════
// MESSAGE HANDLER
// ═══════════════════════════════════════════════════════════════

self.addEventListener("message", (event) => {
  console.log("[Blackhole SW] Message received:", event.data);

  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }

  if (event.data && event.data.type === "GET_STATUS") {
    event.ports[0].postMessage({
      status: "active",
      version: "11.0",
      cache: CACHE_NAME,
    });
  }
});

console.log("[Blackhole SW] Service Worker v11.0 loaded and ready");

/*
 * ═══════════════════════════════════════════════════════════════
 *                   USAGE
 * ═══════════════════════════════════════════════════════════════
 *
 * In your HTML, register this Service Worker:
 *
 * <script>
 * if ('serviceWorker' in navigator) {
 *     navigator.serviceWorker.register('/blackhole_sw.js')
 *         .then(reg => console.log('Blackhole SW registered'))
 *         .catch(err => console.error('SW registration failed:', err));
 * }
 * </script>
 *
 * After registration, ALL resources will be intercepted and
 * routed through CO Model before browser processes them.
 */
