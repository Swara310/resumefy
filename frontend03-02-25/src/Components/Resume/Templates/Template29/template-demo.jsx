import React from "react";
import styles from "./Template29.module.css";

const Template29 = ({ information, sections }) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExp: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.other || "",
    certifications: information[sections.certifications]?.points || [],
  };

  return (
    <div className={styles["resume-container"]}>
      {/* Left Panel */}
      <div className={styles["left-panel"]}>
        <header>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <p className={styles.summary}>{info.summary}</p>
        </header>

        <section>
          <h2 className={styles["section-title"]}>Work Experience</h2>
          {info.workExp.map((work, index) => (
            <div key={index}>
              <h3 className={styles["job-title"]}>
                {work.title}, {work.companyName}
              </h3>
              <p className={styles.date}>
                {work.startDate} - {work.endDate || "Present"}
              </p>
              <ul className={styles["job-list"]}>
                {work.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className={styles["section-title"]}>Educational Background</h2>
          {info.education.map((edu, index) => (
            <div key={index}>
              <h3 className={styles["degree-title"]}>{edu.title}</h3>
              <p className={styles.date}>
                {edu.startDate} - {edu.endDate || "Present"}
              </p>
              <p className={styles.institution}>{edu.college}</p>
            </div>
          ))}
        </section>
      </div>

      {/* Right Panel */}
      <div className={styles["right-panel"]}>
        <section>
          <h2 className={styles["section-title"]}>Contact</h2>
          <p className={styles["contact-info"]}>{info.basicInfo.address}</p>
          <p className={styles["contact-info"]}>{info.basicInfo.phone}</p>
          <p className={styles["contact-info"]}>
            <a href={`mailto:${info.basicInfo.email}`}>
              {info.basicInfo.email}
            </a>
          </p>
          <p className={styles["contact-info"]}>
            <a href={info.basicInfo.website}>{info.basicInfo.website}</a>
          </p>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Skills</h2>
          <ul className={styles["skill-list"]}>
            {info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Languages</h2>
          <ul className={styles["skill-list"]}>
            {info.languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Certifications</h2>
          <ul className={styles["certification-list"]}>
            {info.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Achievements</h2>
          <ul className={styles["info-list"]}>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Additional Information</h2>
          <p className={styles["info-list"]}>{info.other}</p>
        </section>
      </div>
    </div>
  );
};

export default Template29;
