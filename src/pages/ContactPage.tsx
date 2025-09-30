import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Mail, Phone, MapPin, Send, Clock, Shield, Award, MessageCircle, User, Building, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ContactPageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function ContactPage({ isMenuOpen, setIsMenuOpen }: ContactPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    privacyConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Check if all required fields are filled
  const isFormValid = formData.firstName.trim() !== '' && 
                     formData.lastName.trim() !== '' && 
                     formData.email.trim() !== '' && 
                     formData.company.trim() !== '' && 
                     formData.service.trim() !== '' && 
                     formData.message.trim() !== '' && 
                     formData.privacyConsent;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            phone: formData.phone,
            service: formData.service,
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

      // Submit to Netlify Forms with proper encoding
      const response = await fetch('/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
        body: new URLSearchParams({
          'form-name': 'contact-detailed',
          'firstName': formData.firstName,
          'lastName': formData.lastName,
          'email': formData.email,
          'company': formData.company,
          'phone': formData.phone || '',
          'service': formData.service,
          'message': formData.message,
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
          phone: '',
          service: '',
          message: '',
          privacyConsent: false
        });
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

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      content: "+49 (0) 40 524745540",
      subtitle: "Mo-Fr 8:00-18:00 Uhr",
      link: "tel:+4940524745540"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-Mail",
      content: "info@wolkenbunker.de",
      subtitle: "Rund um die Uhr für Sie verfügbar",
      link: "mailto:info@wolkenbunker.de"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Hauptsitz",
      content: "Katharinenstraße 33",
      subtitle: "20457 Hamburg, Deutschland",
      link: null
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Rund um die Uhr verfügbarer technischer Support für alle Ihre Anfragen"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DSGVO-konform",
      description: "Ihre Daten werden nach höchsten Datenschutzstandards behandelt"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Zertifizierte Experten",
      description: "Über 20 Zertifikate und langjährige Erfahrung in der IT-Branche"
    }
  ];

  const services = [
    "Cloud Services",
    "Server Hosting",
    "Webhosting",
    "Co-location",
    "Managed IT Services",
    "Disaster Recovery",
    "Backup Lösungen",
    "Sonstige Anfrage"
  ];

  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen flex items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-40 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl opacity-60 animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-60 right-60 w-16 h-16 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-xl opacity-50 animate-bounce delay-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-800 text-sm font-medium rounded-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Kontaktieren Sie uns
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sprechen Sie mit
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">unseren Cloud-Experten</span>
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Haben Sie Fragen zu Private Cloud, Server-Hosting oder Managed IT Services? 
                    Unsere zertifizierten IT-Experten beraten Sie kostenlos zu DSGVO-konformen 
                    IT-Lösungen aus deutschen Rechenzentren.
                  </p>
                  <p className="font-medium text-gray-800">
                    Kostenlose IT-Beratung. DSGVO-konforme Lösungen. 24/7 Support.
                  </p>
                </div>
              </div>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm p-4 border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-blue-600 hover:text-purple-600 transition-colors font-medium">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">{info.content}</p>
                      )}
                      <p className="text-sm text-gray-500">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-white/90 backdrop-blur-sm shadow-2xl p-8 rounded-2xl border border-gray-200 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Kostenlose Beratung anfordern</h3>
                    <p className="text-gray-600">Füllen Sie das Formular aus und wir melden uns binnen 24 Stunden</p>
                  </div>
                  
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <p className="text-green-800 font-medium">Nachricht erfolgreich gesendet!</p>
                      </div>
                      <p className="text-green-700 text-sm mt-2 ml-8">Vielen Dank für Ihre Anfrage. Wir melden uns binnen 24 Stunden bei Ihnen.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-3" />
                        <p className="text-red-800 font-medium">Fehler beim Senden</p>
                      </div>
                      <p className="text-red-700 text-sm mt-2 ml-8">{errorMessage}</p>
                    </div>
                  )}

                  {/* Hidden Netlify Form for bot detection */}
                  <form name="contact-detailed" netlify netlify-honeypot="bot-field" hidden>
                    <input type="text" name="firstName" />
                    <input type="text" name="lastName" />
                    <input type="email" name="email" />
                    <input type="text" name="company" />
                    <input type="text" name="phone" />
                    <input type="text" name="service" />
                    <textarea name="message"></textarea>
                  </form>
                  
                  <form onSubmit={handleSubmit} name="contact-detailed" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
                    {/* Honeypot field for spam protection */}
                    <div style={{ display: 'none' }}>
                      <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </div>
                    
                    <input type="hidden" name="form-name" value="contact-detailed" />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vorname <span className="text-red-500">*</span>
                        </label>
                        <User className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                          placeholder="Vorname"
                          required
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nachname <span className="text-red-500">*</span>
                        </label>
                        <User className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                          placeholder="Nachname"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-Mail <span className="text-red-500">*</span>
                      </label>
                      <Mail className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                        placeholder="E-Mail Adresse"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Unternehmen <span className="text-red-500">*</span>
                        </label>
                        <Building className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                          placeholder="Unternehmen"
                          required
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon
                        </label>
                        <Phone className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900 placeholder-gray-500"
                          placeholder="Telefonnummer"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service <span className="text-red-500">*</span>
                      </label>
                      <FileText className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                        required
                      >
                        <option value="">Service auswählen</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nachricht <span className="text-red-500">*</span>
                      </label>
                      <MessageCircle className="absolute left-3 top-10 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none bg-white text-gray-900 placeholder-gray-500"
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
                      <label htmlFor="privacyConsent" className="text-sm text-gray-600 leading-relaxed">
                        Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden darf. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer <a href="/datenschutz" className="text-purple-600 hover:text-purple-700 underline">Datenschutzerklärung</a>.
                      </label>
                    </div>
                    
                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center group disabled:opacity-70 disabled:cursor-not-allowed"
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
                      
                      {/* Alternative contact methods */}
                      <div className="text-center">
                        <p className="text-xs text-gray-500 mb-2">Oder kontaktieren Sie uns direkt:</p>
                        <div className="flex flex-col sm:flex-row gap-2 justify-center">
                          <a 
                            href="tel:+4940524745540"
                            className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center rounded-lg"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            040 524745540
                          </a>
                          <a 
                            href="mailto:info@wolkenbunker.de"
                            className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center rounded-lg"
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Warum <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">WolkenBunker?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauen Sie auf unsere Expertise und profitieren Sie von erstklassigem Service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-purple-600 mx-auto mb-6 rounded-2xl group-hover:shadow-lg transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/5 rounded-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Bereit für Ihre digitale
              <br />
              Transformation?
            </h2>
            
            <p className="text-xl text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam die perfekte IT-Lösung für Ihr Unternehmen entwickeln. 
              Unsere Experten freuen sich auf Ihre Anfrage.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+4940524745540" className="bg-white text-purple-700 px-8 py-4 font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center group rounded-lg">
                <Phone className="w-5 h-5 mr-3" />
                Jetzt anrufen
                <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <div className="flex items-center text-purple-200">
                <Clock className="w-5 h-5 mr-3 text-green-300" />
                <span className="font-medium">Antwort binnen 24 Stunden</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}