import React from 'react';
import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Cloud, Shield, Zap, BarChart3, Monitor, Heart, Lock, Database, ArrowRight, Play, CheckCircle, Euro, Shuffle, Users, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface CloudPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function CloudPage({ isMenuOpen, setIsMenuOpen }: CloudPageProps) {
  const [expandedStep, setExpandedStep] = useState<number>(0);
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/#contact');
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const iaasFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "99.9% Verfügbarkeit",
      description: "Hohe Verfügbarkeit mit SLA-Garantie für Ihre kritischen Anwendungen"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Volle Skalierbarkeit",
      description: "Skalieren Sie Ihre Ressourcen nach Bedarf - automatisch oder manuell"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimierte Performance",
      description: "Hochperformante SSD-Speicher und modernste Hardware für beste Leistung"
    }
  ];

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Virtuelle Maschinen",
      description: "Flexible VM-Instanzen mit verschiedenen Konfigurationen für jeden Bedarf",
      color: "purple"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Redundante Speicherung",
      description: "Hochverfügbare Speicherlösungen mit automatischer Replikation",
      color: "purple"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Backup & Recovery",
      description: "Automatische Backups und schnelle Wiederherstellung Ihrer Daten",
      color: "purple"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Managed Databases",
      description: "Vollständig verwaltete Datenbanklösungen für verschiedene Anwendungen",
      color: "purple"
    }
  ];

  const developmentSteps = [
    { 
      title: "Bedarfsanalyse und Beratung", 
      content: "Skalierbarkeit und Hochverfügbarkeit - Ihre Anwendungen laufen zuverlässig und passen sich an Ihren Bedarf an."
    },
    { 
      title: "Infrastruktur-Design und Planung", 
      content: "Unterstützung gängiger Programmiersprachen - Flexibles Entwickeln in Python, Java, C#/.NET und mehr."
    },
    { 
      title: "Cloud-Backup und Datenrettung", 
      content: "Cloud-Backup mit Versionskontrolle - Ihre Daten sicher gespeichert und jederzeit in vorherigen Versionen verfügbar."
    },
    { 
      title: "Migration der Infrastruktur und API-Support", 
      content: "Kapselung der Infrastruktur mit API-Zugriff - Vollständiger Zugriff und Kontrolle über APIs für effiziente Integration."
    }
  ];

  const saasFeatures = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Browserbasierte Anwendungen",
      description: "Zugriff auf alle Anwendungen direkt über den Browser - keine Installation erforderlich"
    },
    {
      icon: <Shuffle className="w-12 h-12" />,
      title: "Flexible Skalierung Software",
      description: "Skalieren Sie Ihre Software-Lizenzen je nach Bedarf und Nutzung"
    },
    {
      icon: <Euro className="w-12 h-12" />,
      title: "Nutzungsbasierte Abrechnung",
      description: "Zahlen Sie nur für das, was Sie wirklich nutzen - transparente Kostenstruktur"
    }
  ];

  const testimonials = [
    {
      text: "Die Cloud-Lösung von WolkenBunker hat unsere IT-Infrastruktur revolutioniert. Wir können jetzt flexibel skalieren und haben dabei die volle Kostenkontrolle.",
      author: "Maria S.",
      company: "Tech Startup"
    },
    {
      text: "Als Experte für Cloud-Infrastrukturen kann ich bestätigen, dass WolkenBunker eine der sichersten und zuverlässigsten Lösungen am Markt bietet.",
      author: "Thomas K.",
      company: "IT-Consultant"
    },
    {
      text: "Die Migration unserer Systeme war nahtlos und der Support ist erstklassig. Wir sind sehr zufrieden mit der Performance und Sicherheit.",
      author: "Sarah M.",
      company: "Mittelstand"
    }
  ];

  const teamCards = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Spezialisten",
      description: "Unsere Experten sorgen für sichere Datenlösungen und anpassbare Cloud-Services."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "WolkenBunker Team",
      description: "Unser erfahrenes Team für individuelle Beratung und maßgeschneiderte IT-Lösungen."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium">
                  <span className="w-2 h-2 bg-purple-600 mr-2"></span>
                  Produkte
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" id="cloud-services-title">
                  Cloud
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    DSGVO-konforme Private Cloud Services aus deutschen Rechenzentren. 
                    Flexible und skalierbare Enterprise Cloud-Lösungen für Ihre 
                    IT-Infrastruktur - von virtuellen Maschinen bis komplette Anwendungsumgebungen.
                  </p>
                  <p className="font-medium text-gray-800">
                    Private Cloud Made in Germany. DSGVO-konform. Maximale Sicherheit.
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
            
            {/* Cloud Image */}
            <div className="relative">
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Gradient overlay to match background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
                <img 
                  src="/cloud.webp" 
                  alt="Private Cloud Services Deutschland - DSGVO-konforme Enterprise Cloud-Infrastruktur von WolkenBunker" 
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

      {/* IaaS Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sicherer Betrieb mit <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">IaaS</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {iaasFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-cyan-100 flex items-center justify-center text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-600 mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Jetzt Starten
            </button>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple-600 font-medium mb-4">Entwickelt als Software</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sorglos in der Entwicklung mit <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">PaaS</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Wir entwickeln Ihre Cloud-Lösung als Software-Service und bieten Ihnen eine vollständig verwaltete Plattform für Ihre Anwendungen.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {developmentSteps.map((step, index) => (
              <div key={index} className="border border-gray-200 overflow-hidden">
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedStep(expandedStep === index ? -1 : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <div className="w-6 h-6 border-2 border-purple-600 flex items-center justify-center">
                    {expandedStep === index ? (
                      <div className="w-2 h-2 bg-purple-600"></div>
                    ) : (
                      <div className="w-4 h-0.5 bg-purple-600"></div>
                    )}
                  </div>
                </div>
                {expandedStep === index && (
                  <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed pt-4">{step.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple-200 font-medium mb-4">Software as a Service</p>
            <h2 className="text-4xl font-bold mb-4">
              Kosteneffizient & Flexibel mit SaaS
            </h2>
            <p className="text-purple-100 max-w-3xl mx-auto">
              Wir entwickeln Ihnen eine vollständig verwaltete SaaS-Lösung für Ihre Geschäftsanforderungen mit flexibler Skalierung und transparenter Abrechnung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {saasFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 text-center border border-white/20">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white/20 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-purple-100 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleContactNavigation}
              className="bg-white text-purple-700 px-8 py-4 font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              Mehr erfahren
            </button>
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
      <section className="py-16 bg-gray-50">
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
              Experten für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">IT-Herausforderungen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf die Expertise unserer zertifizierten IT-Spezialisten
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
                Bereit für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">digitale Transformation?</span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen entwickeln. 
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