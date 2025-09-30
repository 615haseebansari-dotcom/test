import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CloudPage from './pages/CloudPage';
import ServerPage from './pages/ServerPage';
import HostingPage from './pages/HostingPage';
import ColocationPage from './pages/ColocationPage';
import ManagedITServicesPage from './pages/ManagedITServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import AGBPage from './pages/AGBPage';
import AboutUsPage from './pages/AboutUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import CookieBanner from './components/CookieBanner';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/cloud" element={<CloudPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/server" element={<ServerPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/hosting" element={<HostingPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/colocation" element={<ColocationPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/managed-it-services" element={<ManagedITServicesPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/solutions" element={<SolutionsPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/contact" element={<ContactPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/about" element={<AboutUsPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/testimonials" element={<TestimonialsPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/datenschutz" element={<DatenschutzPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/impressum" element={<ImpressumPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
          <Route path="/agb" element={<AGBPage isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />} />
        </Routes>
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
