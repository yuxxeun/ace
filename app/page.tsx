"use client"
import { useEffect, useState } from 'react';

const Page = () => {
  const [location, setLocation] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/route');
        if (response.ok) {
          const data = await response.text();
          setLocation(data);
        } else {
          throw new Error('Failed to fetch location');
        }
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Your location is {location}</h1>
    </div>
  );
};

export default Page;
