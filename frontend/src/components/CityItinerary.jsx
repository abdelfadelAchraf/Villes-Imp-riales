import React from 'react';

const CityItinerary = ({ cityName }) => {
  return (
    <div className="bg-amber-50 rounded-lg p-6 border border-amber-100 mb-10">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Notre Itinéraire à {cityName}</h2>
      <div className="space-y-4">
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <div className="w-0.5 h-full bg-amber-200 my-1"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Matinée</h3>
            <p className="text-gray-700">Visite guidée des principaux monuments historiques avec un guide local spécialisé.</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <div className="w-0.5 h-full bg-amber-200 my-1"></div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Après-midi</h3>
            <p className="text-gray-700">Découverte des artisans locaux et temps libre pour explorer les souks.</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Soirée</h3>
            <p className="text-gray-700">Dîner traditionnel avec animation musicale locale.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityItinerary;