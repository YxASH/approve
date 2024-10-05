import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapPage = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const destinationMarkerRef = useRef(null);
    const [distance, setDistance] = useState(null);
    const [totalDistanceTraveled, setTotalDistanceTraveled] = useState(0); // New state for total distance
    const [message, setMessage] = useState('');
    const [showCongratsFrame, setShowCongratsFrame] = useState(false);
    const navigate = useNavigate();

    const generateLongerDestination = (latitude, longitude) => {
        const offset = 0.0035; 
        return {
            lat: latitude + (Math.random() < 0.5 ? offset : -offset),
            lng: longitude + (Math.random() < 0.5 ? offset : -offset)
        };
    };

    // Function to generate random distance between 4 and 8 km
    const generateRandomDistance = () => {
        return (Math.random() * (8 - 4) + 4).toFixed(2); // Generates a random number between 4 and 8
    };

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('mapContainer').setView([51.505, -0.09], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(mapRef.current);
        }

        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        mapRef.current.setView([latitude, longitude], 15);

                        if (!markerRef.current) {
                            markerRef.current = L.marker([latitude, longitude]).addTo(mapRef.current);
                        } else {
                            markerRef.current.setLatLng([latitude, longitude]);
                        }

                        if (!destinationMarkerRef.current) {
                            const newDestination = generateLongerDestination(latitude, longitude);
                            destinationMarkerRef.current = L.marker([newDestination.lat, newDestination.lng], {
                                title: "Destination"
                            }).addTo(mapRef.current).bindPopup("Destination.").openPopup();
                        }

                        updateDistance(latitude, longitude);
                    },
                    (error) => {
                        console.error('Error obtaining location', error);
                    }
                );
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        };

        const updateDistance = (latitude, longitude) => {
            const currentLatLng = L.latLng(latitude, longitude);
            const destinationLatLng = L.latLng(destinationMarkerRef.current.getLatLng());
            const calculatedDistance = currentLatLng.distanceTo(destinationLatLng) / 1000; 
            setDistance(calculatedDistance.toFixed(2));

            if (calculatedDistance <= 0.05) {
                setMessage("Congratulations! You have reached your destination!");
                setShowCongratsFrame(true);

                // Generate a random distance between 4 to 8 km
                const randomDistance = generateRandomDistance();
                setTotalDistanceTraveled(randomDistance); // Set random distance

                // Navigate to JourneySummary page after 2 seconds
                setTimeout(() => {
                    setShowCongratsFrame(false);
                    navigate('/journey-summary');
                }, 2000);
            } else {
                setMessage('');
            }
        };

        getLocation();

        const handleKeyDown = (e) => {
            if (markerRef.current) {
                const latLng = markerRef.current.getLatLng();
                const moveDistance = 0.0001;

                switch (e.key) {
                    case 'ArrowUp':
                        markerRef.current.setLatLng([latLng.lat + moveDistance, latLng.lng]);
                        break;
                    case 'ArrowDown':
                        markerRef.current.setLatLng([latLng.lat - moveDistance, latLng.lng]);
                        break;
                    case 'ArrowLeft':
                        markerRef.current.setLatLng([latLng.lat, latLng.lng - moveDistance]);
                        break;
                    case 'ArrowRight':
                        markerRef.current.setLatLng([latLng.lat, latLng.lng + moveDistance]);
                        break;
                    default:
                        break;
                }

                const newLatLng = markerRef.current.getLatLng();
                mapRef.current.setView(newLatLng, 15);
                updateDistance(newLatLng.lat, newLatLng.lng);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
                if (markerRef.current) {
                    markerRef.current.remove();
                    markerRef.current = null;
                }
                if (destinationMarkerRef.current) {
                    destinationMarkerRef.current.remove();
                    destinationMarkerRef.current = null;
                }
            }
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate]);

    return (
        <div>
            <h2>Your Current Location</h2>
            <div id="mapContainer" style={{ height: '700px', width: '100%' }} />
            {distance !== null && (
                <p>You are {distance} km away from your destination.</p>
            )}
            {totalDistanceTraveled > 0 && (
                <p>Total Distance Traveled: {totalDistanceTraveled} km</p> // Display total distance traveled
            )}
            {message && (
                <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
            )}
            {showCongratsFrame && (
                <div className="congratulations-frame">
                    <h3>Congratulations!</h3>
                    <p>You have reached your destination!</p>
                </div>
            )}
            <style jsx>{`
                .congratulations-frame {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    padding: 20px;
                    background-color: rgba(0, 128, 0, 0.8);
                    color: white;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
                    text-align: center;
                    z-index: 1000;
                }
            `}</style>
        </div>
    );
};

export default MapPage;
