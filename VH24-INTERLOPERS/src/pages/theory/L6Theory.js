// src/pages/theory/L6Theory.js
import React from 'react';
import { Link } from 'react-router-dom';

const L6Theory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mt-10">Lesson 6: Handling Delivery Challenges 📦🚚</h1>
      <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          Every delivery can come with its own set of challenges 😅. From traffic jams to unexpected weather, being prepared 
          is key to overcoming these hurdles. Let’s explore some common delivery challenges and how to handle them:
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li><strong>🚦 Traffic Jams:</strong> Always plan your route in advance! Use apps to check traffic conditions and find the quickest detours.</li>
          <li><strong>🌧️ Bad Weather:</strong> Rain, snow, or fog? Slow down and adjust your driving style. Safety first! Wear proper gear to stay dry.</li>
          <li><strong>🕒 Time Constraints:</strong> Keep an eye on the clock! Prioritize deliveries based on urgency, and communicate with your customers if delays occur.</li>
          <li><strong>🔄 Wrong Addresses:</strong> Double-check delivery addresses before you leave. If you find a mistake, contact the customer for clarification.</li>
          <li><strong>🛑 Unforeseen Obstacles:</strong> Always stay alert for road closures, construction, or any hazards. Stay calm and find an alternate route.</li>
        </ul>
        <p className="mt-6 text-lg text-gray-700">
          By preparing for these challenges and staying calm under pressure, you can ensure that your deliveries are smooth and efficient! 
          Every delivery experience helps you become a better delivery person. 🚀
        </p>
      </div>
      <Link to="/quiz/Lesson6Quiz">
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default L6Theory;
