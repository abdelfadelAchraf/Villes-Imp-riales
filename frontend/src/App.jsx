import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";
import ContactPage from "./pages/ContactPage";
import ReservationPage from "./pages/ReservationPage";
import SubmitTestimonialPage from "./pages/SubmitTestimonialPage";
import FaqPage from "./pages/FaqPage";
import HebergementsPage from "./pages/HebergementsPage";

// Import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ItineraryPage from "./pages/ItineraryPage";
import GaleriePhotos from "./pages/GaleriePhotos ";

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
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/temoignage" element={<SubmitTestimonialPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/hebergements" element={<HebergementsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
