// src/pages/quiz/Lesson4Quiz.js
import React, { useState } from 'react';

const Lesson4Quiz = () => {
  const questions = [
    {
      question: "What should you do when riding in heavy rain?",
      options: [
        "Accelerate to get through it quickly",
        "Slow down and increase following distance", // Correct answer
        "Ignore it and ride normally",
        "Find a nearby shelter and wait"
      ],
      answer: 1 // Index of the correct answer
    },
    {
      question: "How can you improve visibility in foggy conditions?",
      options: [
        "Use high beams",
        "Use low beams and fog lights", // Correct answer
        "Drive with your headlights off",
        "Increase your speed to clear the fog"
      ],
      answer: 1
    },
    {
      question: "What should you check before riding in adverse weather?",
      options: [
        "Just the bike's fuel level",
        "Tire pressure and tread depth", // Correct answer
        "Nothing, just ride",
        "The weather forecast only"
      ],
      answer: 1
    },
    {
      question: "If you encounter icy roads, what should you do?",
      options: [
        "Brake hard to slow down",
        "Steer gently and avoid sudden movements", // Correct answer
        "Accelerate to gain traction",
        "Ignore the ice and ride normally"
      ],
      answer: 1
    },
    {
      question: "What is a good practice during strong winds?",
      options: [
        "Lean into the wind and maintain speed", 
        "Avoid riding if possible", // Correct answer
        "Ride faster to counter the wind",
        "Hold the handlebars tightly and ignore it"
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
      <h1 className="text-5xl font-bold text-blue-800 mt-10">Lesson 4 Quiz: Dealing with Adverse Weather 🌧️❄️</h1>

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

export default Lesson4Quiz;
