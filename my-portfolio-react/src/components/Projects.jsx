import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Commercial Management Platform",
      description:
        "A fullstack web platform for managing clients, products, orders, invoices, and payments. Features include authentication, role-based access, dashboards, and automated invoice generation. Built to streamline business workflows with real-time tracking.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MySQL", "Express.js"],
      liveLink: "#",
      githubLink: "#",
    },

    {
      title: "BAC Club Website",
      description:
        "I have collaborated on BAC Website such as a fullstack developer, it's the official platform of a university BAC club, designed to centralize communication, event management, and member engagement.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
      technologies: ["next.js", "React", "CSS3", "JavaScript", "Git"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A modern, responsive portfolio website to showcase projects, skills, and experience. Built with React, CSS3, and Framer Motion, it features smooth animations and a clean UI for an engaging user experience.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "CSS3", "Framer Motion", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "College Administrative Management System",
      description:
        " An application developed in Java using JDBC to connect with a MySQL database. It features a user-friendly Graphical User Interface (GUI) that enables the management of teachers, courses, students, and schedules. The project automates administrative tasks and centralizes college data in a secure relational database.",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop&crop=center",
      technologies: ["Java", "MySQL", "JDBC"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Commerce Web Application",
      description:
        "Developed a full-stack e-commerce website using Spring Boot for backend and Next.js for frontend. The platform includes product, order, payment, delivery, and authentication management with JWT. Focused on performance optimization and secure API design.",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&h=400&fit=crop&crop=center",
      technologies: [
        "Spring Boot",
        "Next.js",
        "JWT",
        "REST API",
        "MySQL",
        "React",
        "CSS3",
        "JavaScript",
      ],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <motion.section
      className="projects"
      id="projects"
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
            These projects demonstrate my experience with technologies like
            React, Node.js, Java, Spring Boot and various databases. Each one
            tackles real use cases—commercial platforms, task management, and
            more.
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveLink} className="project-link live-link">
                    Browse Project
                  </a>
                  <a
                    href={project.githubLink}
                    className="project-link github-link"
                  >
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
