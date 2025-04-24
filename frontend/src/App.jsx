import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import ContactPage from './pages/ContactPage';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';
import ItineraryPage from './pages/ItineraryPage';
import GaleriePhotos from './pages/GaleriePhotos ';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/iteniraire" element={<ItineraryPage />} />
        <Route path="/photos" element={<GaleriePhotos />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;