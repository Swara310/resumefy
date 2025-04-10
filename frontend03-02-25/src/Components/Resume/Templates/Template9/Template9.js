import React, { forwardRef } from "react";
import styles from "./Template9.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Template9 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    summary: information[sections.summary]?.detail || "",
    workExperience: information[sections.workExp]?.details || [],
    projects: information[sections.project]?.details || [],
    education: information[sections.education]?.details || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    achievements: information[sections.achievement]?.points || [],
  };

  const extractYear = (date) => (date ? new Date(date).getFullYear() : "");

  return (
    <div
      className={styles.resumeContainer}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      {/* Header */}
      <header className={styles.header}>
        <h1>{info.basicInfo.name || "Your Name"}</h1>
        <h2>{info.basicInfo.title || "Your Title"}</h2>
        <div className={styles.contact}>
          {info.basicInfo.linkedin && (
            <div className={styles.contactItem}>
              <FaLinkedin className={styles.icon} />
              <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
                {info.basicInfo.linkedin}
              </a>
            </div>
          )}
          {info.basicInfo.github && (
            <div className={styles.contactItem}>
              <FaGithub className={styles.icon} />
              <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                {info.basicInfo.github}
              </a>
            </div>
          )}
          {info.basicInfo.phone && (
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <span>{info.basicInfo.phone}</span>
            </div>
          )}
          {info.basicInfo.email && (
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <span>{info.basicInfo.email}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      <section className={styles.summary}>
        <h3>Summary</h3>
        <p>{info.summary || "Add a brief summary about yourself here."}</p>
      </section>

      {/* Work Experience */}
      <section className={styles.workExperience}>
        <h3>Work Experience</h3>
        {info.workExperience.map((job, index) => (
          <div key={index} className={styles.job}>
            <h4>
              {job.title} - {job.companyName} ({extractYear(job.startDate)} - {extractYear(job.endDate)})
            </h4>
            <ul>
              {job.points?.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        <h3>Projects</h3>
        {info.projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <h4>{project.title}</h4>
            <p>
              <strong>GitHub:</strong> {" "}
              <a href={project.github} target="_blank" rel="noreferrer">
                {project.github}
              </a>
            </p>
            <p>
              <strong>Live Demo:</strong> {" "}
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
      </section>

      {/* Education */}
      <section className={styles.education}>
        <h3>Education</h3>
        {info.education.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <h4>{edu.title}</h4>
            <p>
              {edu.college} ({extractYear(edu.startDate)} - {extractYear(edu.endDate)})
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className={styles.skills}>
        <h3>Skills</h3>
        <div className={styles.skillsContainer}>
          {info.skills.map((skill, index) => (
            <span key={index} className={styles.skillChip}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className={styles.languages}>
        <h3>Languages</h3>
        <div className={styles.languagesContainer}>
          {info.languages.map((language, index) => (
            <span key={index} className={styles.languageChip}>
              {language}
            </span>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.achievements}>
        <h3>Achievements</h3>
        <ul>
          {info.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
});

export default Template9;