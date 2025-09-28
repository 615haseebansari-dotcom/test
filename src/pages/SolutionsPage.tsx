import React from 'react';
import SEOHead from '../components/SEOHead';
import { Server, Shield, Zap, BarChart3, Monitor, Heart, Lock, Database, ArrowRight, Play, CheckCircle, Euro, Shuffle, Users, Cloud, Activity, TrendingUp, Globe, Mail, MessageCircle, Phone, MapPin, Building, RefreshCw, Network, Award, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface SolutionsPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function SolutionsPage({ isMenuOpen, setIsMenuOpen }: SolutionsPageProps) {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/#contact');
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const solutions = [
    { title: "Cloud Backup", icon: <Cloud className="w-8 h-8" /> },
    { title: "Cloud & Mail Archivierung", icon: <Mail className="w-8 h-8" /> },
    { title: "Windows RDP Cloud Server", icon: <Monitor className="w-8 h-8" /> },
    { title: "Webhosting", icon: <Globe className="w-8 h-8" /> },
    { title: "Datenschutzkonformes Hosting", icon: <Shield className="w-8 h-8" /> },
    { title: "Disaster Recovery", icon: <RefreshCw className="w-8 h-8" /> }
  ];

  const cloudSoftwareFeatures = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Effizienz in der WolkenBunker-Cloud",
      description: "Optimierte Arbeitsabläufe durch cloudbasierte Lösungen, die Ihre Produktivität steigern und Kosten reduzieren."
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: "Sichere Netzwerk-Leistung durch die Cloud",
      description: "Hochsichere Netzwerkinfrastruktur mit redundanten Verbindungen und modernster Verschlüsselung."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Flexibles Teamwork und Effizienz",
      description: "Kollaborative Tools und Plattformen für effiziente Teamarbeit von überall aus."
    }
  ];

  const teamCards = [
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Spezialisten",
      description: "Unsere Experten sorgen für sichere Datenbanklösungen und umfassende Cloud-Services."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "WolkenBunker Team",
      description: "Unser erfahrenes Team für individuelle Beratung und maßgeschneiderte IT-Lösungen."
    }
  ];

  const advantages = [
    { category: "Kostenoptimierung", items: ["Reduzierte IT-Kosten", "Pay-per-Use Modelle", "Keine Hardware-Investitionen"] },
    { category: "Skalierbarkeit", items: ["Flexible Ressourcen", "Automatische Skalierung", "Bedarfsgerechte Anpassung"] },
    { category: "Sicherheit", items: ["Enterprise-Sicherheit", "Compliance", "Datenschutz"] },
    { category: "Verfügbarkeit", items: ["99.9% Uptime", "Redundante Systeme", "24/7 Monitoring"] }
  ];

  const webHostingFeatures = [
    { title: "Shared Hosting", description: "Kostengünstige Hosting-Lösung für kleinere Websites" },
    { title: "Flexibilität", description: "Skalierbare Ressourcen je nach Bedarf" },
    { title: "Sicherheit", description: "Umfassende Sicherheitsmaßnahmen und Backups" },
    { title: "Performance", description: "Optimierte Server für beste Website-Performance" }
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
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight" id="it-loesungen-title">
                  Lösungen
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    IT-Lösungen Deutschland - Umfassende Cloud-Backup, E-Mail-Archivierung 
                    und Disaster Recovery Lösungen. DSGVO-konforme IT-Services für moderne 
                    Unternehmen aus deutschen Rechenzentren.
                  </p>
                  <p className="font-medium text-gray-800">
                    IT-Lösungen Deutschland. DSGVO-konform. Maßgeschneidert.
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
                  src="/loesungen.webp" 
                  alt="IT-Lösungen Deutschland - Cloud-Backup, E-Mail-Archivierung und Disaster Recovery aus deutschen Rechenzentren" 
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

      {/* Unsere Lösungen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unsere <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Lösungen</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{solution.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud-Kanzleisoftware Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cloud-<span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Kanzleisoftware</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {cloudSoftwareFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center text-cyan-600 mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ihre Vorteile Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ihre <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Vorteile</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.category}</h3>
                <ul className="space-y-2">
                  {advantage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Mehr erfahren
            </button>
          </div>
        </div>
      </section>

      {/* Cloud-Backup von WolkenBunker Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Cloud-Backup von <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Sichern Sie Ihre wichtigen Daten mit unserem professionellen Cloud-Backup-Service. 
                Automatische Backups, verschlüsselte Übertragung und schnelle Wiederherstellung 
                garantieren maximale Datensicherheit für Ihr Unternehmen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unsere Cloud-Backup-Lösung bietet Ihnen vollständige Kontrolle über Ihre Daten 
                bei gleichzeitiger Einhaltung aller Datenschutzbestimmungen. Mit redundanter 
                Speicherung in deutschen Rechenzentren sind Ihre Daten optimal geschützt.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <span onClick={handleContactNavigation} className="cursor-pointer">Backup-Lösung erkunden</span>
              </button>
            </div>
            
            <div className="relative">
              {/* Cloud Backup Visualization */}
              <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20"></div>
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Cloud className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Sichere Cloud-Backups</h3>
                  <p className="text-purple-200">Automatisch • Verschlüsselt • DSGVO-konform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DSGVO-konforme Cloud-E-Mail-Archivierung Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Gradient overlay to match background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
                <img 
                  src="/archiierung.webp" 
                  alt="WolkenBunker E-Mail Archivierung" 
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
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                DSGVO-konforme Cloud-E-Mail-Archivierung mit <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker</span>
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Erfüllen Sie alle rechtlichen Anforderungen mit unserer professionellen 
                E-Mail-Archivierungslösung. Automatische Archivierung, rechtssichere 
                Aufbewahrung und einfache Suche in allen archivierten E-Mails.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unsere Lösung entspricht allen DSGVO-Anforderungen und bietet Ihnen 
                vollständige Compliance-Sicherheit. Mit intelligenter Indexierung 
                und schneller Suche finden Sie jede E-Mail in Sekundenschnelle.
              </p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <span onClick={handleContactNavigation} className="cursor-pointer">E-Mail Archivierung</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Windows RDP Cloud Server Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Windows RDP Cloud Server von <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Gradient overlay to match background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
                <img 
                  src="/premiumhosting.webp" 
                  alt="WolkenBunker Premium Hosting" 
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
            
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Arbeiten Sie von überall mit unserem Windows RDP Cloud Server. 
                Vollständige Windows-Umgebung in der Cloud mit Remote Desktop Protocol 
                für maximale Flexibilität und Produktivität.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unsere Windows RDP Server bieten Ihnen die gewohnte Windows-Oberfläche 
                mit allen Anwendungen, die Sie benötigen. Sicher, schnell und immer 
                verfügbar - von jedem Gerät aus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Webhosting Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Webhosting von <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Professionelles Webhosting für Ihre Online-Präsenz. Von einfachen 
                Websites bis hin zu komplexen E-Commerce-Lösungen - wir bieten 
                die passende Hosting-Umgebung für Ihre Anforderungen.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mit SSD-Speicher, CDN-Integration und 24/7-Monitoring sorgen wir 
                für optimale Performance Ihrer Website. Inklusive SSL-Zertifikaten 
                und automatischen Backups.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Gradient overlay to match background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
                <img 
                  src="/hosting-service.webp" 
                  alt="WolkenBunker Hosting Service" 
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

      {/* Unser Webhosting bieten Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Unser <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Webhosting</span> bieten
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webHostingFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datenbanklösungen Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Datenbanklösungen
              <br />
              von <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Database Server Visualization */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="relative z-10">
                  {/* Server Rack Visualization */}
                  <div className="space-y-4">
                    <div className="w-full h-16 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-between px-6">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                      <Database className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="w-full h-16 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-between px-6">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                      <Server className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="w-full h-16 bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-between px-6">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                      <Monitor className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Datenbanken sind das Herzstück vieler Geschäftsprozesse und müssen daher 
                  nicht nur reibungslos funktionieren, sondern auch zuverlässig vor Datenverlust 
                  geschützt sein und die Anforderungen an die Datenverfügbarkeit erfüllen.
                </p>
                <p>
                  Hinter jeder Webanwendung, jedem E-Commerce-Shop, jeder Analyseplattform 
                  und jedem Dokumentenmanagementsystem steht eine leistungsfähige 
                  Datenbank. Wesentliche Geschäftsprozesse – von der Gehaltsabrechnung und 
                  dem Kundenbeziehungsmanagement bis hin zu Personalwesen und 
                  Projektmanagement – sind auf Datenbanken angewiesen.
                </p>
                <p>
                  Die zentralen Datenbanken von WolkenBunker bieten Unternehmen die 
                  Gewährleistung von 1 Mbit bis hin zu Gigabit-Verbindungen, eine zuverlässige 
                  und zuverlässige Hosting-Lösung für Ihre Datenbanken.
                </p>
                <p>
                  WolkenBunker ist spezialisiert auf leistungsstarke und sichere Datenbank-
                  Infrastruktur, die Ihren schnelle und sichere Datenspeicherung und -zufriefen 
                  ermöglicht. Unsere dedizierten Server sind optimal auf die Anforderungen Ihrer 
                  Datenbanken abgestimmt und bieten die beste Grundlage für ein umfassendes 
                  und leistungsstarkes Datenbankhosting-Erlebnis.
                </p>
              </div>
              
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <span onClick={handleContactNavigation} className="cursor-pointer">Kostenlose Beratung</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WolkenBunker Disaster Recovery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker:</span>
              <br />
              Disaster-Recovery-
              <br />
              Lösungen
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Stellen Sie die unterbrechungsfreie Verfügbarkeit Ihrer wichtigsten 
                  Anwendungen und Daten sicher, ohne die hohen Kosten und den Aufwand für 
                  den Aufbau und die Wartung eines eigenen Disaster-Recovery-Standorts.
                </p>
                <p>
                  WolkenBunker Disaster Recovery unterstützt von führenden Technologien 
                  wie Zerto und Veeam für VMware, bietet zuverlässige Replikation für virtuelle 
                  Maschinen sowie schnelle, sichere und vollständig integrierte cloudbasierte 
                  Disaster Recovery-Lösungen.
                </p>
                <p>
                  Entscheiden Sie mit WolkenBunker den flexiblen Disaster-Recovery-Plan für Ihre 
                  Multi-Cloud-Umgebung und profitieren Sie von unserem Netzwerk sicherer 
                  Rechenzentren in ganz Deutschland. Schützen Sie Ihre kritischen 
                  Anwendungen und Daten jederzeit mit höchster Sicherheit, sodass Ihre Innovationen 
                  voranschreiten, die Agilität Ihres Unternehmens steigern und die Integrität Ihrer 
                  Marke schützen können.
                </p>
                <p>
                  Vertrauen Sie sich an WolkenBunker, um Ihre Daten sicher zu schützen und 
                  eine lückenlose Geschäftskontinuität zu gewährleisten – egal, was passiert.
                </p>
              </div>
              
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                <span onClick={handleContactNavigation} className="cursor-pointer">Kostenlose Beratung</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="relative w-full flex justify-center lg:justify-end">
                {/* Gradient overlay to match background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-60 rounded-lg"></div>
                <img 
                  src="/disaster-recovery.webp" 
                  alt="WolkenBunker Disaster Recovery" 
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

      {/* Branchenlösungen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Branchenlösungen</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Automobilindustrie */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Automobilindustrie</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Entwicklungs- und Testumgebungen für Software-Defined Vehicles (SDV) und Embedded-Systeme</li>
                <li>• Skalierbare Rechenressourcen für Simulation, Datenanalyse und OTA-Backends</li>
                <li>• Hosting nach TISAX- und ISO 27001-Standards</li>
                <li>• Anbindung an Fertigungs- und Logistiksysteme mit garantierter Datenresidenz in der EU</li>
              </ul>
            </div>

            {/* Luftfahrt */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Luftfahrt</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Hochverfügbare Private-Cloud-Plattformen für Fluggesellschaften, Flughäfen und Aerospace-Dienstleister</li>
                <li>• Predictive-Maintenance-Szenarien durch zentrale Datenhaltung und Analyse</li>
                <li>• Einhaltung von ISO 27001, DSGVO und branchenspezifischen Anforderungen (z. B. FAA/ESG-Reports)</li>
                <li>• Integration von Hybrid-Cloud-Szenarien für skalierbare Workloads</li>
              </ul>
            </div>

            {/* Finanzdienstleistungen */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Finanzdienstleistungen</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Regulierungskonforme Hosting-Umgebungen nach BaFin, DSGVO, MaRisk und ISO 27001</li>
                <li>• Dedizierte Hardware und Netzwerksegmente für sensible Workloads</li>
                <li>• Business Continuity & Disaster Recovery mit definierter RTO/RPO</li>
                <li>• Möglichkeit zur Kopplung mit Public-Cloud-Diensten für nicht-regulierte Workloads</li>
              </ul>
            </div>

            {/* Gesundheitspflege */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Gesundheitspflege</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Hosting von Anwendungen nach DSGVO und nationalen Sicherheitsvorgaben (B3S im Krankenhausumfeld)</li>
                <li>• FHIR-/HL7-Schnittstellen für Interoperabilität zwischen Krankenhaus-IT und externen Systemen</li>
                <li>• Georedundante Speicherung von Bild- und Patientendaten</li>
                <li>• Sichere Plattform für Telemedizin- und KI-Anwendungen</li>
              </ul>
            </div>

            {/* Fertigung & Industrie */}
            <div className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Fertigung & Industrie</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Private-Cloud-Umgebungen für MES, ERP und IIoT-Systeme</li>
                <li>• Edge-Integration zur Verarbeitung von Maschinendaten mit niedriger Latenz</li>
                <li>• Standardisierte Schnittstellen (OPC UA, MQTT) für industrielle Sensorik</li>
                <li>• NIS2-konforme Sicherheitsarchitekturen für Produktionsnetzwerke</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={handleContactNavigation}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Branchenlösung anfragen
            </button>
          </div>
        </div>
      </section>

      {/* Final Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                "Als jemand, der ständig auf der Suche nach effizienten Cloud-Lösungen ist, 
                kann ich nur sagen, dass sich endlich das gefunden habe, wonach ich 
                gesucht habe. Die Servicequalität und die reibungslose Integration in meine 
                bestehende Infrastruktur haben mich beeindruckt."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Maria S.</div>
                <div className="text-sm text-gray-600">Kundin</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8">
              <p className="leading-relaxed mb-6">
                "Audios an das Unternehmen, das so einfach versteht, 
                wie man die Anforderungen moderner 
                Geschäftsumgebungen erfüllt."
              </p>
              <div>
                <div className="font-semibold">Jonas K.</div>
                <div className="text-sm text-purple-200">CEO</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                "Die Zusammenarbeit mit WolkenBunker war von Anfang an professionell 
                und effizient. Ihre Expertise und ihr Engagement haben unsere 
                Erwartungen übertroffen."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Kundin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-white">
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