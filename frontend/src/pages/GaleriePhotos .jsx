import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';

const GaleriePhotos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Catégories de photos avec images (placeholders)
  const categories = [
    {
      name: "Monuments historiques",
      images: [
        { id: 1, src: "/api/placeholder/600/400", alt: "Koutoubia à Marrakech", city: "Marrakech" },
        { id: 2, src: "/api/placeholder/600/400", alt: "Bab Mansour à Meknès", city: "Meknès" },
        { id: 3, src: "/api/placeholder/600/400", alt: "Tour Hassan à Rabat", city: "Rabat" },
        { id: 4, src: "/api/placeholder/600/400", alt: "Médersa Bou Inania à Fès", city: "Fès" },
        { id: 5, src: "/api/placeholder/600/400", alt: "Tombeaux Saadiens à Marrakech", city: "Marrakech" },
        { id: 6, src: "/api/placeholder/600/400", alt: "Kasbah des Oudayas à Rabat", city: "Rabat" }
      ]
    },
    {
      name: "Médinas et souks",
      images: [
        { id: 7, src: "/api/placeholder/600/400", alt: "Souk des teinturiers à Marrakech", city: "Marrakech" },
        { id: 8, src: "/api/placeholder/600/400", alt: "Ruelle dans la médina de Fès", city: "Fès" },
        { id: 9, src: "/api/placeholder/600/400", alt: "Artisanat dans les souks de Meknès", city: "Meknès" },
        { id: 10, src: "/api/placeholder/600/400", alt: "Place El Hedim à Meknès", city: "Meknès" },
        { id: 11, src: "/api/placeholder/600/400", alt: "Épices au marché de Rabat", city: "Rabat" },
        { id: 12, src: "/api/placeholder/600/400", alt: "Tanneries de Fès", city: "Fès" }
      ]
    },
    {
      name: "Architecture",
      images: [
        { id: 13, src: "/api/placeholder/600/400", alt: "Porte ornée à Fès", city: "Fès" },
        { id: 14, src: "/api/placeholder/600/400", alt: "Mosaïques au Palais Bahia", city: "Marrakech" },
        { id: 15, src: "/api/placeholder/600/400", alt: "Plafond sculpté à Meknès", city: "Meknès" },
        { id: 16, src: "/api/placeholder/600/400", alt: "Fontaine traditionnelle à Rabat", city: "Rabat" },
        { id: 17, src: "/api/placeholder/600/400", alt: "Architecture andalouse à Fès", city: "Fès" },
        { id: 18, src: "/api/placeholder/600/400", alt: "Détail architectural à Marrakech", city: "Marrakech" }
      ]
    },
    {
      name: "Jardins et nature",
      images: [
        { id: 19, src: "/api/placeholder/600/400", alt: "Jardins Majorelle à Marrakech", city: "Marrakech" },
        { id: 20, src: "/api/placeholder/600/400", alt: "Jardins andalous à Rabat", city: "Rabat" },
        { id: 21, src: "/api/placeholder/600/400", alt: "Jardin Jnan Sbil à Fès", city: "Fès" },
        { id: 22, src: "/api/placeholder/600/400", alt: "Paysage autour de Meknès", city: "Meknès" },
        { id: 23, src: "/api/placeholder/600/400", alt: "Oliveraie près de Meknès", city: "Meknès" },
        { id: 24, src: "/api/placeholder/600/400", alt: "Palmeraie de Marrakech", city: "Marrakech" }
      ]
    }
  ];

  // Fonction pour ouvrir la modal avec l'image sélectionnée
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Empêcher le défilement du corps
  };

  // Fonction pour fermer la modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Permettre à nouveau le défilement
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link to="/" className="flex items-center text-blue-600 mb-6 hover:text-blue-800">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Retour à l'accueil
      </Link>
      
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-8">Galerie Photos</h1>
      
      <p className="text-gray-700 mb-8">
        Découvrez en images les merveilles des villes impériales du Maroc. Notre collection de photos 
        vous donne un aperçu des trésors architecturaux, paysages captivants et scènes de vie que vous 
        pourrez observer lors de votre voyage.
      </p>
      
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {category.images.map((image) => (
              <div 
                key={image.id} 
                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => openModal(image)}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                    <p className="text-orange-300 text-sm">{image.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Modal pour afficher l'image en grand */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white transition"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full max-h-[80vh] object-contain rounded"
            />
            <div className="bg-white p-4 rounded-b">
              <p className="font-medium text-gray-800">{selectedImage.alt}</p>
              <p className="text-orange-500">{selectedImage.city}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaleriePhotos;