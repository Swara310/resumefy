import React, { forwardRef, useState } from "react";
import styles from "./Template31.module.css";

const Template31 = forwardRef(({ information, sections, activeColor }, ref) => {
  const [info, setInfo] = useState({
    basicInfo: {
      name: "John Doe",
      title: "Frontend Developer | React.js Specialist",
      phone: "+1234567890",
      email: "john.doe@example.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      portfolio: "https://johndoe.dev",
      location: "San Francisco, CA, USA",
    },
    workExp: [
      {
        title: "Senior Frontend Engineer",
        companyName: "Tech Corp",
        startDate: "2020-01-01",
        endDate: "2023-01-01",
        points: [
          "Developed and maintained responsive React applications, improving UI performance by 30%.",
          "Led a team of 5 developers, conducting code reviews and mentoring junior engineers.",
          "Implemented Redux for efficient state management, reducing API calls by 40%.",
        ],
      },
    ],
    education: [
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
        points: [
          "Built a personal portfolio website using React.js, Next.js, and Tailwind CSS.",
          "Showcases projects, blogs, and interactive resume with optimized performance.",
        ],
      },
    ],
    achievements: [
      "Recognized as 'Employee of the Month' at Tech Corp - March 2022.",
    ],
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "Redux Toolkit"],
    languages: [
      "English (Fluent)",
      "Spanish (Intermediate)",
      "Marathi (Fluent)",
    ],
    certifications: ["Certified React Developer", "AWS Cloud Practitioner"],
    summary:
      "Experienced Frontend Developer with expertise in React.js, Next.js, and UI/UX optimization.",
    other: [
      "Volunteered as a mentor for coding bootcamps, guiding aspiring developers.",
    ],
  });

  return (
    <div className={styles.resumeContainer} ref={ref}>
      <header className={styles.resumeHeader}>
        <h1>{info.basicInfo.name}</h1>
        <p className={styles.summary}>{info.summary}</p>
      </header>
      <div className={styles.panel}>
        <div className={styles.leftPanel}>
          <section>
            <h2>Contact</h2>
            <p>{info.basicInfo.location}</p>
            <p>{info.basicInfo.phone}</p>
            <p>
              <a href={`mailto:${info.basicInfo.email}`}>
                {info.basicInfo.email}
              </a>
            </p>
            <p>
              <a href={info.basicInfo.github}>GitHub</a> |{" "}
              <a href={info.basicInfo.linkedin}>LinkedIn</a>
            </p>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              {info.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Certifications</h2>
            <ul>
              {info.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Languages</h2>
            <ul>
              {info.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </section>
        </div>
        <div className={styles.rightPanel}>
          <section>
            <h2>Work Experience</h2>
            {info.workExp.map((work, index) => (
              <div key={index}>
                <h3>
                  {work.title}, {work.companyName}
                </h3>
                <p className={styles.date}>
                  {work.startDate} - {work.endDate || "Present"}
                </p>
                <ul>
                  {work.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
          <section>
            <h2>Educational Background</h2>
            {info.education.map((edu, index) => (
              <div key={index}>
                <h3>{edu.title}</h3>
                <p className={styles.date}>
                  {edu.startDate} - {edu.endDate || "Present"}
                </p>
                <p className={styles.college}>{edu.college}</p>
              </div>
            ))}
          </section>
          <section>
            <h2>Projects</h2>
            {info.projects.map((project, index) => (
              <div key={index}>
                <h3>{project.title}</h3>
                <ul>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
});

export default Template31;
