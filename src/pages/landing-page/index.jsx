import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ImpactMetrics from './components/ImpactMetrics';
import CostComparison from './components/CostComparison';
import ServicesShowcase from './components/ServicesShowcase';
import HowItWorks from './components/HowItWorks';
import TestimonialsSlider from './components/TestimonialsSlider';
import TrustBadges from './components/TrustBadges';
import FAQSection from './components/FAQSection';
import BookingForms from './components/BookingForms';
import Footer from './components/Footer';
import WeaightLossSection from './components/WeightLossSection'
import SocialProofSection from './components/SocialProofSection';
import CoachCredentialsSection from './components/CoachCredentialsSection';
import VideoTestimonials from './components/VideoTestimonials';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <TrustBadges />
        <CostComparison />
        <ImpactMetrics />
        <TestimonialsSlider />
        <VideoTestimonials />
        <ServicesShowcase />
        {/* <HowItWorks /> */}
        {/* <WeaightLossSection /> */}
        <SocialProofSection />
        <CoachCredentialsSection/>
        <FAQSection />
        <BookingForms />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;