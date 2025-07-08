/**
 * Analytics and Cookie Consent Management
 * Handles GDPR compliance and tracking script loading
 */

// Countries that require explicit consent for cookies
const RESTRICTED_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT',
  'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'UK', 'CA'
];

// US states that only require notice (not consent)
const NOTICE_ONLY_STATES = ['US-CA', 'US-VA', 'US-CO', 'US-CT', 'US-UT'];

/**
 * Initialize analytics based on user's location and consent
 */
function initializeAnalytics() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const country = data.country_code;
      const region = `US-${data.region_code}`;
      const needsConsent = RESTRICTED_COUNTRIES.includes(country);
      const needsNotice = country === 'US' && NOTICE_ONLY_STATES.includes(region);

      if (needsConsent) {
        showCookieBanner(true);
      } else if (needsNotice) {
        showCookieBanner(false);
      } else {
        loadTrackingScripts();
      }
    })
    .catch(() => {
      console.warn('Geo lookup failed — tracking enabled by default');
      loadTrackingScripts();
    });
}

/**
 * Show cookie consent banner
 * @param {boolean} shouldDelayTracking - Whether to delay tracking until consent
 */
function showCookieBanner(shouldDelayTracking) {
  const banner = document.createElement('div');
  banner.id = 'cc-banner';
  banner.innerHTML = `
    <div>
      This site uses cookies to analyze traffic and serve personalized ads from Meta.
      <br>
      <button id="cc-accept">Accept</button>
    </div>
  `;
  document.body.appendChild(banner);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    document.getElementById('cc-banner').remove();
    if (shouldDelayTracking) loadTrackingScripts();
  };

  document.getElementById('cc-accept').addEventListener('click', accept);

  // Check if user has already consented
  if (localStorage.getItem('cookieConsent') === 'true') {
    banner.remove();
    if (shouldDelayTracking) loadTrackingScripts();
  } else if (!shouldDelayTracking) {
    loadTrackingScripts();
  }
}

/**
 * Load Google Analytics and Facebook Pixel tracking scripts
 */
function loadTrackingScripts() {
  // Google Analytics
  const ga = document.createElement('script');
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-KJFH7FDV68';
  ga.async = true;
  document.head.appendChild(ga);
  
  ga.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-KJFH7FDV68');
  };

  // Facebook Pixel
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1922039791903298');
  fbq('track', 'PageView');

  // Facebook Pixel noscript fallback
  const noScript = document.createElement('noscript');
  noScript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1922039791903298&ev=PageView&noscript=1" />';
  document.body.appendChild(noScript);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAnalytics); 