import React, { forwardRef, useState } from "react";
import styles from "./Template27.module.css";
import backgroundImage from "./background.png"; // Store background image in Template15 folder

const Template15 = forwardRef(({ information, sections, activeColor }, ref) => {
  //   const info = {
  //     basicInfo: information[sections.basicInfo]?.detail || {},
  //     workExp: information[sections.workExp]?.details || [],
  //     education: information[sections.education]?.details || [],
  //     projects: information[sections.project]?.details || [],
  //     achievements: information[sections.achievement]?.points || [],
  //     skills: information[sections.skills]?.points || [],
  //     languages: information[sections.languages]?.points || [],
  //     summary: information[sections.summary]?.detail || "",
  //     other: information[sections.other]?.points || [],
  //   };

  const [info, setInfo] = useState({
    basicInfo: {
      name: "John Doe",
      title: "Frontend Developer | React.js Specialist",
      phone: "+1234567890",
      email: "john.doe@example.com",
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    workExp: [
      {
        title: "Senior Frontend Engineer",
        companyName: "Tech Corp",
        startDate: "2020-01-01",
        endDate: "2023-01-01",
        location: "London",
        points: [
          "Developed and maintained responsive React applications, improving UI performance by 30%.",
          "Led a team of 5 developers, conducting code reviews and mentoring junior engineers.",
        ],
      },
      {
        title: "Frontend Developer",
        companyName: "Web Solutions Inc.",
        startDate: "2018-06-01",
        endDate: "2019-12-31",
        location: "London",
        points: [
          "Developed and maintained responsive React applications, improving UI performance by 30%.",
          "Led a team of 5 developers, conducting code reviews and mentoring junior engineers.",
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
          "Implemented animations with Framer Motion and deployed on Vercel.",
          "Implemented Redux for efficient state management, reducing API calls by 40%.",
        ],
      },
      {
        title: "E-commerce Platform",
        points: [
          "Developed a fully responsive e-commerce website with React and Redux Toolkit.",
          "Implemented product filtering, sorting, and cart functionality.",
          "Implemented Redux for efficient state management, reducing API calls by 40%.",
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
    ],
    languages: [
      "English (Fluent)",
      "Spanish (Intermediate)",
      "Marathi (Native)",
      "Hindi (Native)",
    ],
    summary:
      "Experienced Frontend Developer with expertise in React.js, Next.js, and UI/UX optimization. Passionate about building high-performance web applications with clean and scalable code. Strong problem-solving skills, team leadership and experience.",
    other: [
      "Volunteered as a mentor for coding bootcamps",
      "guiding aspiring developers in mastering React.js and JavaScript fundamentals.",
      " Passionate about open-source contributions and active in the web development community.",
    ],
  });

  return (
    <div className={styles.resumeContainer}>
      <div
        className={styles.resume}
        ref={ref}
        style={{
          "--theme-color": activeColor,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Left Panel */}
        {/* Name */}
        <div className={styles.leftPanel}>
          <h1 className={styles.name}>
            <strong>{info.basicInfo.name || "Your Name"}</strong>
          </h1>
          <h2 className={styles.title}>
            {info.basicInfo.title || "Your Title"}
          </h2>
          {/* Contact */}
          <div className={styles.section}>
            <h3>Contact</h3>
            {info.basicInfo.email && <p>Email: {info.basicInfo.email}</p>}
            {info.basicInfo.phone && <p>Phone: {info.basicInfo.phone}</p>}
            {info.basicInfo.linkedin && (
              <p>
                LinkedIn:{" "}
                <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
              </p>
            )}
            {info.basicInfo.github && (
              <p>
                GitHub:{" "}
                <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
              </p>
            )}
          </div>
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
        </div>

        {/* Right Panel */}
        {/* Summary */}
        <div className={styles.rightPanel}>
          <div className={styles.section}>
            <h3>Summary</h3>
            <p>{info.summary || "Your summary here..."}</p>
          </div>
          {/* Work Experience */}
          <div className={styles.section}>
            <h3>Work Experience</h3>
            {info.workExp.map((work, index) => (
              <div key={index} className={styles.workItem}>
                <p>
                  <strong>{work.title}</strong> | {work.companyName} ({" "}
                  {new Date(work.startDate).getFullYear()} -{" "}
                  {work.endDate
                    ? new Date(work.endDate).getFullYear()
                    : "Present"}
                  )
                </p>
                <p>
                  <em>{work.location}</em>
                </p>
                <ul>
                  {work.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
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

          {/* Education */}
          <div className={styles.section}>
            <h3>Education</h3>
            {info.education.map((edu, index) => (
              <div key={index}>
                <p>
                  <strong>{edu.title}</strong> | {edu.college} (
                  {new Date(edu.startDate).getFullYear()} -{" "}
                  {edu.endDate
                    ? new Date(edu.endDate).getFullYear()
                    : "Present"}
                  )
                </p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className={styles.section}>
            <h3>Achievements</h3>
            <ul className={styles.bulletList}>
              {info.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          {/* Others */}
          <div className={styles.section}>
            <h3>Others</h3>
            <ul className={styles.bulletList}>
              {info.other.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Template15;
