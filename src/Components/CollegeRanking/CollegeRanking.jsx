import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; // React icon for stars

const CollegeRanking = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle light/dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    // Optionally load user preference from local storage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Save theme preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const colleges = [
    { name: 'College A', rank: 1, rating: 4.8 },
    { name: 'College B', rank: 2, rating: 4.6 },
    { name: 'College C', rank: 3, rating: 4.5 },
    // Add more colleges as needed
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-all`}>
      <div className="container mx-auto py-10">
        <button
          onClick={toggleDarkMode}
          className="mb-6 px-4 py-2 rounded-full bg-blue-500 text-white"
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <h1 className="text-3xl font-semibold text-center mb-8">Top Colleges Ranking</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800"
            >
              <h2 className="text-xl font-semibold">{college.name}</h2>
              <p className="text-gray-500">Rank: {college.rank}</p>
              <div className="flex items-center space-x-1">
                <span>Rating: {college.rating}</span>
                <FaStar className="text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollegeRanking;
