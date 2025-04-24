import React from 'react';
import {  Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import ContactPage from './pages/ContactPage';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
  return (
      <div >
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/city/:id" element={<CityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        <Footer />
      </div>
  );
};

export default App;