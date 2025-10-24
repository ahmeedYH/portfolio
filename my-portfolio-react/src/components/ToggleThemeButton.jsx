import React from "react";
import { motion } from "framer-motion";
import "../styles/ToggleThemeButton.css";

function ToggleThemeButton({ darkMode, toggleTheme }) {
  return (
    <motion.button 
      className="theme-toggle-button" 
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="toggle-slider"
        animate={{ x: darkMode ? 24 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.span 
          className="toggle-icon"
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode ? "☀️" : "🌙"}
        </motion.span>
      </motion.div>
    </motion.button>
  );
}

export default ToggleThemeButton;
