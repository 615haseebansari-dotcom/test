import React from 'react';
import SEOHead from '../components/SEOHead';
import { Building, Users, FileText, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ImpressumPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function ImpressumPage({ isMenuOpen, setIsMenuOpen }: ImpressumPageProps) {
  return (
    <div className="min-h-screen">
      <SEOHead overrides={{ 
        title: "Impressum | WolkenBunker Provider GmbH Hamburg",
        description: "Impressum WolkenBunker Provider GmbH ✓ Katharinenstraße 33, Hamburg ✓ HRB 182215 ✓ Geschäftsführer: Ramin Hossensade, Elmedin Trnovac",
        keywords: "WolkenBunker Impressum, WolkenBunker Provider GmbH, Katharinenstraße Hamburg, HRB 182215, Ramin Hossensade, Elmedin Trnovac",
        canonical: "https://wolkenbunker.com/impressum"
      }} />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl opacity-60"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl opacity-60"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium rounded-full mb-8">
              <Building className="w-4 h-4 mr-2" />
              Rechtliche Informationen
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Impressum
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Angaben gemäß § 5 TMG und verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </p>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Company Details */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-600 rounded-lg mr-4">
                  <Building className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Unternehmen</h2>
              </div>
              
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Firmenname</h3>
                  <p>Wolkenbunker Provider GmbH</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p>Katharinenstraße 33<br />20457 Hamburg</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Kontakt</h3>
                  <div className="flex items-center mb-2">
                    <Phone className="w-4 h-4 text-purple-600 mr-2" />
                    <span>040 605337300</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-purple-600 mr-2" />
                    <span>info@wolkenbunker.de</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Legal Information */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center text-cyan-600 rounded-lg mr-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Rechtliche Angaben</h2>
              </div>
              
            <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Geschäftsführung</h3>
                  <div className="flex items-center mb-1">
                    <Users className="w-4 h-4 text-cyan-600 mr-2" />
                    <span>Ramin Hossensade</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-cyan-600 mr-2" />
                    <span>Elmedin Trnovac</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Registereintrag</h3>
                  <p>Handelsregister: HRB 182215<br />Amtsgericht Hamburg</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Umsatzsteuer-ID</h3>
                  <p>DE365419383</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}