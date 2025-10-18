
import React, { useState, useMemo } from 'react';
import type { Language } from '../types';
import contentData from '../constants/content';

interface ProjectsProps {
  language: Language;
}

type FilterType = 'All' | 'SetecLED' | 'SetecSOLAR' | 'SetecHOME';

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = contentData[language].projects;
  const [filter, setFilter] = useState<FilterType>('All');

  const filteredProjects = useMemo(() => {
    if (filter === 'All') {
      return content.items;
    }
    return content.items.filter(project => project.category === filter);
  }, [filter, content.items]);

  const filterButtons: { label: string, key: FilterType }[] = [
    { label: content.filter.all, key: 'All' },
    { label: content.filter.led, key: 'SetecLED' },
    { label: content.filter.solar, key: 'SetecSOLAR' },
    { label: content.filter.home, key: 'SetecHOME' },
  ];

  return (
    <section id="projects" className="py-20 bg-setec-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-montserrat text-setec-gray">{content.title}</h2>
          <div className="w-24 h-1 bg-setec-green mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filterButtons.map(({ label, key }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={`px-6 py-2 font-semibold rounded-full transition-all duration-300
                ${filter === key 
                  ? 'bg-setec-green text-white shadow-md scale-105' 
                  : 'bg-white text-setec-gray hover:bg-gray-200'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
              <div className="relative h-56">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-bold bg-setec-green px-4 py-2 rounded-md">{project.category}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-bold font-montserrat text-setec-gray mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-200">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-200 text-setec-dark-green text-xs font-semibold px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
