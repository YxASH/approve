// src/pages/quiz/Lesson6Quiz.js
import React, { useState } from 'react';

const Lesson6Quiz = () => {
  const questions = [
    {
      question: "What should you do if you encounter a traffic jam while delivering?",
      options: [
        "Panic and stop your delivery",
        "Stay calm and look for alternate routes", // Correct answer
        "Turn off your vehicle and wait",
        "Speed through the jam"
      ],
      answer: 1 // Index of the correct answer
    },
    {
      question: "How should you handle bad weather conditions?",
      options: [
        "Ignore it and drive as usual",
        "Adjust your driving style and slow down", // Correct answer
        "Speed up to get through quickly",
        "Avoid deliveries during bad weather"
      ],
      answer: 1
    },
    {
      question: "What is the best action when you receive a wrong address?",
      options: [
        "Continue to the address anyway",
        "Contact the customer for clarification", // Correct answer
        "Deliver to the nearest location",
        "Ignore the mistake"
      ],
      answer: 1
    },
    {
      question: "If you are running late for a delivery, what should you do?",
      options: [
        "Drive recklessly to save time",
        "Communicate with the customer about the delay", // Correct answer
        "Ignore the time and keep driving",
        "Cancel the delivery"
      ],
      answer: 1
    },
    {
      question: "How can you prepare for unforeseen obstacles on your delivery route?",
      options: [
        "Plan your route in advance and stay alert", // Correct answer
        "Drive without a plan",
        "Always choose the same route",
        "Rely on luck"
      ],
      answer: 0
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
      <h1 className="text-5xl font-bold text-blue-800 mt-10">Lesson 6 Quiz: Handling Delivery Challenges 📦🚚</h1>

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

export default Lesson6Quiz;
