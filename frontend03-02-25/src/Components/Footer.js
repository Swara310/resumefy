import React from 'react';
import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import resumefyLogo from '../Components/Nav/resumefy-logo.png'; // Update the path as needed

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-row">
        
        {/* Resumefy Section */}
        <div className="footer-col footer-resumefy">
          <img src={resumefyLogo} alt="Resumefy Logo" /> 
          <p>Create professional resumes and CVs with ease using Resumefy.</p>
          <a href="/login" className="create-resume-btn">Create My Resume</a>
        </div>

        {/* Company Section */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/privacypolicy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div className="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shippingguidelines">Shipping Guidelines </a></li>
            <li><a href="/refundpolicy">Return & Refund Policy</a></li>
            <li><a href="#">Order Status</a></li>
            <li><a href="#">Payment Options</a></li>
          </ul>
        </div>

        {/* Resume & CV Section */}
        <div className="footer-col">
          <h4>Resume & CV</h4>
          <ul>
            <li><a href="/login">Resume Builder</a></li>
            <li><a href="/login">Resume Templates</a></li>
            <li><a href="/login">Resume Examples</a></li>
            <li><a href="/login">Resume Format</a></li>
            <li><a href="/login">CV Builder</a></li>
            <li><a href="/login">CV Templates</a></li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="copyright">&copy; 2025 Numetry Technologies. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;
