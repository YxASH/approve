// src/pages/theory/L1Theory.js
import React from 'react';
import { Link } from 'react-router-dom';

const L1Theory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mt-10">Lesson 1: Basic Road Safety 🚧</h1>
      <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          Before you hit the road, knowing the essentials of road safety is a must! 🛣️ Following basic rules can save lives 
          and make the streets safer for everyone. Here are some key tips:
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li><strong>⚠️ Always Be Aware:</strong> Keep an eye on pedestrians, other vehicles, and road signs. Stay alert to avoid accidents!</li>
          <li><strong>🚶‍♂️ Yield to Pedestrians:</strong> Pedestrians always have the right of way at crosswalks. Stop and let them cross safely.</li>
          <li><strong>📱 No Distractions:</strong> Avoid using your phone or other distractions while riding or driving. Focus on the road ahead!</li>
          <li><strong>🛑 Obey Traffic Signs:</strong> Traffic signs and signals are there to keep the road safe. Follow them to avoid confusion and collisions.</li>
        </ul>
        <p className="mt-4 text-lg text-gray-700">
          Pro Tip: Wear your helmet 🪖 and protective gear at all times! It may seem basic, but it can be a life-saver in case of an accident.
        </p>
        <p className="mt-6 text-gray-700">
          Road safety starts with you! By following these simple guidelines, you can ensure a safe and smooth journey, every time 🚗🏍️.
        </p>
      </div>
      <Link to="/quiz/Lesson1Quiz">
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default L1Theory;
