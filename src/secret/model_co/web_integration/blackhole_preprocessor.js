#!/usr/bin/env node

/*
 * ═══════════════════════════════════════════════════════════════
 *          BLACKHOLE HTML PREPROCESSOR v11.0
 *       Injects inline blackhole BEFORE HTML parsing begins
 * ═══════════════════════════════════════════════════════════════
 *
 * This preprocessor modifies HTML files to ensure blackhole.js
 * runs BEFORE any HTML parsing, CSS loading, or media fetching.
 *
 * Usage:
 *   node blackhole_preprocessor.js input.html output.html
 *   node blackhole_preprocessor.js --watch folder/
 */

const fs = require("fs");
const path = require("path");

// ═══════════════════════════════════════════════════════════════
// CONFIGURATION
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  blackholeJsPath: path.join(__dirname, "blackhole.js"),
  serviceWorkerPath: path.join(__dirname, "blackhole_sw.js"),
  injectServiceWorkerReg: true,
  minify: false,
  verbose: true,
};

// ═══════════════════════════════════════════════════════════════
// MAIN PREPROCESSING FUNCTION
// ═══════════════════════════════════════════════════════════════

function preprocessHTML(inputHTML) {
  log("Starting HTML preprocessing...");

  // Step 1: Read blackhole.js content
  const blackholeCode = fs.readFileSync(CONFIG.blackholeJsPath, "utf8");
  log(`Loaded blackhole.js: ${blackholeCode.length} bytes`);

  // Step 2: Create inline script
  const inlineScript = createInlineScript(blackholeCode);

  // Step 3: Add Service Worker registration
  const swRegistration = CONFIG.injectServiceWorkerReg
    ? createSWRegistration()
    : "";

  // Step 4: Find DOCTYPE and inject IMMEDIATELY after
  let outputHTML = inputHTML;

  // Find DOCTYPE position
  const doctypeMatch = outputHTML.match(/<!DOCTYPE[^>]*>/i);

  if (doctypeMatch) {
    const doctypeEnd = doctypeMatch.index + doctypeMatch[0].length;

    // Inject inline script RIGHT AFTER DOCTYPE
    outputHTML =
      outputHTML.substring(0, doctypeEnd) +
      "\n" +
      inlineScript +
      "\n" +
      swRegistration +
      "\n" +
      outputHTML.substring(doctypeEnd);

    log("Injected inline blackhole after DOCTYPE");
  } else {
    // No DOCTYPE found - inject at very beginning
    outputHTML = inlineScript + "\n" + swRegistration + "\n" + outputHTML;
    log("No DOCTYPE found, injected at beginning");
  }

  // Step 5: Tag all resources for CO tracking
  outputHTML = tagResources(outputHTML);

  // Step 6: Add metadata
  outputHTML = addMetadata(outputHTML);

  log("Preprocessing complete");
  return outputHTML;
}

// ═══════════════════════════════════════════════════════════════
// INLINE SCRIPT CREATION
// ═══════════════════════════════════════════════════════════════

function createInlineScript(blackholeCode) {
  // Option 1: Full inline (no minification for now)
  const script = `
<script id="co-blackhole-inline" data-co-critical="true">
// ═══════════════════════════════════════════════════════════════
// BLACKHOLE.JS v11.0 - INLINE CRITICAL PATH
// This runs BEFORE any HTML parsing
// ═══════════════════════════════════════════════════════════════

${blackholeCode}

// Mark as loaded
window.__BLACKHOLE_LOADED__ = true;
console.log('[Blackhole Preprocessor] Inline blackhole loaded before HTML parse');
</script>`;

  return script;
}

// ═══════════════════════════════════════════════════════════════
// SERVICE WORKER REGISTRATION
// ═══════════════════════════════════════════════════════════════

function createSWRegistration() {
  return `
<script id="co-sw-registration" data-co-critical="true">
// Register Service Worker ASAP
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/blackhole_sw.js')
            .then(registration => {
                console.log('[Blackhole SW] Registered successfully');
                console.log('[Blackhole SW] Scope:', registration.scope);
                
                // Force activation
                if (registration.waiting) {
                    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                }
                
                // Reload page to activate SW (only first time)
                if (!navigator.serviceWorker.controller) {
                    console.log('[Blackhole SW] First load - reloading to activate...');
                    setTimeout(() => window.location.reload(), 100);
                }
            })
            .catch(error => {
                console.error('[Blackhole SW] Registration failed:', error);
            });
    });
} else {
    console.warn('[Blackhole] Service Workers not supported');
}
</script>`;
}

// ═══════════════════════════════════════════════════════════════
// RESOURCE TAGGING
// ═══════════════════════════════════════════════════════════════

function tagResources(html) {
  log("Tagging resources for CO tracking...");

  // Tag images
  html = html.replace(
    /<img([^>]+)src="([^"]+)"([^>]*)>/gi,
    (match, before, src, after) => {
      if (!match.includes("data-co-resource")) {
        return `<img${before}src="${src}"${after} data-co-resource="image" data-co-src="${src}">`;
      }
      return match;
    },
  );

  // Tag videos
  html = html.replace(
    /<video([^>]+)src="([^"]+)"([^>]*)>/gi,
    (match, before, src, after) => {
      if (!match.includes("data-co-resource")) {
        return `<video${before}src="${src}"${after} data-co-resource="video" data-co-src="${src}">`;
      }
      return match;
    },
  );

  // Tag audio
  html = html.replace(
    /<audio([^>]+)src="([^"]+)"([^>]*)>/gi,
    (match, before, src, after) => {
      if (!match.includes("data-co-resource")) {
        return `<audio${before}src="${src}"${after} data-co-resource="audio" data-co-src="${src}">`;
      }
      return match;
    },
  );

  // Tag CSS links
  html = html.replace(
    /<link([^>]+)href="([^"]+)"([^>]*)rel="stylesheet"([^>]*)>/gi,
    (match, before, href, middle, after) => {
      if (!match.includes("data-co-resource")) {
        return `<link${before}href="${href}"${middle}rel="stylesheet"${after} data-co-resource="css" data-co-href="${href}">`;
      }
      return match;
    },
  );

  // Tag script tags
  html = html.replace(
    /<script([^>]+)src="([^"]+)"([^>]*)>/gi,
    (match, before, src, after) => {
      // Skip blackhole itself
      if (src.includes("blackhole")) {
        return match;
      }
      if (!match.includes("data-co-resource")) {
        return `<script${before}src="${src}"${after} data-co-resource="js" data-co-src="${src}">`;
      }
      return match;
    },
  );

  log("Resource tagging complete");
  return html;
}

// ═══════════════════════════════════════════════════════════════
// ADD METADATA
// ═══════════════════════════════════════════════════════════════

function addMetadata(html) {
  // Add meta tag indicating CO processing
  const metaTag =
    '<meta name="co-blackhole-version" content="11.0">\n    <meta name="co-preprocessed" content="true">';

  // Find <head> and inject
  html = html.replace(/<head([^>]*)>/i, (match) => {
    return match + "\n    " + metaTag;
  });

  // Add data attribute to <html>
  html = html.replace(/<html([^>]*)>/i, (match, attrs) => {
    if (!attrs.includes("data-co-intercepted")) {
      return `<html${attrs} data-co-intercepted="true" data-co-version="11.0">`;
    }
    return match;
  });

  return html;
}

// ═══════════════════════════════════════════════════════════════
// FILE OPERATIONS
// ═══════════════════════════════════════════════════════════════

function processFile(inputPath, outputPath) {
  log(`\nProcessing: ${inputPath}`);

  try {
    // Read input
    const inputHTML = fs.readFileSync(inputPath, "utf8");
    log(`Input size: ${inputHTML.length} bytes`);

    // Preprocess
    const outputHTML = preprocessHTML(inputHTML);
    log(`Output size: ${outputHTML.length} bytes`);

    // Write output
    fs.writeFileSync(outputPath, outputHTML, "utf8");
    log(`✅ Saved to: ${outputPath}`);

    return true;
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath, recursive = true) {
  log(`\nProcessing directory: ${dirPath}`);

  const files = fs.readdirSync(dirPath);
  let processedCount = 0;

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && recursive) {
      processedCount += processDirectory(fullPath, recursive);
    } else if (file.endsWith(".html")) {
      // Create output filename
      const outputPath = fullPath.replace(".html", ".co.html");

      if (processFile(fullPath, outputPath)) {
        processedCount++;
      }
    }
  }

  return processedCount;
}

// ═══════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════

function log(message) {
  if (CONFIG.verbose) {
    console.log(`[Blackhole Preprocessor] ${message}`);
  }
}

function showUsage() {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║       BLACKHOLE HTML PREPROCESSOR v11.0                     ║
╚══════════════════════════════════════════════════════════════╝

Usage:
  node blackhole_preprocessor.js <input.html> <output.html>
  node blackhole_preprocessor.js <input.html>  (outputs to input.co.html)
  node blackhole_preprocessor.js --dir <directory>  (processes all .html)

Options:
  --verbose     Enable verbose logging (default: true)
  --no-sw       Don't inject Service Worker registration
  --help        Show this help

Examples:
  node blackhole_preprocessor.js index.html
  node blackhole_preprocessor.js index.html processed.html
  node blackhole_preprocessor.js --dir ./public

What it does:
  1. Injects entire blackhole.js inline at TOP of HTML
  2. Adds Service Worker registration
  3. Tags all resources (img, video, css, js) for CO tracking
  4. Adds metadata for CO processing
  5. Ensures blackhole runs BEFORE any HTML parsing
    `);
}

// ═══════════════════════════════════════════════════════════════
// MAIN CLI
// ═══════════════════════════════════════════════════════════════

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("--help")) {
    showUsage();
    process.exit(0);
  }

  // Parse options
  if (args.includes("--no-verbose")) {
    CONFIG.verbose = false;
  }

  if (args.includes("--no-sw")) {
    CONFIG.injectServiceWorkerReg = false;
  }

  // Process directory
  if (args.includes("--dir")) {
    const dirIndex = args.indexOf("--dir");
    const dirPath = args[dirIndex + 1];

    if (!dirPath) {
      console.error("Error: --dir requires a directory path");
      process.exit(1);
    }

    const count = processDirectory(dirPath);
    console.log(`\n✅ Processed ${count} HTML files`);
    process.exit(0);
  }

  // Process single file
  const inputPath = args.find((arg) => !arg.startsWith("--"));

  if (!inputPath) {
    console.error("Error: No input file specified");
    showUsage();
    process.exit(1);
  }

  // Determine output path
  let outputPath = args[1];
  if (!outputPath || outputPath.startsWith("--")) {
    outputPath = inputPath.replace(".html", ".co.html");
  }

  // Process
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║       BLACKHOLE HTML PREPROCESSOR v11.0                     ║
╚══════════════════════════════════════════════════════════════╝
    `);

  const success = processFile(inputPath, outputPath);

  if (success) {
    console.log("\n✅ Preprocessing complete!");
    console.log("\nNext steps:");
    console.log("1. Start CO server: ./CO_server.exe");
    console.log(`2. Open in browser: ${outputPath}`);
    console.log("3. All operations will route through CO Model");
  } else {
    console.error("\n❌ Preprocessing failed");
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

// Export for use as module
module.exports = {
  preprocessHTML,
  processFile,
  processDirectory,
};

/*
 * ═══════════════════════════════════════════════════════════════
 *                   EXAMPLE OUTPUT
 * ═══════════════════════════════════════════════════════════════
 *
 * BEFORE (original.html):
 *   <!DOCTYPE html>
 *   <html>
 *   <head>
 *       <link rel="stylesheet" href="style.css">
 *   </head>
 *   <body>
 *       <img src="photo.jpg">
 *   </body>
 *   </html>
 *
 * AFTER (original.co.html):
 *   <!DOCTYPE html>
 *   <script id="co-blackhole-inline">
 *   // ENTIRE blackhole.js code here...
 *   </script>
 *   <script id="co-sw-registration">
 *   // Service Worker registration...
 *   </script>
 *   <html data-co-intercepted="true" data-co-version="11.0">
 *   <head>
 *       <meta name="co-blackhole-version" content="11.0">
 *       <meta name="co-preprocessed" content="true">
 *       <link rel="stylesheet" href="style.css" data-co-resource="css">
 *   </head>
 *   <body>
 *       <img src="photo.jpg" data-co-resource="image" data-co-src="photo.jpg">
 *   </body>
 *   </html>
 */
