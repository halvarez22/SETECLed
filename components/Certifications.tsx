
import React from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface CertificationsProps {
  language: Language;
}

const Certifications: React.FC<CertificationsProps> = ({ language }) => {
  const content = contentData[language].certifications;
  const logos = ["NOM", "UL", "CE", "ENERGY STAR", "FIDE"];

  return (
    <section id="certifications" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-montserrat text-setec-gray">{content.title}</h2>
          <div className="w-24 h-1 bg-setec-green mx-auto mt-4"></div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
          {logos.map(logo => (
            <div key={logo} className="text-xl font-bold text-gray-400 grayscale hover:grayscale-0 hover:text-setec-gray transition-all duration-300">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
