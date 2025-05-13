import React from 'react';
import Hero from '../components/Hero';
import citiesData from '../assets/constants';
import CityCard from '../components/CityCard';
import CircuitCard from '../components/CuircuitCard';
import TargetAudienceCard from '../components/TargetAudienceCard';
import Approach from '../components/Approach';
import TestimonialsPage from './TestimonialsPage';
import { Link } from 'react-router-dom';
import MarocTourismData from '../components/MarocTourismData';

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
      <MarocTourismData/>

     
      <hr />
      <TestimonialsPage/>
      {/* <Link to="/temoignage" onClick={() => window.scrollTo(0, 0)}>
  <button className="bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 mt-8">
    Partager votre témoignage
  </button>
</Link> */}
    </div>
  );
};

export default HomePage;
