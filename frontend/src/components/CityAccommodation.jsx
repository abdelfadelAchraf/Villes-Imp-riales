import React from 'react';

const CityAccommodation = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Hébergements Recommandés</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-gray-200 rounded p-4">
          <h3 className="font-bold text-gray-800 mb-1">Riad Traditionnel</h3>
          <p className="text-sm text-gray-600 mb-2">Au cœur de la médina</p>
          <div className="flex text-amber-500">
            {'★'.repeat(5)}
          </div>
        </div>
        <div className="border border-gray-200 rounded p-4">
          <h3 className="font-bold text-gray-800 mb-1">Hôtel de Charme</h3>
          <p className="text-sm text-gray-600 mb-2">Proche des monuments</p>
          <div className="flex text-amber-500">
            {'★'.repeat(4)}
          </div>
        </div>
        <div className="border border-gray-200 rounded p-4">
          <h3 className="font-bold text-gray-800 mb-1">Palais Restauré</h3>
          <p className="text-sm text-gray-600 mb-2">Expérience luxueuse</p>
          <div className="flex text-amber-500">
            {'★'.repeat(5)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityAccommodation;