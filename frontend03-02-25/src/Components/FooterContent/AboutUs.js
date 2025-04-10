import React from "react";
import Footer from "../Footer"; // Adjusted path
import "../../styles/AboutUs.css"; // Adjusted path

const AboutUs = () => {
    return (
        <>
        <div className="about-container">
            <h1>About Us</h1>
            <p className="intro">
                Welcome to <strong>Resumefy</strong>, your ultimate resume-building platform. We believe that crafting a professional, visually appealing, and ATS-friendly resume should be simple, efficient, and stress-free.  
                Whether you're a fresh graduate, a career changer, or an experienced professional, our platform provides powerful tools to help you create resumes that stand out to employers.
            </p>

            <div className="about-section">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower job seekers worldwide by providing an intuitive and feature-rich resume-building experience.  
                    We aim to remove the complexities of resume creation by offering:  
                </p>
                <ul>
                    <li>✅ Professionally designed resume templates tailored for various industries.</li>
                    <li>✅ AI-powered content suggestions to help you craft the perfect resume.</li>
                    <li>✅ A one-click export feature for seamless sharing and submission.</li>
                    <li>✅ Easy-to-use customization options, allowing you to personalize your resume effortlessly.</li>
                </ul>
                <p>
                    We believe that a great resume is the first step towards your dream job. That's why we're committed to providing cutting-edge resume solutions to make job applications smoother and more effective.
                </p>
            </div>

            <div className="about-section">
                <h2>Why Choose Us?</h2>
                <p>
                    Building a resume has never been easier! Here’s why <strong>Resumefy</strong> is the best choice for job seekers:
                </p>
                <ul>
                    <li>✨ <strong>Easy-to-Use Platform</strong>: No technical skills needed—just fill in your details and generate a professional resume in minutes.</li>
                    <li>🎨 <strong>Modern & ATS-Friendly Templates</strong>: Our resume designs are optimized to pass applicant tracking systems (ATS) used by top companies.</li>
                    <li>💡 <strong>AI-Powered Suggestions</strong>: Get smart recommendations for resume content, keywords, and formatting.</li>
                    <li>🔒 <strong>Data Security</strong>: We use top-tier encryption to ensure your personal information stays safe.</li>
                    <li>📥 <strong>Multiple Export Options</strong>: Download resumes in PDF, DOCX, or shareable links.</li>
                    <li>📌 <strong>Instant Preview</strong>: See changes in real-time while editing your resume.</li>
                </ul>
                <p>
                    With millions of resumes created and thousands of satisfied users, we take pride in helping job seekers land their dream jobs.
                </p>
            </div>

            <div className="about-section">
                <h2>Our Team</h2>
                <p>
                    Behind every great product is a team of passionate individuals.  
                    We are a dedicated group of designers, developers, and career experts committed to making job applications effortless.  
                </p>
                <p>
                    Our team's expertise includes:
                </p>
                <ul>
                    <li>👨‍💻 <strong>Software Engineers</strong>: Building a seamless and intuitive user experience.</li>
                    <li>🎨 <strong>UI/UX Designers</strong>: Crafting visually stunning and easy-to-use templates.</li>
                    <li>📝 <strong>Career Advisors</strong>: Providing expert resume-writing tips to help users stand out.</li>
                    <li>🔐 <strong>Security Specialists</strong>: Ensuring data privacy and user security.</li>
                </ul>
                <p>
                    Our collective goal is to create the #1 resume-building platform that meets the needs of every job seeker.
                </p>
            </div>

            <div className="about-section">
                <h2>Testimonials & Success Stories</h2>
                <p>
                    Don't just take our word for it! Here's what our users say about <strong>Resumefy</strong>:
                </p>
                <blockquote>
                    "This resume builder helped me land my dream job at a top tech company! The AI suggestions and templates were game-changers."  
                    <br />— <strong>Rahul M., Software Engineer</strong>
                </blockquote>
                <blockquote>
                    "As a recent graduate, I had no idea how to structure my resume. This tool made it so easy, and I got multiple interview calls!"  
                    <br />— <strong>Priya S., Marketing Analyst</strong>
                </blockquote>
                <p>
                    Join thousands of satisfied users and start building your resume today!
                </p>
            </div>

            <div className="about-section">
                <h2>Contact Us</h2>
                <p>
                    Have questions or need assistance? We’re here to help! Reach out to us at:  
                </p>
                <ul>
                    <li>📧 Email: <strong>support@[website].com</strong></li>
                    <li>🌐 Website: <strong>www.[website].com</strong></li>
                    <li>📍 Office: [Your Location, City, Country]</li>
                </ul>
                <p>
                    Follow us on social media for resume tips and career advice!  
                    [🔗 LinkedIn] | [🔗 Twitter] | [🔗 Instagram]
                </p>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default AboutUs;
