"use client"

import React, { useEffect, useState } from 'react';

interface LocationData {
    ip: string;
    country: string; 
    region: string;
    city: string;
}

const Demo = () => {
    const [location, setLocation] = useState<LocationData | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await fetch('https://ipinfo.io/json');
                const data = await response.json();
                setLocation(data);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };


        if (typeof window !== 'undefined') {
            fetchLocation();
        }
    }, []); 

    return (
        <React.Fragment>
            <div>
                {location ? (
                    <div>
                        <h2>Your Location:</h2>
                        <p>IP Address: {location.ip}</p>
                        <p>Country: {location.country}</p>
                        <p>Region: {location.region}</p>
                        <p>City: {location.city}</p>
                    </div>
                ) : (
                    <div>
                        <p>Loading location...</p>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default Demo;

