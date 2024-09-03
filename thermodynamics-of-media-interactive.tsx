import React, { useState } from 'react';

const ThermodynamicsOfMedia = () => {
  const [showCulture, setShowCulture] = useState(false);
  const [activeElement, setActiveElement] = useState(null);

  const handleElementClick = (element) => {
    setActiveElement(element === activeElement ? null : element);
  };

  const handleAddCulture = () => {
    setShowCulture(true);
  };

  return (
    <div className="relative w-full h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Medio como sistema abierto</h1>
      
      {/* Main container */}
      <div className="relative w-full h-3/4 border-2 border-dashed border-gray-400 rounded-lg p-4">
        
        {/* Medio */}
        <div 
          className={`absolute left-1/4 top-1/4 w-1/2 h-1/2 border-2 border-black rounded-lg p-2 cursor-pointer transition-all duration-300 ${activeElement === 'medio' ? 'bg-blue-100' : ''}`}
          onClick={() => handleElementClick('medio')}
        >
          <h2 className="text-xl font-semibold">Medio</h2>
          {showCulture && (
            <div className="absolute inset-0 bg-red-200 bg-opacity-50 animate-pulse rounded-lg"></div>
          )}
        </div>

        {/* Información como materia */}
        <div className="absolute left-0 top-1/3 w-1/4 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-yellow-100" onClick={() => handleElementClick('informacion')}>
          <span className="font-semibold">Información como materia</span>
        </div>

        {/* Arrow from Información to inside Medio */}
        <svg className="absolute left-1/4 top-1/2 w-1/4 h-12" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12H95" stroke="black" strokeWidth="2"/>
          <path d="M95 12L85 6V18L95 12Z" fill="black"/>
        </svg>

        {/* Lugar de recepción cultural subjetivo */}
        <div className="absolute right-0 top-1/3 w-1/4 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-green-100" onClick={() => handleElementClick('recepcion')}>
          <span className="font-semibold">Lugar de recepción cultural subjetivo</span>
        </div>

        {/* Arrow from Medio to Lugar de recepción */}
        <svg className="absolute right-1/4 top-1/2 w-1/4 h-12" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 12H95" stroke="black" strokeWidth="2"/>
          <path d="M95 12L85 6V18L95 12Z" fill="black"/>
        </svg>

        {/* Cultura de la persona */}
        <div 
          className={`absolute left-1/3 bottom-0 w-1/3 h-16 border-2 border-black rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${showCulture ? 'animate-bounce' : ''} ${activeElement === 'cultura' ? 'bg-purple-100' : ''}`}
          onClick={() => handleElementClick('cultura')}
        >
          <span className="font-semibold">Cultura de la persona</span>
        </div>

        {/* Arrow from Cultura to Medio (always visible, becomes emphasized when showCulture is true) */}
        <svg className={`absolute left-1/2 bottom-16 w-12 h-1/4 transition-opacity duration-300 ${showCulture ? 'opacity-100' : 'opacity-50'}`} viewBox="0 0 24 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 95V0" stroke="black" strokeWidth="2"/>
          <path d="M12 0L6 10H18L12 0Z" fill="black"/>
        </svg>

        {/* Add Culture Button */}
        <button 
          className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          onClick={handleAddCulture}
        >
          Agregar Cultura de la Persona
        </button>
      </div>

      {/* Information Panel */}
      {activeElement && (
        <div className="absolute top-4 right-4 w-64 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">
            {activeElement === 'medio' && 'Medio'}
            {activeElement === 'informacion' && 'Información como materia'}
            {activeElement === 'recepcion' && 'Lugar de recepción cultural subjetivo'}
            {activeElement === 'cultura' && 'Cultura de la persona'}
          </h3>
          <p>
            {activeElement === 'medio' && 'El medio es el sistema principal donde ocurre la transformación de la información.'}
            {activeElement === 'informacion' && 'La información es análoga a la materia en sistemas termodinámicos, sujeta a transformaciones.'}
            {activeElement === 'recepcion' && 'Espacio donde la información es interpretada según el contexto cultural del receptor.'}
            {activeElement === 'cultura' && 'La cultura personal influye en cómo se interpreta y transforma la información en el medio.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default ThermodynamicsOfMedia;
