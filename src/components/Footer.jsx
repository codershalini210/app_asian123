import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Web Design</li>
            <li>Data Analysis</li>
            <li>Cloud Solutions</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="footer-col">
          <h3>Projects</h3>
          <ul>
            <li>Ecommerce Platform</li>
            <li>Chat Application</li>
            <li>Learning Management System</li>
            <li>Portfolio Websites</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <ul>
            <li>Email: info@techcompany.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Ahmedabad, India</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="footer-col">
          <h3>Subscribe</h3>
          <p>Get latest tech updates</p>

          <input 
          type="email" 
          placeholder="Enter your email"
          className="subscribe-input"
          />

          <button className="subscribe-btn">
            Subscribe
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        Design and Developed by SR
      </div>

    </footer>
  )
}