
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Impact from './components/Impact';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SlidingBanner from './components/SlidingBanner';
import type { Language } from './types';

const App: React.FC = () => {
  const language: Language = 'es';

  return (
    <div className="bg-white font-roboto text-setec-gray">
      <Header language={language} />
      <SlidingBanner />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Services language={language} />
        <Projects language={language} />
        <Impact language={language} />
        <Certifications language={language} />
        <Testimonials language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;