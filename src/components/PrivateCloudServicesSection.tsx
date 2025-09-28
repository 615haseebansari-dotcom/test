import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cloud, Server, Users, Settings, Shield, DollarSign, CheckCircle } from 'lucide-react';

export default function PrivateCloudServicesSection() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const services = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Betrieb Ihrer Private Cloud",
      description: "in hochmodernen Rechenzentren des Wolkenbunkers in Deutschland",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Nahtlose Integration",
      description: "Ihrer bestehenden IT-Infrastruktur in die Private Cloud",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Persönliche Betreuung",
      description: "durch einen festen Ansprechpartner, der Sie umfassend unterstützt",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Individuelle Beratung",
      description: "maßgeschneiderte Konzeption und Installation Ihrer Serverlösungen",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proaktive Wartung",
      description: "und kontinuierliche Überwachung Ihrer Cloud-Infrastruktur",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Transparente All-Inclusive-Tarife",
      description: "mit monatlichen Fixpreisen, die alle Leistungen abdecken",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  return (
    <>
      {/* ABSCHNITT: Private Cloud Services - START */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-xs text-gray-600">Inklusive</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6" id="private-cloud-services">
                  Ihre sichere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Private Cloud</span> im WolkenBunker
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Umfassende Leistungen für Ihr Unternehmen
                </p>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Unsere Private Cloud-Lösungen bieten Ihnen die perfekte Kombination aus 
                    Sicherheit, Performance und Flexibilität. Mit modernster Infrastruktur 
                    in deutschen Rechenzentren garantieren wir höchste Datenschutzstandards.
                  </p>
                  <p>
                    Von der individuellen Beratung bis zur kontinuierlichen Betreuung - 
                    unser Expertenteam sorgt dafür, dass Ihre IT-Infrastruktur optimal 
                    funktioniert und mit Ihrem Unternehmen wächst.
                  </p>
                </div>
              </div>
              
              <button 
                onClick={handleContactNavigation}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Kostenlose Beratung anfordern
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Private Cloud Services - END */}
    </>
  );
}