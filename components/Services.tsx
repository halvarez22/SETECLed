import React, { useState, useEffect } from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface ServicesProps {
  language: Language;
}

const ServiceCard: React.FC<{ 
  title: string; 
  description: string; 
  items: string[], 
  icon: React.ReactNode;
  index: number;
  isVisible: boolean;
}> = ({ title, description, items, icon, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative group bg-gradient-to-br from-white via-white to-gray-50 
        p-8 rounded-2xl shadow-lg hover:shadow-2xl 
        transform transition-all duration-500 ease-out
        border border-gray-100 hover:border-setec-green/30
        backdrop-blur-sm
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        hover:-translate-y-3 hover:scale-105
        overflow-hidden
      `}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        animation: isVisible ? `slideInUp 0.6s ease-out ${index * 150}ms both` : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de brillo de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-setec-green/3 via-transparent to-setec-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Efecto de partículas flotantes */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-setec-green rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-pulse"></div>
      <div className="absolute top-8 right-8 w-1 h-1 bg-setec-green rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
      
      {/* Icono con efecto 3D */}
      <div className="relative mb-6">
        <div className={`
          inline-flex items-center justify-center w-16 h-16 rounded-2xl
          bg-gradient-to-br from-setec-green to-setec-dark-green
          shadow-lg group-hover:shadow-xl
          transform transition-all duration-300
          ${isHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}
        `}>
          <div className="text-white transform transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        {/* Efecto de ondas */}
        <div className="absolute inset-0 rounded-2xl bg-setec-green/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
      </div>

      {/* Contenido */}
      <h3 className="text-2xl font-bold font-montserrat text-setec-gray mb-4 group-hover:text-setec-dark-green transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      
      {/* Lista con animaciones */}
      <ul className="space-y-3">
        {items.map((item, itemIndex) => (
          <li 
            key={itemIndex} 
            className="flex items-center group/item"
            style={{ 
              animationDelay: `${(index * 150) + (itemIndex * 100)}ms`,
              animation: isVisible ? `fadeInLeft 0.5s ease-out ${(index * 150) + (itemIndex * 100)}ms both` : 'none'
            }}
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-setec-green/10 flex items-center justify-center mr-3 group-hover/item:bg-setec-green group-hover/item:scale-110 transition-all duration-300">
              <svg className="w-3 h-3 text-setec-green group-hover/item:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">{item}</span>
          </li>
        ))}
      </ul>

      {/* Efecto de borde animado */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-setec-green/20 via-setec-green/30 to-setec-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
        background: 'linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.3), rgba(16, 185, 129, 0.2))',
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'border-box'
      }}></div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = contentData[language].services;
  const { led, solar, home } = content.divisions;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const servicesData = [
    { 
      ...led, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    { 
      ...solar, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    { 
      ...home, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Fondo con partículas */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-setec-green/20 rounded-full floating" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-setec-green/30 rounded-full floating" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-setec-green/10 rounded-full floating" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-setec-green/25 rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-montserrat text-setec-gray mb-4 transform transition-all duration-500 hover:scale-105">
              {content.title}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-setec-green to-setec-dark-green mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Descubre nuestras divisiones especializadas en soluciones ecotecnológicas de vanguardia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                {...service} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;