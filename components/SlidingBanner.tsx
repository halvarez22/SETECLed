import React from 'react';

const SlidingBanner: React.FC = () => {
  return (
    <div className="bg-setec-green text-white py-3 overflow-hidden relative">
      <div className="flex animate-scroll">
        <div className="flex whitespace-nowrap">
          <span className="text-lg font-bold font-montserrat mx-8 flex-shrink-0">
            Cuidamos el Medio Ambiente Consumiendo Menos Energía!
          </span>
          <span className="text-lg font-bold font-montserrat mx-8 flex-shrink-0">
            Cuidamos el Medio Ambiente Consumiendo Menos Energía!
          </span>
          <span className="text-lg font-bold font-montserrat mx-8 flex-shrink-0">
            Cuidamos el Medio Ambiente Consumiendo Menos Energía!
          </span>
          <span className="text-lg font-bold font-montserrat mx-8 flex-shrink-0">
            Cuidamos el Medio Ambiente Consumiendo Menos Energía!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlidingBanner;
