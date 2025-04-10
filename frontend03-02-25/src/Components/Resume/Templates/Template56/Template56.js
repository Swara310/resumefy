import React, { forwardRef } from "react";
import styles from "./Template56.module.css";

const Template56 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    workExp: information[sections.workExp]?.details || [],
    projects: information[sections.project]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
  };

  // Helper function to extract only the year from the date
  const extractYear = (date) => (date ? new Date(date).getFullYear() : "");

  return (
    <div
      className={styles.resumeContainer}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      {/* Left Section */}
      <div className={styles.leftSection}>
        {/* Profile */}
        <div className={styles.profile}>
          <h1 className={styles.title}>{info.basicInfo.name || "Your Name"}</h1>
          <p>{info.basicInfo.title || "Your Title"}</p>
          <div className={styles.socialLinks}>
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
            {info.basicInfo.github && (
              <p>
                <a
                  href={info.basicInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className={styles.section}>
          <h2>Skills</h2>
          <ul>
            {info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Languages Section */}
        <div className={styles.section}>
          <h2>Languages</h2>
          <ul>
            {info.languages?.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className={`${styles.section} ${styles.contactSection}`}>
          <h2>Contact</h2>
          {info.basicInfo.phone && (
            <p className={styles.contactInfo}>Phone: {info.basicInfo.phone}</p>
          )}
          {info.basicInfo.email && (
            <p className={styles.contactInfo}>Email: {info.basicInfo.email}</p>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        {/* Summary Section */}
        <div className={styles.summary}>
          <h3>Summary</h3>
          <p>{info.summary || "Add a brief summary about yourself here."}</p>
        </div>

        {/* Work History Section */}
        <div className={styles.workHistory}>
          <h3>Work History</h3>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.workItem}>
              <p>
                <strong>{work.title}</strong> - {work.companyName} (
                {extractYear(work.startDate)} - {extractYear(work.endDate)})
              </p>
              <ul>
                {work.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className={styles.projects}>
          <h3>Projects</h3>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <p>
                <strong>{project.title}</strong>
              </p>
              {project.github && (
                <p>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </p>
              )}
              {project.link && (
                <p>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                </p>
              )}
              <ul>
                {project.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className={styles.education}>
          <h3>Education</h3>
          {info.education.map((edu, index) => (
            <p key={index}>
              <strong>{edu.title}</strong> - {edu.college} (
              {extractYear(edu.startDate)} - {extractYear(edu.endDate)})
            </p>
          ))}
        </div>

        {/* Achievements Section */}
        <div className={styles.achievements}>
          <h3>Achievements</h3>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Template56;
