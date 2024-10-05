import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Your original homepage with the map
import OpeningPage from './pages/OpeningPage'; // New opening page
import Leaderboard from './pages/Leaderboard'; // New opening page
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage'; // Ensure correct import
import SignupPage from './pages/SignupPage'; // Ensure correct import
import Profile from './pages/Profile'; // Ensure correct import
import Lesson1Quiz from './pages/quiz/Lesson1Quiz';
import Lesson2Quiz from './pages/quiz/Lesson2Quiz';
import Lesson3Quiz from './pages/quiz/Lesson3Quiz';
import Lesson4Quiz from './pages/quiz/Lesson4Quiz';
import Lesson5Quiz from './pages/quiz/Lesson5Quiz';
import Lesson6Quiz from './pages/quiz/Lesson6Quiz';
import L1Theory from './pages/theory/L1Theory';
import L2Theory from './pages/theory/L2Theory';
import L3Theory from './pages/theory/L3Theory';
import L4Theory from './pages/theory/L4Theory';
import L5Theory from './pages/theory/L5Theory';
import L6Theory from './pages/theory/L6Theory';
import TaskMap from './pages/TaskMap'
import JourneySummary from './pages/JourneySummary';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} /> {/* Default route */}
        <Route path="/HomePage" element={<HomePage />} /> {/* Redirects to the original functionality */}
        <Route path="/leaderboard" element={<Leaderboard />} />        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz/Lesson1Quiz" element={<Lesson1Quiz />} /> 
        <Route path="/quiz/Lesson2Quiz" element={<Lesson2Quiz />} />
        <Route path="/quiz/Lesson3Quiz" element={<Lesson3Quiz />} />
        <Route path="/quiz/Lesson4Quiz" element={<Lesson4Quiz />} />
        <Route path="/quiz/Lesson5Quiz" element={<Lesson5Quiz />} />
        <Route path="/quiz/Lesson6Quiz" element={<Lesson6Quiz />} />
        <Route path="/theory/L1Theory" element={<L1Theory />} />
        <Route path="/theory/L2Theory" element={<L2Theory />} />
        <Route path="/theory/L3Theory" element={<L3Theory />} />
        <Route path="/theory/L4Theory" element={<L4Theory />} />
        <Route path="/theory/L5Theory" element={<L5Theory />} />
        <Route path="/theory/L6Theory" element={<L6Theory />} />
        <Route path="/map" element={<TaskMap />} /> 
        <Route path="/journey-summary" element={<JourneySummary />} />
      </Routes>
    </Router>
  );
}

export default App;
