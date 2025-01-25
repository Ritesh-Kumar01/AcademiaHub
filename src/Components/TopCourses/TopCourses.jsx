import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  LockOpenIcon, 
  MegaphoneIcon 
} from "@heroicons/react/24/outline";

const courses = [
  {
    title: "Data Science",
    description: "Advanced analytics and machine learning techniques.",
    image: "https://via.placeholder.com/150",
    icon: <ChartBarIcon className="w-12 h-12 text-blue-500" />,
    color: "from-blue-100 to-blue-200",
    darkColor: "from-blue-900 to-blue-800"
  },
  {
    title: "Web Development",
    description: "Full-stack development with modern frameworks.",
    image: "https://via.placeholder.com/150",
    icon: <CodeBracketIcon className="w-12 h-12 text-green-500" />,
    color: "from-green-100 to-green-200",
    darkColor: "from-green-900 to-green-800"
  },
  {
    title: "Cybersecurity",
    description: "Advanced network and system protection strategies.",
    image: "https://via.placeholder.com/150",
    icon: <LockOpenIcon className="w-12 h-12 text-purple-500" />,
    color: "from-purple-100 to-purple-200",
    darkColor: "from-purple-900 to-purple-800"
  },
  {
    title: "Digital Marketing",
    description: "Strategic online marketing and brand growth.",
    image: "https://via.placeholder.com/150",
    icon: <MegaphoneIcon className="w-12 h-12 text-pink-500" />,
    color: "from-pink-100 to-pink-200",
    darkColor: "from-pink-900 to-pink-800"
  }
];

const TopCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.1,
            transition: { duration: 1 } 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.1,
            transition: { duration: 1, delay: 0.5 } 
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Explore Top Courses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Unlock your potential with our cutting-edge, industry-relevant courses designed to transform your career.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2 
              }}
              onHoverStart={() => setHoveredCourse(index)}
              onHoverEnd={() => setHoveredCourse(null)}
              className={`
                relative overflow-hidden rounded-2xl shadow-2xl 
                bg-gradient-to-br ${course.color} dark:${course.darkColor}
                transform transition-all duration-300
                ${hoveredCourse === index ? 'scale-105 shadow-2xl' : 'scale-100'}
              `}
            >
              {/* Course Content */}
              <div className="relative z-10 p-6 text-center">
                {/* Course Icon */}
                <div className="mb-4 flex justify-center">
                  {course.icon}
                </div>

                {/* Course Details */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm">
                  {course.description}
                </p>

                {/* Learn More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-6 py-2 
                    bg-white dark:bg-gray-800 
                    text-gray-800 dark:text-white 
                    rounded-full 
                    shadow-md 
                    hover:bg-gray-100 dark:hover:bg-gray-700
                    transition duration-300
                  "
                >
                  Learn More
                </motion.button>
              </div>

              {/* Hover Effect Overlay */}
              {hoveredCourse === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  className="absolute inset-0 bg-white dark:bg-gray-800 mix-blend-overlay"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCourses;