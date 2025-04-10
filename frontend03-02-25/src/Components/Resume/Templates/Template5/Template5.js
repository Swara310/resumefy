import React, { forwardRef } from "react";
import styles from "./Template5.module.css";
import backgroundImage from "./background.jpg";

const Template5 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    projects: information[sections.projects]?.details || [],
    summary: information[sections.summary]?.detail || "",
  };

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <div className={styles.resume} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {/* Header Section */}
        <header className={styles.header}>
  <div className={styles.headerLeft}>
    <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
    <p className={styles.title}>{info.basicInfo.title || "Your Position"}</p>
  </div>

  {/* Contact Info - Now on the Top Right Side */}
  <div className={styles.contactInfo}>
    {info.basicInfo.email && <span>✉️ {info.basicInfo.email}</span>}
    {info.basicInfo.phone && <span>📞 {info.basicInfo.phone}</span>}
    {info.basicInfo.linkedin && (
      <span>🔗 <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></span>
    )}
    {info.basicInfo.github && (
      <span>🐙 <a href={info.basicInfo.github} target="_blank" rel="noreferrer">GitHub</a></span>
    )}
  </div>
</header>


        <hr className={styles.line} />

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <section className={styles.skillsSection}>
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
                <p key={index}>
                  <strong>{edu.title}</strong> <br />
                  {edu.college} <br /> ({edu.startDate} - {edu.endDate})
                </p>
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

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <section>
              <h2>Summary</h2>
              <p>{info.summary}</p>
            </section>

            <section>
              <h2>Experience</h2>
              {info.workExperience.map((exp, index) => (
                <div key={index}>
                  <strong>{exp.title}</strong> - {exp.companyName} ({exp.startDate} - {exp.endDate})
                  <ul>
                    {exp.points?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects Section */}
            <section className={styles.section}>
              <h2>Projects</h2>
              {info.projects.map((project, index) => (
                <div key={index} className={styles.project}>
                  <h4>{project.title}</h4>
                  
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
                    {project.overview?.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className={styles.bottomLine} />
      </div>
    </div>
  );
});

export default Template5;
