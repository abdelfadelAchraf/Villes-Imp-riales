import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import citiesData from '../assets/constants';
import CityDetails from '../components/CityDetails';
import CityItinerary from '../components/CityItinerary';
import CityCard from '../components/CityCard';
import CityAccommodation from '../components/CityAccommodation';

const CityPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeCity, setActiveCity] = useState(id);

  const city = citiesData.find(c => c.id === activeCity);

  if (!city) return <div>Ville non trouvée</div>;

  const otherCities = citiesData.filter(c => c.id !== activeCity);

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-amber-600 hover:text-amber-800 mb-6"
      >
        <ChevronRight size={16} className="transform rotate-180 mr-1" />
        Retour à l'accueil
      </button>

      <CityDetails city={city} />
      <CityItinerary cityName={city.name} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {otherCities.map((city) => (
          <CityCard 
            key={city.id}
            city={city}
            onClick={() => {
              setActiveCity(city.id);
              window.scrollTo(0, 0);
            }}
          />
        ))}
      </div>

      <CityAccommodation />
    </div>
  );
};

export default CityPage;
