// Analytics utility functions for GA4 (gtag.js)
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize gtag
if (typeof window !== 'undefined') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
}

// Check if user has consented to analytics
export const hasAnalyticsConsent = (): boolean => {
  return localStorage.getItem('cookie-consent') === 'accepted';
};

// Generic event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (!hasAnalyticsConsent()) return;
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, parameters);
  }
};

// Track Calendly button click (high-value conversion)
export const trackCalendlyClick = () => {
  trackEvent('schedule_meeting', {
    event_category: 'engagement',
    event_label: 'calendly_button',
    value: 100 // High value action
  });
};

// Track service card view
export const trackServiceView = (serviceName: string) => {
  trackEvent('view_service', {
    event_category: 'content',
    event_label: serviceName,
    service_name: serviceName
  });
};

// Track contact click (phone or email)
export const trackContactClick = (contactType: 'phone' | 'email') => {
  trackEvent('contact_click', {
    event_category: 'engagement',
    event_label: contactType,
    contact_method: contactType
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    scroll_percentage: percentage
  });
};

// Track page view (for SPAs)
export const trackPageView = (pagePath?: string) => {
  if (!hasAnalyticsConsent()) return;
  
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_path: pagePath || window.location.pathname,
      page_location: window.location.href,
      page_title: document.title
    });
  }
};