import React, { forwardRef } from "react";
import styles from "./Template55.module.css";

const Template55 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    achievements: information[sections.achievement]?.points || [],
    projects: information[sections.project]?.details || [],
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <h2 className={styles.title}>
            {info.basicInfo.title || "Your title"}
          </h2>
          <p className={styles.contactInfo}>
            {info.basicInfo.email && <span>{info.basicInfo.email} | </span>}
            {info.basicInfo.phone && <span>{info.basicInfo.phone} | </span>}
            {info.basicInfo.linkedin && (
              <>
                <a
                  className={styles.contactText}
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                |{" "}
              </>
            )}
            {info.basicInfo.github && (
              <a
                className={styles.contactText}
                href={info.basicInfo.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}
          </p>
        </header>

        {/* Summary Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Summary</h2>
          <p>{info.summary || "Provide a short summary about yourself."}</p>
        </section>

        {/* Work Experience Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>
          {info.workExperience.length > 0 ? (
            info.workExperience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <strong className={styles.jobTitle}>{exp.title}</strong> -{" "}
                {exp.companyName} ({exp.startDate} - {exp.endDate})
                <ul className={styles.bulletPoints}>
                  {exp.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No work experience added.</p>
          )}
        </section>

        {/* Education Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {info.education.length > 0 ? (
            info.education.map((edu, index) => (
              <div key={index} className={styles.educationItem}>
                <strong className={styles.degree}>{edu.title}</strong> -{" "}
                {edu.college} ({edu.startDate} - {edu.endDate})
              </div>
            ))
          ) : (
            <p>No education details available.</p>
          )}
        </section>

        {/* Skills Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Skills</h2>
          {info.skills.length > 0 ? (
            <ul className={styles.skillList}>
              {info.skills.map((skill, index) => (
                <li key={index} className={styles.skill}>
                  {skill}
                </li>
              ))}
            </ul>
          ) : (
            <p>No skills listed yet.</p>
          )}
        </section>

        {/* Languages Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Languages</h2>
          {info.languages?.length > 0 ? (
            <ul className={styles.skillList}>
              {info.languages.map((language, index) => (
                <li key={index} className={styles.skill}>
                  {language}
                </li>
              ))}
            </ul>
          ) : (
            <p>No languages listed yet.</p>
          )}
        </section>

        {/* Achievements Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Achievements</h2>
          {info.achievements.length > 0 ? (
            <ul>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          ) : (
            <p>No achievements listed yet.</p>
          )}
        </section>

        {/* Projects Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          {info.projects.length > 0 ? (
            info.projects.map((project, index) => (
              <div key={index} className={styles.projectItem}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                {project.github && (
                  <p>
                    <strong>GitHub:</strong>{" "}
                    <a href={project.github} target="_blank" rel="noreferrer">
                      {project.github}
                    </a>
                  </p>
                )}
                <ul className={styles.bulletPoints}>
                  {project.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No projects added yet.</p>
          )}
        </section>
      </div>
    </div>
  );
});

export default Template55;
