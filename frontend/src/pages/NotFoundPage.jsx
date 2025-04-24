import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-amber-600">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800 ">
          Page Non Trouvée
        </h2>
        <p className="text-gray-600 mt-2 mb-6">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow"
          >
            <Home size={18} />
            Retour à l'accueil
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg shadow"
          >
            <MapPin size={18} />
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
