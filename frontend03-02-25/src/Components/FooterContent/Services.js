import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer"; // Adjusted path
import "../../styles/Services.css"; // Adjusted path

const Services = () => {

    const navigate = useNavigate(); 

    return (
        <>
        <div className="services-container">
                <h1>Our Services</h1>
                <p className="intro">
                    At <strong>Resumefy</strong>, we provide top-notch resume-building solutions to help job seekers create professional, eye-catching resumes with ease.
                    Our platform is designed to offer intuitive, user-friendly tools to enhance your job application process.
                </p>

                <div className="services-section">
                    <h2>What We Offer</h2>
                    <ul>
                        <li><strong>Customizable Templates:</strong> Choose from a variety of modern and professional templates.</li>
                        <li><strong>Instant Download & Sharing:</strong> Download your resume in PDF format or share via email.</li>
                        <li><strong>Real-time Editing:</strong> Modify and update your resume anytime, anywhere.</li>
                        <li><strong>Cover Letter Generator:</strong> Create personalized cover letters effortlessly.</li>
                        <li><strong>Job Matching Suggestions:</strong> Get AI-driven job recommendations based on your skills.</li>
                    </ul>
                </div>

                <div className="services-section">
                    <h2>How It Works</h2>
                    <ol>
                        <li>Sign up and create an account.</li>
                        <li>Choose a resume template that fits your style.</li>
                        <li>Enter your details for resume.</li>
                        <li>Download or share your resume instantly.</li>
                    </ol>
                </div>

                <div className="services-section">
                    <h2>Why Choose Us?</h2>
                    <ul>
                        <li><strong>User-Friendly:</strong> Simple and intuitive interface.</li>
                        <li><strong>Professional Designs:</strong> Stand out with expertly crafted resume templates.</li>
                        <li><strong>Secure & Private:</strong> Your data is protected with industry-grade security measures.</li>
                        <li><strong>Free & Premium Plans:</strong> Flexible pricing to suit different needs.</li>
                        <li><strong>24/7 Support:</strong> Get assistance whenever you need it.</li>
                    </ul>
                </div>

                <div className="services-section">
                    <h2>Pricing Plans</h2>
                    <p>We offer both free and premium plans to fit your needs:</p>
                    <ul>
                        <li><strong>Free Plan:</strong> Access basic resume-building features at no cost.</li>
                        <li><strong>Pro Plan:</strong> Get premium templates, AI assistance, and unlimited downloads.</li>
                        <li><strong>Enterprise Plan:</strong> Custom solutions for businesses and recruitment agencies.</li>
                    </ul>
                </div>

                <div className="services-section">
                    <h2>Get Started Today</h2>
                    <p>
                        Join thousands of users who have built their resumes with Resumefy.  
                        Sign up now and take the first step toward your dream job!
                    </p>
                    <button className="cta-button" onClick={() => navigate("/login")}>
                        Start Building Your Resume
                    </button>
                </div>

                <p className="last-updated"><em>Last Updated: March 2025</em></p>
            </div>
        <Footer />
        </>
    );
};

export default Services;
