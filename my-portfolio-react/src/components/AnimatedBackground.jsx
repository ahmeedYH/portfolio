import React from "react";
import { motion } from "framer-motion";
import "../styles/AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Laptop and coffee cup illustration */}
      <motion.div
        className="computer-container"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 0.5, -0.5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="600"
          height="450"
          viewBox="0 0 400 300"
          className="computer-svg"
        >
          {/* === Coffee cup === */}
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse
              cx="90"
              cy="210"
              rx="30"
              ry="8"
              fill="#ff7b00"
              opacity="0.2"
            />
            <rect
              x="70"
              y="150"
              width="40"
              height="60"
              rx="10"
              fill="url(#cupBody)"
              stroke="#a36eff"
              strokeWidth="1.5"
            />
            <circle cx="90" cy="160" r="6" fill="#ffb3ff" />
          </motion.g>

          {/* === Laptop base === */}
          <rect
            x="130"
            y="180"
            width="180"
            height="15"
            rx="4"
            fill="url(#baseGradient)"
          />
          <rect
            x="120"
            y="195"
            width="200"
            height="10"
            rx="2"
            fill="#141526"
            opacity="0.6"
          />

          {/* === Keyboard === */}
          <rect
            x="140"
            y="160"
            width="160"
            height="20"
            rx="4"
            fill="url(#keyboardGradient)"
          />

          {/* === Laptop screen === */}
          <rect
            x="150"
            y="40"
            width="140"
            height="110"
            rx="6"
            fill="url(#screenGradient)"
            stroke="#a36eff"
            strokeWidth="2"
          />

          {/* === Screen content (animated text) === */}
          <motion.g
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <text
              x="160"
              y="70"
              fill="#ffb3ff"
              fontSize="10"
              fontFamily="monospace"
            >
              &lt;Code/&gt;
            </text>
            <text
              x="160"
              y="85"
              fill="#e39bff"
              fontSize="8"
              fontFamily="monospace"
            >
              console.log("Ahmed Yassine");
            </text>
            <text
              x="160"
              y="100"
              fill="#cba8ff"
              fontSize="9"
              fontFamily="monospace"
            >
              return success;
            </text>
          </motion.g>

          {/* === Gradients === */}
          <defs>
            <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3a0ca3" />
              <stop offset="100%" stopColor="#7209b7" />
            </linearGradient>

            <linearGradient
              id="keyboardGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#480ca8" />
              <stop offset="100%" stopColor="#560bad" />
            </linearGradient>

            <linearGradient
              id="screenGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2b2d42" />
              <stop offset="50%" stopColor="#4a00e0" />
              <stop offset="100%" stopColor="#8e2de2" />
            </linearGradient>

            <linearGradient id="cupBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8e2de2" />
              <stop offset="100%" stopColor="#4a00e0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
