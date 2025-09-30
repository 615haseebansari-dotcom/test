import React from 'react';
import SEOHead from '../components/SEOHead';
import { Server, Shield, Zap, BarChart3, Monitor, Heart, Lock, Database, ArrowRight, Play, CheckCircle, Euro, Shuffle, Users, Cloud, Activity, TrendingUp, Globe, Mail, MessageCircle, Phone, MapPin, Building, RefreshCw, Network, Award, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ManagedITServicesPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function ManagedITServicesPage({ isMenuOpen, setIsMenuOpen }: ManagedITServicesPageProps) {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/#contact');
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const whyWolkenbunkerFeatures = [
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Rundum-Service",
      description: "Umfassende IT-Betreuung von der Planung bis zur Wartung - alles aus einer Hand"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Mit Managed Expertise",
      description: "Erfahrene IT-Spezialisten kümmern sich um Ihre komplette IT-Infrastruktur"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Ihre Expertise",
      description: "Konzentration auf Ihr Kerngeschäft während wir Ihre IT optimal betreuen"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Über 20 Zertifikate",
      description: "Höchste Qualitätsstandards durch zertifizierte IT-Experten und Technologien"
    }
  ];

  const itServicesFeatures = [
    "Proaktive Überwachung und Wartung Ihrer IT-Systeme",
    "24/7 Support und Helpdesk-Services",
    "Backup- und Disaster-Recovery-Lösungen",
    "Sicherheitsmanagement und Compliance",
    "Cloud-Migration und -Management",
    "Netzwerk-Administration und -Optimierung",
    "Software-Lizenzmanagement",
    "Hardware-Beschaffung und -Wartung",
    "IT-Strategieberatung und -Planung",
    "Mitarbeiterschulungen und Support"
  ];

  const testimonials = [
    {
      text: "Die Managed IT Services von WolkenBunker haben unsere IT-Effizienz deutlich gesteigert. Wir können uns voll auf unser Geschäft konzentrieren.",
      author: "Maria S.",
      company: "Mittelstand"
    },
    {
      text: "Als IT-Experte kann ich bestätigen, dass WolkenBunker eine der professionellsten Managed Service Provider am Markt ist. Die Betreuung ist erstklassig.",
      author: "Jonas K.",
      company: "IT-Consultant"
    },
    {
      text: "Seit wir die Managed IT Services nutzen, haben wir keine IT-Ausfälle mehr. Das Team ist immer erreichbar und löst Probleme proaktiv.",
      author: "Sarah M.",
      company: "Enterprise"
    }
  ];

  const teamCards = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Spezialisten",
      description: "Unsere Experten sorgen für sichere Managed IT-Lösungen und optimale System-Performance.",
      bgColor: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "WolkenBunker Team",
      description: "Unser erfahrenes Team für individuelle IT-Beratung und maßgeschneiderte Managed Services.",
      bgColor: "from-purple-600 to-blue-600"
    }
  ];

  const additionalServices = [
    {
      title: "Lizenz-Kostenberatung",
      description: "Optimierung Ihrer Software-Lizenzen für maximale Kosteneffizienz und Compliance-Sicherheit."
    },
    {
      title: "Digital Workplace mit Laptop &",
      description: "Moderne Arbeitsplatz-Lösungen mit aktueller Hardware und cloudbasierten Anwendungen."
    },
    {
      title: "Lizenz-Kostenberatung",
      description: "Professionelle Beratung zur Optimierung Ihrer IT-Lizenzkosten und Compliance-Management."
    },
    {
      title: "Azure Virtual Desktop",
      description: "Sichere und skalierbare Virtual Desktop Infrastructure in der Microsoft Azure Cloud."
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
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" id="managed-it-services-title">
                  Managed IT Services
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Managed IT Services Deutschland - Professionelle IT-Betreuung und 
                    komplette Verwaltung Ihrer IT-Infrastruktur. DSGVO-konforme 
                    IT-Services mit 24/7 Support aus deutschen Rechenzentren.
                  </p>
                  <p className="font-medium text-gray-800">
                    Managed IT Deutschland. 24/7 Support. Proaktive Wartung.
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
                  src="/managed-it.webp" 
                  alt="Managed IT Services Deutschland - Professionelle IT-Betreuung und Wartung aus deutschen Rechenzentren" 
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

      {/* Wieso WolkenBunker Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wieso <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWolkenbunkerFeatures.map((feature, index) => (
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

      {/* Gemeinsame Visionen Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gemeinsame Visionen
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Ergänzender Service</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Team Image Placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 text-center text-white">
                <div className="flex justify-center space-x-8 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center">
                    <Settings className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Unser Expertenteam</h3>
                <p className="text-gray-300">Gemeinsam für Ihren IT-Erfolg</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Unser erfahrenes Team von IT-Spezialisten arbeitet eng mit Ihnen zusammen, 
                um maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen zu entwickeln. 
                Wir verstehen, dass jedes Unternehmen einzigartig ist und individuelle 
                IT-Strategien benötigt.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Durch unsere langjährige Erfahrung und kontinuierliche Weiterbildung 
                bleiben wir immer auf dem neuesten Stand der Technologie und können 
                Ihnen innovative Lösungen anbieten, die Ihr Unternehmen voranbringen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud-Lösungen und IT-Dienstleistungen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Cloud-Lösungen</span> und
              <br />
              IT-Dienstleistungen
              <br />
              auf höchstem Niveau
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  {itServicesFeatures.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  {itServicesFeatures.slice(5).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Alle Services
            </button>
          </div>
        </div>
      </section>

      {/* Managed IT Services CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Suchen Sie nach
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Managed IT-Services</span>, um Ihre IT-
            <br />
            Infrastruktur auf den
            <br />
            neuesten Stand zu halten?
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Unsere Managed IT Services bieten Ihnen eine umfassende Betreuung Ihrer 
            IT-Infrastruktur. Von der proaktiven Überwachung bis hin zur strategischen 
            Planung - wir sorgen dafür, dass Ihre IT immer optimal funktioniert.
          </p>
          
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium mb-8">
            <MessageCircle className="w-4 h-4 mr-2" />
            Kostenlose Beratung mit unseren Cloud Spezialisten
          </div>
          
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            <span onClick={handleContactNavigation} className="cursor-pointer">Jetzt Beratung</span>
          </button>
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

      {/* Die Rundum-Sorglos-Lösung Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Die <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Rundum-Sorglos-Lösung</span>
              <br />
              für Ihre IT
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Umfassende IT-Betreuung</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Proaktive Systemüberwachung rund um die Uhr</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Automatische Updates und Patches</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Backup- und Disaster-Recovery-Management</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategische IT-Planung</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">IT-Roadmap-Entwicklung und -Umsetzung</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Technologie-Beratung und -Bewertung</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Kostenoptimierung und Budgetplanung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Experten für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">IT-Service-Herausforderungen</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf die Expertise unserer zertifizierten IT-Service-Spezialisten
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
                Bereit für Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">IT-Service-Transformation?</span>
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Lassen Sie uns gemeinsam die perfekte IT-Service-Lösung für Ihr Unternehmen entwickeln. 
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

      {/* Additional Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}