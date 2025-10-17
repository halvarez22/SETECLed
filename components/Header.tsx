
import React, { useState } from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = contentData[language].nav;

  const navLinks = [
    { href: '#about', text: content.about },
    { href: '#services', text: content.services },
    { href: '#projects', text: content.projects },
    { href: '#impact', text: content.impact },
    { href: '#contact', text: content.contact },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/images/logo.png" alt="SETECSOLAR Logo" className="h-10 w-auto mr-2" />
          <span className="text-2xl font-black font-montserrat text-setec-green">Setec<span className="text-setec-dark-green">SOLAR</span></span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-setec-gray font-medium hover:text-setec-green transition-colors duration-300">{link.text}</a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-setec-gray focus:outline-none" aria-label="Open menu" aria-expanded={isMenuOpen}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => {
              // Fix: Corrected typo in state setter function from setIsMenu-Open to setIsMenuOpen.
              return <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-setec-gray font-medium hover:text-setec-green transition-colors duration-300">{link.text}</a>
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;