import React, { forwardRef } from "react";
import styles from "./Template7.module.css";

const Template7 = forwardRef(({ information, sections, activeColor }, ref) => {
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
  };

  return (
    <div className={styles.resume} style={{ "--theme-color": activeColor }} ref={ref}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        {/* Profile Picture */}
        {info.basicInfo.profilePicture && (
          <div
            className={styles.photo}
            style={{
              backgroundImage: `url(${info.basicInfo.profilePicture})`,
            }}
          ></div>
        )}

        {/* Contact Section */}
        <div className={styles.contact}>
  <h3>Contact</h3>
  {info.basicInfo.email && <p>Email: {info.basicInfo.email}</p>}
  {info.basicInfo.phone && (
    <p>
      Phone:
      <br />
      {info.basicInfo.phone} {/* Move phone number to a new line */}
    </p>
  )}
  {info.basicInfo.address && <p>Address: {info.basicInfo.address}</p>}
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
</div>


        {/* Skills Section */}
        {info.skills.length > 0 && (
          <div className={styles.skills}>
            <h3>Skills</h3>
            <div className={styles.skillList}>
              {info.skills.map((skill, index) => (
                <span key={index} className={styles.skillChip}>{skill}</span>
              ))}
            </div>
          </div>
        )}

        {/* Languages Section */}
        {info.languages.length > 0 && (
          <div className={styles.languages}>
            <h3>Languages</h3>
            <ul className={styles.languageList}>
              {info.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <h1>{info.basicInfo.name}</h1>
        <h2>{info.basicInfo.title}</h2>
        <div className={styles.about}>
          <h3>About Me</h3>
          <p>{info.summary}</p>
        </div>


       {/* Projects Section */}
       <div className={styles.projects}>
  <h3>Projects</h3>
  <ul>
    {info.projects.map((project, index) => (
      <li key={index}>
        <strong>{project.title}</strong>
        <p>{project.overview}</p>

        {project.link && (
          <p>
            <strong>Deployed Link:</strong>{" "}
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.link}
            </a>
          </p>
        )}

        {project.github && (
          <p>
            <strong>GitHub Link:</strong>{" "}
            <a href={project.github} target="_blank" rel="noreferrer">
              {project.github}
            </a>
          </p>
        )}

        {project.points?.length > 0 && (
          <div>
            <strong>Description:</strong>
            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ))}
  </ul>
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

        {/* Education Section */}
        <div className={styles.education}>
          <h3>Education</h3>
          <ul>
            {info.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.title}</strong>
                <br />
                {edu.college} | {edu.startDate} - {edu.endDate}
              </li>
            ))}
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className={styles.workExperience}>
          <h3>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.job}>
              <p>
                <strong>{work.title}</strong> | {work.companyName}
              </p>
              <p>
                {work.startDate} - {work.endDate}
              </p>
              <ul>
                {work.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Other Section */}
        {info.other && (
          <div className={styles.other}>
            <h3>Other</h3>
            <p>{info.other}</p>
          </div>
        )}
      </div>
    </div>
  );
});

export default Template7;    