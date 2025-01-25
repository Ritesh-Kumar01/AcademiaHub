import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BellIcon, 
  CheckIcon, 
  ExclamationTriangleIcon  
} from "@heroicons/react/24/outline";

const SubscribeAlert = () => {
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState("idle");
  const inputRef = useRef(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubscriptionStatus("error");
      inputRef.current?.focus();
      return;
    }

    // Simulate subscription process
    setSubscriptionStatus("submitting");
    
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubscriptionStatus("success");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubscriptionStatus("idle");
        setEmail("");
      }, 3000);
    } catch (error) {
      setSubscriptionStatus("error");
    }
  };

  const renderContent = () => {
    switch (subscriptionStatus) {
      case "success":
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center space-x-3 text-green-600 bg-green-50 p-4 rounded-xl"
          >
            <CheckIcon className="w-8 h-8" />
            <span className="text-lg font-semibold">
              Thank you for subscribing! 🎉
            </span>
          </motion.div>
        );
      case "error":
        return (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center space-x-3 text-red-600 bg-red-50 p-4 rounded-xl"
          >
            <ExclamationTriangleIcon className="w-8 h-8" />
            <span className="text-lg font-semibold">
              Please enter a valid email address
            </span>
          </motion.div>
        );
      default:
        return (
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div className="relative">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                dark:bg-gray-800 dark:text-white 
                transition duration-300"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <BellIcon className="w-6 h-6 text-gray-400" />
              </motion.div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={subscriptionStatus === "submitting"}
              className="w-full px-6 py-3 
              bg-gradient-to-r from-blue-600 to-purple-600 
              text-white rounded-xl 
              hover:from-blue-700 hover:to-purple-700
              focus:outline-none focus:ring-2 focus:ring-offset-2 
              focus:ring-blue-500
              transition duration-300
              flex items-center justify-center space-x-2
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {subscriptionStatus === "submitting" ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1, 
                    ease: "linear" 
                  }}
                >
                  <svg 
                    className="animate-spin h-5 w-5" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                </motion.div>
              ) : (
                <>
                  <BellIcon className="w-6 h-6" />
                  <span>Subscribe Now</span>
                </>
              )}
            </motion.button>
          </form>
        );
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
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
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Subscribe to receive the latest updates, insights, and opportunities
          </p>
        </motion.div>

        {/* Subscription Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8"
        >
          {renderContent()}
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeAlert;