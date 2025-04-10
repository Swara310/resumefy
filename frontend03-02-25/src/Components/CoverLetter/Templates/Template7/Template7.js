import React, { forwardRef } from "react";
import styles from "./Template7.module.css";

const Template7 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    recipient: information.recipient || {},
    content: information.content || "",
    bulletPoints: information.bulletPoints || [],
  };

  return (
    <div className={styles.container} ref={ref}>
      {/* Header Section */}
      <div className={styles.header}>
        {/* Name & Position */}
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.position}>
            {info.basicInfo.position || "Your Position"}
          </p>
        </div>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          {info.basicInfo.email && <p>{info.basicInfo.email}</p>}
          {info.basicInfo.phone && <p>{info.basicInfo.phone}</p>}
          {info.basicInfo.location && <p>{info.basicInfo.location}</p>}
          {info.basicInfo.linkedin && (
            <p>
              <a
                href={info.basicInfo.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          )}
        </div>
      </div>

      <hr className={styles.line} />

      {/* Recipient Information */}
      <div className={styles.recipient}>
        <p>
          <strong>{info.recipient.name || "HR Manager"}</strong>
        </p>
        <p>{info.recipient.position || "Hiring Manager"}</p>
        <p>{info.recipient.company || "Company Name"}</p>
        <p>{info.recipient.address || "Company Address"}</p>
      </div>

      {/* Cover Letter Content */}
      <div className={styles.content}>
        <p>Dear {info.recipient.name || "Hiring Manager"},</p>
        <p>{info.content}</p>
        <ul>
          {info.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p>
          I look forward to the opportunity to discuss my qualifications in more
          detail.
        </p>
      </div>

      {/* Signature */}
      <div className={styles.signature}>
        <p>Sincerely,</p>
        <p>{info.basicInfo.name || "Your Name"}</p>
      </div>
    </div>
  );
});

export default Template7;
