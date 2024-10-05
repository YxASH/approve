// src/pages/quiz/Lesson5Quiz.js
import React, { useState } from 'react';

const Lesson5Quiz = () => {
  const questions = [
    {
      question: "What is the best practice when riding in a busy urban area?",
      options: [
        "Weave between cars",
        "Ride on the sidewalk",
        "Stay in your lane and be visible", // Correct answer
        "Ignore traffic signals"
      ],
      answer: 2 // Index of the correct answer
    },
    {
      question: "When should you use hand signals?",
      options: [
        "Only when you feel like it",
        "When turning or changing lanes", // Correct answer
        "When riding with friends",
        "To communicate with pedestrians"
      ],
      answer: 1
    },
    {
      question: "What should you do when approaching a roundabout?",
      options: [
        "Speed up to enter quickly",
        "Yield to traffic already in the roundabout", // Correct answer
        "Ignore any signs",
        "Stop before entering"
      ],
      answer: 1
    },
    {
      question: "How can you ensure you're visible to drivers?",
      options: [
        "Wear dark clothing",
        "Use reflectors and lights", // Correct answer
        "Ride in the middle of the road",
        "Avoid making eye contact"
      ],
      answer: 1
    },
    {
      question: "What is a common hazard in urban riding?",
      options: [
        "Friendly pedestrians",
        "Open parking doors", // Correct answer
        "Clear roads",
        "Low-speed vehicles"
      ],
      answer: 1
    }
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (questionIndex, optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const calculatedScore = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0);
    setScore(calculatedScore);
    setIsQuizCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-blue-800 mt-10">Lesson 5 Quiz: Navigating Urban Areas 🚴‍♂️🌆</h1>

      <div className="mt-6 w-full max-w-2xl">
        {!isQuizCompleted ? (
          <>
            {questions.map((question, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-4">
                <h2 className="text-xl font-semibold">{question.question}</h2>
                <div className="mt-4">
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={`q${index}option${optionIndex}`}
                        name={`q${index}`}
                        value={optionIndex}
                        checked={userAnswers[index] === optionIndex}
                        onChange={() => handleOptionChange(index, optionIndex)}
                        className="mr-2"
                      />
                      <label htmlFor={`q${index}option${optionIndex}`} className="text-gray-700">{option}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Submit Quiz
            </button>
          </>
        ) : (
          <div className="text-center">
            <p className="text-xl text-green-600 font-semibold mt-4">
              Quiz Submitted Successfully! 🎉
            </p>
            <p className="text-xl mt-2">Your score: {score}/{questions.length} — You earned {score * 5} XP! 💪</p>

            <a href="https://map-h9f1.onrender.com" target="_blank" rel="noopener noreferrer">
              <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                Accept the Challenge 🚴‍♂️
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson5Quiz;
