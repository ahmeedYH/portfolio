import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      description:
        "Modern, responsive websites with custom design and optimized performance.",
      features: ["Responsive Design", "Custom Development", "SEO Optimization"],
      icon: "🌐",
      visual:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Flexible Communication",
      description:
        "Smooth collaboration across time zones with clients worldwide.",
      features: ["Global Reach", "Time Zone Flexibility", "Real-time Updates"],
      icon: "🌍",
      visual:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Graphic Design",
      description: "Creative visuals that match your brand and enhance UX.",
      features: ["Brand Identity", "UI/UX Design", "Visual Storytelling"],
      icon: "🎨",
      visual:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "SQL/NoSQL Databases",
      description: "Secure, high-performance databases tailored to your app.",
      features: [
        "Database Design",
        "Performance Optimization",
        "Data Security",
      ],
      icon: "🗄️",
      visual:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Java Development",
      description:
        "Scalable and maintainable Java applications for various solutions.",
      features: ["Enterprise Solutions", "Spring Framework", "Microservices"],
      icon: "☕",
      visual:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Problem Solving",
      description:
        "Efficiently solving complex algorithmic challenges with clean code.",
      features: [
        "Algorithm Design",
        "Code Optimization",
        "Technical Solutions",
      ],
      icon: "🧩",
      visual:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="services-header"
        >
          <span className="section-badge">✦ Services</span>
          <h2 className="section-title">
            Custom Web Solutions That Fit Your Needs
          </h2>
          <p className="services-description">
            I offer tailored digital services—from full-stack web development to
            graphic design and database engineering— designed to help you
            launch, scale, or improve your online presence.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="service-visual">
                <img
                  src={service.visual}
                  alt={service.title}
                  className="service-image"
                />
                <div className="service-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="service-feature">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="services-cta"
        >
          <p className="cta-text">Do you want to start a project together?</p>
          <a href="#contact" className="cta-button">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
