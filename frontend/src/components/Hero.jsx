import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Découverte des Villes Impériales du Maroc</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Un voyage à travers l'histoire et la culture marocaine</p>
      </div>

      {/* Hero Image avec overlay géométrique marocain */}
      <div className="relative rounded-xl overflow-hidden h-96 mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-emerald-900/70 z-10"></div>
        <div className="absolute inset-0 opacity-20 z-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDBMNTYgMTAwTDU2IDAgTDI4IDBMMjggMzRMMjggNjZaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcGF0aD4KPHBhdGggZD0iTTI4IDBMMjggMzRMMCA1MEwwIDg0TDI4IDEwMEw1NiA4NEw1NiA1MEwyOCAzNFoiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        <img 
          src="https://placehold.co/600x400" 
          alt="Villes Impériales du Maroc" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center text-white p-6 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fès, Meknès, Rabat, Marrakech</h2>
            <p className="text-lg md:text-xl">Explorez les joyaux historiques et culturels du royaume chérifien</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;