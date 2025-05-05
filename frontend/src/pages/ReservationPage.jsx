import React, { useState } from 'react';

const ReservationPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-600 mb-6">Réserver un Circuit</h1>

      {submitted ? (
        <p className="text-green-600 text-lg">Merci ! Votre réservation a été envoyée.</p>
      ) : (
        <form
          action="https://formsubmit.co/zakariaennaqui.pro@gmail.com"  // remplace par ton email
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-6"
        >
          {/* empêche l’antispam de Formsubmit */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:5173/reservation" />

          <input name="Nom" type="text" placeholder="Votre nom" required className="w-full p-3 border rounded" />
          <input name="Email" type="email" placeholder="Votre email" required className="w-full p-3 border rounded" />
          <input name="Téléphone" type="tel" placeholder="Votre téléphone" required className="w-full p-3 border rounded" />
          <select name="Ville choisie" required className="w-full p-3 border rounded">
            <option value="">Choisissez une ville</option>
            <option value="Fès">Fès</option>
            <option value="Meknès">Meknès</option>
            <option value="Rabat">Rabat</option>
            <option value="Marrakech">Marrakech</option>
          </select>
          <input name="Date de départ" type="date" required className="w-full p-3 border rounded" />
          <textarea name="Message" rows="4" placeholder="Message (optionnel)" className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded shadow">
            Envoyer la réservation
          </button>
        </form>
      )}
    </div>
  );
};

export default ReservationPage;
