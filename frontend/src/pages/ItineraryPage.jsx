import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItineraryPage = () => {
  // Données de l'itinéraire (normalement, vous les récupéreriez depuis une API ou un context)
  const itineraryDetails = {
    title: "Quatre Villes Impériales du Maroc",
    days: 10,
    nights: 9,
    cities: [
      {
        name: "Marrakech",
        days: 3,
        highlights: ["Place Jemaa el-Fna", "Jardins Majorelle", "Palais Bahia"]
      },
      {
        name: "Fès",
        days: 3,
        highlights: ["Médina de Fès", "Université Al Quaraouiyine", "Tanneries Chouara"]
      },
      {
        name: "Meknès",
        days: 2,
        highlights: ["Bab Mansour", "Mausolée Moulay Ismail", "Place El Hedim"]
      },
      {
        name: "Rabat",
        days: 2,
        highlights: ["Tour Hassan", "Kasbah des Oudayas", "Chellah"]
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="flex items-center text-blue-600 mb-6 hover:text-blue-800">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Retour aux circuits
      </Link>
      
      <h1 className="text-3xl font-bold text-orange-500 mb-2">
        {itineraryDetails.title}
      </h1>
      
      <div className="mb-8 text-gray-700">
        <p className="text-lg font-semibold">
          {itineraryDetails.days} jours / {itineraryDetails.nights} nuits pour découvrir les quatre villes impériales
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Aperçu de l'itinéraire</h2>
        <div className="space-y-8">
          {itineraryDetails.cities.map((city, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">{city.name}</h3>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {city.days} {city.days > 1 ? 'jours' : 'jour'}
                </span>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Points forts:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {city.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-600">{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Informations pratiques</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Départs toute l'année</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>Petit groupe (12 personnes max)</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            <span>Transport privé inclus</span>
          </div>
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-200">
          Réserver ce circuit
        </button>
      </div>
    </div>
  );
};

export default ItineraryPage;