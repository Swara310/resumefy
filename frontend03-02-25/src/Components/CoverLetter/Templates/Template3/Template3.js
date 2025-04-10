import React, { forwardRef } from "react";
import styles from "./Template3.module.css";

const Template3 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    coverLetter: information.coverLetter || "",
    recipient: information.recipient || {}, // Recipient details
  };

  return (
    <div className={styles.coverContainer} ref={ref}>
      <div className={styles.coverPage}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>
            {info.basicInfo.title || "Your Position"}
          </p>
          <div className={styles.contactInfo}>
            {info.basicInfo.email && <span>✉️ {info.basicInfo.email}</span>}
            {info.basicInfo.phone && <span>📞 {info.basicInfo.phone}</span>}
            {info.basicInfo.linkedin && (
              <span>
                🔗{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            )}
          </div>
        </header>

        <hr className={styles.line} />

        {/* Content Section - Two Columns */}
        <div className={styles.content}>
          {/* Left Column: Recipient Details */}
          <div className={styles.leftColumn}>
            <p>
              <strong>{info.recipient.name || "Hiring Manager"}</strong>
            </p>
            <p>{info.recipient.company || "Company Name"}</p>
            <p>{info.recipient.address || "Company Address"}</p>
            <p>{info.recipient.date || new Date().toDateString()}</p>
          </div>

          {/* Right Column: Cover Letter */}
          <div className={styles.rightColumn}>
            <p>{info.coverLetter || "Your cover letter content goes here."}</p>
          </div>
        </div>

        {/* Right-Aligned Footer */}
        <div className={styles.footer}>
          <p>Sincerely,</p>
          <p className={styles.signature}>
            {info.basicInfo.name || "Your Name"}
          </p>
        </div>
      </div>
    </div>
  );
});

export default Template3;
