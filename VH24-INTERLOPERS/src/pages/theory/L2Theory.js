// src/pages/theory/L2Theory.js
import React from 'react';
import { Link } from 'react-router-dom';

const L2Theory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mt-10">Lesson 2: Understanding Traffic Signals 🚦</h1>
      <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          Traffic signals are like the language of the road 🛣️. Knowing how to "talk" to them is key to staying safe 
          and avoiding accidents. Here’s what they mean:
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li><strong>🟥 Red Light:</strong> This means STOP! 🛑 Whether you’re on a bike or in a car, it’s time to halt and wait patiently.</li>
          <li><strong>🟧 Yellow Light:</strong> Caution! ⚠️ It’s time to slow down, not speed up. Get ready to stop if the light turns red.</li>
          <li><strong>🟢 Green Light:</strong> Go! 🚦 But always make sure the intersection is clear before proceeding.</li>
        </ul>
        <p className="mt-4 text-lg text-gray-700">
          Pro Tip: Watch out for blinking yellow lights – they mean proceed with caution. And a blinking red light is like a stop sign – 
          come to a full stop before continuing!
        </p>
        <p className="mt-6 text-gray-700">
          Traffic signals might seem simple, but they can save lives and keep the roads running smoothly. So, next time you’re out there, make 
          sure to follow these rules! 🛑🟢🟡
        </p>
      </div>
      <Link to="/quiz/Lesson2Quiz">
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default L2Theory;
