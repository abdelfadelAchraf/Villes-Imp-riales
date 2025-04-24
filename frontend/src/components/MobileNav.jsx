// src/components/layout/MobileNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import citiesData from '../assets/constants';

const MobileNav = ({ activeCity, setActiveCity, setMobileMenuOpen }) => {
  return (
    <div className="md:hidden">
      <div className="flex flex-col p-4 space-y-3">
        <Link 
          to="/"
          className={`py-2 px-4 cursor-pointer font-medium text-left rounded ${activeCity === 'home' ? 'bg-amber-50 text-amber-600' : 'text-gray-600'}`}
          onClick={() => {
            setActiveCity('home');
            setMobileMenuOpen(false);
          }}
        >
          Accueil
        </Link>
        {citiesData.map((city) => (
          <Link 
            key={city.id}
            to={`/city/${city.id}`}
            className={`py-2 px-4 cursor-pointer font-medium text-left rounded ${activeCity === city.id ? 'bg-amber-50 text-amber-600' : 'text-gray-600'}`}
            onClick={() => {
              setActiveCity(city.id);
              setMobileMenuOpen(false);
            }}
          >
            {city.name}
          </Link>
        ))}
        <Link 
          to="/contact"
          className="py-2 px-4 cursor-pointer bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors w-full text-left"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;