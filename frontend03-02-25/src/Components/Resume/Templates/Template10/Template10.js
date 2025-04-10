import React, { forwardRef } from "react";
import styles from "./Template10.module.css";

const Template10 = forwardRef(({ information, sections, activeColor }, ref) => {
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

  const extractYear = (date) => (date ? new Date(date).getFullYear() : "");

  return (
    <div
      className={styles.resumeContainer}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      <div className={styles.resume}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <header>
            <h1>{info.basicInfo.name || "Your Name"}</h1>
            <p>{info.basicInfo.phone && `📞 ${info.basicInfo.phone}`}</p>
            <p>{info.basicInfo.email && `✉️ ${info.basicInfo.email}`}</p>
            {info.basicInfo.linkedin && (
              <p>
                LinkedIn:{" "}
                <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                  {info.basicInfo.linkedin}
                </a>
              </p>
            )}
            {info.basicInfo.github && (
              <p>
                GitHub:{" "}
                <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                  {info.basicInfo.github}
                </a>
              </p>
            )}
          </header>

          {/* Skills */}
          <div className={styles.section}>
            <h2>Skills</h2>
            <div className={styles.skillsContainer}>
              {info.skills.map((skill, index) => (
                <span key={index} className={styles.skillChip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className={styles.section}>
            <h2>Education</h2>
            {info.education.map((edu, index) => (
              <p key={index}>
                <strong>{edu.title}</strong> <br />
                {edu.college} ({extractYear(edu.startDate)} - {extractYear(edu.endDate)})
              </p>
            ))}
          </div>

          {/* Achievements */}
          <div className={styles.section}>
            <h2>Achievements</h2>
            <ul>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className={styles.section}>
            <h2>Languages</h2>
            <div className={styles.languagesContainer}>
              {info.languages.map((language, index) => (
                <span key={index} className={styles.languageChip}>
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.section}>
            <h2>Objective</h2>
            <p>{info.summary}</p>
          </div>

          <div className={styles.section}>
            <h2>Experience</h2>
            {info.workExperience.map((job, index) => (
              <div key={index}>
                <p>
                  <strong>{job.title}</strong> - {job.companyName} (
                  {extractYear(job.startDate)} - {extractYear(job.endDate)})
                </p>
                <ul>
                  {job.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={styles.section}>
            <h2>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h4>{project.title}</h4>
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {project.github}
                  </a>
                </p>
                <p>
                  <strong>Live Demo:</strong>{" "}
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.link}
                  </a>
                </p>
                <ul>
                  {project.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Template10;
