import React from 'react';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <p className="text-gray-600">Shubham Bendre</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <p className="text-gray-600">bendre@example.com</p>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Training Progress:</label>
            <p className="text-gray-600">Beginner - Day 1 Completed</p>
          </div>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
