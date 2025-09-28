import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, CheckCircle, Zap, Shield, Cloud, TrendingUp, DollarSign, Smartphone, Server, Leaf, Settings, Network, BarChart3, CreditCard } from 'lucide-react';

export default function WhyWolkenbunkerSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const benefits = [
    {
      title: "Flexible Mietlösungen",
      description: "Sie profitieren von flexiblen Mietlösungen und vermeiden hohe Anfangsinvestitionen in Ihre IT-Infrastruktur.",
      icon: <DollarSign className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Mobiler Zugriff", 
      description: "Der Zugriff auf Ihre IT ist jederzeit und von überall möglich – ob über PC, Notebook, Mac, Tablet oder Smartphone.",
      icon: <Smartphone className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Sicheres Hosting",
      description: "Sicheres Hosting in hochmodernen Rechenzentren in Deutschland, die den höchsten Sicherheitsstandards entsprechen.",
      icon: <Server className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Nachhaltiger Betrieb",
      description: "Der Betrieb Ihrer IT erfolgt nachhaltig mit zertifizierter, erneuerbarer Energie.",
      icon: <Leaf className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Einsatzbereite IT",
      description: "Ihre IT ist sofort einsatzbereit dank maßgeschneiderter Serverumgebungen.",
      icon: <Settings className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Nahtlose Integration",
      description: "Ihre bestehenden IT-Systeme können problemlos in die Cloud integriert und nach Bedarf weiter genutzt werden.",
      icon: <Network className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Skalierbare Infrastruktur",
      description: "Ihre IT ist flexibel skalierbar, etwa bei Schwankungen in der Mitarbeiteranzahl.",
      icon: <BarChart3 className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Transparente Kosten",
      description: "Sie zahlen nur für die tatsächlich genutzten Leistungen, was Ihre IT-Kosten transparent und effizient macht.",
      icon: <CreditCard className="w-5 h-5" />,
      gradient: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <>
      {/* ABSCHNITT: Why Wolkenbunker - START */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" id="wolkenbunker-private-cloud">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker Cloud:</span> Private Cloud Made and Hosted in Germany
                </h2>
                
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Unsere Vision ist es, gemeinsam mit unseren Kunden eine standortunabhängige und 
                    sichere digitale Zukunft zu gestalten. Mit unseren Cloud-Experten, Produkten und 
                    Lösungen sind wir in der Lage, die komplexesten On-Premises-IT-Infrastrukturen 
                    aus verschiedenen Branchen reibungslos in die Cloud zu migrieren.
                  </p>
                  
                  <p>
                    Wir sind stolz darauf, zahlreiche Referenzkunden vorweisen zu können, die ihre 
                    positiven Erfahrungen und die Zusammenarbeit mit uns bestätigen. Unsere 
                    standardisierten Lösungen sind auf Ihre individuellen Bedürfnisse abgestimmt 
                    und erleichtern den Übergang in die Cloud, sodass dieser einfach und sicher verläuft.
                  </p>
                  
                  <p>
                    Dank unserer erfahrenen Cloud-Experten garantieren wir eine reibungslose Migration, 
                    die sicherstellt, dass Ihr Geschäft ohne Unterbrechungen weiterläuft. Offenheit 
                    in der Kommunikation, exzellenter Service und eine kundenorientierte Arbeitsweise 
                    stehen für uns an oberster Stelle.
                  </p>
                  
                  <p className="font-semibold text-gray-800 text-lg border-l-4 border-purple-500 pl-4 bg-white/50 py-3">
                    WOLKENBUNKER – Ihr verlässlicher Partner für Private Cloud Hosting und innovative 
                    IT-Lösungen, die Ihnen Sicherheit und Zukunftsfähigkeit bieten.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Interactive Benefits Dashboard */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm shadow-2xl border border-gray-200 relative overflow-hidden">
                <div className="relative z-10 p-6">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-4">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Private Cloud
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Ihr Mehrwert mit WolkenBunker</h3>
                  </div>
                  
                  {/* Interactive Benefits Grid */}
                  <div className="space-y-2">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="group">
                        <button
                          onClick={() => toggleSection(`benefit-${index}`)}
                          className="w-full flex items-center justify-between p-3 text-left bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] transform"
                        >
                          <div className="flex items-center space-x-3">
                            <span className="font-medium text-gray-900 group-hover:text-purple-700 transition-colors text-sm">
                              {benefit.title}
                            </span>
                          </div>
                          <ChevronDown 
                            className={`w-5 h-5 text-gray-500 transition-all duration-300 ${
                              expandedSection === `benefit-${index}` ? 'rotate-180 text-purple-600' : 'group-hover:text-purple-600'
                            }`} 
                          />
                        </button>
                        
                        {/* Animated Expansion */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          expandedSection === `benefit-${index}` ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          <div className="px-3 pb-3 border-l-4 border-r border-b border-gray-200 bg-gradient-to-r from-gray-50 to-purple-50">
                            <div className={`w-full h-1 bg-gradient-to-r ${benefit.gradient} mb-3 transform scale-x-0 animate-pulse`}></div>
                            <p className="text-gray-600 text-xs leading-relaxed pt-2 animate-fade-in">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleContactNavigation}
                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 text-sm font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:from-purple-700 hover:to-cyan-700 cursor-pointer"
                  >
                    Jetzt kostenlos beraten lassen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Why Wolkenbunker - END */}
    </>
  );
}