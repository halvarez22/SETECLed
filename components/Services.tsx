import React from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface ServicesProps {
  language: Language;
}

// Fix: Changed JSX.Element to React.ReactNode to correctly type the icon prop.
const ServiceCard: React.FC<{ title: string; description: string; items: string[], icon: React.ReactNode }> = ({ title, description, items, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
    <div className="text-setec-green mb-4">{icon}</div>
    <h3 className="text-2xl font-bold font-montserrat text-setec-gray mb-3">{title}</h3>
    <p className="text-gray-600 mb-4 flex-grow">{description}</p>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-setec-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          {item}
        </li>
      ))}
    </ul>
  </div>
);


const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = contentData[language].services;
  const { led, solar, home } = content.divisions;

  const servicesData = [
    { ...led, icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> },
    { ...solar, icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg> },
    { ...home, icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-setec-gray">{content.title}</h2>
          <div className="w-24 h-1 bg-setec-green mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(service => <ServiceCard key={service.title} {...service} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;