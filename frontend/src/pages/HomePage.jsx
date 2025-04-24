import React from 'react';
import Hero from '../components/Hero';
import citiesData from '../assets/constants';
import CityCard from '../components/CityCard';
import CircuitCard from '../components/CuircuitCard';
import TargetAudienceCard from '../components/TargetAudienceCard';
import Approach from '../components/Approach';
import TestimonialsPage from './TestimonialsPage';


const HomePage = ({ setActiveCity }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {citiesData.map((city) => (
          <CityCard 
            key={city.id}
            city={city}
            onClick={() => setActiveCity(city.id)}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <CircuitCard />
        <TargetAudienceCard />
      </div>

      <Approach />
      <hr />
      <TestimonialsPage/>
    </div>
  );
};

export default HomePage;
