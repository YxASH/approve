// src/pages/theory/L4Theory.js
import React from 'react';
import { Link } from 'react-router-dom';

const L4Theory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mt-10">Lesson 4: Dealing with Adverse Weather 🌧️🌨️</h1>
      <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          Bad weather can turn a routine delivery into a challenge 🌩️. Whether it's rain, fog, or snow, knowing how to navigate through
          adverse weather conditions is crucial to stay safe and complete your delivery 🚴‍♂️.
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li><strong>🌧️ Rainy Days:</strong> Slow down! Wet roads are slippery, so take it easy and brake earlier to avoid skidding. Don’t forget to wear waterproof gear! 🌂</li>
          <li><strong>🌨️ Snow & Ice:</strong> Reduce speed ❄️ and avoid sudden movements. Use gentle braking, and try to stick to well-plowed roads. Bundle up to stay warm!</li>
          <li><strong>🌫️ Foggy Conditions:</strong> Turn on your low-beam headlights 🔦 to see and be seen. Keep a safe distance from vehicles ahead of you, and use road markings to help navigate.</li>
          <li><strong>💨 Strong Winds:</strong> Keep both hands firmly on the handlebars or steering wheel. Be prepared for sudden gusts of wind that can push you off balance 🌬️.</li>
        </ul>
        <p className="mt-4 text-lg text-gray-700">
          Pro Tip: Always check the weather forecast before heading out. If it’s too dangerous, it’s okay to delay your delivery. Safety first! 🛡️
        </p>
        <p className="mt-6 text-gray-700">
          The weather might not always cooperate, but with the right preparation and caution, you’ll be ready to handle whatever comes your way! 🌪️🌤️
        </p>
      </div>
      <Link to="/quiz/Lesson4Quiz">
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default L4Theory;
