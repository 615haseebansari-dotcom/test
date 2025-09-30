import React from 'react';
import SEOHead from '../components/SEOHead';
import { Server, Shield, Zap, BarChart3, Monitor, Heart, Lock, Database, ArrowRight, Play, CheckCircle, Euro, Shuffle, Users, Cloud, Activity, TrendingUp, Globe, Mail, MessageCircle, Phone, MapPin, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ColocationPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function ColocationPage({ isMenuOpen, setIsMenuOpen }: ColocationPageProps) {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/#contact');
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const locations = [
    {
      city: "Hamburg",
      color: "purple"
    },
    {
      city: "Frankfurt", 
      color: "blue"
    },
    {
      city: "Berlin",
      color: "purple"
    }
  ];

  const cabinetTypes = [
    {
      title: "Halber Schrank",
      features: [
        "Rackeinheiten 19\" bis zu 21 HE",
        "Stromversorgung bis zu 3,5 kW",
        "redundante Netzanbindung",
        "24/7 Überwachung",
        "klimatisierte Umgebung",
        "Brandschutz nach VdS",
        "Stromverbrauchsabrechnung",
        "24 x 7 x 365 Vor-Ort-Service",
        "Monitoring",
        "Wartung (24 Std. Reaktion)",
        "Die Unterbringung in den klimatisierten, videoüberwachten Kabinen EMNS sowie das unterbrechungsfreie Stromversorgung und Wartungsleistungen."
      ],
      price: "ab 199€",
      buttonText: "Anfragen",
    },
    {
      title: "Volles Kabinett",
      features: [
        "Vollständig abschließbare und",
        "abgetrennte Kabine bis zu 47 Höhen-Einheiten",
        "Rack-Einbautiefe",
        "bis 1000 mm",
        "redundante Stromversorgung",
        "24 x 7 x 365 Vor-Ort-Service",
        "Brandschutz",
        "SNMP-Überwachung",
        "Die Unterbringung in den klimatisierten, videoüberwachten Kabinen EMNS sowie das unterbrechungsfreie Stromversorgung und Wartungsleistungen."
      ],
      price: "ab 399€",
      buttonText: "Anfragen", 
    },
    {
      title: "Custom Schrank",
      features: [
        "Wir bieten Hosting für verschiedenste",
        "Hardware-Plattformen in Deutschland, der",
        "Schweiz und Österreich an.",
        "Alle Tarife beinhalten einen 100 Mbit",
        "Internetanschluss (95 % Auslastung)",
        "Stromverbrauchsabrechnung sind in den",
        "Tarifen bereits und enthaltenen",
        "Überwachungsleistungen.",
        "Der individueller Beratung werden",
        "wir gemeinsam eine individuelle",
        "Lösung finden.",
        "Um zusätzliche Infos über Bandbreiten",
        "Erweiterungen sowie Colocation",
        "Erweiterungen zu erhalten."
      ],
      price: "Individuell",
      buttonText: "Anfragen",
    }
  ];

  const testimonials = [
    {
      text: "Die Co-location Services von WolkenBunker bieten uns die perfekte Kombination aus Sicherheit, Verfügbarkeit und Kosteneffizienz für unsere kritische IT-Infrastruktur.",
      author: "Maria S.",
      company: "Enterprise"
    },
    {
      text: "Als Experte kann ich bestätigen, dass die Rechenzentren von WolkenBunker höchste Standards erfüllen. Die Standorte in Hamburg, Frankfurt und Berlin sind optimal ausgestattet.",
      author: "Jonas K.",
      company: "IT-Consultant"
    },
    {
      text: "Unsere Server sind in den WolkenBunker Rechenzentren bestens aufgehoben. Die 24/7 Überwachung und der professionelle Support geben uns die nötige Sicherheit.",
      author: "Sarah M.",
      company: "Tech Company"
    }
  ];

  const teamCards = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Spezialisten",
      description: "Unsere Experten sorgen für sichere Co-location-Lösungen und optimale Rechenzentrum-Konfigurationen.",
      bgColor: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "WolkenBunker Team", 
      description: "Unser erfahrenes Team für individuelle Co-location-Beratung und maßgeschneiderte Rechenzentrum-Lösungen.",
      bgColor: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section - Similar to Landing Page */}
      <section className="pt-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium">
                  <span className="w-2 h-2 bg-purple-600 mr-2"></span>
                  Produkte
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" id="colocation-title">
                  Colocation
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Colocation Deutschland - Sichere Server-Unterbringung in ISO-zertifizierten 
                    Rechenzentren in Hamburg, Frankfurt und Berlin. Redundante Stromversorgung, 
                    24/7-Überwachung und professionelle Infrastruktur.
                  </p>
                  <p className="font-medium text-gray-800">
                    Colocation Deutschland. ISO-zertifiziert. 24/7 Überwachung.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleContactNavigation}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Jetzt starten
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleContactNavigation}
                  className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Kostenlose Beratung
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Gradient overlay to match background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
                <img 
                  src="/colocation.webp" 
                  alt="Colocation Deutschland - Sichere Server-Unterbringung in deutschen Rechenzentren Hamburg Frankfurt Berlin" 
                  className="w-full max-w-none h-auto object-contain scale-90 lg:scale-100 relative z-10 lg:translate-x-4"
                  style={{
                    filter: 'hue-rotate(10deg) saturate(0.9) brightness(1.05)',
                    mixBlendMode: 'multiply'
                  }}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standorte im Überblick */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Standorte</span> im Überblick
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {locations.map((location, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`text-2xl font-bold ${location.color === 'purple' ? 'text-purple-600' : 'text-blue-600'}`}>
                  {location.city}
                </h3>
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className={`w-8 h-8 ${location.color === 'purple' ? 'text-purple-600' : 'text-blue-600'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hamburg im Überblick */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hamburg</span> im Überblick
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cabinetTypes.map((cabinet, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{cabinet.title}</h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {cabinet.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-sm leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mt-auto">
                  <div className="text-2xl font-bold text-gray-900 mb-6">{cabinet.price}</div>
                  <button 
                    onClick={handleContactNavigation}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full cursor-pointer"
                  >
                    {cabinet.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jetzt Beratung anfordern */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Jetzt Beratung</span>
            <br />
            anfordern!
          </h2>
          
          <button 
            onClick={handleContactNavigation}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Beratung
          </button>
        </div>
      </section>

      {/* Frankfurt im Überblick */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Frankfurt</span> im Überblick
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cabinetTypes.map((cabinet, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{cabinet.title}</h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {cabinet.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-sm leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mt-auto">
                  <div className="text-2xl font-bold text-gray-900 mb-6">{cabinet.price}</div>
                  <button 
                    onClick={handleContactNavigation}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full cursor-pointer"
                  >
                    {cabinet.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Haben Sie Fragen? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Haben Sie Fragen?</span>
          </h2>
          
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            <span onClick={handleContactNavigation} className="cursor-pointer">Kontakt</span>
          </button>
        </div>
      </section>

      {/* Berlin im Überblick */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Berlin</span> im Überblick
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cabinetTypes.map((cabinet, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{cabinet.title}</h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {cabinet.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 text-sm leading-relaxed">
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="text-center mt-auto">
                  <div className="text-2xl font-bold text-gray-900 mb-6">{cabinet.price}</div>
                  <button 
                    onClick={handleContactNavigation}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-full cursor-pointer"
                  >
                    {cabinet.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-8 ${index === 1 ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                <p className={`leading-relaxed mb-6 ${index === 1 ? 'text-white' : 'text-gray-700'}`}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div className={`font-semibold ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.author}
                  </div>
                  <div className={`text-sm ${index === 1 ? 'text-purple-200' : 'text-gray-600'}`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-xs">Logo {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experten für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Colocation-Herausforderungen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf die Expertise unserer zertifizierten Colocation-Spezialisten
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {teamCards.map((card, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 border-2 border-gray-100 hover:border-purple-200 p-10 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 flex items-center justify-center text-purple-600 flex-shrink-0 transition-all duration-300 shadow-lg">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors duration-300">{card.title}</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{card.description}</p>
                      
                      <button 
                        onClick={handleContactNavigation}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center group/btn cursor-pointer"
                      >
                        <MessageCircle className="w-5 h-5 mr-3 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Kontakt aufnehmen
                        <div className="ml-3 group-hover/btn:translate-x-1 transition-transform duration-300">→</div>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200/20 to-blue-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-200/20 to-purple-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white border border-gray-200 px-24 py-8 max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Bereit für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Colocation-Transformation?</span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam die perfekte Colocation-Lösung für Ihr Unternehmen entwickeln. 
                Unsere Experten freuen sich auf Ihre Herausforderung.
              </p>
              <button 
                onClick={handleContactNavigation}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 text-lg font-semibold hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                Kostenlose Beratung anfordern
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}