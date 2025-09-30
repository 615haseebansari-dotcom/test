import React from 'react';
import SEOHead from '../components/SEOHead';
import { Building, Users, Award, Shield, MapPin, CheckCircle, Cloud, Settings, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AboutUsPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function AboutUsPage({ isMenuOpen, setIsMenuOpen }: AboutUsPageProps) {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const missionValues = [
    {
      title: "Innovation",
      description: "Pioniere in der digitalen Evolution mit innovativen Lösungen"
    },
    {
      title: "Kundenzufriedenheit", 
      description: "Ihre Zufriedenheit steht im Mittelpunkt all unserer Bemühungen"
    },
    {
      title: "Partnerschaften",
      description: "Langfristige Partnerschaften basierend auf Vertrauen"
    },
    {
      title: "Datensicherheit",
      description: "Höchste Sicherheitsstandards für Ihre wertvollen Daten"
    }
  ];

  const certifications = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO-zertifizierte Rechenzentren",
      description: "ISO 27001-zertifiziert. Höchste Standards für Informations-sicherheit in unseren Rechenzentren.",
      bgColor: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DSGVO-Konformität",
      description: "100 % DSGVO-Konform – Ihre Daten bleiben sicher und geschützt in Übereinstimmung mit der Datenschutz-Grundverordnung.",
      bgColor: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Deutsche Standorte",
      description: "Rechenzentren in Deutschland – Ihre Daten bleiben in sicheren, lokal betriebenen Rechenzentren.",
      bgColor: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const teamMembers = [
    {
      name: "Ramin Hossensade",
      position: "Mitgründer & Geschäftsführender Gesellschafter",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Elmedin Trnovac",
      position: "Mitgründer & Geschäftsführender Gesellschafter",
      image: "/api/placeholder/300/300"
    }
  ];

  const teamCards = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Spezialisten",
      description: "Unsere Experten sorgen für sichere Datenlösungen und anpassbare Cloud-Services."
    },
    {
      icon: <Settings className="w-12 h-12" />,
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
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 opacity-60 animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-60 right-60 w-16 h-16 bg-gradient-to-br from-cyan-200 to-blue-200 opacity-50 animate-bounce delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium">
                  <Building className="w-4 h-4 mr-2" />
                  Über uns
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Wir sind
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker Provider</span>
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    WolkenBunker Provider GmbH - Ihr IT-Dienstleister für DSGVO-konforme 
                    Private Cloud und Enterprise IT-Services. Entwickelt und gehostet in 
                    deutschen Rechenzentren seit 2020.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleContactNavigation}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Kontakt aufnehmen
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Gradient overlay to match background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
                <img 
                  src="/08.png" 
                  alt="Ramin Hossensade und Elmedin Trnovac - Mitgründer und Geschäftsführende Gesellschafter der WolkenBunker Provider GmbH" 
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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Mission & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Vision</span>
                </h2>
                <h3 className="text-2xl font-semibold text-gray-700">Pioniere in der Digitalen Evolution</h3>
                <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Wir sind Pioniere in der digitalen Evolution und gestalten die Zukunft mit innovativen 
                    Lösungen und einem klaren Fokus auf Kundenzufriedenheit. Unsere Mission basiert auf 
                    Vertrauen, Partnerschaft und höchsten Sicherheitsstandards für Ihre Daten.
                  </p>
                  <p className="font-medium text-gray-800">
                    Ihre Zufriedenheit steht im Mittelpunkt all unserer Bemühungen – wir schaffen eine 
                    digitale Zukunft, auf die Sie bauen können.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Mission Values Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {missionValues.map((value, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unser <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">gesamtes Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gemeinsam arbeiten wir daran, Ihnen die bestmöglichen IT-Services zu bieten
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-8 overflow-hidden">
                <img 
                  src="/LX-Team-ezgif.com-jpg-to-webp-converter.webp" 
                  alt="Das gesamte WolkenBunker Team - IT-Experten für Private Cloud und Enterprise Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Das WolkenBunker Team</h3>
                <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Unser interdisziplinäres Team aus IT-Experten, Cloud-Spezialisten und Service-Managern 
                  arbeitet täglich daran, Ihnen die bestmöglichen IT-Services zu bieten. Mit vereinten 
                  Kräften sorgen wir für innovative Lösungen und erstklassigen Support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Zertifizierungen</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group">
                <div className={`w-16 h-16 ${cert.iconBg} flex items-center justify-center ${cert.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-700 transition-colors">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Experten</span>
            </h2>
            <p className="text-xl text-gray-600">Triff unser Team</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                {index === 0 ? (
                  <div className="w-48 h-48 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg">
                    <img 
                      src="/Image (18).webp" 
                      alt="Ramin Hossensade" 
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div className="w-48 h-48 mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 overflow-hidden rounded-lg">
                    <img 
                      src="/elmedin2.webp" 
                      alt="Elmedin Trnovac" 
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lg text-purple-600 font-medium mb-4">{member.position}</p>
                </div>
                
                {/* Detailed Profile Content */}
                <div className="bg-white border border-gray-200 p-8 space-y-6 text-left">
                  {index === 0 ? (
                    // Ramin Hossensade Content
                    <>
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Verantwortung & Rolle</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          In meiner Rolle verantworte ich die strategische Ausrichtung sowie das operative Tagesgeschäft unseres Unternehmens.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Fokusbereiche</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Mein Fokus liegt auf Vertrieb, Kundenbeziehungen und Projektmanagement – ich begleite unsere Kunden von der ersten Idee bis zur erfolgreichen Umsetzung ihrer IT-Projekte.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Erfahrung & Kompetenz</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Mit über einem Jahrzehnt Erfahrung im IT-Service-Management, insbesondere in den Bereichen Infrastruktur, ITIL-basierte Prozesse und Kundenberatung, verstehe ich die Herausforderungen mittelständischer Unternehmen.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Anspruch & Haltung</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Ich sorge dafür, dass unsere Services nicht nur technisch einwandfrei sind, sondern auch wirtschaftlich sinnvoll und nachhaltig wirken.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-600 mb-2">Persönliches Statement</h5>
                        <p className="text-gray-700 text-sm leading-relaxed italic mb-3">
                          "Alles, was ich tue, mache ich mit vollem Herzen. Denn ich investiere eines der wertvollsten Güter, die ich habe: meine Zeit. Und diese Zeit verdient es, sinnvoll und mit echter Leidenschaft eingesetzt zu werden – oder gar nicht."
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Diese Haltung prägt nicht nur meine Arbeit, sondern auch die Kultur bei Wolkenbunker. Ich ermutige mein Team, mit derselben Hingabe und Verantwortung zu handeln.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Vision</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Mein Ziel ist es, Wolkenbunker als verlässlichen Partner für digitale Transformation zu positionieren – mit einem Team, das Innovation lebt und Kundenbeziehungen auf Augenhöhe pflegt.
                        </p>
                      </div>
                    </>
                  ) : (
                    // Elmedin Trnovac Content
                    <>
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Verantwortung & Rolle</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          In meiner Rolle verantworte ich das Liquiditätsmanagement sowie die IT-Strategie unseres Unternehmens.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Fokusbereiche</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Ich konzentriere mich auf die übergreifende technische Führung unserer IT-Teams sowie auf die Konzeption und Beratung bei komplexen IT-Projekten.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Erfahrung & Kompetenz</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Über 10 Jahre Erfahrung in Netzwerken, Virtualisierung, IT-Sicherheit, SCADA-Systemen und der Planung komplexer Netzwerkarchitekturen für KMUs und Energiekonzerne. Studium der technischen Betriebswirtschaftslehre an der TU-Clausthal und Ausbildung zum Fachinformatiker für Systemintegration.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Anspruch & Haltung</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Ich bin Ihr zentraler Ansprechpartner bei technisch komplexen Vorhaben und habe den Anspruch, dass Sie nur für das bezahlen, was sie technisch auch wirklich benötigen.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 border-l-4 border-purple-500">
                        <h5 className="font-semibold text-purple-600 mb-2">Persönliches Statement</h5>
                        <p className="text-gray-700 text-sm leading-relaxed italic">
                          Vertrauen ist das wichtigste für eine erfolgreiche Geschäftsbeziehung zwischen uns und unseren Kunden, insbesondere, wenn es um sensible Daten und kritische IT-Systeme geht. Das ist unser wichtigstes Versprechen an unsere Kunden – und genau dafür stehen wir.
                        </p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-600 mb-2">Vision</h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          Ich strebe danach, langfristige Partnerschaften aufzubauen, in denen sich unsere Kunden in jeder technischen Herausforderung und Entscheidung sicher und verstanden fühlen.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-24 h-24 bg-white/10 opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white text-sm font-medium mb-8">
              <Users className="w-4 h-4 mr-2" />
              Werden Sie Teil unserer Erfolgsgeschichte
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Bereit für Ihre digitale
              <br />
              Transformation?
            </h2>
            
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen entwickeln. 
              Unsere Experten freuen sich auf Ihre Anfrage.
            </p>
            
            <button 
              onClick={handleContactNavigation}
              className="bg-white text-purple-700 px-8 py-4 font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center mx-auto cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Jetzt Kontakt aufnehmen
              <span className="ml-3">→</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}