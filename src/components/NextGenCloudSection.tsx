import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Award, ShieldCheck, Building2, ArrowRight } from 'lucide-react';

export default function NextGenCloudSection() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hochverfügbare Infrastruktur",
      description: "Maximale Verfügbarkeit – Unsere Infrastruktur garantiert eine zuverlässige und kontinuierliche Betriebszeit.",
      bgColor: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      linkColor: "text-purple-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO-zertifizierte Rechenzentren",
      description: "ISO 27001-zertifiziert. Höchste Standards für Informations-sicherheit in unseren Rechenzentren.",
      bgColor: "from-cyan-50 to-cyan-100",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      linkColor: "text-cyan-600"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "DSGVO-Konformität",
      description: "100 % DSGVO-Konform – Ihre Daten bleiben sicher und geschützt in Übereinstimmung mit der Datenschutz-Grundverordnung.",
      bgColor: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      linkColor: "text-green-600"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Deutsche Standorte",
      description: "Rechenzentren in Deutschland – Ihre Daten bleiben in sicheren, lokal betriebenen Rechenzentren.",
      bgColor: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      linkColor: "text-orange-600"
    }
  ];

  return (
    <>
      {/* ABSCHNITT: Next-Gen Cloud Services - START */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title" id="next-gen-cloud-services">
              Next-Gen <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Cloud Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mobile-text-base">
              Moderne Cloud-Infrastrukturen für die digitale Transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mobile-grid-1 md:mobile-grid-2">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 p-6 md:p-8 relative overflow-hidden flex flex-col h-full">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.bgColor.replace('from-', 'from-').replace('to-', 'to-')}`}></div>
                
                <div className="w-12 md:w-16 h-12 md:h-16 bg-white flex items-center justify-center text-purple-600 mb-4 md:mb-6 flex-shrink-0 mx-auto md:mx-0">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-purple-700 transition-colors flex-shrink-0 text-center md:text-left">{service.title}</h3>
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm group-hover:text-gray-700 transition-colors flex-grow text-center md:text-left mobile-text-sm">{service.description}</p>
                <button 
                  onClick={handleContactNavigation}
                  className={`${service.linkColor} text-sm flex items-center justify-center md:justify-start font-medium hover:gap-2 transition-all duration-300 mt-auto cursor-pointer`}
                >
                  Entdecken
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Next-Gen Cloud Services - END */}
    </>
  );
}