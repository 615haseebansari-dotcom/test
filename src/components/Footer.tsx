import React from 'react';
import { useState } from 'react';
import { Cloud, Linkedin, Twitter, Github } from 'lucide-react';
import CookieSettings from './CookieSettings';

export default function Footer() {
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <>
      {/* ABSCHNITT: Footer - START */}
      <footer className="bg-white py-16 border-t border-gray-200" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mobile-grid-1 sm:mobile-grid-2">
            {/* Logo and Company */}
            <div className="space-y-4 text-center sm:text-left">
              <img 
                src="/LOGO_CUT_NEW.png" 
                alt="WolkenBunker Logo Footer - Private Cloud IT-Services Deutschland Hamburg" 
                className="w-32 md:w-40 h-auto object-contain mx-auto sm:mx-0" 
                loading="lazy"
                decoding="async"
                title="WolkenBunker Provider GmbH - Ihr IT-Partner aus Hamburg"
              />
              <address className="space-y-2 not-italic text-gray-800 mobile-text-sm">
                <div className="text-gray-700 font-medium text-sm md:text-base">Katharinenstraße 33</div>
                <div className="text-gray-700 font-medium text-sm md:text-base">20457 Hamburg</div>
                <div className="pt-3 space-y-1">
                  <div className="text-gray-700 text-sm md:text-base mobile-text-sm">Tel: <a href="tel:+4940524745540" className="text-blue-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline">040 524745540</a></div>
                  <div className="text-gray-700 text-sm md:text-base mobile-text-sm">E-Mail: <a href="mailto:info@wolkenbunker.de" className="text-blue-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline">info@wolkenbunker.de</a></div>
                </div>
              </address>
            </div>
            
            {/* Impressum */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-6 text-base md:text-lg">Kontaktieren</h4>
              <nav aria-label="Rechtliche Links">
                <ul className="space-y-2 md:space-y-3 text-sm mobile-text-sm">
                  <li><a href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Vertrieb</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Support</a></li>
                  <li><a href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Kontakt</a></li>
                </ul>
              </nav>
            </div>
            
            {/* Ressourcen */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-6 text-base md:text-lg">Ressourcen</h4>
              <nav aria-label="Ressourcen Links">
                <ul className="space-y-2 md:space-y-3 text-sm mobile-text-sm">
                  <li><a href="/cloud" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Cloud</a></li>
                  <li><a href="/server" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Server</a></li>
                  <li><a href="/colocation" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Colocation</a></li>
                  <li><a href="/hosting" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Hosting</a></li>
                  <li><a href="/managed-it-services" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Managed Services</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Blog</a></li>
                </ul>
              </nav>
            </div>
            
            {/* Kontaktieren */}
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 lg:mb-6 text-base md:text-lg">Rechtliches</h4>
              <nav aria-label="Kontakt Links">
                <ul className="space-y-2 md:space-y-3 text-sm mobile-text-sm">
                  <li><a href="/about" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base" onClick={() => window.scrollTo(0, 0)}>Über uns</a></li>
                  <li><a href="/impressum" className="text-blue-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Impressum</a></li>
                  <li><a href="/datenschutz" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">Datenschutzerklärung</a></li>
                  <li><a href="/agb" className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-sm md:text-base">AGBs</a></li>
                  <li>
                    <button 
                      onClick={() => setShowCookieSettings(true)}
                      className="text-gray-600 hover:text-purple-600 transition-colors inline-block py-1 link-underline text-left text-sm md:text-base mobile-text-sm"
                    >
                      Cookie-Einstellungen
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs md:text-sm text-gray-600 mobile-text-sm">
              © 2025 Wolkenbunker Provider GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://linkedin.com/company/wolkenbunker" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/wolkenbunker" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/wolkenbunker_privat_cloud" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 6.71.048 5.493.087 4.73.222 4.058.42a5.916 5.916 0 0 0-2.134 1.404A5.916 5.916 0 0 0 .42 4.058C.222 4.73.087 5.493.048 6.71.01 7.929 0 8.396 0 12.017s.01 4.088.048 5.307c.039 1.217.174 1.98.372 2.652a5.916 5.916 0 0 0 1.404 2.134 5.916 5.916 0 0 0 2.134 1.404c.672.198 1.435.333 2.652.372 1.219.038 1.686.048 5.307.048s4.088-.01 5.307-.048c1.217-.039 1.98-.174 2.652-.372a5.916 5.916 0 0 0 2.134-1.404 5.916 5.916 0 0 0 1.404-2.134c.198-.672.333-1.435.372-2.652.038-1.219.048-1.686.048-5.307s-.01-4.088-.048-5.307c-.039-1.217-.174-1.98-.372-2.652a5.916 5.916 0 0 0-1.404-2.134A5.916 5.916 0 0 0 19.58.42c-.672-.198-1.435-.333-2.652-.372C15.709.01 15.242 0 11.621 0h.396zm-.079 2.198c3.533 0 3.953.014 5.35.052 1.292.059 1.994.277 2.462.459a4.108 4.108 0 0 1 1.51.981 4.108 4.108 0 0 1 .981 1.51c.182.468.4 1.17.459 2.462.038 1.397.052 1.817.052 5.35 0 3.533-.014 3.953-.052 5.35-.059 1.292-.277 1.994-.459 2.462a4.108 4.108 0 0 1-.981 1.51 4.108 4.108 0 0 1-1.51.981c-.468.182-1.17.4-2.462.459-1.397.038-1.817.052-5.35.052-3.533 0-3.953-.014-5.35-.052-1.292-.059-1.994-.277-2.462-.459a4.108 4.108 0 0 1-1.51-.981 4.108 4.108 0 0 1-.981-1.51c-.182-.468-.4-1.17-.459-2.462-.038-1.397-.052-1.817-.052-5.35 0-3.533.014-3.953.052-5.35.059-1.292.277-1.994.459-2.462a4.108 4.108 0 0 1 .981-1.51 4.108 4.108 0 0 1 1.51-.981c.468-.182 1.17-.4 2.462-.459 1.397-.038 1.817-.052 5.35-.052z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.624-10.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/wolkenbunker" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <CookieSettings 
        isOpen={showCookieSettings} 
        onClose={() => setShowCookieSettings(false)} 
      />
      {/* ABSCHNITT: Footer - END */}
    </>
  );
}