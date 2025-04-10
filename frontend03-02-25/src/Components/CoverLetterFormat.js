// src/components/CoverLetterFormat.js

import React from "react";
import "../styles/CoverLetter.css";

function CoverLetterFormat() {
  return (
    <div className="cover-letter-container">
      <h1 className="cover-letter-title">Cover Letter Template</h1>
      <div className="cover-letter-content">
        <div className="header">
          <h2>Your Name</h2>
          <p>Your Address</p>
          <p>City, State, ZIP Code</p>
          <p>Email Address</p>
          <p>Phone Number</p>
          <p>Date</p>
        </div>

        <div className="recipient">
          <h3>Recipient's Name</h3>
          <p>Recipient's Position</p>
          <p>Company Name</p>
          <p>Company Address</p>
          <p>City, State, ZIP Code</p>
        </div>

        <div className="greeting">
          <p>Dear [Recipient's Name],</p>
        </div>

        <div className="body">
          <p>
            I am writing to express my interest in the [Position Title] at
            [Company Name]. With my skills and experience in [Your
            Skills/Experience], I believe I am a strong candidate for this role.
          </p>
          <p>
            [Continue with your cover letter body. Discuss your qualifications,
            experiences, and how they relate to the job you are applying for.]
          </p>
          <p>
            Thank you for considering my application. I look forward to the
            opportunity to discuss my qualifications further.
          </p>
        </div>

        <div className="closing">
          <p>Sincerely,</p>
          <p>Your Name</p>
        </div>
      </div>
    </div>
  );
}

export default CoverLetterFormat;
