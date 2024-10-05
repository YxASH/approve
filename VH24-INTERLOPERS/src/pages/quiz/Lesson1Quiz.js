import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Lesson1Quiz = () => {
  const questions = [
    {
      question: "What should you do when approaching a pedestrian crossing?",
      options: [
        "Speed up and cross quickly",
        "Stop and yield to pedestrians", // Correct answer
        "Ignore the crossing",
        "Honk your horn to alert others"
      ],
      answer: 1 // Index of the correct answer
    },
    {
      question: "What does a red traffic light mean?",
      options: [
        "Go",
        "Stop", // Correct answer
        "Yield",
        "Proceed with caution"
      ],
      answer: 1
    },
    {
      question: "What should you do if your vehicle starts skidding?",
      options: [
        "Brake hard",
        "Steer in the direction of the skid", // Correct answer
        "Turn off the engine",
        "Accelerate"
      ],
      answer: 1
    },
    {
      question: "How far should you stay behind a motorcycle?",
      options: [
        "1 car length",
        "2 car lengths", // Correct answer
        "3 car lengths",
        "As far as possible"
      ],
      answer: 1
    },
    {
      question: "What is the purpose of traffic signs?",
      options: [
        "To confuse drivers",
        "To provide instructions and information", // Correct answer
        "To decorate the streets",
        "To increase traffic"
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
      <h1 className="text-5xl font-bold text-blue-800 mt-10">Lesson 1 Quiz</h1>

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


            <Link to="/map">
    <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
      Accept the Challenge 🚴‍♂️
    </button>
  </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lesson1Quiz;
