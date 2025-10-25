import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <span className="footer-badge">© {year} Ahmed Yassine</span>
        <p className="footer-text">Built with care · All rights reserved</p>
      </div>
    </footer>
  );
}
