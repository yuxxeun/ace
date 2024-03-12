"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

interface LocationData {
  ip: string;
  country: string;
  region: string;
  city: string;
}

const LocationDetector = () => {
  const [location, setLocation] = useState<LocationData | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        const ipAddress = response.data.ip;
        const geoResponse = await axios.get(`https://freegeoip.app/json/${ipAddress}`);
        const { country_name, region_name, city } = geoResponse.data;
        setLocation({ ip: ipAddress, country: country_name, region: region_name, city });
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();

    return () => {
      // Cleanup function
    };
  }, []);

  return (
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
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationDetector;
