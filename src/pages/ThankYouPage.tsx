
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

interface ThankYouPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function ThankYouPage({ isMenuOpen, setIsMenuOpen }: ThankYouPageProps) {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      <SEOHead
        title="Vielen Dank für Ihre Nachricht | WolkenBunker"
        description="Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns in Kürze bei Ihnen melden."
      />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="pt-20 flex-grow bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vielen Dank für Ihre Nachricht!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Wir haben Ihre Anfrage erfolgreich erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
            </p>
            
            <button
              onClick={handleBackToHome}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Zurück zur Startseite
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}