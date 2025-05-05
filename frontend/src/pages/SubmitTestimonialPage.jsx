import React, { useState } from 'react';

const SubmitTestimonialPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    testimonial: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour votre témoignage !");
    setFormData({ name: '', country: '', testimonial: '' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Partager votre témoignage</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Votre pays"
          value={formData.country}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="testimonial"
          rows="5"
          placeholder="Votre témoignage"
          value={formData.testimonial}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded"
        ></textarea>
        <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default SubmitTestimonialPage;
