import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Commercial Management Platform",
      description: "A fullstack web platform for managing clients, products, orders, invoices, and payments. Features include authentication, role-based access, dashboards, and automated invoice generation. Built to streamline business workflows with real-time tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MySQL", "Express.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Fullstack To-Do App",
      description: "A collaborative task management app with user authentication, real-time data sync, and project categorization. Built using React, Node.js, and MongoDB, it allows users to organize tasks efficiently and share progress across devices.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Code Club Website",
      description: "I have collaborated on CODE Website such as a frontend developer, it's the official platform of a university coding club, designed to centralize communication, event management, and member engagement.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "CSS3", "JavaScript", "Git"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website to showcase projects, skills, and experience. Built with React, CSS3, and Framer Motion, it features smooth animations and a clean UI for an engaging user experience.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "CSS3", "Framer Motion", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Recruitment Agency Desktop App",
      description: "A Java Swing desktop application to manage recruitment processes, candidates, job offers, and hiring history. Integrated with a MySQL database, it helps agencies streamline operations and maintain structured records.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop&crop=center",
      technologies: ["Java", "Swing", "MySQL", "JDBC"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Event Booking Backend",
      description: "A RESTful API built with Express.js for managing event bookings. The backend handles user authentication, event creation, and ticket reservations. Ideal for powering event management platforms with scalable and maintainable code.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop&crop=center",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <motion.section className="projects" id="projects"
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
    >
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <span className="projects-badge">✦ Projects</span>
          <h2 className="projects-title">Projects That Showcase My Stack</h2>
          <p className="projects-description">
            These projects demonstrate my experience with technologies like React, Node.js, Java, and various databases. 
            Each one tackles real use cases—commercial platforms, task management, and more.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                </div>
              </div>
              
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveLink} className="project-link live-link">
                    Browse Project
                  </a>
                  <a href={project.githubLink} className="project-link github-link">
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}