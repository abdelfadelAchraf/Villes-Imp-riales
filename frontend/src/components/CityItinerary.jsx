import React, { useState, useRef, useEffect } from 'react';
import { cityData } from '../assets/constants';



const CityItinerary = ({ cityName }) => {
  const normalizedCityName = cityName.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
  
  let cityKey = Object.keys(cityData).find(key => {
    const normalizedKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    return normalizedKey.includes(normalizedCityName) || normalizedCityName.includes(normalizedKey);
  });
  
  // Default to first city if no match found
  if (!cityKey) {
    cityKey = Object.keys(cityData)[0];
  }
  
  const currentCity = cityData[cityKey];
  const places = currentCity.places;

  const [selectedPlace, setSelectedPlace] = useState(null);
  const infoPanel = useRef(null);

  // Function to calculate line coordinates between points
  const getLineCoordinates = (p1, p2) => {
    return {
      x1: p1.position.x + "%",
      y1: p1.position.y + "%",
      x2: p2.position.x + "%",
      y2: p2.position.y + "%"
    };
  };

  // Function to render the connection lines
  const renderConnections = () => {
    const lines = [];
    places.forEach(place => {
      place.connections.forEach(connectedId => {
        const connectedPlace = places.find(p => p.id === connectedId);
        if (connectedPlace && place.id < connectedId) {
          const coords = getLineCoordinates(place, connectedPlace);
          lines.push(
            <line
              key={`line-${place.id}-${connectedId}`}
              x1={coords.x1}
              y1={coords.y1}
              x2={coords.x2}
              y2={coords.y2}
              stroke="#F59E0B" 
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          );
        }
      });
    });
    return lines;
  };

  // Handle click on a place
  const handlePlaceClick = (placeId) => {
    // Toggle selection if clicking the already selected place
    if (placeId === selectedPlace) {
      setSelectedPlace(null);
    } else {
      setSelectedPlace(placeId);
      
      // We use setTimeout to allow the info panel to render before scrolling
      setTimeout(() => {
        if (infoPanel.current) {
          infoPanel.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
          });
        }
      }, 100);
    }
  };

  // Reset selected place when city changes
  useEffect(() => {
    setSelectedPlace(null);
  }, [cityName]);

  return (
    <div className="bg-amber-50 rounded-lg p-6 border border-amber-100 mb-10">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Sites à Découvrir à {currentCity.name}</h2>

      <div className="relative h-96 mb-8">
        {/* SVG container for the points and connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
          {/* Draw the connecting lines first so they appear behind the points */}
          {renderConnections()}
        </svg>

        {/* Points/Places */}
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          {places.map((place) => (
            <div
              key={place.id}
              className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2`}
              style={{ left: place.position.x + "%", top: place.position.y + "%" }}
              onClick={() => handlePlaceClick(place.id)}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all duration-200
                ${place.id === selectedPlace ? 'bg-amber-600 text-white scale-110' : 'bg-white text-amber-600 border-2 border-amber-600 hover:bg-amber-100'}`}>
                <span className="font-bold">{place.id}</span>
              </div>
              <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-white text-amber-800 text-xs font-medium rounded shadow-sm whitespace-nowrap transition-opacity duration-200 ${selectedPlace === place.id ? 'opacity-0' : 'opacity-100'}`}>
                {place.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information panel for selected place */}
      {selectedPlace && (
        <div 
          ref={infoPanel}
          className="bg-white rounded-lg p-6 shadow-md border border-amber-100 animate-fadeIn"
          id={`info-place-${selectedPlace}`}
        >
          {places.filter(place => place.id === selectedPlace).map(place => (
            <div key={place.id} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-48 object-cover rounded-lg shadow-sm" 
                />
              </div>
              <div className="md:col-span-2 mt-4 md:mt-0">
                <h3 className="text-4xl font-bold text-gray-800">{place.name}</h3>
                <p className="text-gray-700 my-2">{place.description}</p>
                <p className="text-gray-600 my-2">{place.culturalSignificance}</p>
                <div className="mt-4">
                  <h4 className="font-semibold text-amber-800">Personnalités liées:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {place.famousPeople.map((person, idx) => (
                      <li key={idx}>{person}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityItinerary;