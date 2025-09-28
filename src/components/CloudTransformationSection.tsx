import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, CheckCircle, Phone } from 'lucide-react';

export default function CloudTransformationSection() {
  const navigate = useNavigate();

  const handleContactNavigation = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* ABSCHNITT: Cloud Transformation CTA - START */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-24 h-24 bg-white/10"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white text-sm font-medium mb-8">
              <MessageCircle className="w-4 h-4 mr-2" />
              Kostenlose Erstberatung
            </div>
            
            {/* Headline */}
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Bereit für Ihre Cloud-Transformation?
            </h2>
            
            {/* Description */}
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              Lassen Sie sich von unseren Cloud-Experten kostenlos beraten. Wir analysieren Ihre IT-
              Infrastruktur und entwickeln eine maßgeschneiderte Migrationsstrategie für Ihr 
              Unternehmen.
            </p>
            
            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button 
                onClick={handleContactNavigation}
                className="bg-white text-purple-700 px-8 py-4 font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center group cursor-pointer"
              >
                <Phone className="w-5 h-5 mr-3" />
                Kostenlose Beratung anfordern
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <div className="flex items-center text-white/90">
                <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                <span className="font-medium">Unverbindlich & kostenfrei</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Cloud Transformation CTA - END */}
    </>
  );
}