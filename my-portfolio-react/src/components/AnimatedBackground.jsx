import React from "react";
import { motion } from "framer-motion";
import "../styles/AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated computer */}
      <motion.div
        className="computer-container"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 0.5, -0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="500" // Increased size
          height="500"
          viewBox="0 0 200 150"
          className="computer-svg"
        >
          {/* Monitor outline */}
          <rect
            x="20"
            y="10"
            width="120"
            height="80"
            rx="5"
            fill="url(#screenGradient)"
            stroke="#4a90e2"
            strokeWidth="2"
          />

          {/* Base */}
          <rect x="30" y="90" width="100" height="10" rx="3" fill="#2c3e50" />

          {/* Support */}
          <rect x="75" y="100" width="10" height="20" fill="#34495e" />

          {/* Keyboard */}
          <rect x="15" y="120" width="130" height="8" rx="2" fill="#34495e" />

          {/* Screen content */}
          <rect
            x="25"
            y="15"
            width="110"
            height="70"
            rx="3"
            fill="url(#screenContent)"
          />

          {/* Gradients */}
          <defs>
            <linearGradient
              id="screenGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e3c72" />
              <stop offset="100%" stopColor="#2a5298" />
            </linearGradient>

            <linearGradient
              id="screenContent"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1a3845ff" />
              <stop offset="50%" stopColor="#284853ff" />
              <stop offset="100%" stopColor="#366579ff" />
            </linearGradient>
          </defs>

          {/* Animated code lines */}
          <motion.g
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <text
              x="30"
              y="35"
              fill="#d59dffff"
              fontSize="8"
              fontFamily="monospace"
            >
              &lt;Hello World /&gt;
            </text>
            <text
              x="30"
              y="50"
              fill="#d59dffff"
              fontSize="5"
              fontFamily="monospace"
            >
              console.log("It's Ahmed Yassine ^_^");
            </text>
            <text
              x="30"
              y="65"
              fill="#d59dffff"
              fontSize="8"
              fontFamily="monospace"
            >
              return success;
            </text>
          </motion.g>
        </svg>
      </motion.div>

      {/* Waves at the bottom */}
      <div className="wave-container">
        <motion.div
          className="wave wave1"
          animate={{ x: [0, -50] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="wave wave2"
          animate={{ x: [0, -30] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="wave wave3"
          animate={{ x: [0, -40] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
