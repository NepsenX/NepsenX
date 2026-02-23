import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { loadApp } from './src/appResolver'; // 🔹 path inside src

// Domain to product mapping with SEO data
const domainConfig: Record<string, {
  title: string;
  description: string;
  keywords: string;
  path: string;
  seo: {
    ogImage?: string;
    twitterHandle?: string;
    structuredData: object;
    priority: number;
    changeFreq: string;
  }
}> = {
  'nepsenx.pages.dev': {
    title: 'NepsenX - Enterprise SaaS Platform',
    description: 'Complete digital transformation with AI-powered solutions, automation, and enterprise-grade cloud services.',
    keywords: 'saas, enterprise, cloud, ai, automation, digital transformation, business solutions',
    path: './products/home/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://nepsenx.pages.dev/og-image.jpg',
      twitterHandle: '@nepsenx',
      priority: 1.0,
      changeFreq: 'daily',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'NepsenX',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web',
        'description': 'Complete digital transformation with AI-powered solutions',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        }
      }
    }
  },
  'adupter.pages.dev': {
    title: 'Adupter - Smart Data Adaptation Platform',
    description: 'Intelligent data transformation and adaptation services for modern businesses.',
    keywords: 'data adaptation, data transformation, integration, api, middleware',
    path: './products/adupter/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://adupter.pages.dev/og-image.jpg',
      twitterHandle: '@adupter',
      priority: 0.9,
      changeFreq: 'weekly',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Adupter',
        'applicationCategory': 'DataApplication',
        'description': 'Intelligent data transformation platform'
      }
    }
  },
  'opena-nepsenx.pages.dev': {
    title: 'OpenA - AI-Powered Analytics Suite',
    description: 'Advanced analytics and AI solutions for data-driven decision making.',
    keywords: 'ai, analytics, machine learning, data science, business intelligence',
    path: './products/opena/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://opena-nepsenx.pages.dev/og-image.jpg',
      twitterHandle: '@openA',
      priority: 0.9,
      changeFreq: 'weekly',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'OpenA',
        'applicationCategory': 'AIApplication',
        'description': 'AI-powered analytics platform'
      }
    }
  },
  'cg-nepsenx.pages.dev': {
    title: 'CG - Creative Generation Platform',
    description: 'Next-generation creative tools for digital content generation.',
    keywords: 'creative, design, content generation, digital art, creative tools',
    path: './products/cg/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://cg-nepsenx.pages.dev/og-image.jpg',
      twitterHandle: '@cg_nepsenx',
      priority: 0.8,
      changeFreq: 'weekly',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'CG',
        'applicationCategory': 'CreativeApplication',
        'description': 'Creative generation platform'
      }
    }
  },
  'basikno.pages.dev': {
    title: 'BasiKno - Knowledge Management System',
    description: 'Enterprise knowledge management and collaboration platform.',
    keywords: 'knowledge management, collaboration, documentation, wiki, enterprise',
    path: './products/basikno/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://basikno.pages.dev/og-image.jpg',
      twitterHandle: '@basikno',
      priority: 0.9,
      changeFreq: 'daily',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'BasiKno',
        'applicationCategory': 'BusinessApplication',
        'description': 'Knowledge management platform'
      }
    }
  },
  'virtubrowse.pages.dev': {
    title: 'VirtuBrowse - Virtual Browsing Experience',
    description: 'Immersive virtual browsing and digital experience platform.',
    keywords: 'virtual browsing, digital experience, immersive, web browsing',
    path: './products/virtubrowse/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://virtubrowse.pages.dev/og-image.jpg',
      twitterHandle: '@virtubrowse',
      priority: 0.8,
      changeFreq: 'weekly',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'VirtuBrowse',
        'applicationCategory': 'BrowserApplication',
        'description': 'Virtual browsing platform'
      }
    }
  },
  'ishahi.pages.dev': {
    title: 'iShahi - E-commerce Solutions',
    description: 'Complete e-commerce platform for modern businesses.',
    keywords: 'ecommerce, online store, shopping, retail, marketplace',
    path: './products/ishahi/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://ishahi.pages.dev/og-image.jpg',
      twitterHandle: '@ishahi',
      priority: 0.9,
      changeFreq: 'daily',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'iShahi',
        'applicationCategory': 'ECommerceApplication',
        'description': 'E-commerce platform'
      }
    }
  },
  'oracus.pages.dev': {
    title: 'Oracus - Predictive Analytics Platform',
    description: 'Advanced predictive analytics and business intelligence solutions.',
    keywords: 'predictive analytics, business intelligence, data science, forecasting',
    path: './products/oracus/frontend/public/index.tsx',
    seo: {
      ogImage: 'https://oracus.pages.dev/og-image.jpg',
      twitterHandle: '@oracus',
      priority: 0.9,
      changeFreq: 'weekly',
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Oracus',
        'applicationCategory': 'AnalyticsApplication',
        'description': 'Predictive analytics platform'
      }
    }
  }
};

// Local development config
const localConfig = {
  title: 'Local Development - NepsenX SaaS Platform',
  description: 'Local development environment for NepsenX SaaS platform. Testing and development mode.',
  keywords: 'local, development, testing, saas, debug',
  path: './products/home/frontend/public/index.tsx',
  seo: {
    ogImage: 'http://localhost:3000/og-image.jpg',
    twitterHandle: '@nepsenx',
    priority: 0.1,
    changeFreq: 'always',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Local Development',
      'applicationCategory': 'DevelopmentApplication',
      'description': 'Local development environment'
    }
  }
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

// Detect search engine bots
function isSearchBot(): boolean {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('googlebot') || 
         ua.includes('bingbot') || 
         ua.includes('slurp') || 
         ua.includes('duckduckbot') || 
         ua.includes('baiduspider') ||
         ua.includes('yandexbot');
}

// Get base config (local or domain-based)
const baseConfig = isLocalhost 
  ? localConfig 
  : (domainConfig[currentDomain] || {
      ...domainConfig['nepsenx.pages.dev'],
      title: `${currentDomain} - NepsenX Platform`,
      description: `Welcome to ${currentDomain} - Part of NepsenX SaaS ecosystem`,
    });

// Get URL parameters
const urlParams = getUrlParameters();

// Allow override from URL parameters
const finalTitle = urlParams.title || baseConfig.title;
const finalDescription = urlParams.description || baseConfig.description;
const finalKeywords = urlParams.keywords || baseConfig.keywords;
const finalPath = urlParams.path || baseConfig.path;

// Complete config with URL overrides
const config = {
  ...baseConfig,
  title: finalTitle,
  description: finalDescription,
  keywords: finalKeywords,
  path: finalPath
};

// Generate sitemap URL
function getSitemapUrl(): string {
  return `https://${currentDomain}/sitemap.xml`;
}

// Add canonical URL
function addCanonicalUrl() {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  // Remove query parameters from canonical URL
  const canonicalUrl = window.location.href.split('?')[0];
  canonical.setAttribute('href', canonicalUrl);
}

// Add structured data
function addStructuredData() {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  
  const structuredData = {
    ...config.seo.structuredData,
    'url': window.location.origin,
    'sameAs': [
      `https://twitter.com/${config.seo.twitterHandle?.replace('@', '')}`,
      `https://github.com/nepsenx/${currentDomain.split('.')[0]}`,
      `https://linkedin.com/company/${currentDomain.split('.')[0]}`
    ],
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${window.location.origin}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
  
  script.text = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

// Add breadcrumb structured data
function addBreadcrumbData() {
  const pathParts = window.location.pathname.split('/').filter(p => p);
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': window.location.origin
    }
  ];
  
  let currentPath = '';
  pathParts.forEach((part, index) => {
    currentPath += `/${part}`;
    breadcrumbItems.push({
      '@type': 'ListItem',
      'position': index + 2,
      'name': part.charAt(0).toUpperCase() + part.slice(1),
      'item': `${window.location.origin}${currentPath}`
    });
  });
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems
  });
  
  document.head.appendChild(script);
}

// Update meta tags with SEO optimization
function updateMetaTags() {
  const isBot = isSearchBot();
  
  // Log for debugging
  if (isBot) {
    console.log('Search engine bot detected - optimizing meta tags');
  }
  
  // Update title
  document.title = config.title;
  
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
    
    meta.setAttribute('content', content);
  };
  
  // Basic meta tags
  updateOrCreateMeta('description', null, config.description);
  updateOrCreateMeta('keywords', null, config.keywords);
  updateOrCreateMeta('author', null, 'NepsenX');
  updateOrCreateMeta('robots', null, 'index, follow');
  updateOrCreateMeta('googlebot', null, 'index, follow');
  updateOrCreateMeta('language', null, 'en');
  
  // Open Graph tags (Facebook, LinkedIn)
  updateOrCreateMeta('', 'og:title', config.title);
  updateOrCreateMeta('', 'og:description', config.description);
  updateOrCreateMeta('', 'og:url', window.location.href);
  updateOrCreateMeta('', 'og:type', 'website');
  updateOrCreateMeta('', 'og:site_name', config.title.split('-')[0].trim());
  updateOrCreateMeta('', 'og:image', config.seo.ogImage || `https://${currentDomain}/og-image.jpg`);
  updateOrCreateMeta('', 'og:image:alt', config.title);
  updateOrCreateMeta('', 'og:locale', 'en_US');
  
  // Twitter Card tags
  updateOrCreateMeta('twitter:card', null, 'summary_large_image');
  updateOrCreateMeta('twitter:site', null, config.seo.twitterHandle || '@nepsenx');
  updateOrCreateMeta('twitter:title', null, config.title);
  updateOrCreateMeta('twitter:description', null, config.description);
  updateOrCreateMeta('twitter:image', null, config.seo.ogImage || `https://${currentDomain}/og-image.jpg`);
  updateOrCreateMeta('twitter:creator', null, config.seo.twitterHandle || '@nepsenx');
  
  // Additional SEO tags
  updateOrCreateMeta('apple-mobile-web-app-title', null, config.title);
  updateOrCreateMeta('application-name', null, config.title);
  updateOrCreateMeta('msapplication-TileColor', null, '#2b5797');
  updateOrCreateMeta('theme-color', null, '#ffffff');
  
  // Canonical URL
  addCanonicalUrl();
  
  // Structured data
  addStructuredData();
  addBreadcrumbData();
  
  // Add sitemap link
  let sitemapLink = document.querySelector('link[rel="sitemap"]');
  if (!sitemapLink) {
    sitemapLink = document.createElement('link');
    sitemapLink.setAttribute('rel', 'sitemap');
    sitemapLink.setAttribute('type', 'application/xml');
    sitemapLink.setAttribute('title', 'Sitemap');
    document.head.appendChild(sitemapLink);
  }
  sitemapLink.setAttribute('href', getSitemapUrl());
  
  // Add all URL parameters as meta tags (for debugging/analytics)
  Object.entries(urlParams).forEach(([key, value]) => {
    if (!['title', 'description', 'keywords', 'path'].includes(key)) {
      updateOrCreateMeta(`param-${key}`, null, value);
    }
  });
}

// Generate robots.txt content
function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /
Sitemap: ${getSitemapUrl()}

# Disallow admin paths
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /*?* # Prevent duplicate URLs with parameters
`;
}

// Main App component
const App: React.FC = () => {
  const [ProductComponent, setProductComponent] = useState<React.ComponentType<any> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Update meta tags immediately (critical for SEO)
    updateMetaTags();
    
    // Add robots meta if needed
    const isBot = isSearchBot();
    if (isBot) {
      console.log('Bot detected - ensuring all SEO tags are present');
    }

    // Dynamically import the product's index.tsx
    const loadProduct = async () => {
      try {
        const module = await import(/* @vite-ignore */ config.path);
        setProductComponent(() => module.default || module);
        
        // Log successful load for analytics
        if (!isBot) {
          // Track human user (optional analytics)
          console.log(`Loaded product: ${config.title} for domain: ${currentDomain}`);
        }
      } catch (err) {
        console.error('Failed to load product:', err);
        setError(`Failed to load product from ${config.path}`);
        
        // SEO-friendly fallback component
        const FallbackComponent = (props: any) => (
          <div style={{
            width: '100%',
            minHeight: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            padding: '5%',
            boxSizing: 'border-box'
          }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2%' }}>
              {config.title}
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', opacity: 0.9, maxWidth: '80%', textAlign: 'center' }}>
              {config.description}
            </p>
            
            {/* Quick links for SEO */}
            <nav style={{ marginTop: '5%' }}>
              <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', marginBottom: '3%' }}>
                Quick Links
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '5%', flexWrap: 'wrap', justifyContent: 'center' }}>
                <li><a href="/" style={{ color: 'white', textDecoration: 'underline' }}>Home</a></li>
                <li><a href="/about" style={{ color: 'white', textDecoration: 'underline' }}>About</a></li>
                <li><a href="/contact" style={{ color: 'white', textDecoration: 'underline' }}>Contact</a></li>
                <li><a href="/privacy" style={{ color: 'white', textDecoration: 'underline' }}>Privacy</a></li>
                <li><a href="/terms" style={{ color: 'white', textDecoration: 'underline' }}>Terms</a></li>
              </ul>
            </nav>
            
            {/* Hidden SEO content */}
            <div style={{ display: 'none' }}>
              <h2>About {config.title}</h2>
              <p>{config.description}</p>
              <p>Keywords: {config.keywords}</p>
            </div>
          </div>
        );
        setProductComponent(() => FallbackComponent);
      }
    };

    loadProduct();
  }, []);

  if (!ProductComponent) {
    // SEO-friendly loading component
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
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '2%' }}>
            {config.title}
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '3%' }}>
            Loading {config.title}...
          </p>
          <div style={{
            width: 'clamp(3rem, 8vw, 5rem)',
            height: 'clamp(3rem, 8vw, 5rem)',
            border: 'clamp(0.25rem, 0.5vw, 0.375rem) solid #e5e7eb',
            borderTopColor: '#3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }} />
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  // Pass all data as props to the product component
  const productProps = {
    domain: currentDomain,
    isLocal: isLocalhost,
    urlParams: urlParams,
    pathname: window.location.pathname,
    fullUrl: window.location.href,
    config: config,
    seo: config.seo,
    isBot: isSearchBot(),
    // Pass all URL parameters directly as props
    ...urlParams
  };

  return <ProductComponent {...productProps} />;
};

// Mount the app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
  
  // Add robots.txt meta (for crawlers)
  const robotsMeta = document.createElement('meta');
  robotsMeta.name = 'robots';
  robotsMeta.content = 'index, follow';
  document.head.appendChild(robotsMeta);
}

// Export for module usage
export default App;

// Generate sitemap.xml endpoint (if needed)
if (typeof window !== 'undefined' && window.location.pathname === '/sitemap.xml') {
  // This would typically be handled by your server
  console.log('Sitemap requested for:', currentDomain);
}

// Generate robots.txt endpoint
if (typeof window !== 'undefined' && window.location.pathname === '/robots.txt') {
  // This would typically be handled by your server
  console.log('Robots.txt requested for:', currentDomain);
}
