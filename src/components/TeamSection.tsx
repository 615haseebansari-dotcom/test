import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Shield, Users, MessageCircle, TrendingUp } from 'lucide-react';

export default function TeamSection() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const teamCards = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Spezialisten",
      description: "Unsere Experten sorgen für sichere Datenlösungen und anpassbare Cloud-Services.",
      features: [
        "Cloud-Architektur Design",
        "Migration & Integration", 
        "Performance Optimierung",
        "24/7 Monitoring"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "WolkenBunker Team",
      description: "Unser erfahrenes Team für individuelle Beratung und maßgeschneiderte IT-Lösungen.",
      features: [
        "Individuelle Beratung",
        "Maßgeschneiderte Lösungen",
        "Persönlicher Support",
        "Langfristige Partnerschaft"
      ]
    }
  ];

  return (
    <>
      {/* ABSCHNITT: Team - START */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title" id="it-experten-team">
              Experten für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">IT-Herausforderungen</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mobile-text-base">
              Vertrauen Sie auf die Expertise unserer zertifizierten IT-Spezialisten
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mobile-grid-1">
            {teamCards.map((card, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 border-2 border-gray-100 hover:border-purple-200 p-6 md:p-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 flex items-center justify-center text-purple-600 flex-shrink-0 transition-all duration-300 shadow-lg">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-700 transition-colors duration-300 text-center md:text-left">{card.title}</h3>
                      <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-center md:text-left mobile-text-sm">{card.description}</p>
                      
                      <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                        {card.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center md:justify-start group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 mr-3 group-hover/item:scale-125 transition-transform duration-200"></div>
                            <span className="text-gray-700 text-sm group-hover/item:text-purple-700 transition-colors duration-200 mobile-text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button 
                        onClick={handleContactNavigation}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group/btn cursor-pointer w-full md:w-auto mobile-btn-full"
                      >
                        <MessageCircle className="w-5 h-5 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Kontakt aufnehmen
                        <div className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-300">→</div>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mobile-hide-decorative"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mobile-hide-decorative"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white border border-gray-200 px-6 md:px-24 py-6 md:py-8 max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 subsection-title">
                Bereit für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">digitale Transformation?</span>
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed mobile-text-sm">
                Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen entwickeln. 
                Unsere Experten freuen sich auf Ihre Herausforderung.
              </p>
              <button 
                onClick={handleContactNavigation}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold hover:shadow-lg transition-shadow duration-300 cursor-pointer mobile-btn-full"
              >
                Kostenlose Beratung anfordern
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Team - END */}
    </>
  );
}