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
          viewBox="0 0 500 400"
          className="computer-svg"
        >
          <defs>
            {/* --- Gradients --- */}
            <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7f00ff" />
              <stop offset="100%" stopColor="#00b4d8" />
            </linearGradient>

            <linearGradient
              id="bodyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1a1a2e" />
              <stop offset="100%" stopColor="#16213e" />
            </linearGradient>

            <linearGradient
              id="keyboardGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3a0ca3" />
              <stop offset="100%" stopColor="#7209b7" />
            </linearGradient>
          </defs>

          {/* === Laptop base shadow === */}
          <ellipse cx="250" cy="360" rx="150" ry="20" fill="rgba(0,0,0,0.3)" />

          {/* === Laptop body === */}
          <rect
            x="120"
            y="80"
            width="260"
            height="170"
            rx="10"
            fill="url(#bodyGradient)"
            stroke="#a36eff"
            strokeWidth="1.5"
            filter="url(#glowFilter)"
          />

          {/* === Screen border === */}
          <rect
            x="130"
            y="90"
            width="240"
            height="150"
            rx="6"
            fill="#0a0a1f"
            stroke="url(#screenGlow)"
            strokeWidth="2"
            filter="drop-shadow(0 0 15px rgba(162,110,255,0.8))"
          />

          {/* === Screen content === */}
          <motion.rect
            x="135"
            y="95"
            width="230"
            height="140"
            rx="6"
            fill="url(#screenGlow)"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* === Code text (animated) === */}
          <motion.g
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <text
              x="150"
              y="130"
              fill="#fff"
              fontSize="10"
              fontFamily="monospace"
            >
              function start() {"{"}
            </text>
            <text
              x="160"
              y="145"
              fill="#a6b1ff"
              fontSize="9"
              fontFamily="monospace"
            >
              console.log("Hello World!");
            </text>
            <text
              x="150"
              y="160"
              fill="#ffb3ff"
              fontSize="10"
              fontFamily="monospace"
            >
              {"}"}
            </text>
          </motion.g>

          {/* === Keyboard section === */}
          <rect
            x="100"
            y="250"
            width="300"
            height="30"
            rx="6"
            fill="url(#keyboardGradient)"
            stroke="#4a00e0"
            strokeWidth="1"
          />
          {/* Keyboard keys */}
          {[...Array(9)].map((_, i) => (
            <rect
              key={i}
              x={110 + i * 30}
              y="258"
              width="20"
              height="10"
              rx="2"
              fill="#22223b"
              stroke="#a36eff"
              strokeWidth="0.5"
            />
          ))}

          {/* === Trackpad === */}
          <rect
            x="225"
            y="290"
            width="50"
            height="15"
            rx="3"
            fill="#1a1a2e"
            stroke="#a36eff"
            strokeWidth="0.5"
          />

          {/* === Glow filter === */}
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
