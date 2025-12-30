'use client';

import React, { useState } from 'react';

import { Header } from './src/components/Header';
import { Hero } from './src/components/hero/Hero';
import { HeroSkeleton } from './src/components/hero/HeroSkeleton';
import { Footer } from './src/components/Footer';
import { ServicesSkeleton } from './src/components/servicesSection/ServicesSkeleton';
import { ServicesSection } from './src/components/servicesSection/ServicesSection';
import { TestimonialsSection } from './src/components/testimonialsSection/TestimonialsSection';
import { BookingSkeleton } from './src/components/bookingSection/BookingSkeleton';
import { BookingSection } from './src/components/bookingSection/BookingSection';
import { ContactSkeleton } from './src/components/contactSection/ContactSkeleton';
import { ContactSection } from './src/components/contactSection/ContactSection';
import { TestimonialsSkeleton } from './src/components/testimonialsSection/TestimonialsSectionSkeleton';
import { AboutSkeleton } from './src/components/about/AboutSkeleton';
import { About } from './src/components/about/About';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = (section: string) => {
    setIsLoading(true);
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => setIsLoading(false), 700);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />

      {currentSection === 'home' && (
        isLoading ? (
          <>
            <HeroSkeleton />
            <ServicesSkeleton />
            <TestimonialsSkeleton />
          </>
        ) : (
          <>
            <Hero onNavigate={handleNavigate} />
            <ServicesSection />
            <TestimonialsSection />
          </>
        )
      )}

      {currentSection === 'services' &&
        (isLoading ? <ServicesSkeleton /> : <ServicesSection />)}

      {currentSection === 'booking' &&
        (isLoading ? <BookingSkeleton /> : <BookingSection />)}

      {currentSection === 'contact' &&
        (isLoading ? <ContactSkeleton /> : <ContactSection />)}

      {currentSection === 'about' && (
        (isLoading ? <AboutSkeleton /> : <About /> )
      )}

      <Footer />
    </div>
  );
};

export default App;
