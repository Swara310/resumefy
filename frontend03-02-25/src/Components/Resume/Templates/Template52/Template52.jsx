import React, { forwardRef } from "react";
import styles from "./Template52.module.css";

const Template52 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: Array.isArray(information[sections.workExp]?.details)
      ? information[sections.workExp].details
      : [],
    education: Array.isArray(information[sections.education]?.details)
      ? information[sections.education].details
      : [],
    achievements: Array.isArray(information[sections.achievement]?.points)
      ? information[sections.achievement].points
      : [],
    skills: Array.isArray(information[sections.skills]?.points)
      ? information[sections.skills].points
      : [],
    projects: Array.isArray(information[sections.project]?.details)
      ? information[sections.project].details
      : [],
    summary: information[sections.summary]?.detail || "",
  };

  return (
    <div ref={ref} className={styles.resumeContainer}>
      {/* Left Panel - Personal Info & Skills */}
      <div
        className={styles.leftPanel}
        style={{ backgroundColor: activeColor }}
      >
        <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
        <p className={styles.title}>
          {info.basicInfo.title || "Your Position"}
        </p>

        <div className={styles.contactInfo}>
          {info.basicInfo.email && <p>✉ {info.basicInfo.email}</p>}
          {info.basicInfo.phone && <p>📞 {info.basicInfo.phone}</p>}
          {info.basicInfo.linkedin && (
            <p>
              🔗{" "}
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
              🐙{" "}
              <a href={info.basicInfo.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </p>
          )}
        </div>

        <section>
          <h2>Skills</h2>
          <ul className={styles.skillList}>
            {info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Education</h2>
          {info.education.map((edu, index) => (
            <div key={index} className={styles.educationItem}>
              <h3>{edu.title}</h3>
              <p>
                {edu.college} ({edu.startDate} - {edu.endDate})
              </p>
            </div>
          ))}
        </section>
      </div>

      {/* Right Panel - Summary, Experience, Projects, Achievements */}
      <div className={styles.rightPanel}>
        <section>
          <h2>Professional Summary</h2>
          <p>{info.summary}</p>
        </section>

        <section>
          <h2>Work Experience</h2>
          {info.workExperience.length > 0 ? (
            info.workExperience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <h3>
                  {exp.title} - {exp.companyName}
                </h3>
                <p className={styles.date}>
                  {exp.startDate} - {exp.endDate}
                </p>
                <ul>
                  {Array.isArray(exp.points) &&
                    exp.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              </div>
            ))
          ) : (
            <p>No work experience added yet.</p>
          )}
        </section>

        <section>
          <h2>Projects</h2>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <h3>{project.title}</h3>
              {project.github && (
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    {project.github}
                  </a>
                </p>
              )}
              {project.link && (
                <p>
                  <strong>Live Demo:</strong>{" "}
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.link}
                  </a>
                </p>
              )}
              <ul>
                {Array.isArray(project.points) &&
                  project.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2>Achievements</h2>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
});

export default Template52;
