'use client';

import React, { useState } from 'react';

import { Header } from './src/components/Header';
import { Hero } from './src/components/Hero';
import { ServicesSection } from './src/components/ServicesSection';
import { BookingSection } from './src/components/BookingSection';
import { ContactSection } from './src/components/ContactSection';
import { TestimonialsSection } from './src/components/TestimonialsSection';
import { Footer } from './src/components/Footer';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />

      {currentSection === 'home' && (
        <>
          <Hero onNavigate={handleNavigate} />
          <ServicesSection />
          <TestimonialsSection />
        </>
      )}

      {currentSection === 'services' && <ServicesSection />}
      {currentSection === 'booking' && <BookingSection />}
      {currentSection === 'contact' && <ContactSection />}

      {currentSection === 'about' && (
        <section className="py-30 bg-white pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Sobre o Espaço Cristina
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Há mais de 15 anos, o Espaço Cristina tem sido referência em beleza
                e cuidados capilares na região. Fundado pela renomada cabeleireira
                Cristina, nosso salão nasceu do sonho de criar um espaço onde cada
                cliente se sinta especial e única.
              </p>

              <p className="text-gray-600 mb-6">
                Nossa missão é realçar a beleza natural de cada mulher,
                proporcionando serviços de excelência com produtos premium e
                técnicas atualizadas.
              </p>

              <p className="text-gray-600">
                No Espaço Cristina, você encontra um ambiente acolhedor,
                profissionais qualificados e um atendimento personalizado.
              </p>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default App;
