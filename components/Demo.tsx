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
    const [lastVisitedLocation, setLastVisitedLocation] = useState<LocationData | null>(null);

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

        // Fetch last visited location from localStorage
        const lastVisitedLocationData = localStorage.getItem('lastVisitedLocation');
        if (lastVisitedLocationData) {
            setLastVisitedLocation(JSON.parse(lastVisitedLocationData));
        }

        if (typeof window !== 'undefined') { // Check if running on client side
            fetchLocation();
        }
    }, []); 

    useEffect(() => {
        // Update last visited location in localStorage
        if (location) {
            localStorage.setItem('lastVisitedLocation', JSON.stringify(location));
        }
    }, [location]);

    return (
        <>
            <div className='bg-white text-center justify-center text-black rounded-lg py-2'>
                {lastVisitedLocation ? (
                    <div>
                        <p className='text-lg font-bold justify-center flex items-center'>
                            <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16" style={{ color: 'currentcolor' }}><path fillRule="evenodd" clipRule="evenodd" d="M11.5253 10.2634L8 13.8578L4.47471 10.2634C2.50843 8.25857 2.50843 4.99627 4.47471 2.99144C6.42507 1.00285 9.57493 1.00285 11.5253 2.99144C13.4916 4.99627 13.4916 8.25857 11.5253 10.2634ZM12.5962 11.3137L9.05051 14.9289L8 16L6.94949 14.9289L3.40381 11.3137C0.865397 8.72554 0.865399 4.52929 3.40381 1.94113C5.94222 -0.647042 10.0578 -0.647042 12.5962 1.94113C15.1346 4.52929 15.1346 8.72554 12.5962 11.3137ZM9 6.5C9 7.05228 8.55228 7.5 8 7.5C7.44772 7.5 7 7.05228 7 6.5C7 5.94772 7.44772 5.5 8 5.5C8.55228 5.5 9 5.94772 9 6.5ZM8 9C9.38071 9 10.5 7.88071 10.5 6.5C10.5 5.11929 9.38071 4 8 4C6.61929 4 5.5 5.11929 5.5 6.5C5.5 7.88071 6.61929 9 8 9Z" fill="currentColor"></path></svg>
                            Last visit form: {lastVisitedLocation.city}, {lastVisitedLocation.country}
                        </p>
                    </div>
                ) : (
                    <div>
                        <p>Loading location...</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Demo;


