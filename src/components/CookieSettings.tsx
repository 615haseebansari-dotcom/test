import React, { useState, useEffect } from 'react';
import { Settings, X, Shield, BarChart3, Eye, Cookie } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookieSettings({ isOpen, onClose }: CookieSettingsProps) {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    if (isOpen) {
      const cookieConsent = localStorage.getItem('cookie-consent');
      if (cookieConsent) {
        setPreferences(JSON.parse(cookieConsent));
      }
    }
  }, [isOpen]);

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    onClose();
    // Reload page to apply new cookie settings
    window.location.reload();
  };

  const resetToNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    onClose();
    window.location.reload();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      
      {/* Settings Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen verwalten</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Hier können Sie Ihre Cookie-Einstellungen anpassen. Notwendige Cookies sind für die 
                Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
              </p>
              
              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Notwendige Cookies</h3>
                        <p className="text-sm text-gray-500">Immer aktiv</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 text-sm font-medium">
                      Erforderlich
                    </div>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. 
                    Sie werden normalerweise nur als Reaktion auf von Ihnen durchgeführte Aktionen gesetzt.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Zweck:</strong> Session-Management, Sicherheit, Grundfunktionen der Website
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Funktionale Cookies</h3>
                        <p className="text-sm text-gray-500">Optional</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.functional}
                        onChange={() => handlePreferenceChange('functional')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung. Sie können von uns oder 
                    von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Zweck:</strong> Benutzereinstellungen, Sprachauswahl, erweiterte Website-Features
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-6 h-6 text-orange-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Analyse-Cookies</h3>
                        <p className="text-sm text-gray-500">Optional</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie 
                    Informationen anonym sammeln und melden.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Zweck:</strong> Website-Analyse, Nutzungsstatistiken, Performance-Optimierung
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-6 h-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">Marketing-Cookies</h3>
                        <p className="text-sm text-gray-500">Optional</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen und die Effektivität 
                    unserer Werbekampagnen zu messen.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Zweck:</strong> Personalisierte Werbung, Remarketing, Social Media Integration
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                <button
                  onClick={resetToNecessary}
                  className="bg-gray-100 text-gray-700 px-6 py-3 font-medium hover:bg-gray-200 transition-colors"
                >
                  Nur notwendige Cookies
                </button>
                <button
                  onClick={savePreferences}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 font-medium hover:shadow-lg transition-all duration-300 flex-1"
                >
                  Einstellungen speichern
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}