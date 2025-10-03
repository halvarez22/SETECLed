import React from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface AboutProps {
  language: Language;
}

const valueIcons = [
    <svg key="1" className="w-12 h-12 mb-4 text-setec-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>,
    <svg key="2" className="w-12 h-12 mb-4 text-setec-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
    <svg key="3" className="w-12 h-12 mb-4 text-setec-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01M12 6v-1m0-1V4m0 2.01M12 14c-1.11 0-2.08-.402-2.599-1M12 14v1m0-1v-.01M12 16v1m0 1v1m0-2.01M12 20v-1"></path></svg>
];

const About: React.FC<AboutProps> = ({ language }) => {
  const content = contentData[language].about;

  return (
    <section id="about" className="py-20 bg-setec-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-setec-gray">{content.title}</h2>
          <div className="w-24 h-1 bg-setec-green mx-auto mt-4"></div>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="space-y-4 text-lg text-gray-600">
                <p>{content.paragraph1}</p>
                <p>{content.paragraph2}</p>
            </div>
            <div>
                 <img src="/images/energias verdes 2.jpg" alt="Modern LED street lighting" className="rounded-lg shadow-2xl"/>
            </div>
        </div>
        <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold font-montserrat text-setec-gray text-center mb-10">{content.valuesTitle}</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                {content.values.map((value, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {valueIcons[index]}
                        <h4 className="text-xl font-bold font-montserrat text-setec-gray mb-2">{value.title}</h4>
                        <p className="text-gray-600">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;