import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pourriez implémenter l'envoi du formulaire
    console.log('Form data submitted:', formData);
    alert('Merci pour votre message ! Nous vous contacterons bientôt.');
    // Réinitialiser le formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="flex items-center text-amber-600 hover:text-amber-800 mb-6">
        <ChevronRight size={16} className="transform rotate-180 mr-1" />
        Retour à l'accueil
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contactez-Nous</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nous sommes là pour répondre à toutes vos questions concernant nos circuits dans les villes impériales
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="col-span-1 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos Coordonnées</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <MapPin className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Adresse</h3>
                <p className="text-gray-600">123 Avenue Mohammed V, Rabat, Maroc</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Mail className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">info@villesimperiales.ma</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <Phone className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Téléphone</h3>
                <p className="text-gray-600">+212 5XX XX XX XX</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-bold text-gray-800 mb-3">Heures d'ouverture</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Lundi - Vendredi:</span>
                <span className="text-gray-800 font-medium">9h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Samedi:</span>
                <span className="text-gray-800 font-medium">9h00 - 13h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dimanche:</span>
                <span className="text-gray-800 font-medium">Fermé</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Envoyez-nous un message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
      
      <div className="rounded-lg overflow-hidden h-96 mb-16">
        {/* Placeholder pour une carte Google Maps */}
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500 text-lg">Carte Google Maps serait affichée ici</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;