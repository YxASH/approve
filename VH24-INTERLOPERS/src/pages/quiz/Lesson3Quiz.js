// src/pages/quiz/Lesson3Quiz.js
import React, { useState } from 'react';

const Lesson3Quiz = () => {
  const questions = [
    {
      question: "What should you always wear while riding?",
      options: [
        "Flip-flops",
        "A helmet", // Correct answer
        "A t-shirt",
        "Shorts"
      ],
      answer: 1 // Index of the correct answer
    },
    {
      question: "How should you position your hands on the handlebars?",
      options: [
        "One hand only",
        "Both hands firmly", // Correct answer
        "Hands off the handlebars",
        "One hand on the throttle"
      ],
      answer: 1
    },
    {
      question: "What should you do before changing lanes?",
      options: [
        "Check your mirrors and blind spots", // Correct answer
        "Speed up and cut in",
        "Signal without looking",
        "Change lanes immediately"
      ],
      answer: 0
    },
    {
      question: "How should you react to a pothole on the road?",
      options: [
        "Swerve suddenly",
        "Brake hard",
        "Maintain control and ride straight over it", // Correct answer
        "Ignore it"
      ],
      answer: 2
    },
    {
      question: "What is the best way to handle a skid?",
      options: [
        "Brake hard",
        "Steer in the direction of the skid", // Correct answer
        "Accelerate",
        "Turn off the engine"
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
      <h1 className="text-5xl font-bold text-blue-800 mt-10">Lesson 3 Quiz: Safe Riding Techniques 🚴‍♂️</h1>

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

export default Lesson3Quiz;
