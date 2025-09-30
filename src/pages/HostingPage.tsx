import React from 'react';
import SEOHead from '../components/SEOHead';
import { Server, Shield, Zap, BarChart3, Monitor, Heart, Lock, Database, ArrowRight, Play, CheckCircle, Euro, Shuffle, Users, Cloud, Activity, TrendingUp, Globe, Mail, MessageCircle, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface HostingPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function HostingPage({ isMenuOpen, setIsMenuOpen }: HostingPageProps) {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/#contact');
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const sharedHostingFeatures = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Virtuelle Hosting",
      description: "Kostengünstige Hosting-Lösung für kleinere Websites und Projekte"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Linux Hosting",
      description: "Stabile und sichere Linux-basierte Hosting-Umgebung"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sicherheit & Backup",
      description: "Automatische Backups und umfassende Sicherheitsmaßnahmen"
    }
  ];

  const linuxHostingFeatures = [
    "Optimierte Server-Konfiguration für Linux",
    "Vollständige Root-Zugriff verfügbar",
    "Unterstützung für verschiedene Linux-Distributionen",
    "Automatische Updates und Patches",
    "24/7 Monitoring und Support"
  ];

  const securityFeatures = [
    "Erweiterte Firewall-Konfiguration",
    "SSL-Zertifikate inklusive",
    "DDoS-Schutz und Intrusion Detection",
    "Regelmäßige Sicherheits-Audits",
    "Verschlüsselte Datenübertragung"
  ];

  const expertiseAreas = [
    {
      title: "Bereich 1",
      items: [
        "Web-Entwicklung",
        "E-Commerce Lösungen", 
        "Content Management",
        "Database Administration",
        "Server-Konfiguration",
        "Performance Optimierung",
        "Backup-Strategien",
        "Monitoring Setup"
      ]
    },
    {
      title: "Bereich 2", 
      items: [
        "Cloud Migration",
        "Hybrid-Infrastrukturen",
        "Container-Technologien",
        "DevOps-Prozesse",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Kubernetes Management",
        "Microservices Architecture"
      ]
    },
    {
      title: "Bereich 3",
      items: [
        "Sicherheits-Audits",
        "Compliance Management",
        "Disaster Recovery",
        "High Availability Setup",
        "Load Balancing",
        "CDN Integration",
        "SSL/TLS Management",
        "Network Security"
      ]
    }
  ];

  const consultingServices = [
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: "Beratung anfordern",
      description: "Kostenlose Erstberatung für Ihre Hosting-Anforderungen"
    },
    {
      icon: <Phone className="w-12 h-12" />,
      title: "24/7 Support",
      description: "Rund um die Uhr verfügbarer technischer Support"
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Individuelle Lösungen",
      description: "Maßgeschneiderte Hosting-Pakete für Ihre spezifischen Bedürfnisse"
    }
  ];

  const testimonials = [
    {
      text: "Das Hosting von WolkenBunker ist extrem zuverlässig. Unsere Website läuft seit Jahren ohne Ausfälle und der Support ist hervorragend.",
      author: "Maria S.",
      company: "Online-Shop"
    },
    {
      text: "Als Entwickler schätze ich besonders die Flexibilität der Linux-Hosting-Umgebung. Alles lässt sich perfekt konfigurieren und anpassen.",
      author: "Thomas K.",
      company: "Web-Agentur"
    },
    {
      text: "Die Sicherheitsfeatures und automatischen Backups geben uns die Gewissheit, dass unsere Daten immer geschützt sind.",
      author: "Sarah M.",
      company: "Corporate Website"
    }
  ];

  const teamCards = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Server-Administration",
      description: "Professionelle Verwaltung und Optimierung Ihrer Server-Infrastruktur mit jahrelanger Erfahrung in Linux- und Windows-Umgebungen."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Sicherheits-Expertise",
      description: "Umfassender Schutz durch modernste Sicherheitstechnologien, regelmäßige Audits und proaktive Bedrohungsabwehr."
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
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" id="webhosting-title">
                  Hosting
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Professionelles Webhosting Deutschland - DSGVO-konforme Hosting-Lösungen 
                    für Websites, E-Commerce und Anwendungen. Sicher, performant und 
                    zuverlässig aus deutschen Rechenzentren.
                  </p>
                  <p className="font-medium text-gray-800">
                    Webhosting Deutschland. DSGVO-konform. SSL inklusive.
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
                  src="/hosting.webp" 
                  alt="Webhosting Deutschland - DSGVO-konforme Hosting-Services aus deutschen Rechenzentren von WolkenBunker" 
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

      {/* Why Shared Hosting Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">SHARED HOSTING</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sharedHostingFeatures.map((feature, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VMware Hosting Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">VMware</span> Hosting
            </h2>
            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4">
              <p>
                VMware-basierte Hosting-Lösungen bieten Ihnen maximale Flexibilität und Performance. 
                Unsere virtualisierte Infrastruktur ermöglicht es, Ressourcen dynamisch zu skalieren 
                und verschiedene Betriebssysteme parallel zu betreiben.
              </p>
              <p>
                Mit VMware vSphere als Grundlage unserer Virtualisierungsplattform garantieren wir 
                höchste Verfügbarkeit, einfache Migration und optimale Ressourcennutzung. Ihre 
                Anwendungen laufen in isolierten virtuellen Maschinen mit garantierten Ressourcen.
              </p>
              <p>
                Profitieren Sie von Enterprise-Features wie Live-Migration, automatischem Failover 
                und zentralisiertem Management. Unsere VMware-Experten konfigurieren und optimieren 
                Ihre virtuelle Infrastruktur nach Ihren spezifischen Anforderungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kostenlose Beratung Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              Kostenlose Beratung
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Beratung durch unsere
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hosting-Spezialisten</span>
            </h2>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Jetzt Beratung
            </button>
          </div>
        </div>
      </section>

      {/* Linux Hosting Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Linux Hosting</span> im
              <br />
              WolkenBunker Rechenzentrum
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Optimierte Linux-Umgebung</h3>
              <ul className="space-y-3">
                {linuxHostingFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Erweiterte Sicherheitsfeatures</h3>
              <ul className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sophos UTM & E-Mail Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Sophos UTM & E-Mail</span>
              <br />
              Security Hosting
            </h2>
            
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 border border-gray-200 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center text-cyan-600 flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Erweiterte Sicherheit mit Sophos UTM</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Unsere Hosting-Umgebung ist mit Sophos UTM (Unified Threat Management) ausgestattet, 
                    das umfassenden Schutz vor Cyber-Bedrohungen bietet. Die integrierte E-Mail-Security 
                    filtert Spam, Malware und Phishing-Versuche zuverlässig heraus.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Mit Web-Filtering, Intrusion Prevention und Application Control sorgen wir dafür, 
                    dass Ihre gehosteten Anwendungen und E-Mail-Kommunikation optimal geschützt sind. 
                    Automatische Updates und 24/7-Monitoring gewährleisten kontinuierliche Sicherheit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Sicherheits-Features
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              So funktioniert
              <br />
              unsere
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Expertenberatung</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experten für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hosting-Herausforderungen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf die Expertise unserer zertifizierten Hosting-Spezialisten
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
                Bereit für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Hosting-Transformation?</span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam die perfekte Hosting-Lösung für Ihr Unternehmen entwickeln. 
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

      {/* Consultation CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Warum eine
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">kostenlose Beratung</span>
              <br />
              buchen?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {consultingServices.map((service, index) => (
              <div key={index}>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Kostenlose Beratung
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white text-sm font-medium mb-8">
            <MessageCircle className="w-4 h-4 mr-2" />
            Maßgeschneiderte Lösungen
          </div>
          
          <h2 className="text-4xl font-bold mb-8">
            Maßgeschneiderte
            <br />
            Hosting-Lösungen für
            <br />
            KMUs oder Branche
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Egal ob kleines Unternehmen oder große Corporation - wir entwickeln die 
            perfekte Hosting-Strategie für Ihre spezifischen Anforderungen und Ihr Budget.
          </p>
          
          <button className="bg-white text-purple-700 px-8 py-4 font-semibold hover:bg-gray-50 transition-all duration-300">
            <span onClick={handleContactNavigation} className="cursor-pointer">Jetzt Beratung anfordern</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}