import React from 'react';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
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

          <form
            action="https://formsubmit.co/info@villesimperiales.ma"
            method="POST"
            className="space-y-6"
          >
            {/* Remplace "ton.email@exemple.com" par ton vrai email */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://tonsite.com/merci" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
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
      <iframe
  title="Carte Google Maps"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.695295423361!2d-6.832553984819771!3d34.02088208061116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c92c1234b3f%3A0x5c31db23e1240f79!2sAvenue%20Mohammed%20V%2C%20Rabat!5e0!3m2!1sfr!2sma!4v1612196085951!5m2!1sfr!2sma"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

      </div>
    </div>
  );
};

export default ContactPage;
