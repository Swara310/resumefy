import React, { forwardRef } from "react";
import styles from "./Template41.module.css";

const Template41 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    achievements: information[sections.achievement]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.other || [],
  };

  const extractDateRange = (start, end) =>
    `${start ? start : ""}${end ? " - " + end : " - Current"}`;

  const initials = info.basicInfo.name
    ? info.basicInfo.name.charAt(0).toUpperCase()
    : "";
  return (
    <div
      className={styles.resumeWrapper}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      <div className={styles.leftSection}>
        <div className={styles.initialsBox}>
          <h1>{initials}</h1>
        </div>
        <div className={styles.section}>
          <h3>Contact</h3>
          {info.basicInfo.email && <p>Email: {info.basicInfo.email}</p>}
          {info.basicInfo.phone && <p>Phone: {info.basicInfo.phone}</p>}
          {info.basicInfo.linkedin && (
            <p>
              LinkedIn:{" "}
              <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
            </p>
          )}
          {info.basicInfo.github && (
            <p>
              GitHub:{" "}
              <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
            </p>
          )}
        </div>

        <div className={styles.educationSection}>
          <h3>Education Qualification</h3>
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
          <h2>{info.basicInfo.name || "YOUR NAME"}</h2>
        </div>

        <div className={styles.section}>
          <h3>SUMMARY</h3>
          <p>{info.summary}</p>
        </div>

        <div className={styles.section}>
          <h3>SKILLS</h3>
          <div className={styles.bubbles}>
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
          <h3>Projects</h3>
          {info.projects.map((proj, i) => (
            <div key={i}>
              <strong>{proj.title}</strong>
              {proj.github && (
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a href={proj.github}>{proj.github}</a>
                </p>
              )}
              {proj.link && (
                <p>
                  <strong>Live Demo:</strong>{" "}
                  <a href={proj.link}>{proj.link}</a>
                </p>
              )}
              <ul>
                {proj.points?.map((point, j) => (
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
        <div className={styles.section}>
          <h3>Achievements</h3>
          <ul>
            {info.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Other</h3>
          <ul>
            {info.other.map((otherItem, i) => (
              <li key={i}>{otherItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Template41;
