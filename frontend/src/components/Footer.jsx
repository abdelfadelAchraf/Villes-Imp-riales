import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-amber-600 pb-2">
              À propos de nous
            </h3>
            <p className="text-gray-300">
              Notre mission est de vous faire découvrir les richesses
              culturelles et historiques des villes impériales du Maroc à
              travers des expériences authentiques et inoubliables.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-amber-600 pb-2">
              Liens rapides
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/itineraire"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-amber-400"
                >
                  Circuit complet
                </Link>
              </li>

              <li>
                <Link
                  to="/hebergements"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-amber-400"
                >
                  Hébergements
                </Link>
              </li>
              <li>
                <Link to="/photos">
                  <button
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-gray-300 hover:text-amber-400"
                  >
                    Galerie photos
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-amber-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-amber-600 pb-2">
              Contact
            </h3>
            <p className="text-gray-300 mb-2">
              Email:{" "}
              <a
                href="mailto:info@villesimperiales.ma"
                className="underline hover:text-amber-400"
              >
                info@villesimperiales.ma
              </a>
            </p>

            <p className="text-gray-300 mb-2">
              Téléphone:{" "}
              <a
                href="tel:+212600000000"
                className="underline hover:text-amber-400"
              >
                +212 5XX XX XX XX
              </a>
            </p>

            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-amber-600 p-2 rounded transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-amber-600 p-2 rounded transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Villes Impériales du Maroc. Tous
          droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
