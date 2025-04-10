import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [authUrls, setAuthUrls] = useState({ google: "", facebook: "", apple: "" });


  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const name = params.get("name");

    if (token) {
      localStorage.setItem("authToken", token);
      if (name) localStorage.setItem("userName", name);
      window.dispatchEvent(new CustomEvent("userLoggedIn", { detail: name }));

      navigate("/dashboard");
    }
  }, [location, navigate]);

  useEffect(() => {
    const fetchAuthUrls = async () => {
      try {
        const { data: googleResponse } = await axios.get("http://localhost:5000/api/auth/auth/google");
        const { data: facebookResponse } = await axios.get("http://localhost:5000/api/auth/auth/facebook");
        const { data: appleResponse } = await axios.get("http://localhost:5000/api/auth/auth/apple");
        
        setAuthUrls({
          google: googleResponse.url,
          facebook: facebookResponse.url,
          apple: appleResponse.url,
        });
      } catch (error) {
        console.error("Error fetching OAuth URLs", error);
      }
    };

    fetchAuthUrls();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    setGeneralError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!email) {
      setEmailError("Please enter your email address.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, name } = response.data;

      localStorage.setItem("authToken", token);
      if (name) {
        localStorage.setItem("userName", name);
        window.dispatchEvent(new CustomEvent("userLoggedIn", { detail: name })); //This line updates the UI
      }
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => navigate("/dashboard"));
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Login failed";
      setGeneralError(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email address" className="login-input" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <p className="error-message">{emailError}</p>}

          <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
          {passwordError && <p className="error-message">{passwordError}</p>}

          {generalError && <p className="error-message">{generalError}</p>}

          <button type="submit" className="login-submit-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
