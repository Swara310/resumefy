import React, { forwardRef } from "react";
import styles from "./Template50.module.css";

const Template50 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.project]?.details || [],
    summary: information[sections.summary]?.detail || "",
    languages: information[sections.languages]?.points || [],
    other: {
      sectionTitle: information[sections.other]?.sectionTitle || "Other", // ✅ Manual Title Input
      detail: information[sections.other]?.detail || "", // ✅ Manual Data Input
    },
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.profile}>
            <h1>{info.basicInfo.name || "Your Name"}</h1>
            <p>{info.basicInfo.title || "Your Position"}</p>
          </div>

          {/* Contact Info */}
          <div className={styles.contact}>
            {info.basicInfo.email && <p>✉️ {info.basicInfo.email}</p>}
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

          {/* Skills */}
          <section className={styles.section}>
            <h2>Skills</h2>
            <ul className={styles.skillsList}>
              {info.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          {/* Languages */}
          <section className={styles.section}>
            <h2>Languages</h2>
            <ul>
              {info.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </section>

          {/* ✅ Moved Other Section Below Languages */}
          <section className={styles.section}>
            <h2>{info.other.sectionTitle}</h2>
            <p>{info.other.detail ? info.other.detail : ""}</p>
          </section>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Summary */}
          <section className={styles.section}>
            <h2>Summary</h2>
            <p>{info.summary}</p>
          </section>

          {/* Work Experience */}
          <section className={styles.section}>
            <h2>Experience</h2>
            {info.workExperience.map((exp, index) => (
              <div key={index}>
                <strong>{exp.title}</strong> - {exp.companyName} (
                {exp.startDate} - {exp.endDate})
                <ul>
                  {exp.points?.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className={styles.section}>
            <h2>Education</h2>
            {info.education.map((edu, index) => (
              <p key={index}>
                <strong>{edu.title}</strong> <br />
                {edu.college} <br /> ({edu.startDate} - {edu.endDate})
              </p>
            ))}
          </section>

          {/* Projects */}
          <section className={styles.section}>
            <h2>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index} className={styles.project}>
                <h4>{project.title}</h4>

                {(project.github || project.link) && (
                  <p>
                    {project.github && (
                      <>
                        <strong>GitHub:</strong>{" "}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.github}
                        </a>
                      </>
                    )}

                    {project.github && project.link && " | "}

                    {project.link && (
                      <>
                        <strong>Live Demo:</strong>{" "}
                        <a href={project.link} target="_blank" rel="noreferrer">
                          {project.link}
                        </a>
                      </>
                    )}
                  </p>
                )}

                {project.overview && <p>{project.overview}</p>}
              </div>
            ))}
          </section>

          {/* Achievements */}
          <section className={styles.section}>
            <h2>Achievements</h2>
            <ul>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
});

export default Template50;
