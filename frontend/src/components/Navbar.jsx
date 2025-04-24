// src/components/layout/Header.js
import React, { useState } from 'react';
import { Map, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import citiesData from '../assets/constants';

const Navbar = ({ activeCity, setActiveCity }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDBMNTYgMTAwTDU2IDAgTDI4IDBMMjggMzRMMjggNjZaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPHBhdGggZD0iTTI4IDBMMjggMzRMMCA1MEwwIDg0TDI4IDEwMEw1NiA4NEw1NiA1MEwyOCAzNFoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <div className="bg-amber-600 text-white p-2 rounded-lg shadow-md mr-3">
            <Map size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Villes Impériales</h1>
            <p className="text-xs text-gray-500">Circuit Touristique du Maroc</p>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden bg-amber-50 p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/"
            className={`py-2 font-medium ${activeCity === 'home' ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
            onClick={() => setActiveCity('home')}
          >
            Accueil
          </Link>
          {citiesData.map((city) => (
            <Link 
              key={city.id}
              to={`/city/${city.id}`}
              className={`py-2 font-medium ${activeCity === city.id ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-600 hover:text-amber-600'}`}
              onClick={() => setActiveCity(city.id)}
            >
              {city.name}
            </Link>
          ))}
          <Link to='/contact'>
            <button className="py-2 px-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
              Contact
            </button>
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <MobileNav 
          activeCity={activeCity} 
          setActiveCity={setActiveCity} 
          setMobileMenuOpen={setMobileMenuOpen} 
        />
      )}
    </header>
  );
};

export default Navbar;