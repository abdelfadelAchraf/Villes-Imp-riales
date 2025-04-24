import React from 'react';
import { ChevronRight, Calendar, Users, Map } from 'lucide-react';

const CircuitCard = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border-t-4 border-amber-600 hover:shadow-xl transition-shadow">
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Notre Circuit Proposé</h3>
        <p className="text-gray-600 mb-4">10 jours / 9 nuits pour découvrir les quatre villes impériales</p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-center text-gray-700">
            <Calendar size={16} className="mr-2 text-amber-600" /> Départs toute l'année
          </li>
          <li className="flex items-center text-gray-700">
            <Users size={16} className="mr-2 text-amber-600" /> Petit groupe (12 personnes max)
          </li>
          <li className="flex items-center text-gray-700">
            <Map size={16} className="mr-2 text-amber-600" /> Transport privé inclus
          </li>
        </ul>
        <button className="w-full bg-amber-600 text-white py-2 px-4 rounded hover:bg-amber-700 transition-colors flex items-center justify-center">
          <span>Voir l'itinéraire</span>
          <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default CircuitCard;