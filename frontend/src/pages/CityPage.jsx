import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import citiesData from '../assets/constants';
import CityDetails from '../components/CityDetails';
import CityItinerary from '../components/CityItinerary';
import CityCard from '../components/CityCard';
import CityAccommodation from '../components/CityAccommodation';

const CityPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const city = citiesData.find(c => c.id === id);
  
  if (!city) return <div>Ville non trouvée</div>;
  
  const otherCities = citiesData.filter(c => c.id !== id);
  
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
        {otherCities.map((otherCity) => (
          <Link to={`/city/${otherCity.id}`} key={otherCity.id} className="block">
            <CityCard
              city={otherCity}
              onClick={(e) => {
                // Let the Link handle the navigation
                // Only scrolling happens here
                window.scrollTo(0, 0);
              }}
            />
          </Link>
        ))}
      </div>
      
      <CityAccommodation />
    </div>
  );
};

export default CityPage;