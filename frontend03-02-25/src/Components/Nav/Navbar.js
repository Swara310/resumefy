import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import resumefyLogo from "./resumefy-logo.png";
// import { FaRegUser } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa"; // User icon
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Get username from localStorage
    const storedName = localStorage.getItem("userName");

    if (storedName) {
      setUserName(storedName);
    }
        // Listen for login event to update name without refresh
        const handleLogin = (event) => {
          setUserName(event.detail);
        };
    
        window.addEventListener("userLoggedIn", handleLogin);
    
        return () => {
          window.removeEventListener("userLoggedIn", handleLogin);
        };
  }, []);


  const handleLoginClick = () => navigate("/login");
  const handleSignupClick = () => navigate("/signup");

  const showDropdown = (menu) => setDropdownVisible(menu);
  const hideDropdown = () => setDropdownVisible(null);

  const isDropdownOpen = (menu) => dropdownVisible === menu;
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLogoutClick = () => {
    // Clear the token from localStorage
    localStorage.removeItem("authToken");
    console.log("Logged out");
    localStorage.removeItem("userName");
    setUserName(""); // Clear the local state

    // Navigate to the home page or login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Link to landing page */}
        <Link to="/" className="navbar-logo">
          <img src={resumefyLogo} alt="Resumefy Logo" className="logo-image" />
          Resumefy
        </Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/">
          <span>Home</span>
        </Link>
        {/* Tools Dropdown */}
        {/* <div
          className="navbar-item"
          onMouseEnter={() => showDropdown("tools")}
          onMouseLeave={hideDropdown}
        >
          <span>
            <a href="#tools">Tools</a>
            <span
              className={`dropdown-icon ${
                isDropdownOpen("tools") ? "open" : ""
              }`}
            >
              ▼
            </span>
          </span>
          {isDropdownOpen("tools") && (
            <div className="dropdown-menu">
              <Link to="/template">
                <img
                  src={require("./Logos/resumechecker.png")}
                  alt="Resume Checker"
                  className="dropdown-icon-img"
                />
                Resume Checker
              </Link>
              <a href="#cv-maker">CV Maker</a>
            </div>
          )}
        </div> */}

        {/* Resume and CV Dropdown */}
        <div
          className="navbar-item"
          onMouseEnter={() => showDropdown("resume-cv")}
          onMouseLeave={hideDropdown}
        >
          <span>
            <a href="#resume-cv">Resume</a>
            <span
              className={`dropdown-icon ${
                isDropdownOpen("resume-cv") ? "open" : ""
              }`}
            >
              ▼
            </span>
          </span>
          {isDropdownOpen("resume-cv") && (
            <div className="dropdown-menu">
              <Link to="/template">
                {" "}
                <img
                  src={require("./Logos/logo.png")}
                  alt="Resume Templates"
                  className="dropdown-icon-img"
                />
                Resume Templates
              </Link>
              {/* <a href="#cv-templates">CV Templates</a> */}
            </div>
          )}
        </div>

        {/* Cover Letter Dropdown */}
        <div
          className="navbar-item"
          onMouseEnter={() => showDropdown("cover-letter")}
          onMouseLeave={hideDropdown}
        >
          <span>
            <a href="#cover-letter">Cover Letter</a>
            <span
              className={`dropdown-icon ${
                isDropdownOpen("cover-letter") ? "open" : ""
              }`}
            >
              ▼
            </span>
          </span>
          {isDropdownOpen("cover-letter") && (
            <div className="dropdown-menu">
              {/* <Link to="/cover-letter-builder">
                <img
                  src={require("./Logos/coverletter.png")}
                  alt="Build Cover Letter"
                  className="dropdown-icon-img"
                />
                Build Cover Letter
              </Link> */}
              <Link to="/cover-letter">
                <img
                  src={require("./Logos/format.png")}
                  alt="Cover Letter Format"
                  className="dropdown-icon-img"
                />
                Cover Letter Format
              </Link>
              <Link to="/how-to-cover-letter">
                <img
                  src={require("./Logos/help.png")}
                  alt="How to Write a Cover Letter"
                  className="dropdown-icon-img"
                />
                How to Write a Cover Letter
              </Link>
              <Link to="/cover-letter-help">
                <img
                  src={require("./Logos/hands.png")}
                  alt="Cover Letter Help"
                  className="dropdown-icon-img"
                />
                Cover Letter Help
              </Link>
              <Link to="/cover-letter-builder">
                <img
                  src={require("./Logos/createcoverletter.png")}
                  alt=" Create a Cover Letter Now"
                  className="dropdown-icon-img"
                />
                Create a Cover Letter Now
              </Link>
            </div>
          )}
        </div>

        {/* About Dropdown */}
        <div
          className="navbar-item"
          onMouseEnter={() => showDropdown("about")}
          onMouseLeave={hideDropdown}
        >
          <span>
            <a href="#about">About</a>
            <span
              className={`dropdown-icon ${
                isDropdownOpen("about") ? "open" : ""
              }`}
            >
              ▼
            </span>
          </span>
          {isDropdownOpen("about") && (
            <div className="dropdown-menu">
              <Link to="/">
                <img
                  src={require("./Logos/services.png")}
                  alt="services"
                  className="dropdown-icon-img"
                />
                Learn more about Resumefy and our services.
              </Link>
              <Link to="/payment">
                <img
                  src={require("./Logos/payment.png")}
                  alt="Payment"
                  className="dropdown-icon-img"
                />
                Payment
              </Link>
              <Link to="/contact">
                <img
                  src={require("./Logos/contact.png")}
                  alt="Contact"
                  className="dropdown-icon-img"
                />
                Contact
              </Link>
            </div>
          )}
        </div>

        {/* Account Link */}
        {/* My Account Dropdown with Logout */}
        {/* <div
          className="navbar-item"
          onMouseEnter={() => showDropdown("account")}
          onMouseLeave={hideDropdown}
        >
          <span>
            <Link>My Account</Link>
            <span
              className={`dropdown-icon ${
                isDropdownOpen("account") ? "open" : ""
              }`}
            >
              ▼
            </span>
          </span>
          {isDropdownOpen("account") && (
            <div className="dropdown-menu">
              <Link to="/account">
                <img
                  src={require("./Logos/profile.png")}
                  alt="Profile"
                  className="dropdown-icon-img"
                />
                My Profile
              </Link>
              <Link to="/login" onClick={handleLogoutClick}>
                <img
                  src={require("./Logos/logout.png")}
                  alt="Logout"
                  className="dropdown-icon-img"
                />
                Logout
              </Link>
            </div>
          )}
        </div> */}

        {/* New Account Link */}
        <div
          className="navbar-item custom-dropdown"
          onMouseEnter={() => showDropdown("account")}
          onMouseLeave={hideDropdown}
        >
          <span>
            <Link
              to="/login"
              onClick={handleLoginClick}
              className="custom-button login-btn"
            >
              Login
            </Link>
            <span
              className={`dropdown-icon ${
                isDropdownOpen("account") ? "open" : ""
              }`}
            >
              ▼
            </span>
          </span>
          {isDropdownOpen("account") && (
            <div className="dropdown-menu custom-dropdown-menu">
              <Link
                to="/signup"
                onClick={handleSignupClick}
                className="bold-text"
              >
                New User? Sign up
              </Link>
              <Link to="/account">My Profile</Link>
              <Link to="/" onClick={handleLogoutClick}>
                Logout
              </Link>
            </div>
          )}
        </div>

        <div className="navbar-item profile-item">
           <FaRegUserCircle className="user-icon" />
          {userName && <span className="user-name">{userName}</span>}
       </div>


        <Link to="/admin" >
          Admin Panel
        </Link>


        {/* Login and Sign Up buttons */}
        {/* <div className="navbar-buttons">
          <button className="login-btn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="signup-btn" onClick={handleSignupClick}>
            Sign Up
          </button>
        </div> */}
      </div>
    </nav>
  );
};
export default Navbar;
