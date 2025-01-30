import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MagnifyingGlassIcon, 
  MoonIcon, 
  SunIcon, 
  Squares2X2Icon,
  UserIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  BookOpenIcon,
  NewspaperIcon,
  TrophyIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  Bars3Icon ,
  XMarkIcon 
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from './../../contexts/authContext'
import { doSignOut } from './../../firebase/auth'


// City Selector Component
const CitySelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Global");
  const dropdownRef = useRef(null);

  const cities = [
    { name: "Global", icon: <GlobeAltIcon className="w-5 h-5" /> },
    { name: "New York", icon: <GlobeAltIcon className="w-5 h-5" /> },
    { name: "London", icon: <GlobeAltIcon className="w-5 h-5" /> },
    { name: "Tokyo", icon: <GlobeAltIcon className="w-5 h-5" /> },
    { name: "Sydney", icon: <GlobeAltIcon className="w-5 h-5" /> },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
      >
        {cities.find(city => city.name === selectedCity)?.icon}
        <span>{selectedCity}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden z-50"
          >
            {cities.map((city) => (
              <button
                key={city.name}
                onClick={() => {
                  setSelectedCity(city.name);
                  setIsOpen(false);
                }}
                className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-left"
              >
                {city.icon}
                <span>{city.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Explore Dropdown Component
const ExploreDropdown = ({ isOpen, onClose }) => {
  const exploreItems = [
    { 
      name: "Study Abroad", 
      icon: <GlobeAltIcon className="w-6 h-6 text-blue-500" />,
      path: "/study-abroad" 
    },
    { 
      name: "Courses", 
      icon: <AcademicCapIcon className="w-6 h-6 text-green-500" />,
      path: "/courses" 
    },
    { 
      name: "Universities", 
      icon: <BookOpenIcon className="w-6 h-6 text-purple-500" />,
      path: "/universities" 
    },
    { 
      name: "News", 
      icon: <NewspaperIcon className="w-6 h-6 text-red-500" />,
      path: "/news" 
    },
    { 
      name: "Exams", 
      icon: <TrophyIcon className="w-6 h-6 text-yellow-500" />,
      path: "/exams" 
    },
    { 
      name: "Scholarships", 
      icon: <CurrencyDollarIcon className="w-6 h-6 text-green-600" />,
      path: "/scholarships" 
    },
    { 
      name: "Reviews", 
      icon: <DocumentCheckIcon className="w-6 h-6 text-indigo-500" />,
      path: "/reviews" 
    },
    { 
      name: "Community", 
      icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-pink-500" />,
      path: "/community" 
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full right-0 mt-4 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border dark:border-gray-700 p-4 z-50"
        >
          <div className="grid grid-cols-4 gap-4">
            {exploreItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition group"
              >
                {item.icon}
                <span className="text-xs mt-2 text-gray-600 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {

  const { userLoggedIn } = useAuth()

  const navigate = useNavigate()

  const [darkMode, setDarkMode] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const exploreRef = useRef(null);

  // Dark Mode Toggle Logic
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    localStorage.setItem("theme", newMode ? "dark" : "light");
    
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Close explore dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setIsExploreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Initial theme check
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <nav className="relative bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Main Navigation */}
          <div className="flex items-center space-x-4">
            {/* Logo with Icon */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              <AcademicCapIcon className="w-8 h-8 text-blue-500 dark:text-blue-300" />
              <span className="hidden md:block">AcademiaHub</span>
            </Link>

            {/* City Selector - Hidden on mobile */}
            <div className="hidden md:block">
              <CitySelector />
            </div>

            {/* Explore Dropdown - Hidden on mobile */}
            <div className="relative hidden md:block" ref={exploreRef}>
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="flex items-center px-3 py-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                Explore
                <Squares2X2Icon className="w-5 h-5 ml-2" />
              </button>
              <ExploreDropdown 
                isOpen={isExploreOpen} 
                onClose={() => setIsExploreOpen(false)} 
              />
            </div>
          </div>

          {/* Right Side Navigation */}
          <div className="flex items-center space-x-4">
            {/* Search Input - Hidden on small screens */}
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 w-48 lg:w-64"
              />
              <MagnifyingGlassIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition hidden md:block"
            >
              {darkMode ? <SunIcon className="w-5 h-5 text-yellow-500" /> : <MoonIcon className="w-5 h-5 text-gray-800" />}
            </button>

            {userLoggedIn ? (
            <button
            onClick={() => { doSignOut().then(() => { navigate('/login') }) }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition hidden md:block"
            >
              Logout
            </button>
          ) : (
            <Link 
              to="/login" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition hidden md:block"
            >
              Login
            </Link>
          )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-700 dark:text-gray-300"
            >
              {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon  className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              <div className="block md:hidden mb-4">
                <CitySelector />
              </div>

              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                className="w-full flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                Explore
                <Squares2X2Icon className="w-5 h-5" />
              </button>

              {isExploreOpen && (
                <div className="grid grid-cols-4 gap-2 px-2">
                  {/* Add explore items here similar to ExploreDropdown */}
                  <ExploreDropdown 
                isOpen={isExploreOpen} 
                onClose={() => setIsExploreOpen(false)} 
              />
                </div>
                
              )}

              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                />
                <MagnifyingGlassIcon className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                >
                  {darkMode ? <SunIcon className="w-5 h-5 text-yellow-500" /> :  <MoonIcon className="w-5 h-5 text-gray-800" />}
                  <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </button>
                {userLoggedIn ? (
              <button
              onClick={() => { doSignOut().then(() => { navigate('/login') }) }}
                className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;