import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/leaderboard');
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      setLeaderboardData(data);
  
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };
  

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-blue-800 mt-10">Leaderboard 🏆</h1>

      <div className="mt-6 w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4 border">Rank</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Time</th>
              <th className="py-2 px-4 border">Efficiency</th>
              <th className="py-2 px-4 border">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((player) => (
              <tr key={player.rank} className="hover:bg-blue-100">
                <td className="py-2 px-4 border">{player.rank}</td>
                <td className="py-2 px-4 border">{player.name}</td>
                <td className="py-2 px-4 border">{player.time}</td>
                <td className="py-2 px-4 border">{player.efficiency}</td>
                <td className="py-2 px-4 border">{player.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
