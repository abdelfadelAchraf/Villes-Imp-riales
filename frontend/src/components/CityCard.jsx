import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CityCard = ({ city }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border-b-4 border-transparent hover:border-amber-600">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={city.image} 
          alt={city.name} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
        <h2 className="absolute bottom-3 left-4 text-white font-bold text-2xl z-20">{city.name}</h2>
      </div>
      <div className="p-4 flex flex-col">
        <p className="text-gray-500 italic mb-2">{city.founded}</p>
        <p className="text-gray-700 mb-4 flex-grow">{city.description}</p>
        <Link 
        onClick={()=>window.scrollTo(0, 0)}
          to={`/city/${city.id}`} 
          className="flex items-center text-amber-600 hover:text-amber-800 text-sm font-medium"
        >
          Découvrir
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CityCard;
