import React from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = contentData[language].hero;

  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/imagen_portada.avif')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <div className="mb-8 animate-fade-in-down">
          <div className="relative">
            <img src="/images/logo.png" alt="SETECLED Logo" className="h-24 md:h-32 lg:h-40 w-auto mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full blur-xl -z-10 scale-110"></div>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-black font-montserrat mb-4 leading-tight animate-fade-in-down">
          {content.title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 font-roboto animate-fade-in-up">
          {content.subtitle}
        </p>
        <a href="#about" className="bg-accent-yellow text-setec-gray font-bold py-3 px-8 rounded-full hover:bg-accent-orange transition-all duration-300 transform hover:scale-105 text-lg animate-fade-in-up animation-delay-300">
          {content.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;