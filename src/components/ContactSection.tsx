import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    privacyConsent: false
  });

  // Check if all required fields are filled
  const isFormValid = formData.firstName.trim() !== '' && 
                     formData.lastName.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.company.trim() !== '' && 
                     formData.message.trim() !== '' && 
                     formData.privacyConsent;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error when user starts typing
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid) {
      setSubmitStatus('error');
      setErrorMessage('Bitte füllen Sie alle Pflichtfelder aus.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // First, try to send via our backup webhook
      try {
        const webhookResponse = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            company: formData.company,
            phone: '',
            service: 'Allgemeine Anfrage',
            message: formData.message,
            timestamp: new Date().toISOString()
          })
        });

        if (webhookResponse.ok) {
          console.log('Backup webhook email sent successfully');
        }
      } catch (webhookError) {
        console.log('Backup webhook failed, continuing with Netlify Forms');
      }

      // Prepare form data for Netlify Forms submission
      const formDataToSend = new FormData();
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('company', formData.company);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('service', 'Allgemeine Anfrage');
      formDataToSend.append('timestamp', new Date().toISOString());
      formDataToSend.append('recipient', 'info@wolkenbunker.de');

      // Submit to Netlify Forms with proper encoding
      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          'firstName': formData.firstName,
          'lastName': formData.lastName,
          'email': formData.email,
          'company': formData.company,
          'message': formData.message,
          'service': 'Allgemeine Anfrage',
          'timestamp': new Date().toISOString(),
          'recipient': 'info@wolkenbunker.de'
        }).toString()
      });

      if (response.ok || response.status === 200) {
        setSubmitStatus('success');
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: '',
          privacyConsent: false
        });
        // Navigate to thank you page
        navigate('/thank-you');
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Verbindungsfehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon oder E-Mail.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ABSCHNITT: Contact - START */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mobile-px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 section-title" id="kontakt-wolkenbunker">
              Kontaktieren Sie <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">uns</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mobile-text-base">
              Haben Sie Fragen zu unseren Services? Unser Team steht Ihnen gerne zur Verfügung 
              und berät Sie bei der Auswahl der optimalen Lösung für Ihr Unternehmen.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mobile-grid-1">
            <div className="space-y-6 md:space-y-8 mobile-space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 subsection-title">Sprechen Sie mit uns</h3>
                <p className="text-gray-600 mb-6 md:mb-8 mobile-text-sm">
                  Unser erfahrenes Team berät Sie gerne bei der Auswahl der passenden 
                  IT-Infrastruktur für Ihr Unternehmen. Kontaktieren Sie uns für ein 
                  unverbindliches Beratungsgespräch.
                </p>
              </div>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Telefon</h4>
                    <a href="tel:+4940524745540" className="text-blue-600 hover:text-purple-600 transition-colors text-sm md:text-base mobile-text-sm">040 524745540</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">E-Mail</h4>
                    <a href="mailto:info@wolkenbunker.de" className="text-blue-600 hover:text-purple-600 transition-colors text-sm md:text-base mobile-text-sm">info@wolkenbunker.de</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">Adresse</h4>
                    <p className="text-gray-600 text-sm md:text-base mobile-text-sm">Katharinenstraße 33<br />20457 Hamburg, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 md:p-8 mt-8 lg:mt-0">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <p className="text-green-800 font-medium text-sm md:text-base mobile-text-sm">Nachricht erfolgreich gesendet!</p>
                  </div>
                  <p className="text-green-700 text-xs md:text-sm mt-2 ml-8 mobile-text-sm">Vielen Dank für Ihre Anfrage. Wir melden uns binnen 24 Stunden bei Ihnen.</p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                    <p className="text-red-800 font-medium text-sm md:text-base mobile-text-sm">Fehler beim Senden</p>
                  </div>
                  <p className="text-red-700 text-xs md:text-sm mt-2 ml-8 mobile-text-sm">{errorMessage}</p>
                </div>
              )}

              {/* Hidden Netlify Form for bot detection */}
              <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field" hidden>
                <input type="text" name="firstName" />
                <input type="text" name="lastName" />
                <input type="email" name="email" />
                <input type="text" name="company" />
                <input type="text" name="service" />
                <textarea name="message"></textarea>
              </form>

              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-4 md:space-y-6">
                {/* Honeypot field for spam protection */}
                <div style={{ display: 'none' }}>
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>
                
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 mobile-text-sm">
                      Vorname <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Ihr Vorname"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 mobile-text-sm">
                      Nachname <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Ihr Nachname"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 mobile-text-sm">
                    E-Mail <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="ihre.email@beispiel.de"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 mobile-text-sm">
                    Unternehmen <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Ihr Unternehmen"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 mobile-text-sm">
                    Nachricht <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                    required
                  />
                  <label htmlFor="privacyConsent" className="text-xs md:text-sm text-gray-600 leading-relaxed mobile-text-sm">
                    Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden darf. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <a href="/datenschutz" className="text-purple-600 hover:text-purple-700 underline">Datenschutzerklärung</a>.
                  </label>
                </div>
                
                <div className="space-y-3">
                  <button 
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="btn-primary w-full flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed mobile-btn-full"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Nachricht wird gesendet...
                      </>
                    ) : (
                      <>
                        Nachricht senden
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  {/* Alternative contact method */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">Oder kontaktieren Sie uns direkt:</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <a 
                        href="tel:+4940524745540"
                        className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        040 524745540
                      </a>
                      <a 
                        href="mailto:info@wolkenbunker.de"
                        className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        info@wolkenbunker.de
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ABSCHNITT: Contact - END */}
    </>
  );
}