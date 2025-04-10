import React, { forwardRef, useState } from "react";
import styles from "./Template18.module.css";
import backgroundImage from "./background.png"; // Store background image in Template15 folder

const Template18 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.points || [],
  };

  return (
     <div className={styles.resumeContainer}>
    <div
      className={styles.resume}
      ref={ref}
      style={{ "--theme-color": activeColor, backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <div className={styles.section}>
          <h3>Summary</h3>
          <p>{info.summary || "Your summary here..."}</p>
        </div>

        <div className={styles.section}>
          <h3>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index}>
              <p>
                <strong>{work.title}</strong> | {work.companyName} ({new Date(work.startDate).getFullYear()} -{" "}
                {work.endDate ? new Date(work.endDate).getFullYear() : "Present"})
              </p>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Projects</h3>
          {info.projects.map((project, index) => (
                    <div key={index} className={styles.projectItem}>
                      <p>
                        <strong>{project.title}</strong>
                      </p>
                      <ul className={styles.bulletList}>
                        {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
            ))}
           </ul>
                    </div>
                  ))}
          
        </div>

        <div className={styles.section}>
          <h3>Education</h3>
          {info.education.map((edu, index) => (
            <div key={index}>
              <p>
                <strong>{edu.title}</strong> | {edu.college} ({new Date(edu.startDate).getFullYear()} -{" "}
                {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"})
              </p>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Achievements</h3>
          <ul className={styles.bulletList}>
    {info.achievements.map((achievement, index) => (
      <li key={index}>{achievement}</li>
    ))}
  </ul>
        </div>

        <div className={styles.section}>
          <h3>Others</h3>
          <ul className={styles.bulletList}>
    {info.other.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
        </div>
      </div>



       {/* Left Panel */}
       <div className={styles.leftPanel}>
        <h1 className={styles.name}><strong>{info.basicInfo.name || "Your Name"}</strong></h1>
        <h2 className={styles.title}>{info.basicInfo.title || "Your Title"}</h2>

        <div className={styles.section}>
          <h3>Contact</h3>
          {info.basicInfo.email && <p>Email: {info.basicInfo.email}</p>}
          {info.basicInfo.phone && <p>Phone: {info.basicInfo.phone}</p>}
          {info.basicInfo.linkedin && (
            <p>
              LinkedIn: <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
            </p>
          )}
          {info.basicInfo.github && (
            <p>
              GitHub: <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
            </p>
          )}
        </div>
        <div className={styles.section}>
          <h3>Skills</h3>
          <div className={styles.skillContainer}>
            {info.skills.map((skill, index) => (
              <span key={index} className={styles.skillBubble}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Languages</h3>
          <div className={styles.languageContainer}>
            {info.languages.map((language, index) => (
              <span key={index} className={styles.languageBubble}>
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
    </div>
  );
});

export default Template18;
