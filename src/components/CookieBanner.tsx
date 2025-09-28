import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, Eye, BarChart3, ExternalLink } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
      loadCookies(savedPreferences);
    }
  }, []);

  const loadCookies = (prefs: CookiePreferences) => {
    // Load analytics cookies if accepted
    if (prefs.analytics) {
      // Example: Load Google Analytics
      // gtag('config', 'GA_MEASUREMENT_ID');
    }
    
    // Load marketing cookies if accepted
    if (prefs.marketing) {
      // Example: Load marketing pixels
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    loadCookies(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    loadCookies(necessaryOnly);
    setShowBanner(false);
    setShowSettings(false);
  };

  const saveCustomPreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    loadCookies(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return; // Cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 mobile-px-4">
          {!showSettings ? (
            // Main Banner
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-6">
              <div className="flex items-start space-x-4 flex-1">
                <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Cookie className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                    Wir respektieren Ihre Privatsphäre
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 mobile-text-sm">
                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                    Notwendige Cookies sind für die Grundfunktionen der Website erforderlich. Mit Ihrer 
                    Zustimmung verwenden wir auch Cookies für Analyse und Marketing, um unsere Website 
                    zu verbessern und Ihnen relevante Inhalte anzuzeigen.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs mobile-text-sm">
                    <a href="/datenschutz" className="text-purple-600 hover:text-purple-700 underline flex items-center">
                      <Shield className="w-3 h-3 mr-1" />
                      Datenschutzerklärung
                    </a>
                    <a href="/impressum" className="text-purple-600 hover:text-purple-700 underline flex items-center">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Impressum
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="bg-gray-100 text-gray-700 px-4 md:px-6 py-2 md:py-3 font-medium hover:bg-gray-200 transition-colors flex items-center justify-center text-xs md:text-sm mobile-btn-full"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessaryOnly}
                  className="bg-gray-100 text-gray-700 px-4 md:px-6 py-2 md:py-3 font-medium hover:bg-gray-200 transition-colors text-xs md:text-sm mobile-btn-full"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 md:px-6 py-2 md:py-3 font-medium hover:shadow-lg transition-all duration-300 text-xs md:text-sm mobile-btn-full"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          ) : (
            // Settings Panel
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-bold text-gray-900">Cookie-Einstellungen</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-3 md:space-y-4 max-h-80 md:max-h-96 overflow-y-auto">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base mobile-text-sm">Notwendige Cookies</h4>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 md:px-3 py-1 text-xs font-medium mobile-text-sm">
                      Immer aktiv
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 mobile-text-sm">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                  </p>
                  <p className="text-xs text-gray-500 mobile-text-sm">
                    Zweck: Session-Management, Sicherheit, Grundfunktionen
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base mobile-text-sm">Funktionale Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="sr-only peer"
                      />
                      <div className="w-10 md:w-11 h-5 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 md:after:h-5 after:w-4 md:after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 mobile-text-sm">
                    Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung.
                  </p>
                  <p className="text-xs text-gray-500 mobile-text-sm">
                    Zweck: Benutzereinstellungen, Sprachauswahl, erweiterte Features
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-5 h-5 text-orange-600" />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base mobile-text-sm">Analyse-Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-10 md:w-11 h-5 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 md:after:h-5 after:w-4 md:after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 mobile-text-sm">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                  </p>
                  <p className="text-xs text-gray-500 mobile-text-sm">
                    Zweck: Website-Analyse, Nutzungsstatistiken, Performance-Optimierung
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 p-3 md:p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-red-600" />
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base mobile-text-sm">Marketing-Cookies</h4>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-10 md:w-11 h-5 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 md:after:h-5 after:w-4 md:after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 mobile-text-sm">
                    Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen.
                  </p>
                  <p className="text-xs text-gray-500 mobile-text-sm">
                    Zweck: Personalisierte Werbung, Remarketing, Social Media Integration
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-3 md:pt-4 border-t border-gray-200">
                <button
                  onClick={acceptNecessaryOnly}
                  className="bg-gray-100 text-gray-700 px-4 md:px-6 py-2 md:py-3 font-medium hover:bg-gray-200 transition-colors text-xs md:text-sm mobile-btn-full"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 md:px-6 py-2 md:py-3 font-medium hover:shadow-lg transition-all duration-300 text-xs md:text-sm flex-1 mobile-btn-full"
                >
                  Auswahl speichern
                </button>
                <button
                  onClick={acceptAll}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 md:px-6 py-2 md:py-3 font-medium hover:shadow-lg transition-all duration-300 text-xs md:text-sm mobile-btn-full"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}