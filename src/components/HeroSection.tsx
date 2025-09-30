import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Database, Shield, Headphones } from 'lucide-react';

export default function HeroSection() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* ABSCHNITT: Hero - START */}
      <section className="pt-20 md:pt-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen flex items-center relative overflow-hidden hero-mobile" role="main" aria-labelledby="hero-title">
        {/* Decorative elements */}
        <div className="absolute top-40 right-8 md:right-40 w-6 md:w-24 h-6 md:h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl opacity-30 md:opacity-60 animate-bounce mobile-reduce-decorative"></div>
        <div className="absolute bottom-40 right-2 md:right-10 w-8 md:w-40 h-8 md:h-40 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 md:opacity-40 animate-pulse mobile-reduce-decorative"></div>
        <div className="absolute top-60 right-12 md:right-60 w-4 md:w-16 h-4 md:h-16 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-xl opacity-25 md:opacity-50 animate-bounce mobile-decorative-small"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 mobile-px-4 mobile-py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mobile-grid-1">
            <div className="space-y-6 md:space-y-8 mobile-space-y-6">
              <div className="space-y-6 pt-4 md:pt-0">
                <div className="badge-primary">
                  <span className="mr-2 text-sm">🇩🇪</span>
                  Entwickelt und gehostet in Deutschland
                </div>
                <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight hero-title">
                  Enterprise Cloud Solutions & IT-Services
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">der Zukunft</span>
                </h1>
                <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed mobile-space-y-4">
                  <p>
                    Unsere sichere, leistungsstarke und DSGVO-konforme Private 
                    Cloud bietet Unternehmen maßgeschneiderte IT-Infrastrukturlösungen.
                  </p>
                  <p className="font-medium text-gray-800">
                    Ihre Daten. Ihr Geschäft. Unsere höchste Sicherheit.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mobile-space-y-4">
                <button 
                  onClick={handleContactNavigation}
                  className="btn-primary group flex items-center justify-center text-sm md:text-base mobile-btn-full cursor-pointer"
                >
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Jetzt starten
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleContactNavigation}
                  className="btn-secondary flex items-center justify-center text-sm md:text-base mobile-btn-full cursor-pointer"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Kostenlose Beratung
                </button>
              </div>
            </div>
            
            <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
              {/* Gradient overlay to match background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
              <img 
                src="/landingpage.png/image.png" 
                alt="Private Cloud Deutschland WolkenBunker - DSGVO-konforme Enterprise IT-Services Hamburg Frankfurt Berlin Rechenzentren" 
                className="w-full max-w-none h-auto object-contain scale-90 md:scale-110 lg:scale-125 relative z-10 lg:translate-x-8 mobile-img-scale"
                style={{
                  filter: 'hue-rotate(10deg) saturate(0.9) brightness(1.05)',
                  mixBlendMode: 'multiply'
                }}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                title="WolkenBunker Private Cloud Services - Enterprise IT-Infrastruktur aus Deutschland"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Hero - END */}
    </>
  );
}