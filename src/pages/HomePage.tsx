import React from 'react';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import NextGenCloudSection from '../components/NextGenCloudSection';
import LivePerformanceSection from '../components/LivePerformanceSection';
import CloudTransformationSection from '../components/CloudTransformationSection';
import WhyWolkenbunkerSection from '../components/WhyWolkenbunkerSection';
import CloudMigrationSection from '../components/CloudMigrationSection';
import PrivateCloudServicesSection from '../components/PrivateCloudServicesSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

interface HomePageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function HomePage({ isMenuOpen, setIsMenuOpen }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <SEOHead />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <NextGenCloudSection />
      <LivePerformanceSection />
      <CloudTransformationSection />
      <WhyWolkenbunkerSection />
      <CloudMigrationSection />
      <PrivateCloudServicesSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}