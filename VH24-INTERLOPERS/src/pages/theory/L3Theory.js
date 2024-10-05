// src/pages/theory/L3Theory.js
import React from 'react';
import { Link } from 'react-router-dom';

const L3Theory = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-800 mt-10">Lesson 3: Safe Riding Techniques 🏍️</h1>
      <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl text-gray-700 leading-relaxed">
          Riding safely isn’t just about speed – it’s about control and awareness 🚴‍♂️. Whether you’re delivering on a bike, motorcycle, or 
          scooter, following these techniques will help you stay safe and deliver efficiently 🚀:
        </p>
        <ul className="mt-4 list-disc pl-5 text-gray-700">
          <li><strong>👀 Keep Your Eyes Moving:</strong> Don’t just focus straight ahead! Constantly scan your surroundings to spot pedestrians, 
          vehicles, and obstacles early.</li>
          <li><strong>🚗↔️ Maintain a Safe Distance:</strong> Keep a buffer zone between you and the vehicle in front of you to react in time 
          if they stop suddenly.</li>
          <li><strong>⚠️ Watch Out for Road Hazards:</strong> Potholes, wet roads, and debris can be tricky. Slow down and navigate them carefully 
          to avoid losing control.</li>
          <li><strong>✋ Use Hand Signals:</strong> Always signal before turning or stopping to let other drivers know your intentions. It’s 
          critical to avoid accidents!</li>
          <li><strong>🛡️ Gear Up for Safety:</strong> Always wear a helmet, gloves, and other protective gear. It’s better to be over-prepared 
          than under-protected!</li>
        </ul>
        <p className="mt-6 text-lg text-gray-700">
          Remember, a safe rider is a smart rider 🛡️. These simple habits will not only keep you safe but also improve your delivery performance!
        </p>
      </div>
      <Link to="/quiz/Lesson3Quiz">
        <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
          Start Quiz
        </button>
      </Link>
    </div>
  );
};

export default L3Theory;
