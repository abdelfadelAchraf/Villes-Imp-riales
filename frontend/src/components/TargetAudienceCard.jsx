// src/components/UI/TargetAudienceCard.js
import React from 'react';
import { Bookmark } from 'lucide-react';

const TargetAudienceCard = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border-t-4 border-emerald-600 hover:shadow-xl transition-shadow">
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Pour Qui?</h3>
        <ul className="space-y-3 mb-4">
          <li className="flex items-start">
            <div className="bg-emerald-100 p-1 rounded mr-3 mt-1">
              <Bookmark size={14} className="text-emerald-600" />
            </div>
            <div>
              <span className="font-medium text-gray-800">Amateurs d'histoire</span>
              <p className="text-sm text-gray-600">Passionnés par les civilisations anciennes et le patrimoine culturel</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-emerald-100 p-1 rounded mr-3 mt-1">
              <Bookmark size={14} className="text-emerald-600" />
            </div>
            <div>
              <span className="font-medium text-gray-800">Photographes</span>
              <p className="text-sm text-gray-600">À la recherche de paysages urbains uniques et d'architecture traditionnelle</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-emerald-100 p-1 rounded mr-3 mt-1">
              <Bookmark size={14} className="text-emerald-600" />
            </div>
            <div>
              <span className="font-medium text-gray-800">Groupes culturels</span>
              <p className="text-sm text-gray-600">Écoles, universités et associations culturelles</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TargetAudienceCard;