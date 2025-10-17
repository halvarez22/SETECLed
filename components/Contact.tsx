import React, { useState } from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const content = contentData[language].contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-setec-gray">{content.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{content.subtitle}</p>
          <div className="w-24 h-1 bg-setec-green mx-auto mt-4"></div>
        </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 bg-setec-light-gray p-8 md:p-12 rounded-xl shadow-lg">
          <div>
            <h3 className="text-2xl font-bold text-setec-gray mb-4">{content.info.title}</h3>
            <p className="text-gray-600 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-3 text-setec-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              {content.info.address}
            </p>
            <p className="text-gray-600 mb-2 flex items-center">
              <svg className="w-5 h-5 mr-3 text-setec-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <a href={`tel:${content.info.phone}`} className="text-setec-green hover:text-setec-dark-green transition-colors duration-300">
                {content.info.phone}
              </a>
            </p>
            {content.info.phone2 && (
              <p className="text-gray-600 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-3 text-setec-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href={`tel:${content.info.phone2}`} className="text-setec-green hover:text-setec-dark-green transition-colors duration-300">
                  {content.info.phone2}
                </a>
              </p>
            )}
            <p className="text-gray-600 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-3 text-setec-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <a href={`mailto:${content.info.email}`} className="text-setec-green hover:text-setec-dark-green transition-colors duration-300">
                {content.info.email}
              </a>
            </p>
            <div className="h-64 md:h-80 bg-gray-300 rounded-lg mt-6 overflow-hidden shadow-lg">
                <iframe
                    title="SetecSOLAR Office Location - Lagos de Moreno, Jalisco"
                    src="https://maps.google.com/maps?q=21.347593934345433,-101.93882634811484&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a 
                href="https://maps.google.com/maps?q=21.347593934345433,-101.93882634811484"
                target="_blank"
                rel="noopener noreferrer"
                className="text-setec-green hover:text-setec-dark-green font-medium text-sm transition-colors duration-300"
              >
                📍 Ver en Google Maps
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">{content.form.name}</label>
              <input type="text" id="name" placeholder={content.form.name} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-setec-green" required />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">{content.form.email}</label>
              <input type="email" id="email" placeholder={content.form.email} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-setec-green" required />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">{content.form.message}</label>
              <textarea id="message" rows={6} placeholder={content.form.message} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-setec-green" required></textarea>
            </div>
            {submitted ? (
              <p className="text-setec-dark-green font-bold">{content.form.success}</p>
            ) : (
              <button type="submit" className="w-full bg-accent-yellow text-setec-gray font-bold py-3 px-6 rounded-md hover:bg-accent-orange transition-all duration-300 transform hover:scale-105">
                {content.form.submit}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;