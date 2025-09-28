import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Phone, Activity, TrendingUp } from 'lucide-react';

export default function CloudMigrationSection() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const migrationSteps = [
    {
      number: "1",
      title: "Analyse & Planung",
      description: "Umfassende Bewertung Ihrer bestehenden IT-Infrastruktur und Entwicklung einer maßgeschneiderten Migrationsstrategie.",
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-600"
    },
    {
      number: "2", 
      title: "Sichere Migration",
      description: "Schrittweise Übertragung Ihrer Daten und Anwendungen mit minimalen Ausfallzeiten und maximaler Sicherheit.",
      bgColor: "bg-gradient-to-br from-purple-600 to-blue-600"
    },
    {
      number: "3",
      title: "Optimierung & Support", 
      description: "Kontinuierliche Überwachung, Optimierung der Performance und 24/7-Support für Ihre neue Cloud-Umgebung.",
      bgColor: "bg-gradient-to-br from-purple-600 to-cyan-600"
    }
  ];

  return (
    <>
      {/* ABSCHNITT: Cloud Migration - START */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-8">
                  <Activity className="w-4 h-4 mr-2" />
                  Professionelle Cloud-Migration
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6" id="cloud-migration">
                  Ihre professionelle <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Cloud-Migration</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Die digitale Transformation Ihres Unternehmens beginnt mit der 
                    richtigen Cloud-Strategie. WolkenBunker begleitet Sie bei der nahtlosen 
                    Migration Ihrer IT-Infrastruktur in unsere hochsichere Private Cloud-
                    Umgebung.
                  </p>
                  <p>
                    Unsere Experten analysieren Ihre bestehenden Systeme, entwickeln eine 
                    maßgeschneiderte Migrationsstrategie und sorgen für einen 
                    reibungslosen Übergang ohne Betriebsunterbrechungen.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleContactNavigation}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Kostenlose Migrationsberatung
                </button>
                <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                </button>
              </div>
            </div>
            
            {/* Right Side - Migration Steps */}
            <div className="relative">
              <div className="bg-white shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-8">
                  <div className="w-8 h-8 flex items-center justify-center mr-3">
                    <Activity className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Migration in 3 Schritten</h3>
                </div>
                
                <div className="space-y-8">
                  {migrationSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${step.bgColor} flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center mt-8 pt-6 border-t border-gray-200">
                  <TrendingUp className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-600">Durchschnittliche Migrationsdauer: 2-4 Wochen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Cloud Migration - END */}
    </>
  );
}