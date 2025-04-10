import React, { forwardRef, useState } from "react";
import styles from "./Template34.module.css";

const Template34 = forwardRef(({ information, sections, activeColor }, ref) => {
  //   const info = {
  //     basicInfo: information[sections.basicInfo]?.detail || {},
  //     workExp: information[sections.workExp]?.details || [],
  //     education: information[sections.education]?.details || [],
  //     projects: information[sections.project]?.details || [],
  //     achievements: information[sections.achievement]?.points || [],
  //     skills: information[sections.skills]?.points || [],
  //     languages: information[sections.languages]?.points || [],
  //     summary: information[sections.summary]?.detail || "",
  //     other: information[sections.other]?.other || "",
  //     certifications: information[sections.certifications]?.points || [],
  //   };

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
    certifications: [
      "Certified Kubernetes Administrator (CKA)",
      "Kubernetes and Cloud Native Associate (KCNA)",
      "AWS Cloud Practitioner",
    ],
    projects: [
      {
        title: "Portfolio Website",
        points: [
          "Built a personal portfolio website using React.js, Next.js, and Tailwind CSS.",
          "Implemented animations with Framer Motion and deployed on Vercel.",
        ],
      },
      {
        title: "E-commerce Platform",
        points: [
          "Developed a fully responsive e-commerce website with React and Redux Toolkit.",
          "Implemented product filtering, sorting, and cart functionality.",
        ],
      },
    ],
    achievements: [
      "Recognized as 'Employee of the Month' at Tech Corp - March 2022.",
      "Top 10 finalist in an international Hackathon.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "AWS",
      "Redux Toolkit",
      "MongoDB",
    ],
    languages: ["English (Fluent)", "Marathi (Native)", "Hindi (Native)"],
    summary: [
      "Experienced Frontend Developer with expertise in React.js, Next.js, and UI/UX optimization. Passionate about building high-performance web applications with clean and scalable code. Strong problem-solving skills, team leadership experience, and a commitment to continuous learning.",
    ],
    other: [
      "Volunteered as a mentor for coding bootcamps, guiding aspiring developers.",
      "Mastering in React.js and JavaScript fundamentals.",
    ],
  });
  return (
    <div ref={ref} className={styles["resume-container"]}>
      {/* Left Panel */}
      <div className={styles["left-panel"]}>
        <header>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <h4 className={styles.title}>{info.basicInfo.title}</h4>
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
        <section>
          <h2 className={styles["section-title"]}>Projects</h2>
          {info.projects.map((project, index) => (
            <div key={index}>
              <h3 className={styles["project-title"]}>{project.title}</h3>
              <ul className={styles["point-list"]}>
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
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
          <p className={styles["contact-info"]}>
            <a href="http://www.reallygreatsite.com">www.reallygreatsite.com</a>
          </p>
        </section>

        {/* <section>
          <h2 className={styles["section-title"]}>Skills</h2>
          <ul className={styles["skill-list"]}>
            {info.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section> */}

        <section>
          <h2 className={styles["section-title"]}>Skills</h2>
          <ul className={styles["skill-list"]}>
            {info.skills.map((skill, index) => (
              <li key={index} className={styles["skill-item"]}>
                {skill}
              </li>
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
            {info.certifications?.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* <section>
          <h2 className={styles["section-title"]}>Achievements</h2>
          <ul className={styles["info-list"]}>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section> */}

        <section>
          <h2 className={styles["section-title"]}>Additional Information</h2>
          <p className={styles["info-list"]}>
            <ul className={styles["info-list"]}>
              {info.other.map((other, index) => (
                <li key={index}>{other}</li>
              ))}
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
});

export default Template34;
