import React from "react";
import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";
import CursorFollower from "./CursorFollower";
import AnimatedBackground from "./AnimatedBackground";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <AnimatedBackground />
      <HeroParticles />
      <CursorFollower />
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            Hi, I'm Ahmed Yassine , building modern web apps with
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Fullstack software engineer passionate about building modern web
            apps with react.js and Tailwind on the frontend, and scalable APIs
            using Java Spring Boot on the backend.
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-actions"
        >
          <a href="#projects" className="projects-button">
            View My Work
          </a>
          <a
            href="https://drive.google.com/file/d/1G2V_4cl8478P91bwUTgiZEu0e3BcCj34/view?usp=sharing"
            className="cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-features"
        >
          <div className="feature-item">
            <div className="feature-icon">🚀</div>
            <h4>Fullstack Development</h4>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h4>Clean & Scalable Code</h4>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎨</div>
            <h4>Modern UI/UX Design</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
