import React from 'react';
import { useNavigate } from 'react-router-dom';

function OpeningPage() {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/profile'); // Redirects to the Profile page
  };

  const handleFindCampgrounds = () => {
    navigate('/HomePage'); // Redirects to the existing campground listing page
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="p-6 bg-transparent text-white fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Training Arc</div>
          <ul className="flex space-x-6">
            <li><a href="/leaderboard" className="hover:text-gray-300">Leaderboard</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
            <li><a href="/login" className="hover:text-gray-300">Login</a></li>
            <li><a href="/signup" className="hover:text-gray-300">SignUp</a></li>
            <li>
              <button 
                onClick={handleProfile}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                Profile
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center bg-gray-900 text-white p-12">
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-5xl font-extrabold mb-6">
              We will help you to learn the ways of roads
            </h1>
            <p className="text-lg mb-8">
              Learn to drive through and deliver the food
            </p>
            <button 
              onClick={handleFindCampgrounds}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg">
              Start your arc
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div 
          className="flex-1 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Empty div for background image */}
        </div>
      </div>
    </div>
  );
}

export default OpeningPage;
