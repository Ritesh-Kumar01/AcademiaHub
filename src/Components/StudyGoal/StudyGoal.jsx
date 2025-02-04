import React, { useState } from "react";

const StudyGoal = () => {


  const categories = [
    {
      title: "Engineering",
      colleges: 6259,
      courses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
      icon: "👷",
    },
    {
      title: "Management",
      colleges: 7751,
      courses: ["MBA/PGDM", "BBA/BMS", "Executive MBA"],
      icon: "📈",
    },
    {
      title: "Commerce",
      colleges: 4979,
      courses: ["B.Com", "M.Com"],
      icon: "🛒",
    },
    {
      title: "Arts",
      colleges: 5615,
      courses: ["BA", "MA", "BFA", "BSW"],
      icon: "🎨",
    },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">Select Your Study Goal</h1>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.colleges} Colleges
              </p>
              <ul className="space-y-1">
                {category.courses.map((course, i) => (
                  <li key={i} className="text-gray-700 dark:text-gray-200">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyGoal;
