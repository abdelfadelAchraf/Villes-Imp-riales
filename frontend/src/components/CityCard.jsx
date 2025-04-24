import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CityCard = ({ city, setActiveCity }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border-b-4 border-transparent hover:border-amber-600"
    >
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <img 
          src={city.image} 
          alt={city.name} 
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
        <h3 className="absolute bottom-3 left-4 text-white font-bold text-2xl z-20">{city.name}</h3>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 italic mb-2">{city.founded}</p>
        <p className="text-gray-700 mb-3 line-clamp-3">{city.description}</p>
        <Link 
          to={`/city/${city.id}`}
          className="text-amber-600 hover:text-amber-800 text-sm font-medium flex items-center"
          onClick={() => {
            setActiveCity(city.id);
            window.scrollTo(0, 0);
          }}
        >
          Découvrir <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CityCard;