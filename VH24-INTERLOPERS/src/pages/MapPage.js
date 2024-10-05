import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Set default icon paths for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapPage = () => {
    const mapRef = useRef(null); // Reference to the map instance
    const userAMarkerRef = useRef(null); // Reference to user A's marker
    const userBMarkerRef = useRef(null); // Reference to user B's marker
    const destinationMarkerRef = useRef(null); // Reference to the destination marker
    const [distanceA, setDistanceA] = useState(null); // State for user A's distance to the destination
    const [distanceB, setDistanceB] = useState(null); // State for user B's distance to the destination
    const [totalDistanceA, setTotalDistanceA] = useState(0); // State for total distance traveled by A
    const [totalDistanceB, setTotalDistanceB] = useState(0); // State for total distance traveled by B
    const [timeA, setTimeA] = useState(0); // State for total time taken by A
    const [timeB, setTimeB] = useState(0); // State for total time taken by B
    const [lastTimeA, setLastTimeA] = useState(null); // Store last time for A
    const [lastTimeB, setLastTimeB] = useState(null); // Store last time for B
    const [winner, setWinner] = useState(''); // State for winner message
    const [showCongratsFrame, setShowCongratsFrame] = useState(false); // State for congrats frame visibility
    const [gameOver, setGameOver] = useState(false); // State to check if the game is over

    // Function to generate a nearby destination with a larger distance
    const generateLongerDestination = (latitude, longitude) => {
        const offset = 0.0035; // Increased offset for about 350 meters
        return {
            lat: latitude + (Math.random() < 0.5 ? offset : -offset), // Randomly adjust latitude
            lng: longitude + (Math.random() < 0.5 ? offset : -offset) // Randomly adjust longitude
        };
    };

    // Function to update distances and check if either user has reached the destination
    const updateDistances = (latA, lngA, latB, lngB) => {
        if (gameOver) return; // Exit if the game is already over

        const currentLatLngA = L.latLng(latA, lngA);
        const currentLatLngB = L.latLng(latB, lngB);
        const destinationLatLng = L.latLng(destinationMarkerRef.current.getLatLng());

        const calculatedDistanceA = currentLatLngA.distanceTo(destinationLatLng) / 1000; // Distance in kilometers
        const calculatedDistanceB = currentLatLngB.distanceTo(destinationLatLng) / 1000; // Distance in kilometers

        setDistanceA(calculatedDistanceA.toFixed(2)); // Update distance for A
        setDistanceB(calculatedDistanceB.toFixed(2)); // Update distance for B

        // Update total distance traveled and time taken for user A
        if (lastTimeA !== null) {
            const timeDiffA = (Date.now() - lastTimeA) / 1000; // Time in seconds
            setTimeA(prev => prev + timeDiffA);
            const distanceMovedA = currentLatLngA.distanceTo(L.latLng(userAMarkerRef.current.getLatLng())) / 1000; // Convert to kilometers
            setTotalDistanceA(prev => prev + distanceMovedA);
        }
        setLastTimeA(Date.now());

        // Update total distance traveled and time taken for user B
        if (lastTimeB !== null) {
            const timeDiffB = (Date.now() - lastTimeB) / 1000; // Time in seconds
            setTimeB(prev => prev + timeDiffB);
            const distanceMovedB = currentLatLngB.distanceTo(L.latLng(userBMarkerRef.current.getLatLng())) / 1000; // Convert to kilometers
            setTotalDistanceB(prev => prev + distanceMovedB);
        }
        setLastTimeB(Date.now());

        // Check if either user has reached the destination
        if (calculatedDistanceA <= 0.05) {
            setWinner("A wins!");
            setGameOver(true); // Set gameOver to true
            setShowCongratsFrame(true);
            setTimeout(() => {
                setShowCongratsFrame(false);
            }, 2000); // Remove the auto reset
        } else if (calculatedDistanceB <= 0.05) {
            setWinner("B wins!");
            setGameOver(true); // Set gameOver to true
            setShowCongratsFrame(true);
            setTimeout(() => {
                setShowCongratsFrame(false);
            }, 2000); // Remove the auto reset
        }
    };

    // Function to reset the game (manual reset if needed)
    const resetGame = () => {
        setWinner('');
        setDistanceA(null);
        setDistanceB(null);
        setTotalDistanceA(0); // Reset total distance for A
        setTotalDistanceB(0); // Reset total distance for B
        setTimeA(0); // Reset time for A
        setTimeB(0); // Reset time for B
        setGameOver(false); // Reset gameOver state
        setLastTimeA(null); // Reset last time for A
        setLastTimeB(null); // Reset last time for B

        // Optionally reset positions and markers
        if (userAMarkerRef.current) {
            userAMarkerRef.current.setLatLng([51.505, -0.09]); // Reset to initial position
        }
        if (userBMarkerRef.current) {
            userBMarkerRef.current.setLatLng([51.506, -0.091]); // Reset to initial position
        }
        if (destinationMarkerRef.current) {
            const newDestination = generateLongerDestination(51.505, -0.09); // Generate new destination
            destinationMarkerRef.current.setLatLng(newDestination);
        }
    };

    useEffect(() => {
        // Initialize the map only if it's not already initialized
        if (!mapRef.current) {
            mapRef.current = L.map('mapContainer').setView([51.505, -0.09], 15);

            // Add tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapRef.current);
        }

        // Function to get current location
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;

                        // Set the map view to the user's location
                        mapRef.current.setView([latitude, longitude], 15);

                        // Add or update user A's location marker
                        if (!userAMarkerRef.current) {
                            userAMarkerRef.current = L.marker([latitude, longitude])
                                .addTo(mapRef.current)
                                .bindTooltip("A", { permanent: true, direction: "top" }); // Use bindTooltip for User A
                        } else {
                            userAMarkerRef.current.setLatLng([latitude, longitude]);
                        }

                        // Generate a nearby destination if not set
                        if (!destinationMarkerRef.current) {
                            const newDestination = generateLongerDestination(latitude, longitude);
                            destinationMarkerRef.current = L.marker([newDestination.lat, newDestination.lng], {
                                title: "Destination"
                            }).addTo(mapRef.current).bindPopup("Destination").openPopup();

                            // Add user B marker at a different location
                            userBMarkerRef.current = L.marker([latitude + 0.001, longitude + 0.001])
                                .addTo(mapRef.current)
                                .bindTooltip("B", { permanent: true, direction: "top" }); // Use bindTooltip for User B
                        }

                        // Calculate distances to the destination
                        updateDistances(latitude, longitude, userBMarkerRef.current.getLatLng().lat, userBMarkerRef.current.getLatLng().lng);
                    },
                    (error) => {
                        console.error('Error obtaining location', error);
                    }
                );
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        };

        getLocation(); // Get user's location on component mount

        // Handle key movement for markers
        const handleKeyDown = (event) => {
            if (gameOver) return; // Exit if the game is over
            const moveDistance = 0.0001; // Adjust movement distance here
            const latLngA = userAMarkerRef.current.getLatLng();
            const latLngB = userBMarkerRef.current.getLatLng();

            switch (event.key) {
                // Controls for user A
                case 'ArrowUp':
                    userAMarkerRef.current.setLatLng([latLngA.lat + moveDistance, latLngA.lng]);
                    break;
                case 'ArrowDown':
                    userAMarkerRef.current.setLatLng([latLngA.lat - moveDistance, latLngA.lng]);
                    break;
                case 'ArrowLeft':
                    userAMarkerRef.current.setLatLng([latLngA.lat, latLngA.lng - moveDistance]);
                    break;
                case 'ArrowRight':
                    userAMarkerRef.current.setLatLng([latLngA.lat, latLngA.lng + moveDistance]);
                    break;
                // Controls for user B
                case 'w':
                    userBMarkerRef.current.setLatLng([latLngB.lat + moveDistance, latLngB.lng]);
                    break;
                case 's':
                    userBMarkerRef.current.setLatLng([latLngB.lat - moveDistance, latLngB.lng]);
                    break;
                case 'a':
                    userBMarkerRef.current.setLatLng([latLngB.lat, latLngB.lng - moveDistance]);
                    break;
                case 'd':
                    userBMarkerRef.current.setLatLng([latLngB.lat, latLngB.lng + moveDistance]);
                    break;
                default:
                    break;
            }

            // Update map view and recalculate distances
            const newLatLngA = userAMarkerRef.current.getLatLng();
            const newLatLngB = userBMarkerRef.current.getLatLng();
            mapRef.current.setView(newLatLngA, 15);
            updateDistances(newLatLngA.lat, newLatLngA.lng, newLatLngB.lat, newLatLngB.lng);
        };

        // Add event listener for keydown
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup function
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
                if (userAMarkerRef.current) {
                    userAMarkerRef.current.remove();
                    userAMarkerRef.current = null;
                }
                if (userBMarkerRef.current) {
                    userBMarkerRef.current.remove();
                    userBMarkerRef.current = null;
                }
                if (destinationMarkerRef.current) {
                    destinationMarkerRef.current.remove();
                    destinationMarkerRef.current = null;
                }
            }
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [gameOver]); // Add gameOver as a dependency to re-run effect if it changes

    return (
        <div>
            <h2>Your Current Location</h2>
            <div id="mapContainer" style={{ height: '700px', width: '100%' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                <div>
                    {distanceA !== null && (
                        <p>User A is {distanceA} km away from the destination.</p>
                    )}
                </div>
                <div>
                    {distanceB !== null && (
                        <p>User B is {distanceB} km away from the destination.</p>
                    )}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0' }}>
                <div>
                    <p>Total distance traveled by A: {totalDistanceA.toFixed(2)} km</p>
                    <p>Time taken by A: {timeA.toFixed(2)} seconds</p>
                </div>
                <div>
                    <p>Total distance traveled by B: {totalDistanceB.toFixed(2)} km</p>
                    <p>Time taken by B: {timeB.toFixed(2)} seconds</p>
                </div>
            </div>
            {winner && showCongratsFrame && (
                <div style={{
                    position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)',
                    padding: '20px', backgroundColor: 'lightgreen', border: '2px solid green', borderRadius: '10px',
                    zIndex: '1000', transition: 'opacity 0.5s ease'
                }}>
                    <h2>{winner}</h2>
                </div>
            )}
            {/* Reset Button for Manual Game Reset */}
            {gameOver && (
                <button onClick={resetGame} style={{ marginTop: '20px' }}>
                    Reset Game
                </button>
            )}
        </div>
    );
};

export default MapPage;
