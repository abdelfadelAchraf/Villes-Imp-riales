import React from 'react';

const Approach = () => {
  return (
    <div className="bg-amber-50 rounded-xl p-8 border border-amber-100 mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Notre Approche</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-amber-600 font-bold text-xl">1</span>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Histoire Authentique</h3>
          <p className="text-gray-600">Exploration approfondie de l'histoire riche et diversifiée de chaque ville impériale.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-amber-600 font-bold text-xl">2</span>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Expériences Culturelles</h3>
          <p className="text-gray-600">Immersion dans les traditions locales et rencontres avec des artisans.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-amber-600 font-bold text-xl">3</span>
          </div>
          <h3 className="font-bold text-gray-800 mb-2">Confort & Authenticité</h3>
          <p className="text-gray-600">Hébergement dans des riads traditionnels et restaurants sélectionnés pour leur qualité.</p>
        </div>
      </div>
    </div>
  );
};

export default Approach;