import React from "react";
import { motion } from "framer-motion";
import { 
  MagnifyingGlassIcon, 
  AcademicCapIcon, 
  GlobeAltIcon 
} from "@heroicons/react/24/outline";
import heroImage from './HeroImage.webp'; // Replace with your image

const Hero = () => {
  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-16">
      {/* Animated Background Shapes */}
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

      {/* Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Text Content */}
        <div className="space-y-6">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            Discover Your 
            <span className="block text-blue-600 dark:text-blue-400">
              Academic Journey
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-xl"
          >
            AcademiaHub empowers students to explore, compare, and choose the perfect educational path with comprehensive resources and personalized guidance.
          </motion.p>

          {/* Search and CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            {/* Enhanced Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon 
                  className="h-5 w-5 text-gray-400 dark:text-gray-500" 
                />
              </div>
              <input 
                type="text"
                placeholder="Search Universities, Courses, Exams..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition"
              >
                <AcademicCapIcon className="h-5 w-5" />
                Explore Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition"
              >
                <GlobeAltIcon className="h-5 w-5" />
                Study Abroad
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <div className="relative">

        <HexagonalImage/>
        </div>
      </motion.div>
    </section>
  );
};


const HexagonalImage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.8,
          type: "spring"
        } 
      }}
      className="hidden md:flex justify-center items-center relative w-full h-full"
    >
      {/* Hexagonal Mask Container */}
      <div className="relative w-[500px] h-[500px]">
        {/* Hexagonal Clip Path */}
        <div 
          className="absolute inset-0 z-10 bg-gradient-to-br from-blue-100/50 to-purple-100/50 
          dark:from-gray-800/50 dark:to-gray-900/50 
          backdrop-blur-xl 
          clip-path-hexagon 
          shadow-2xl 
          border-4 border-white/30 
          dark:border-gray-700/30"
        />

        {/* Background Glow Effect */}
        <div 
          className="absolute -inset-10 bg-blue-500/20 dark:bg-purple-900/20 
          blur-3xl rounded-full animate-pulse"
        />

        {/* Image */}
        <img 
          src={heroImage}
          alt="Academic Journey" 
          className="absolute inset-0 w-full h-full object-cover 
          clip-path-hexagon 
          transform hover:scale-105 
          transition-transform 
          duration-300 
          ease-in-out 
          z-20"
        />

        {/* Animated Hexagonal Overlay */}
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute -inset-2 border-4 border-transparent border-l-blue-500/30 border-r-purple-500/30 
          clip-path-hexagon 
          z-30 
          opacity-50 
          dark:border-l-purple-800/30 
          dark:border-r-blue-800/30"
        />
      </div>
    </motion.div>
  );
};


export default Hero;