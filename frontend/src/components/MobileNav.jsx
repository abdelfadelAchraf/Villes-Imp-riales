import React from 'react';
import { Link } from 'react-router-dom';
import citiesData from '../assets/constants';

const MobileNav = ({ activeCity, setMobileMenuOpen }) => {
  return (
    <nav className="md:hidden bg-white border-t pt-4 pb-6 px-4">
      <div className="flex flex-col space-y-4">
        <Link
          to="/"
          className={`py-2 px-3 rounded-lg font-medium ${
            activeCity === 'home'
              ? 'bg-amber-50 text-amber-600'
              : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          Accueil
        </Link>
        
        {citiesData.map((city) => (
          <Link
            key={city.id}
            to={`/city/${city.id}`}
            className={`py-2 px-3 rounded-lg font-medium ${
              activeCity === city.id
                ? 'bg-amber-50 text-amber-600'
                : 'text-gray-600 hover:bg-amber-50 hover:text-amber-600'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {city.name}
          </Link>
        ))}
        
        <Link
          to="/contact"
          className="py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors text-center mt-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;