import React, { forwardRef, useState } from "react";
import styles from "./Template24.module.css";
import "../multiPage.css";


const Template24 = forwardRef(({ information, sections, activeColor }, ref) => {
  /*const info = {
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
*/

  const [info, setInfo] = useState({
    basicInfo: {
      name: "John Doe",
      title: "Frontend Developer | React.js Specialist",
      phone: "+1234567890",
      email: "john.doe@example.com",
      github: "https://github.com/johndoe-445564/",
      linkedin: "https://linkedin.com/in/johndoe-44543",
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
          "Implemented Redux for efficient state management, reducing API calls by 40%."
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
          "Implemented Redux for efficient state management, reducing API calls by 40%."
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
        overview: [
          "Built a personal portfolio website using React.js, Next.js, and Tailwind CSS.",
          "Showcases projects, blogs, and interactive resume with optimized performance.",
          "Implemented animations with Framer Motion and deployed on Vercel.",
        ],
      },
      {
        title: "E-commerce Platform",
        overview: [
          "Developed a fully responsive e-commerce website with React and Redux Toolkit.",
          "Integrated Stripe API for secure payments and Firebase for authentication.",
          "Implemented product filtering, sorting, and cart functionality.",
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
      "CI/CD Pipelines",
      "Agile Development",
      "Performance Optimization",
    ],
    languages: [
      "English (Fluent)",
      "Spanish (Intermediate)",
      "Marathi (Native)",
      "Hindi (Native)",
    ],
    summary:
      "Experienced Frontend Developer with expertise in React.js, Next.js, and UI/UX optimization. Passionate about building high-performance web applications with clean and scalable code. Strong problem-solving skills, team leadership experience, and a commitment to continuous learning.",
    other: [
      "Volunteered as a mentor for coding bootcamps",
      "guiding aspiring developers in mastering React.js and JavaScript fundamentals.",
      " Passionate about open-source contributions and active in the web development community.",
    ],
  });
  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.trim().split(" ");
    return nameParts.length > 1
      ? nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase()
      : nameParts[0][0].toUpperCase();
  };
  
  return (
    <div className={styles.resumeContainer}>
    <div
      className={`${styles.resume} multipage`} // Apply global multipage class
      ref={ref}
      style={{ "--theme-color": activeColor }}
    >
      {/* Header Section */}
      <div className={`${styles.header} page-break`}>
        <div className={styles.left}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <h2 className={styles.title}>{info.basicInfo.title || "Your Title"}</h2>
        </div>
        <div className={styles.right}>
          {info.basicInfo.phone && <p><strong>Phone:</strong> {info.basicInfo.phone}</p>}
          {info.basicInfo.email && <p><strong>Email:</strong> {info.basicInfo.email}</p>}
          {info.basicInfo.github && <p><strong>GitHub:</strong> <a href={info.basicInfo.github} target="_blank" rel="noreferrer">{info.basicInfo.github}</a></p>}
          {info.basicInfo.linkedin && <p><strong>LinkedIn:</strong> <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">{info.basicInfo.linkedin}</a></p>}
        </div>
      </div>

      {/* Summary Section */}
      {info.summary && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Summary</h3>
          <div>{info.summary}</div>
        </section>
      )}

      {/* Work Experience Section */}
      {info.workExp.length > 0 && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.workItem}>
              <strong>{work.title}</strong> - {work.companyName} ({new Date(work.startDate).getFullYear()} - {work.endDate ? new Date(work.endDate).getFullYear() : "Present"})
              {work.points?.length > 0 && (
                <ul>
                  {work.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Projects Section */}
      {info.projects.length > 0 && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Projects</h3>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <a href={project.github} target="_blank" rel="noreferrer" className={styles.projectLink}>{project.title}</a>
              {project.overview?.length > 0 && (
                <ul>
                  {project.overview.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education Section */}
      {info.education.length > 0 && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Education</h3>
          <table className={styles.educationTable}>
            <thead>
              <tr>
                <th>Title</th>
                <th>School/College</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {info.education.map((edu, index) => (
                <tr key={index}>
                  <td>{edu.title}</td>
                  <td>{edu.college}</td>
                  <td>{edu.startDate ? new Date(edu.startDate).getFullYear() : ""} - {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      {/* Skills Section */}
      {info.skills.length > 0 && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Skills</h3>
          <div className={styles.skillContainer}>
            {info.skills.map((skill, index) => (
              <span key={index} className={styles.skillBubble}>{skill}</span>
            ))}
          </div>
        </section>
      )}

      {/* Languages Section */}
      {info.languages.length > 0 && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Languages</h3>
          <div className={styles.languageContainer}>
            {info.languages.map((language, index) => (
              <span key={index} className={styles.languageBubble}>{language}</span>
            ))}
          </div>
        </section>
      )}

      {/* Achievements Section */}
      {info.achievements.length > 0 && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Achievements</h3>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Others Section */}
      {info.other.length > 0 && (
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Others</h3>
          <ul>
            {info.other.map((other, index) => (
              <li key={index}>{other}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  </div>
  );
});

export default Template24;
