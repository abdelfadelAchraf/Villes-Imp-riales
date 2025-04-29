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
        { id: 1, src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Kutubiyya_Mosque%2C_2010.jpg/500px-Kutubiyya_Mosque%2C_2010.jpg", alt: "Koutoubia à Marrakech", city: "Marrakech" },
        { id: 2, src: "https://th.bing.com/th/id/R.c23d162edd21b80e5580f8fa81f96c2c?rik=9QG8xSQDZidBuw&pid=ImgRaw&r=0", alt: "Bab Mansour à Meknès", city: "Meknès" },
        { id: 3, src: "https://th.bing.com/th/id/R.2080513f73045749f4812222d2f62fd9?rik=JYudg0Xr5aPCYQ&riu=http%3a%2f%2fdiscoverymorocco.net%2fwp-content%2fuploads%2f2018%2f04%2fekpJwbR-1024x790.jpg&ehk=eJi3QFGf0%2bTzieFzBzY7wWhbW5ECIYnsyLjKwdaHMOs%3d&risl=&pid=ImgRaw&r=0", alt: "Tour Hassan à Rabat", city: "Rabat" },
        { id: 4, src: "https://th.bing.com/th/id/R.464b26ae1a99b8d697392cbc83d512b2?rik=pprVmV1PXy2hDw&pid=ImgRaw&r=0", alt: "Médersa Bou Inania à Fès", city: "Fès" },
        { id: 5, src: "https://www.foundouk.com/bases/actualite_image/grande/90/tombeaux-saadiens1.jpg", alt: "Tombeaux Saadiens à Marrakech", city: "Marrakech" },
        { id: 6, src: "https://th.bing.com/th/id/OIP.aveYDSLbF8tTdqKKXxMp2QHaE8?rs=1&pid=ImgDetMain", alt: "Kasbah des Oudayas à Rabat", city: "Rabat" }
      ]
    },
    {
      name: "Médinas et souks",
      images: [
        { id: 7, src: "https://media.routard.com/image/65/7/photo.1500657.w630.jpg", alt: "Souk des teinturiers à Marrakech", city: "Marrakech" },
        { id: 8, src: "https://th.bing.com/th/id/OIP.ipRO2xifc6A8bYbTmreuYwHaE8?rs=1&pid=ImgDetMain", alt: "Ruelle dans la médina de Fès", city: "Fès" },
        { id: 9, src: "https://th.bing.com/th/id/OIP.VuLMbSQC1DFf73ynASnyuwHaE7?rs=1&pid=ImgDetMain", alt: "Artisanat dans les souks de Meknès", city: "Meknès" },
        { id: 10, src: "https://www.hotel-meknes.net/wp-content/uploads/2011/11/place2.jpg", alt: "Place El Hedim à Meknès", city: "Meknès" },
        { id: 11, src: "https://th.bing.com/th/id/OIP.FXblSsyACcD0Yw_kBQuCdgHaE8?rs=1&pid=ImgDetMain", alt: "Épices au marché de Rabat", city: "Rabat" },
        { id: 12, src: "https://th.bing.com/th/id/OIP.2F5j5E6Y7uzja8lhaBtrIgHaEV?rs=1&pid=ImgDetMain", alt: "Tanneries de Fès", city: "Fès" }
      ]
    },
    {
      name: "Architecture",
      images: [
        { id: 13, src: "https://th.bing.com/th/id/OIP.hcD9ktLYEgwlQIRu8M5f4QHaFj?rs=1&pid=ImgDetMain", alt: "Porte ornée à Fès", city: "Fès" },
        { id: 14, src: "https://th.bing.com/th/id/OIP.YNc4m7AaweeTZYSHyghexgHaE8?rs=1&pid=ImgDetMain", alt: "Mosaïques au Palais Bahia", city: "Marrakech" },
        { id: 15, src: "https://th.bing.com/th/id/OIP.9lC-nu21uyQQzHtf9w7xbQHaE8?rs=1&pid=ImgDetMain", alt: "Plafond sculpté à Meknès", city: "Meknès" },
        { id: 16, src: "https://th.bing.com/th/id/OIP.6DL1mmkQ41kUVCjlmVuLNgHaFP?rs=1&pid=ImgDetMain", alt: "Fontaine traditionnelle à Rabat", city: "Rabat" },
        { id: 17, src: "https://th.bing.com/th/id/R.013a7d85bdf31cd5ad2074142e8c5383?rik=iKDqvSmU%2bc%2b97w&pid=ImgRaw&r=0", alt: "Architecture andalouse à Fès", city: "Fès" },
        { id: 18, src: "https://th.bing.com/th/id/OIP.nHw4jfkInBzEWa-Nlv01QgHaO7?rs=1&pid=ImgDetMain", alt: "Détail architectural à Marrakech", city: "Marrakech" }
      ]
    },
    {
      name: "Jardins et nature",
      images: [
        { id: 19, src: "https://th.bing.com/th/id/R.9f7118310a1a6afe3ef280f5d80e333d?rik=nT6jVaxEYYpx%2fg&pid=ImgRaw&r=0", alt: "Jardins Majorelle à Marrakech", city: "Marrakech" },
        { id: 20, src: "https://thumbs.dreamstime.com/b/vue-%C3%A9poustouflante-sur-la-tour-du-mus%C3%A9e-dans-les-jardins-andalous-ancienne-pr%C3%A8s-de-kasbah-des-oudayas-%C3%A0-rabat-maroc-afrique-175515036.jpg", alt: "Jardins andalous à Rabat", city: "Rabat" },
        { id: 21, src: "https://th.bing.com/th/id/R.b70bb4e9d483ac17b677252635cfa72a?rik=vn0IS1bSXeFL5g&pid=ImgRaw&r=0", alt: "Jardin Jnan Sbil à Fès", city: "Fès" },
        { id: 22, src: "https://th.bing.com/th/id/R.86c94b4634b58b91a82f4c6dc6fc0b05?rik=hHpLjrRe9Bbz%2fQ&riu=http%3a%2f%2fwww.balthazartours.com%2fwp-content%2fuploads%2f2016%2f01%2fBab-Moulay-Ismail-Meknes-e1452742543279.jpg&ehk=c9AHYftn%2bdeRTOOVPzI%2f%2bkubAA2tWfK4VGHpmY65uX8%3d&risl=&pid=ImgRaw&r=0", alt: "Paysage autour de Meknès", city: "Meknès" },
        { id: 23, src: "https://aujourdhui.ma/wp-content/uploads/2016/02/1287059395-1.jpg", alt: "Oliveraie près de Meknès", city: "Meknès" },
        { id: 24, src: "https://th.bing.com/th/id/OIP.LIvqUG002cuV6I0i7--gCQHaE6?rs=1&pid=ImgDetMain", alt: "Palmeraie de Marrakech", city: "Marrakech" }
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