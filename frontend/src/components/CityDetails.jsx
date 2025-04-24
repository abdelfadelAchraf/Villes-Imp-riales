import React from 'react';

const CityDetails = ({ city }) => {
  if (!city) return null;

  return (
    <>
      <div className="relative rounded-xl overflow-hidden h-72 mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-transparent z-10"></div>
        <img 
          src={city.image} 
          alt={city.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-6 z-20">
          <h1 className="text-4xl font-bold text-white mb-2">{city.name}</h1>
          <p className="text-white/90 text-lg">{city.founded}</p>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">À Propos</h2>
        <p className="text-gray-700 text-lg">{city.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-600">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Sites Principaux</h2>
          <ul className="space-y-3">
            {city.sites.map((site, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-amber-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">{site}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-600">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Traditions Culturelles</h2>
          <ul className="space-y-3">
            {city.traditions.map((tradition, index) => (
              <li key={index} className="flex items-start">
                <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">{tradition}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CityDetails;