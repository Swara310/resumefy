import React from "react";
import styles from "./Template5.module.css";

const Template5 = ({
  personalInfo = {
    name: "Omkar Tupere",
    title: "VP, Finance & Operations",
    email: "elizabeth@novoresume.com",
    phone: "123-456-0987",
    location: "Sydney",
    website: "elizabeth-lynette.com",
    linkedin: "linkedin.com/in/elizabeth.lynette",
    twitter: "@elizabeth.lynette",
  },
  recipientInfo = {
    name: "Doris Johnson",
    title: "Human Resources Manager",
    company: "Optimal Workforce Inc.",
    address: "321 Employment Avenue",
    location: "Sydney, Australia",
  },
  letterContent = {
    greeting: "Dear Ms. Johnson,",
    introduction:
      "As the Vice-President of Finance and Operations at a national food chain, I bring proven success in enhancing productivity and gaining an advantage when it comes to profit margins. My work spans companies and business units at varying stages of growth, from start-up to multinational organizations.",
    achievements: [
      "Drove successful launch of start-up organization through contemporary hiring practices, defining product implementation, and developing go-to-market strategies to achieve 50% margins and $15M+ revenue within my first three years.",
      "Managed daily operations of a $100M+ consumer goods department that introduced a complete line of products to Australia and New Zealand, improving profit margins by 14%.",
      "Proved a vital team member that conducted a complete leadership reorganization that resulted in a 10% improvement in productivity within the sales department and a 15% improvement within the technical team.",
    ],
    closing:
      "As a skilled professional with a CPA degree and a background in analyzing and improving sales numbers, I am confident I will prove an asset to your company and respectfully submit my application for your review. I would like to request a meeting to discuss how I can help meet your goals. I am available at your convenience and hope to hear from you soon.",
    farewell: "Thank you for your consideration.",
    signature: "Sincerely,",
  },
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.nameTitle}>
          <h1 className={styles.name}>{personalInfo.name}</h1>
          <h2 className={styles.title}>{personalInfo.title}</h2>
        </div>
        <div className={styles.contactInfo}>
          {personalInfo.email && (
            <div className={styles.contactItem}>
              <span>{personalInfo.email}</span>
              <span className={styles.icon}>✉</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className={styles.contactItem}>
              <span>{personalInfo.phone}</span>
              <span className={styles.icon}>📱</span>
            </div>
          )}
          {personalInfo.location && (
            <div className={styles.contactItem}>
              <span>{personalInfo.location}</span>
              <span className={styles.icon}>📍</span>
            </div>
          )}
          {personalInfo.website && (
            <div className={styles.contactItem}>
              <span>{personalInfo.website}</span>
              <span className={styles.icon}>🌐</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className={styles.contactItem}>
              <span>{personalInfo.linkedin}</span>
              <span className={styles.icon}>in</span>
            </div>
          )}
          {personalInfo.twitter && (
            <div className={styles.contactItem}>
              <span>{personalInfo.twitter}</span>
              <span className={styles.icon}>🐦</span>
            </div>
          )}
        </div>
      </div>

      <div className={styles.addressSection}>
        <p className={styles.addressTo}>To:</p>
        {recipientInfo.name && <p>{recipientInfo.name}</p>}
        {recipientInfo.title && <p>{recipientInfo.title}</p>}
        {recipientInfo.company && <p>{recipientInfo.company}</p>}
        {recipientInfo.address && <p>{recipientInfo.address}</p>}
        {recipientInfo.location && <p>{recipientInfo.location}</p>}
      </div>

      <div className={styles.letterContent}>
        {letterContent.greeting && <p>{letterContent.greeting}</p>}

        {letterContent.introduction && <p>{letterContent.introduction}</p>}

        {letterContent.achievements &&
          letterContent.achievements.length > 0 && (
            <>
              <p>Examples of my achievements include:</p>
              <ul className={styles.achievementsList}>
                {letterContent.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </>
          )}

        {letterContent.closing && <p>{letterContent.closing}</p>}

        {letterContent.farewell && <p>{letterContent.farewell}</p>}

        <div className={styles.signature}>
          <p>{letterContent.signature}</p>
          <p>{personalInfo.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Template5;
