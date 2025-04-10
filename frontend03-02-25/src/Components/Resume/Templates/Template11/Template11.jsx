import React, { forwardRef, useState } from "react";
import styles from "./Template11.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Template11 = forwardRef(({ information, sections, activeColor }, ref) => {
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

/*const [info, setInfo] = useState({
    basicInfo: {
      name: "John Doe",
      title: "Frontend Developer",
      phone: "+1234567890",
      email: "john.doe@example.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    workExp: [
      {
        title: "Software Engineer",
        companyName: "Tech Corp",
        startDate: "2020-01-01",
        endDate: "2023-01-01",
        points: ["Developed React applications", "Optimized UI performance"],
      },
      {
        title: "Software Engineer",
        companyName: "Tech Corp",
        startDate: "2020-01-01",
        endDate: "2023-01-01",
        points: ["Developed React applications", "Optimized UI performance"],
      }
    ],
    education: [
      {
        title: "Bachelor's in Computer Science",
        college: "XYZ University",
        startDate: "2016-01-01",
        endDate: "2020-01-01",
      },
      {
        title: "Bachelor's in Computer Science",
        college: "XYZ University",
        startDate: "2016-01-01",
        endDate: "2020-01-01",
      },
    ],
    projects: [
      {
        title: "Portfolio Website",
        points: ["Built using React.js", "Deployed on Vercel"],
      },
      {
        title: "Portfolio Website",
        points: ["Built using React.js", "Deployed on Vercel"],
      },
      {
        title: "Portfolio Website",
        points: ["Built using React.js", "Deployed on Vercel"],
      },
    ],
    achievements: ["Employee of the Month - 2022","Employee of the Month - 2022","Employee of the Month - 2022"],
    skills: ["React", "JavaScript", "CSS","React", "JavaScript", "CSS","React", "JavaScript", "CSS"],
    languages: ["English", "Spanish","Marathi","Hindi"],
    summary: "Experienced frontend developer specializing in React.js. Experienced frontend developer specializing in React.js",
    other: "Volunteered as a mentor for coding bootcamps.",
  });
*/  


  // Extract first letter of the name
  const initial = info.basicInfo.name ? info.basicInfo.name.charAt(0).toUpperCase() : "";

  return (
    <div className={styles.resumeContainer}>

         
    <div className={styles.resume} style={{ "--theme-color": activeColor }} ref={ref}>
      {/* Left Column */}
      <div className={styles.leftColumn}>
        <div className={styles.circle} style={{ backgroundColor: activeColor }}>
          <p className={styles.bigLetter}>{initial}</p>
        </div>

        {/* Social Links */}
        <div className={styles.socials}>
          {info.basicInfo.phone && (
            <p>
              <FaPhone /> {info.basicInfo.phone}
            </p>
          )}
          {info.basicInfo.email && (
            <p>
              <FaEnvelope /> {info.basicInfo.email}
            </p>
          )}
          {info.basicInfo.github && (
            <p>
              <FaGithub /> <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
            </p>
          )}
          {info.basicInfo.linkedin && (
            <p>
              <FaLinkedin /> <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
            </p>
          )}
        </div>

        {/* Education */}
        <div className={styles.section}>
          <h3>Education</h3>
          <ul>
            {info.education.map((edu, index) => (
              <li key={index}>
                <strong>{edu.title}</strong> - {edu.college} ({edu.startDate.split("-")[0]} - {edu.endDate.split("-")[0]})
              </li>
            ))}
          </ul>
        </div>

        {/* Skills */}
        <div className={styles.section}>
          <h3>Skills</h3>
          <div className={styles.ellipticalContainer}>
            {info.skills.map((skill, index) => (
              <span key={index} className={styles.ellipticalBox}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className={styles.section}>
          <h3>Languages</h3>
          <div className={styles.ellipticalContainer}>
            {info.languages.map((language, index) => (
              <span key={index} className={styles.ellipticalBox}>
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
      <hr className={styles.verticalDottedLine} />
      {/* Right Column */}
      <div className={styles.rightColumn}>
        <h1>{info.basicInfo.name}</h1>
        <h2>{info.basicInfo.title}</h2>

        {/* Summary */}
        <div className={styles.section}>
          <h3>Summary</h3>
          <p>{info.summary}</p>
        </div>

        {/* Work Experience */}
        <div className={styles.section}>
          <h3>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index}>
              <p>
                <strong>{work.title}</strong> - {work.companyName} ({work.startDate.split("-")[0]} - {work.endDate.split("-")[0]})
              </p>
              <ul>
                {work.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className={styles.section}>
          <h3>Projects</h3>
          {info.projects.map((project, index) => (
            <div key={index}>
              <p>
                <strong>{project.title}</strong>
              </p>
              <ul>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className={styles.section}>
          <h3>Achievements</h3>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>

        {/* Others */}
            {info.other && (
              <div className={styles.section}>
            <h3>Others</h3>
            <p>{info.other}</p>
          </div>
        )}

      </div>
    </div>
    </div>
  );
});

export default Template11;
