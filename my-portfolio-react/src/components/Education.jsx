import React from "react";
import { motion } from "framer-motion";
import "../styles/Education.css";

export default function Education() {
  const educationData = [
    {
      period: "2022–2024",
      title: "DEUST Diploma – FST Settat",
      description:
        "I completed a two-year DEUST diploma in Mathematics, Physics, and Computer Science at FST Settat. This program helped me build a solid scientific foundation, combining logic, analytical thinking, and computational problem-solving. It laid the groundwork for my engineering studies and fueled my passion for software development.",
      specializations: ["Mathematics", "Physics", "Computer Science"],
    },
    {
      period: "2024–Present",
      title: "Engineering Cycle – Computer Engineering",
      description:
        "Currently pursuing an engineering degree in Computer Engineering, I'm deepening my understanding of advanced topics such as software design, networks, system architecture, and algorithmic optimization. This cycle is not only strengthening my technical expertise but also sharpening my collaboration, project management, and innovation skills.",
      specializations: [
        "Software Architecture & Design",
        "Networks & Security",
        "Algorithms & Optimization",
        "Fullstack Projects & Team Work",
      ],
    },
    {
      period: "2025–Present",
      title: "Self-Learning – Fullstack Development",
      description:
        "Alongside my formal education, I've committed to becoming a fullstack developer through self-learning. I've built real-world projects using technologies like React, JavaScript, Node.js, and MongoDB. This autonomous journey reflects my curiosity, consistency, and ability to learn fast and apply knowledge in practical contexts.",
      specializations: [
        "React, JavaScript, Node.js",
        "MySQL, MongoDB",
        "Authentication & Security",
        "Performance, Responsive UI, Caching",
      ],
    },
  ];

  return (
    <motion.section
      className="education"
      id="education"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="education-container">
        <motion.span
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ✦ Learning
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Learning
        </motion.h2>

        <motion.p
          className="education-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A collection of academic and self-taught achievements built through
          curiosity and continuous learning.
        </motion.p>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="education-period">{item.period}</div>
                <h4 className="education-item-title">{item.title}</h4>
                <p className="education-item-description">{item.description}</p>
                <div className="specializations">
                  <h5>Specialized in:</h5>
                  <ul>
                    {item.specializations.map((spec, specIndex) => (
                      <li key={specIndex}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
