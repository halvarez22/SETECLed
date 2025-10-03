import React, { useState, useEffect, useRef } from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface ImpactProps {
  language: Language;
}

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  unit: string;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration = 2000, label, unit }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable--next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const endValue = end;
    if (start === endValue) return;

    const incrementTime = (duration / endValue);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endValue) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <div ref={ref} className="text-center bg-white p-6 rounded-lg shadow-md">
      <p className="text-5xl md:text-6xl font-black font-montserrat text-setec-green">
        {count}
        <span className="text-4xl">{unit}</span>
      </p>
      <p className="text-lg text-setec-gray mt-2">{label}</p>
    </div>
  );
};

const Impact: React.FC<ImpactProps> = ({ language }) => {
  const content = contentData[language].impact;
  const metrics = content.metrics;
  
  return (
    <section id="impact" className="py-20 bg-setec-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-setec-gray">{content.title}</h2>
          <div className="w-24 h-1 bg-setec-green mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <AnimatedCounter end={97} label={metrics.energy.label} unit={metrics.energy.unit} />
          <AnimatedCounter end={100} label={metrics.maintenance.label} unit={metrics.maintenance.unit} />
          <AnimatedCounter end={18} label={metrics.investment.label} unit={`+ ${metrics.investment.unit}`} />
          <AnimatedCounter end={700} label={metrics.co2.label} unit={metrics.co2.unit} />
        </div>
      </div>
    </section>
  );
};

export default Impact;