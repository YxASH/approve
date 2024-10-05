import React from 'react';
import { useLocation } from 'react-router-dom';

const JourneySummary = () => {
    const location = useLocation();
    const { totalDistance } = location.state || { totalDistance: 0 }; // Get the total distance from location state

    return (
        <div style={{ padding: '20px' }}>
            <h2>Journey Summary</h2>
            <p>Thank you for using our app!</p>
            <p>Total Distance Traveled: {totalDistance} km</p>
        </div>
    );
};

export default JourneySummary;
