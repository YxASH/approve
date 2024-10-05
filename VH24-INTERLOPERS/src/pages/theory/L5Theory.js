// src/pages/theory/L5Theory.js
import React from 'react';
import { Link } from 'react-router-dom';

const L5Theory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mt-10">Lesson 5: Navigating Urban Areas 🏙️</h1>
      <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          Delivering in the city? Navigating through bustling urban streets can be tricky 🚗🚕, but with the right strategies, you’ll zip 
          through like a pro 🚴‍♂️! Here’s what you need to know about urban driving:
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li><strong>🚦 Traffic Signals and Signs:</strong> Cities are full of signals and signs! Pay close attention to them, as they change frequently and can keep you safe.</li>
          <li><strong>🚧 Construction Zones:</strong> Urban areas are often under construction 👷. Slow down and be extra cautious when navigating around barriers and workers.</li>
          <li><strong>🚶 Pedestrian Awareness:</strong> Pedestrians are everywhere in cities 👫. Always yield at crosswalks and watch for jaywalkers who might not be paying attention.</li>
          <li><strong>📱 Distraction-Free Driving:</strong> Urban areas can be overwhelming, so minimize distractions like mobile phones and focus on the road 📵.</li>
        </ul>
        <p className="mt-4 text-lg text-gray-700">
          Pro Tip: Use GPS tools 📍 to plan your routes in advance, but stay flexible! Urban traffic can change quickly, and being adaptable will make your deliveries smoother.
        </p>
        <p className="mt-6 text-gray-700">
          The city may be busy and chaotic, but with practice and patience, you’ll navigate it with confidence 🚴‍♂️💨. Safe deliveries ahead!
        </p>
      </div>
      <Link to="/quiz/Lesson5Quiz">
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default L5Theory;
