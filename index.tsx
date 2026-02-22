import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

// Domain to product mapping (default fallback)
const domainConfig: Record<string, {
  title: string;
  description: string;
  keywords: string;
  path: string;
}> = {
  'nepsenx.pages.dev': {
    title: 'NepsenX',
    description: 'nepsenx',
    keywords: 'nepsenx',
    path: './products/home/frontend/public/index.tsx'
  },
  'adupter.pages.dev': {
    title: 'Adupter',
    description: 'adupter',
    keywords: 'adupter',
    path: './products/adupter/frontend/public/index.tsx'
  },
  'opena-nepsenx.pages.dev': {
    title: 'OpenA',
    description: 'opena',
    keywords: 'opena',
    path: './products/opena/frontend/public/index.tsx'
  },
  'cg-nepsenx.pages.dev': {
    title: 'CG',
    description: 'cg',
    keywords: 'cg',
    path: './products/cg/frontend/public/index.tsx'
  },
  'basikno.pages.dev': {
    title: 'BasiKno',
    description: 'basikno',
    keywords: 'basikno',
    path: './products/basikno/frontend/public/index.tsx'
  },
  'virtubrowse.pages.dev': {
    title: 'VirtuBrowse',
    description: 'virtubrowse',
    keywords: 'virtubrowse',
    path: './products/virtubrowse/frontend/public/index.tsx'
  },
  'ishahi.pages.dev': {
    title: 'iShahi',
    description: 'ishahi',
    keywords: 'ishahi',
    path: './products/ishahi/frontend/public/index.tsx'
  },
  'oracus.pages.dev': {
    title: 'Oracus',
    description: 'oracus',
    keywords: 'oracus',
    path: './products/oracus_ai/app/index.tsx'
  }
};

// Local development config
const localConfig = {
  title: 'Local Development',
  description: 'local development',
  keywords: 'local, development',
  path: './products/home/frontend/public/index.tsx' // Default local path
};

// Parse URL parameters
function getUrlParameters(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const paramObj: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    paramObj[key] = value;
  }
  return paramObj;
}

// Get current domain and determine config
const currentDomain = window.location.hostname;
const isLocalhost = currentDomain === 'localhost' || currentDomain === '127.0.0.1' || currentDomain.includes('.local');

// Get base config (local or domain-based)
const baseConfig = isLocalhost 
  ? localConfig 
  : (domainConfig[currentDomain] || domainConfig['nepsenx.pages.dev']);

// Get URL parameters
const urlParams = getUrlParameters();

// Allow title override from URL parameter
const finalTitle = urlParams.title || baseConfig.title;
const finalDescription = urlParams.description || baseConfig.description;
const finalKeywords = urlParams.keywords || baseConfig.keywords;
const finalPath = urlParams.path || baseConfig.path; // Allow path override via URL

// Complete config with URL overrides
const config = {
  title: finalTitle,
  description: finalDescription,
  keywords: finalKeywords,
  path: finalPath
};

// Update meta tags
function updateMetaTags() {
  // Update title - but allow existing title to remain if no override needed
  const existingTitle = document.title;
  if (!existingTitle || existingTitle === '' || urlParams.title) {
    document.title = config.title;
  }
  
  // Helper to update or create meta tags
  const updateOrCreateMeta = (name: string, property: string | null, content: string) => {
    let meta: Element | null = null;
    
    if (property) {
      meta = document.querySelector(`meta[property="${property}"]`);
    } else {
      meta = document.querySelector(`meta[name="${name}"]`);
    }
    
    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', property);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    // Only update if content exists or we have URL params forcing it
    if (content || urlParams[name] || urlParams[property || '']) {
      meta.setAttribute('content', content);
    }
  };
  
  // Update meta tags only if they don't exist or are forced via URL
  updateOrCreateMeta('description', null, config.description);
  updateOrCreateMeta('keywords', null, config.keywords);
  updateOrCreateMeta('author', null, 'NepsenX');
  
  // Open Graph tags
  updateOrCreateMeta('', 'og:title', config.title);
  updateOrCreateMeta('', 'og:description', config.description);
  updateOrCreateMeta('', 'og:url', window.location.href);
  
  // Twitter Card tags
  updateOrCreateMeta('twitter:card', null, 'summary');
  updateOrCreateMeta('twitter:title', null, config.title);
  updateOrCreateMeta('twitter:description', null, config.description);
  
  // Add all URL parameters as meta tags for debugging/passing data
  Object.entries(urlParams).forEach(([key, value]) => {
    if (!['title', 'description', 'keywords', 'path'].includes(key)) {
      updateOrCreateMeta(`param-${key}`, null, value);
    }
  });
}

// Main App component with props passing to child
const App: React.FC = () => {
  const [ProductComponent, setProductComponent] = useState<React.ComponentType<any> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Update meta tags
    updateMetaTags();

    // Log environment info for debugging
    console.log('Environment:', {
      domain: currentDomain,
      isLocalhost,
      config,
      urlParams,
      fullPath: window.location.pathname + window.location.search
    });

    // Dynamically import the product's index.tsx
    const loadProduct = async () => {
      try {
        // Using dynamic import with template literal
        const module = await import(/* @vite-ignore */ config.path);
        setProductComponent(() => module.default || module);
      } catch (err) {
        console.error('Failed to load product:', err);
        setError(`Failed to load product from ${config.path}`);
        
        // Fallback content that shows all passed data
        const FallbackComponent = (props: any) => (
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '5%',
            boxSizing: 'border-box',
            overflow: 'auto'
          }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2%' }}>
              {config.title}
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', opacity: 0.9 }}>
              {config.description}
            </p>
            
            {/* Show URL parameters if they exist */}
            {Object.keys(urlParams).length > 0 && (
              <div style={{
                marginTop: '5%',
                width: '100%',
                maxWidth: '80%',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: 'clamp(0.5rem, 2vw, 2rem)',
                padding: '5%'
              }}>
                <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', marginBottom: '3%' }}>
                  URL Parameters:
                </h2>
                <pre style={{
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                  textAlign: 'left',
                  overflow: 'auto',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}>
                  {JSON.stringify(urlParams, null, 2)}
                </pre>
              </div>
            )}
            
            {/* Show path info */}
            <div style={{
              marginTop: '3%',
              fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
              padding: '2% 5%',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 'clamp(0.5rem, 2vw, 2rem)'
            }}>
              <div>Domain: {currentDomain} {isLocalhost ? '(local)' : ''}</div>
              <div>Path: {window.location.pathname}</div>
              <div>Product Path: {config.path}</div>
            </div>
            
            {/* Pass all data to props if component expects it */}
            {props.showData && (
              <div style={{ marginTop: '5%' }}>
                <button onClick={() => console.log('Props data:', props)}>
                  Log Props to Console
                </button>
              </div>
            )}
          </div>
        );
        setProductComponent(() => FallbackComponent);
      }
    };

    loadProduct();
  }, []);

  if (!ProductComponent) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f3f4f6'
      }}>
        <div style={{
          textAlign: 'center',
          color: '#4b5563'
        }}>
          <div style={{
            width: 'clamp(3rem, 8vw, 5rem)',
            height: 'clamp(3rem, 8vw, 5rem)',
            border: 'clamp(0.25rem, 0.5vw, 0.375rem) solid #e5e7eb',
            borderTopColor: '#3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 5%'
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            Loading {config.title}...
          </p>
          <p style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', marginTop: '2%', opacity: 0.7 }}>
            Path: {config.path}
          </p>
        </div>
      </div>
    );
  }

  // Pass all data as props to the product component
  // This includes: domain, urlParams, path info, config, etc.
  const productProps = {
    domain: currentDomain,
    isLocal: isLocalhost,
    urlParams: urlParams,
    pathname: window.location.pathname,
    fullUrl: window.location.href,
    config: config,
    // Pass all URL parameters directly as props too
    ...urlParams
  };

  return <ProductComponent {...productProps} />;
};

// Mount the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
