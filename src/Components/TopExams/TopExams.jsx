import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  AcademicCapIcon, 
  GlobeAltIcon, 
  DocumentCheckIcon, 
  StarIcon 
} from "@heroicons/react/24/outline";

const exams = [
  {
    name: "JEE Main",
    logo: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
    description: "Premier engineering entrance examination in India",
    difficulty: "Advanced",
    applicants: "1.5M+",
    icon: <AcademicCapIcon className="w-8 h-8 text-blue-500" />
  },
  {
    name: "IELTS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/IELTS_logo.svg/1200px-IELTS_logo.svg.png",
    description: "International English Language Testing System",
    difficulty: "Intermediate",
    applicants: "3M+",
    icon: <GlobeAltIcon className="w-8 h-8 text-green-500" />
  },
  {
    name: "SAT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/College_Board_logo.svg/1200px-College_Board_logo.svg.png",
    description: "Standardized test for college admissions",
    difficulty: "Comprehensive",
    applicants: "2.2M+",
    icon: <DocumentCheckIcon className="w-8 h-8 text-purple-500" />
  },
  {
    name: "BITSAT",
    logo: "https://static.zollege.in/public/college_data/images/logos/BITS%20Pilani%20Logo.png",
    description: "BITS Pilani Integrated First Degree Program",
    difficulty: "Challenging",
    applicants: "500K+",
    icon: <StarIcon className="w-8 h-8 text-yellow-500" />
  },
  {
    name: "JEE Main",
    logo: "https://w7.pngwing.com/pngs/612/865/png-transparent-central-board-of-secondary-education-ugc-net-cbse-exam-class-10-neet-jee-main-school-label-logo-india.png",
    description: "Premier engineering entrance examination in India",
    difficulty: "Advanced",
    applicants: "1.5M+",
    icon: <AcademicCapIcon className="w-8 h-8 text-blue-500" />
  },
  {
    name: "IELTS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/IELTS_logo.svg/1200px-IELTS_logo.svg.png",
    description: "International English Language Testing System",
    difficulty: "Intermediate",
    applicants: "3M+",
    icon: <GlobeAltIcon className="w-8 h-8 text-green-500" />
  },
  {
    name: "SAT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/College_Board_logo.svg/1200px-College_Board_logo.svg.png",
    description: "Standardized test for college admissions",
    difficulty: "Comprehensive",
    applicants: "2.2M+",
    icon: <DocumentCheckIcon className="w-8 h-8 text-purple-500" />
  },
  {
    name: "BITSAT",
    logo: "https://static.zollege.in/public/college_data/images/logos/BITS%20Pilani%20Logo.png",
    description: "BITS Pilani Integrated First Degree Program",
    difficulty: "Challenging",
    applicants: "500K+",
    icon: <StarIcon className="w-8 h-8 text-yellow-500" />
  }
];

const ExamCard = ({ exam, isHovered }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 } 
      }}
      whileHover={{ scale: 1.05 }}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300"
    >
      {/* Exam Header */}
      <div className="flex items-center p-4 border-b dark:border-gray-700">
        <img 
          src={exam.logo} 
          alt={exam.name} 
          className="w-16 h-16 object-contain mr-4" 
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {exam.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {exam.description}
          </p>
        </div>
      </div>

      {/* Exam Details */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            {exam.icon}
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Difficulty: {exam.difficulty}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <StarIcon className="w-5 h-5 text-yellow-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {exam.applicants} Applicants
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Prepare Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Learn More
          </motion.button>
        </div>
      </div>

      {/* Hover Effect */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 mix-blend-overlay"
        />
      )}
    </motion.div>
  );
};

const TopExams = () => {
  const [hoveredExam, setHoveredExam] = useState(null);

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Explore Top Exams
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive preparation for crucial competitive examinations
          </p>
        </motion.div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exams.map((exam, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredExam(index)}
              onMouseLeave={() => setHoveredExam(null)}
            >
              <ExamCard 
                exam={exam} 
                isHovered={hoveredExam === index} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopExams;