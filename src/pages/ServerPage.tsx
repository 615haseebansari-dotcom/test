import React from 'react';
import SEOHead from '../components/SEOHead';
import { Server, Shield, Zap, BarChart3, Monitor, Heart, Lock, Database, ArrowRight, Play, CheckCircle, Euro, Shuffle, Users, Cloud, Activity, TrendingUp, Globe, Mail, MessageCircle, Phone, MapPin, Building, RefreshCw, Network, Award, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ServerPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function ServerPage({ isMenuOpen, setIsMenuOpen }: ServerPageProps) {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const serverFeatures = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Dedizierte Server",
      description: "Hochperformante dedizierte Server für maximale Leistung und Kontrolle"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maximale Sicherheit",
      description: "Enterprise-Sicherheit mit Firewall, DDoS-Schutz und Monitoring"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hohe Performance",
      description: "SSD-Speicher, moderne CPUs und optimierte Netzwerkanbindung"
    }
  ];

  const serverTypes = [
    {
      title: "Entry Server",
      specs: [
        "Intel Xeon E-2136 (6 Cores)",
        "32 GB DDR4 RAM",
        "2x 480 GB SSD",
        "1 Gbit/s Netzwerk",
        "Unlimited Traffic"
      ],
      price: "ab 89€",
      popular: false
    },
    {
      title: "Business Server",
      specs: [
        "Intel Xeon Silver 4214 (12 Cores)",
        "64 GB DDR4 RAM",
        "2x 960 GB SSD",
        "1 Gbit/s Netzwerk",
        "Unlimited Traffic"
      ],
      price: "ab 149€",
      popular: true
    },
    {
      title: "Enterprise Server",
      specs: [
        "Intel Xeon Gold 6248 (20 Cores)",
        "128 GB DDR4 RAM",
        "4x 960 GB SSD",
        "10 Gbit/s Netzwerk",
        "Unlimited Traffic"
      ],
      price: "ab 299€",
      popular: false
    }
  ];

  const testimonials = [
    {
      text: "Die Server von WolkenBunker bieten uns die perfekte Performance für unsere kritischen Anwendungen. Der Support ist erstklassig.",
      author: "Maria S.",
      company: "Tech Startup"
    },
    {
      text: "Als IT-Experte kann ich bestätigen, dass die Server-Hardware von WolkenBunker zu den besten am Markt gehört. Absolute Empfehlung!",
      author: "Thomas K.",
      company: "IT-Consultant"
    },
    {
      text: "Seit wir auf WolkenBunker Server setzen, haben wir keine Performance-Probleme mehr. Die Verfügbarkeit ist hervorragend.",
      author: "Sarah M.",
      company: "E-Commerce"
    }
  ];

  const teamCards = [
    {
      icon: <Server className="w-12 h-12" />,
      title: "Server Spezialisten",
      description: "Unsere Experten sorgen für optimale Server-Performance und zuverlässige Hardware-Konfigurationen."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "WolkenBunker Team",
      description: "Unser erfahrenes Team für individuelle Server-Beratung und maßgeschneiderte Hardware-Lösungen."
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
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" id="server-hosting-title">
                  Server
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Dedizierte Server-Hosting aus deutschen Rechenzentren. 
                    Hochperformante Enterprise-Server mit maximaler Kontrolle und 
                    Leistung - von Entry-Level bis High-End Hardware für Ihre Anforderungen.
                  </p>
                  <p className="font-medium text-gray-800">
                    Dedizierte Server Deutschland. Enterprise Hardware. 99.9% Verfügbarkeit.
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
                  src="/server.webp" 
                  alt="Dedizierte Server Deutschland - Enterprise Server-Hosting in deutschen Rechenzentren von WolkenBunker" 
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

      {/* Server Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Warum <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker Server?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serverFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Maximale Leistung Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Maximale Leistung</span>
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700">Dediziertes Server-Hosting zu günstigen Konditionen</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nutzen Sie die volle Rechenpower unserer dedizierten Server und profitieren Sie von hochperformanter Dell-Hardware – einschließlich RAM, CPU und Festplattenspeicher. Sie behalten die volle Kontrolle über die Verwaltung Ihres Servers, während wir für eine stabile und zuverlässige Infrastruktur sorgen.
                </p>
                <p>
                  Ihr Server wird in unserem hochmodernen Rechenzentrum in Deutschland untergebracht, das höchste Sicherheitsstandards erfüllt. Erschließen Sie das volle Potenzial Ihres Projekts mit unschlagbarer Leistung und Wertstabilität, ohne Ihr Budget zu überlasten.
                </p>
              </div>
              <button 
                onClick={handleContactNavigation}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Server konfigurieren
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 text-white">
                <div className="text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
                      <Server className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Dell Enterprise Hardware</h3>
                  <p className="text-gray-300">Hochperformant • Zuverlässig • Dediziert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Für KMUs Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Für KMUs</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-8">Zuverlässige und skalierbare Servercluster</h3>
          </div>
          
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6">
            <p>
              Unser Server-Cluster-Angebot richtet sich speziell an kleine und mittlere Unternehmen, die auf zuverlässige und skalierbare IT-Lösungen angewiesen sind. Wir bieten hochverfügbare, flexible Server-Cluster, die Ihre Workloads effizient verteilen und Ausfallzeiten minimieren.
            </p>
            <p>
              Unsere Cluster-Lösungen werden auf Ihre individuellen Anforderungen zugeschnitten und können leicht skaliert werden, um mit Ihrem Geschäftswachstum Schritt zu halten. Durch redundante Systeme sorgen wir dafür, dass Ihre Daten immer sicher sind und Sie rund um die Uhr Zugriff auf Ihre IT-Ressourcen haben.
            </p>
            <p>
              Dank unserer privaten Cloud-Lösung profitieren Sie von umfassender Kontrolle, höchster Sicherheit und exzellentem Support, ohne die Komplexität einer eigenen IT-Infrastruktur verwalten zu müssen.
            </p>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              KMU-Lösung anfragen
            </button>
          </div>
        </div>
      </section>

      {/* Was ist Clustering Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Was ist <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clustering?</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-gray-600 leading-relaxed">
              Beim Clustering handelt es sich um eine Gruppe miteinander verbundener Server (Knoten), die zusammenarbeiten, um Leistung, Skalierbarkeit und Zuverlässigkeit zu erhöhen. Wolkenbunker bietet Cloud-Server-Cluster, die Workloads verteilen, zentralen Speicher nutzen und bei einem Ausfall Failover-Dienste bereitstellen.
            </p>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-12">
              Clustering mit <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Leistung</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entlasten Sie einzelne Server, indem Sie Projektkomponenten auf mehrere Knoten verteilen.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Skalierbarkeit</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fügen Sie einfach Server und Load Balancer hinzu, um steigenden Traffic zu bewältigen.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Zuverlässigkeit</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduzieren Sie den Single Point of Failure durch mehrere Knoten für höhere Verfügbarkeit.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <Settings className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Wartung</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nehmen Sie einzelne Knoten offline, ohne den Betrieb zu unterbrechen.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <RefreshCw className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Flexibilität</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passen Sie Cluster dynamisch an, um Ihre Projektanforderungen zu erfüllen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Einfach & Flexibel Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Einfach & Flexibel</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-8">Mit Cloud-Server jederzeit Zugriff auf Ihre IT</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Skalierbare Cloud-Ressourcen</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passen Sie die Kapazität Ihres Servers flexibel und in Echtzeit an Ihre Bedürfnisse an.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Effizient und kostengünstig</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Wir übernehmen die komplette Wartung Ihrer Cloud-Server, während Sie die Server-Leistung jederzeit erhöhen oder reduzieren können.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <Euro className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Pay-per-Use-Modell</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sie zahlen nur für die Ressourcen, die Sie tatsächlich nutzen, und sparen so Kosten.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                <Settings className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Maximale Flexibilität</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maßgeschneidert für Ihr Unternehmen!
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Flexible Server-Lösung anfragen
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

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experten für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Server-Herausforderungen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf die Expertise unserer zertifizierten Server-Spezialisten
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
                Bereit für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Server-Transformation?</span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam die perfekte Server-Lösung für Ihr Unternehmen entwickeln. 
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white text-sm font-medium mb-8">
            <Server className="w-4 h-4 mr-2" />
            Enterprise Server Solutions
          </div>
          
          <h2 className="text-4xl font-bold mb-8">
            Maßgeschneiderte
            <br />
            Server-Lösungen für
            <br />
            Ihr Unternehmen
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Von kleinen Projekten bis hin zu Enterprise-Anwendungen - wir konfigurieren 
            den perfekten Server für Ihre spezifischen Anforderungen und Ihr Budget.
          </p>
          
          <button 
            onClick={handleContactNavigation}
            className="bg-white text-purple-700 px-8 py-4 font-semibold hover:bg-gray-50 transition-all duration-300 cursor-pointer"
          >
            Jetzt Server konfigurieren
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}