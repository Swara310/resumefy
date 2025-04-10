import React, { forwardRef, useState } from "react";
import styles from "./Template26.module.css";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Template26 = forwardRef(({ information, sections, activeColor }, ref) => {
  // const info = {
  //   basicInfo: information[sections.basicInfo]?.detail || {},
  //   workExp: information[sections.workExp]?.details || [],
  //   education: information[sections.education]?.details || [],
  //   projects: information[sections.project]?.details || [],
  //   achievements: information[sections.achievement]?.points || [],
  //   skills: information[sections.skills]?.points || [],
  //   languages: information[sections.languages]?.points || [],
  //   summary: information[sections.summary]?.detail || "",
  //   other: information[sections.other]?.other || "",
  // };
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
      {
        title: "Frontend Developer",
        companyName: "Web Solutions Inc.",
        startDate: "2018-06-01",
        endDate: "2019-12-31",
        points: [
          "Designed and implemented dynamic UI components using React.js and Tailwind CSS.",
          "Worked closely with backend developers to create RESTful API integrations.",
        ],
      },
    ],
    education: [
      {
        title: "Bachelor's in Computer Science",
        college: "XYZ University",
        startDate: "2016-01-01",
        endDate: "2020-01-01",
        points: [
          "Specialized in Web Development and Software Engineering.",
          "Completed coursework in Data Structures, Algorithms, and UI/UX Design.",
          "Led a student developer team to build an open-source project for the university.",
        ],
      },
    ],
    projects: [
      {
        title: "Portfolio Website",
        points: [
          "Built a personal portfolio website using React.js, Next.js, and Tailwind CSS.",
          "Showcases projects, blogs, and interactive resume with optimized performance.",
          "Implemented animations with Framer Motion and deployed on Vercel.",
        ],
      },
    ],
    achievements: [
      "Recognized as 'Employee of the Month' at Tech Corp - March 2022.",
      "Top 10 finalist in an international Hackathon with 500+ participants.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material-UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Git & GitHub",
      "Jest & Unit Testing",
    ],
    languages: [
      "English (Fluent)",
      "Spanish (Intermediate)",
      "Marathi (Native)",
      "Hindi (Native)",
    ],
    summary:
      "Experienced Frontend Developer with expertise in React.js, Next.js, and UI/UX optimization. Passionate about building high-performance web applications with clean and scalable code. Strong problem-solving skills, team leadership experience, and a commitment to continuous learning.",
    other:
      "Volunteered as a mentor for coding bootcamps, guiding aspiring developers in mastering React.js and JavaScript fundamentals. Passionate about open-source contributions and active in the web development community.",
  });

  return (
    <div className={styles.resumeContainer}>
      <div
        className={styles.resume}
        style={{ "--theme-color": activeColor }}
        ref={ref}
      >
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <h2 className={styles.title}>{info.basicInfo.title}</h2>
          <div className={styles.socials}>
            {info.basicInfo.email && (
              <p>
                <FaEnvelope /> {info.basicInfo.email}
              </p>
            )}
            {info.basicInfo.phone && (
              <p>
                <FaPhone /> {info.basicInfo.phone}
              </p>
            )}
            {info.basicInfo.linkedin && (
              <p>
                <FaLinkedin />
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {info.basicInfo.linkedin}
                </a>
              </p>
            )}
            {info.basicInfo.github && (
              <p>
                <FaGithub />
                <a
                  href={info.basicInfo.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  {info.basicInfo.github}
                </a>
              </p>
            )}
          </div>
        </header>
        {/* Projects */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Projects</h3>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.entry}>
              <strong>{project.title}</strong>
              <ol>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ol>
            </div>
          ))}
        </section>
        {/* Work Experience */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.entry}>
              <strong>{work.title}</strong> - {work.companyName} (
              {new Date(work.startDate).getFullYear()} -{" "}
              {work.endDate ? new Date(work.endDate).getFullYear() : "Present"})
              <ol>
                {work.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ol>
            </div>
          ))}
        </section>
        {/* Skills */}
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
        {/* Languages */}
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

        {/* Achievements */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Achievements</h3>
          {info.achievements.map((achievement, index) => (
            <div key={index} className={styles.entry}>
              <ol>
                <li key={index}>{achievement}</li>
              </ol>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
});

export default Template26;
