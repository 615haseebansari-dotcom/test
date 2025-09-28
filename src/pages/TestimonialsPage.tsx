import React from 'react';
import SEOHead from '../components/SEOHead';
import { MessageCircle, Star, Quote, Users, Building, CheckCircle, ArrowRight, X, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface TestimonialsPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function TestimonialsPage({ isMenuOpen, setIsMenuOpen }: TestimonialsPageProps) {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const testimonials = [
    {
      text: "Die Zusammenarbeit mit WolkenBunker hat unsere IT-Infrastruktur auf ein neues Niveau gebracht. Wir haben endlich eine stabile, performante Umgebung und einen Partner, auf den wir uns verlassen können.",
      author: "Michael Bittermann",
      company: "Bittermann Gruppe",
      position: "Geschäftsführer",
      rating: 5,
      category: "Managed Services"
    },
    {
      text: "Die Cloud-Lösung von WolkenBunker hat unsere IT-Infrastruktur revolutioniert. Wir können jetzt flexibel skalieren und haben dabei die volle Kostenkontrolle.",
      author: "Maria Schmidt",
      company: "Tech Startup GmbH",
      position: "CTO",
      rating: 5,
      category: "Cloud Services"
    },
    {
      text: "Als Experte für Cloud-Infrastrukturen kann ich bestätigen, dass WolkenBunker eine der sichersten und zuverlässigsten Lösungen am Markt bietet.",
      author: "Thomas Kellner",
      company: "IT-Consulting Partners",
      position: "Senior Consultant",
      rating: 5,
      category: "Beratung"
    },
    {
      text: "Die Migration unserer Systeme war nahtlos und der Support ist erstklassig. Wir sind sehr zufrieden mit der Performance und Sicherheit.",
      author: "Sarah Müller",
      company: "Mittelstand AG",
      position: "IT-Leiterin",
      rating: 5,
      category: "Migration"
    },
    {
      text: "Die Server von WolkenBunker bieten uns die perfekte Performance für unsere kritischen Anwendungen. Der Support ist erstklassig.",
      author: "Michael Weber",
      company: "Enterprise Solutions",
      position: "Geschäftsführer",
      rating: 5,
      category: "Server"
    },
    {
      text: "Das Hosting von WolkenBunker ist extrem zuverlässig. Unsere Website läuft seit Jahren ohne Ausfälle und der Support ist hervorragend.",
      author: "Lisa Hoffmann",
      company: "Online-Shop24",
      position: "E-Commerce Managerin",
      rating: 5,
      category: "Hosting"
    },
    {
      text: "Die Managed IT Services von WolkenBunker haben unsere IT-Effizienz deutlich gesteigert. Wir können uns voll auf unser Geschäft konzentrieren.",
      author: "Robert Fischer",
      company: "Produktions GmbH",
      position: "Betriebsleiter",
      rating: 5,
      category: "Managed Services"
    },
    {
      text: "Die Co-location Services von WolkenBunker bieten uns die perfekte Kombination aus Sicherheit, Verfügbarkeit und Kosteneffizienz.",
      author: "Andrea Braun",
      company: "DataCenter Pro",
      position: "Infrastruktur-Managerin",
      rating: 5,
      category: "Colocation"
    },
    {
      text: "Seit wir auf WolkenBunker Server setzen, haben wir keine Performance-Probleme mehr. Die Verfügbarkeit ist hervorragend.",
      author: "Daniel Koch",
      company: "Gaming Solutions",
      position: "Technical Director",
      rating: 5,
      category: "Server"
    },
    {
      text: "Die Sicherheitsfeatures und automatischen Backups geben uns die Gewissheit, dass unsere Daten immer geschützt sind.",
      author: "Julia Richter",
      company: "Legal Partners",
      position: "Partnerin",
      rating: 5,
      category: "Sicherheit"
    }
  ];

  const categories = ["Alle", "Cloud Services", "Server", "Hosting", "Managed Services", "Colocation", "Migration", "Sicherheit", "Beratung"];
  const [selectedCategory, setSelectedCategory] = React.useState("Alle");

  const filteredTestimonials = selectedCategory === "Alle" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const stats = [
    { number: "500+", label: "Zufriedene Kunden" },
    { number: "99.9%", label: "Verfügbarkeit" },
    { number: "24/7", label: "Support" },
    { number: "5★", label: "Durchschnittsbewertung" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kundenstimmen
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Was unsere
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Kunden über uns sagen</span>
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Kundenbewertungen WolkenBunker - Erfahren Sie aus erster Hand, wie 
                    unsere Private Cloud und IT-Services Unternehmen dabei helfen, ihre 
                    IT-Infrastruktur zu optimieren und Geschäftsziele zu erreichen.
                  </p>
                  <p className="font-medium text-gray-800">
                    Echte Kundenerfahrungen. Verifizierte Bewertungen. Erfolgreiche IT-Projekte.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleContactNavigation}
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="mr-2 w-5 h-5" />
                  Werden Sie unser nächster Erfolg
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center mx-auto">
                <MessageCircle className="w-24 h-24 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="w-8 h-8 text-purple-200 group-hover:text-purple-300 transition-colors" />
                </div>
                
                {/* Category Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-xs font-medium mb-4">
                  {testimonial.category}
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors">
                  "{testimonial.text}"
                </p>
                
                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-sm text-purple-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bittermann Gruppe Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Bittermann Gruppe</span> – IT-Infrastruktur neu ausgerichtet
            </h2>
          </div>
          
          {/* Unternehmensvorstellung */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Unternehmensvorstellung</h3>
            <p className="text-gray-600 text-center mb-8 max-w-4xl mx-auto">
              Die Bittermann Gruppe in Hamburg bietet umfassende Leistungen für den Hafen-, Terminal- und Industriebereich:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Trading</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Verkauf, Vermietung, Ankauf und Finanzierung von Großstaplern, Reachstackern, Containergeräten und Terminalzugmaschinen – inklusive Transportlösungen.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Terminal Services</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Service, Reparatur, Wartung, Aufarbeitung und UVV-Prüfungen von neuen und gebrauchten Maschinen – direkt im Hafen am O'swaldkai.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Elektrotechnik</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Planung, Installation, Instandhaltung und Prüfung elektrischer Anlagen und Steuerungen, inklusive Schaltschrankbau und E-Mobilität.
                </p>
              </div>
            </div>
          </div>
          
          {/* Ausgangssituation */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ausgangssituation</h3>
            <p className="text-gray-600 text-center mb-8">
              Die Zusammenarbeit mit dem vorherigen IT-Dienstleister war geprägt von:
            </p>
            
            <div className="bg-red-50 border border-red-200 p-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">fehlender vertrauensvoller Geschäftsbeziehung</span>
                </div>
                <div className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">steigenden Kosten bei gleichzeitig minderwertiger Dienstleistung</span>
                </div>
                <div className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">unbearbeiteten Support-Tickets und langen Reaktionszeiten</span>
                </div>
                <div className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">falsch dimensionierter IT-Infrastruktur ohne Zukunftsperspektive</span>
                </div>
                <div className="flex items-start">
                  <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">langsamen Servern, Speicherschwierigkeiten und NAS-Ausfällen</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lösung durch WolkenBunker */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Lösung durch WolkenBunker</h3>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 p-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Neuaufbau und korrektes Sizing der Serverlandschaft</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Einführung moderner Speicherlösungen mit Redundanz</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Neuaufstellung der Netzwerkarchitektur inkl. Sicherheitskonzept</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professionelles Monitoring und schnelles Ticket-Handling</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Migration der Daten in eine performante und stabile Umgebung</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ergebnisse */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ergebnisse</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-green-50 border border-green-200 p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Deutlich höhere Performance und Ausfallsicherheit</span>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Transparente und faire Kostenstruktur</span>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Stabile Geschäftsprozesse durch zuverlässige IT</span>
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">Entlastung der internen Mitarbeiter und klarer Supportprozess</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Fazit - Kundenstimme */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-12 text-center">
            <h3 className="text-2xl font-bold mb-8">Fazit (Kundenstimme)</h3>
            
            <div className="max-w-4xl mx-auto">
              <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
              
              <blockquote className="text-xl leading-relaxed mb-8 italic">
                "Die Zusammenarbeit mit WolkenBunker hat unsere IT-Infrastruktur auf ein neues Niveau gebracht. Wir haben endlich eine stabile, performante Umgebung und einen Partner, auf den wir uns verlassen können."
              </blockquote>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="text-lg">
                <div className="font-semibold">Michael Bittermann</div>
                <div className="text-purple-200">Geschäftsführer der Bittermann Gruppe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Warum Unternehmen <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker</span> vertrauen
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">DSGVO-Konform</h3>
              <p className="text-gray-600 text-sm">100% Datenschutz-Grundverordnung konform</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Made in Germany</h3>
              <p className="text-gray-600 text-sm">Entwickelt und gehostet in Deutschland</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ISO-Zertifiziert</h3>
              <p className="text-gray-600 text-sm">ISO 27001 zertifizierte Rechenzentren</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Rund um die Uhr verfügbarer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white relative overflow-hidden">
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