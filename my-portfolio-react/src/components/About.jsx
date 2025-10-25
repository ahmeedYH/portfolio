import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";

export default function About() {
  const aboutPoints = [
    {
      title: "Software Engineer",
      description:
        "Passionate about solving problems with clean and scalable code. Experienced with modern tools and software architecture.",
    },
    {
      title: "Fullstack Web Developer",
      description:
        "Building responsive, user-friendly web apps using React, JavaScript, Node.js, MySQL, and MongoDB.",
    },
    {
      title: "Backend Experience",
      description:
        "Solid grasp of API design and implementation, secure authentication strategies, and efficient database management.",
    },
    {
      title: "Clean UI Lover",
      description:
        "Detail-oriented about design and UX. Passionate about building interfaces that feel smooth, modern, and accessible.",
    },
    {
      title: "Always Learning",
      description:
        "Curious and constantly exploring new technologies and best practices. I enjoy growing with every project I build.",
    },
  ];

  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="about-container">
        <motion.span
          className="section-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ✦ About
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              className="about-point"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <h3 className="point-title">{point.title}</h3>
              <p className="point-description">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
