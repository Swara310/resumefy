import React from "react";
import styles from "./Template60.module.css";

const Template60 = () => {
  return (
    <div className={styles.resumeContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.name}>Rachel Johnson</h1>
        <p className={styles.profession}>HR Professional</p>
        <p className={styles.summary}>
          Astute and exceptionally dedicated professional with 6+ years of
          experience in human resources management operations. Equipped with a
          solid commitment to providing high-quality support to the management.
        </p>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <p>Email: rachel@novoresume.com</p>
        <p>Phone: 123 444 555</p>
        <p>Location: Bloomington, IN</p>
        <p>LinkedIn: linkedin.com/in/racheljohnson</p>
      </div>

      {/* Work Experience Section */}
      <div className={styles.section}>
        <h2>Work Experience</h2>
        <div className={styles.job}>
          <h3>HR Generalist</h3>
          <p>The Good Hire Solutions (06/2017 - Present)</p>
          <ul>
            <li>Administer onboarding processes for new hires.</li>
            <li>Conduct training and mentoring programs.</li>
            <li>Ensure compliance with HR policies and standards.</li>
          </ul>
        </div>
        <div className={styles.job}>
          <h3>HR Coordinator</h3>
          <p>Better People Management Corp. (04/2013 - 05/2017)</p>
          <ul>
            <li>Managed end-to-end recruiting, hiring, and onboarding.</li>
            <li>Reduced onboarding time by 20% through process improvement.</li>
            <li>Implemented employee engagement programs.</li>
          </ul>
        </div>
      </div>

      {/* Skills & Certifications */}
      <div className={styles.rightPanel}>
        <div className={styles.section}>
          <h2>Skills</h2>
          <ul>
            <li>HRIS</li>
            <li>Data Analysis</li>
            <li>Onboarding</li>
            <li>Recruiting</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h2>Certifications</h2>
          <ul>
            <li>Certified Professional Human Resources (2014)</li>
            <li>Behavioral Interviewing Certification (2013)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template60;
