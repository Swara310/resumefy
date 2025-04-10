import React, { forwardRef } from "react";
import styles from "./Template58.module.css";

const Template58 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
  };

  const extractDateRange = (start, end) => {
    return `${start ? start : ""}${end ? " - " + end : " - Current"}`;
  };

  return (
    <div
      className={styles.resumeWrapper}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      <div className={styles.leftSection}>
        <div className={styles.initialsBox}>
          <h1>{info.basicInfo.initials || "DA"}</h1>
        </div>

        <div className={styles.contactInfo}>
          <p>{info.basicInfo.address}</p>
          <p>{info.basicInfo.phone}</p>
          <p>{info.basicInfo.email}</p>
        </div>

        <div className={styles.educationSection}>
          <h3>EDUCATION AND TRAINING</h3>
          {info.education.map((edu, i) => (
            <p key={i}>
              <strong>{edu.title}</strong> <br />
              {edu.college}, {edu.location}, {edu.startDate}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.header}>
          <h2>{info.basicInfo.name || "DIYA AGARWAL"}</h2>
        </div>

        <div className={styles.section}>
          <h3>SUMMARY</h3>
          <p>{info.summary}</p>
        </div>

        <div className={styles.section}>
          <h3>SKILLS</h3>
          <div className={styles.skillsGrid}>
            {info.skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>EXPERIENCE</h3>
          {info.workExperience.map((exp, i) => (
            <div key={i} className={styles.experienceBlock}>
              <strong>{exp.title}</strong> <br />
              <em>
                {exp.companyName} | {exp.location} |{" "}
                {extractDateRange(exp.startDate, exp.endDate)}
              </em>
              <ul>
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>LANGUAGES</h3>
          {info.languages.map((lang, i) => (
            <p key={i}>{lang}</p>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Template58;
