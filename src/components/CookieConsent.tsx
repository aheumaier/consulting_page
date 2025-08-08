import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Enable GTM/GA4 tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'consent_given',
      'consent_type': 'analytics'
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
    
    // Disable GTM/GA4 tracking
    window['ga-disable-GA_MEASUREMENT_ID'] = true;
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex-1 mr-4">
            <p className="text-sm text-gray-700">
              Wir verwenden Cookies zur Analyse des Website-Traffics und zur Optimierung Ihrer Website-Erfahrung. 
              Wenn Sie unsere Website nutzen, stimmen Sie der Verwendung von Cookies zu.
            </p>
          </div>
          <div className="flex items-center space-x-3 mt-3 sm:mt-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition"
            >
              Ablehnen
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 transition"
            >
              Akzeptieren
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="ml-2 text-gray-400 hover:text-gray-600"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <a 
            href="/datenschutz" 
            className="text-xs text-emerald-600 hover:text-emerald-700 underline"
          >
            Datenschutzerklärung
          </a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;