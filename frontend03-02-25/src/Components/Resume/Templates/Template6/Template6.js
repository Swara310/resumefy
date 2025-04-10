import React, { forwardRef } from "react";
import styles from "./Template6.module.css";

const Template6 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.other || "",
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume} style={{ "--theme-color": activeColor }}>

        {/* Name & Title Section */}
        <header className={styles.header}>
          <h1>{info.basicInfo.name || "Your Name"}</h1>
          <p>{info.basicInfo.title || "Your Title"}</p>
        </header>

        {/* Top Horizontal Line */}
        <div className={styles.topDivider}></div>

        {/* Two-Column Layout */}
        <div className={styles.content}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            {/* Contact Section */}
            <div className={styles.section}>
              <h2>Contact</h2>
              {info.basicInfo.phone && <p>📞 {info.basicInfo.phone}</p>}
              {info.basicInfo.email && <p>✉️ {info.basicInfo.email}</p>}
              {info.basicInfo.linkedin && (
                <p>🔗 <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">{info.basicInfo.linkedin}</a></p>
              )}
              {info.basicInfo.github && (
                <p>🐙 <a href={info.basicInfo.github} target="_blank" rel="noreferrer">{info.basicInfo.github}</a></p>
              )}
            </div>

            {/* Skills Section */}
            <div className={styles.section}>
              <h2>Skills</h2>
              <div className={styles.skillsContainer}>
                {info.skills.map((skill, index) => (
                  <span key={index} className={styles.skillChip}>{skill}</span>
                ))}
              </div>
            </div>

            {/* Languages Section */}
            <div className={styles.section}>
              <h2>Languages</h2>
              <div className={styles.languagesContainer}>
                {info.languages.map((language, index) => (
                  <span key={index} className={styles.languageChip}>{language}</span>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className={styles.section}>
              <h2>Achievements</h2>
              <ul>
                {info.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Education Section */}
            <div className={styles.section}>
              <h2>Education</h2>
              {info.education.map((edu, index) => (
                <p key={index}>
                  <strong>{edu.title}</strong> at {edu.college} ({edu.startDate} - {edu.endDate})
                </p>
              ))}
            </div>
          </div>

          {/* Vertical Divider */}
          <div className={styles.verticalDivider}></div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            {/* Summary Section */}
            <div className={styles.section}>
              <h2>Summary</h2>
              <p>{info.summary}</p>
            </div>

            {/* Work Experience Section */}
            <div className={styles.section}>
              <h2>Work Experience</h2>
              {info.workExperience.map((job, index) => (
                <div key={index} className={styles.job}>
                  <p><strong>{job.title}</strong> - {job.companyName} ({job.startDate} - {job.endDate})</p>
                  <ul>
                    {job.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects Section */}
            <div className={styles.section}>
              <h2>Projects</h2>
              {info.projects.map((project, index) => (
                <div key={index} className={styles.project}>
                  <h4>{project.title}</h4>
                  {project.github && (
                    <p>
                      <strong>GitHub:</strong>{" "}
                      <a href={project.github} target="_blank" rel="noreferrer">{project.github}</a>
                    </p>
                  )}
                  {project.link && (
                    <p>
                      <strong>Live Demo:</strong>{" "}
                      <a href={project.link} target="_blank" rel="noreferrer">{project.link}</a>
                    </p>
                  )}
                  <ul>
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <div className={styles.bottomDivider}></div>
      </div>
    </div>
  );
});

export default Template6;
