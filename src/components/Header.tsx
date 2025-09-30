import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  const [aboutDropdownOpen, setAboutDropdownOpen] = React.useState(false);

  return (
    <>
      {/* ABSCHNITT: Header - START */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 safe-area-inset-top" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-3 py-2" aria-label="WolkenBunker Startseite">
              <img 
                src="/LOGO_CUT_NEW.png" 
                alt="WolkenBunker Logo - Private Cloud IT-Services Deutschland Hamburg" 
                className="h-10 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300" 
                loading="eager"
                decoding="async"
                title="WolkenBunker Provider GmbH - Private Cloud & IT-Services Deutschland"
              />
            </Link>
            
            <nav className="hidden lg:flex space-x-6 xl:space-x-8" role="navigation" aria-label="Hauptnavigation">
              <Link to="/cloud" className="link-base link-underline" onClick={() => window.scrollTo(0, 0)}>Cloud</Link>
              <Link to="/server" className="link-base link-underline" onClick={() => window.scrollTo(0, 0)}>Server</Link>
              <Link to="/hosting" className="link-base link-underline" onClick={() => window.scrollTo(0, 0)}>Hosting</Link>
              <Link to="/colocation" className="link-base link-underline" onClick={() => window.scrollTo(0, 0)}>Colocation</Link>
              <Link to="/managed-it-services" className="link-base link-underline" onClick={() => window.scrollTo(0, 0)}>Managed IT</Link>
              <Link to="/solutions" className="link-base link-underline" onClick={() => window.scrollTo(0, 0)}>Lösungen</Link>
              <Link to="/testimonials" className="link-base link-underline" onClick={() => window.scrollTo(0, 0)}>Kundenstimmen</Link>
              
              {/* Über uns Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  aria-expanded={aboutDropdownOpen}
                  aria-haspopup="true"
                  className="flex items-center link-base"
                >
                  Über uns
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {aboutDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <Link 
                      to="/about" 
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block px-4 py-2 link-base hover:bg-gray-50 transition-colors"
                    >
                      Über uns
                    </Link>
                    <Link 
                      to="/contact" 
                      onClick={() => {
                        setAboutDropdownOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className="block px-4 py-2 link-base hover:bg-gray-50 transition-colors"
                    >
                      Kontakt
                    </Link>
                    <Link to="/impressum" className="block px-4 py-2 link-base hover:bg-gray-50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Impressum</Link>
                    <Link to="/datenschutz" className="block px-4 py-2 link-base hover:bg-gray-50 transition-colors" onClick={() => window.scrollTo(0, 0)}>Datenschutz</Link>
                    <Link to="/agb" className="block px-4 py-2 link-base hover:bg-gray-50 transition-colors" onClick={() => window.scrollTo(0, 0)}>AGBs</Link>
                  </div>
                )}
              </div>
            </nav>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="lg:hidden p-3 bg-gray-100 hover:bg-purple-100 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 min-h-[44px] min-w-[44px] rounded-lg flex items-center justify-center shadow-sm hover:shadow-md"
              aria-label="Menü öffnen"
              aria-expanded={isMenuOpen}
            >
             {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg fixed left-0 right-0 top-16 md:top-20 z-40" role="navigation" aria-label="Mobile Navigation">
            <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              <Link to="/cloud" className="mobile-nav-item block px-4 py-4 link-base hover:bg-purple-50 transition-colors min-h-[44px] font-medium text-lg border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Cloud</Link>
              <Link to="/server" className="mobile-nav-item block px-4 py-4 link-base hover:bg-purple-50 transition-colors min-h-[44px] font-medium text-lg border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Server</Link>
              <Link to="/hosting" className="mobile-nav-item block px-4 py-4 link-base hover:bg-purple-50 transition-colors min-h-[44px] font-medium text-lg border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Hosting</Link>
              <Link to="/colocation" className="mobile-nav-item block px-4 py-4 link-base hover:bg-purple-50 transition-colors min-h-[44px] font-medium text-lg border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Colocation</Link>
              <Link to="/managed-it-services" className="mobile-nav-item block px-4 py-4 link-base hover:bg-purple-50 transition-colors min-h-[44px] font-medium text-lg border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Managed IT</Link>
              <Link to="/solutions" className="mobile-nav-item block px-4 py-4 link-base hover:bg-purple-50 transition-colors min-h-[44px] font-medium text-lg border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Lösungen</Link>
              <Link to="/testimonials" className="mobile-nav-item block px-4 py-4 link-base hover:bg-purple-50 transition-colors min-h-[44px] font-medium text-lg border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Kundenstimmen</Link>
              <div className="border-t-2 border-gray-200 pt-4 mt-4">
                <Link 
                  to="/about" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-nav-item block px-4 py-3 link-base hover:bg-purple-50 transition-colors min-h-[44px] text-base border-b border-gray-100"
                >
                  Über uns
                </Link>
                <Link 
                  to="/contact" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo(0, 0);
                  }}
                  className="mobile-nav-item block px-4 py-3 link-base hover:bg-purple-50 transition-colors min-h-[44px] text-base border-b border-gray-100"
                >
                  Kontakt
                </Link>
                <Link to="/impressum" className="mobile-nav-item block px-4 py-3 link-base hover:bg-purple-50 transition-colors min-h-[44px] text-sm text-gray-600 border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Impressum</Link>
                <Link to="/datenschutz" className="mobile-nav-item block px-4 py-3 link-base hover:bg-purple-50 transition-colors min-h-[44px] text-sm text-gray-600 border-b border-gray-100" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>Datenschutz</Link>
                <Link to="/agb" className="mobile-nav-item block px-4 py-3 link-base hover:bg-purple-50 transition-colors min-h-[44px] text-sm text-gray-600" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>AGBs</Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* ABSCHNITT: Header - END */}
    </>
  );
}