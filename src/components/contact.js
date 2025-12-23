import React from "react";
import { motion } from "framer-motion";
import profilePic from "./assets/profile.jpg"; // add your image in src/assets/

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white flex flex-col justify-center items-center px-6 md:px-16">
      {/* Hero Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-400 mx-auto shadow-lg mb-6">
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I’m <span className="text-teal-400">Muhammed Nishaj</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Frontend Developer | UI/UX Enthusiast | React Lover 💻
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Background Animation Dots */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(45,212,191,0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
