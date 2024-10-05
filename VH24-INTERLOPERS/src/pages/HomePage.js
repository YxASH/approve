// src/pages/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const lessons = [
    {
      title: "Lesson 1: Basic Road Safety",
      theory: "Learn about basic road safety rules, traffic signs, and riding precautions.",
      challengeLink: "/theory/L1Theory" // Link to Lesson 1 theory page
    },
    {
      title: "Lesson 2: Understanding Traffic Signals",
      theory: "Explore the meanings of traffic signals and how to respond to them correctly.",
      challengeLink: "/theory/L2Theory" // Link to Lesson 2 theory page
    },
    {
      title: "Lesson 3: Safe Riding Techniques",
      theory: "Learn about essential riding techniques for a safe delivery experience.",
      challengeLink: "/theory/L3Theory" // Link to Lesson 3 theory page
    },
    {
      title: "Lesson 4: Dealing with Adverse Weather",
      theory: "Understand how to handle riding in different weather conditions safely.",
      challengeLink: "/theory/L4Theory" // Link to Lesson 4 theory page
    },
    {
      title: "Lesson 5: Navigating Urban Areas",
      theory: "Get tips on navigating through urban areas effectively and safely.",
      challengeLink: "/theory/L5Theory" // Link to Lesson 5 theory page
    },
    {
      title: "Lesson 6: Handling Delivery Challenges",
      theory: "Learn strategies for overcoming common delivery challenges.",
      challengeLink: "/theory/L6Theory" // Link to Lesson 6 theory page
    },
  ];

  const [completedLessons, setCompletedLessons] = useState([]);

  const handleQuizComplete = (lessonIndex) => {
    setCompletedLessons([...completedLessons, lessonIndex]);
    // Optionally, you can display a message indicating that the quiz is completed
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-blue-600 mt-10">Delivery Training Curriculum</h1>
      <p className="text-xl text-gray-800 mt-4 max-w-2xl text-center">
        Complete each lesson, quiz, and challenge to master delivery skills!
      </p>

      <div className="mt-12 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {lessons.map((lesson, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-700">{lesson.title}</h2>
            <p className="text-gray-600 mt-3">
              <strong>Overview:</strong> {lesson.theory}
            </p>

            <div className="mt-5">
              <Link to={lesson.challengeLink}>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300">
                  Learn
                </button>
              </Link>
            </div>

            {completedLessons.includes(index) && (
              <p className="mt-5 text-green-600 font-semibold">
                Quiz Completed ✅
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
