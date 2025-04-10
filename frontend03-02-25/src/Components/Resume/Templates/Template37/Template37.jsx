import React, { forwardRef, useState } from "react";
import styles from "./Template37.module.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import "../multiPage.css";

const Template37 = forwardRef(({ information, sections, activeColor }, ref) => {
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
  };*/
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
        <div className={styles.resumeWrapper} ref={ref}>
 <div
      className={`${styles.resume} multipage`} // Apply global multipage class
      ref={ref}
      style={{ "--theme-color": activeColor }}
    >
      
      {/* Left Sidebar */}
<div className={styles.leftPanel}>
  {/* Display only on the first page */}
  <div className="leftContent">
    <div className={styles.hexagon}>
      <span>{getInitials(info.basicInfo.name)}</span>
    </div>

    {/* Contact Details - Show only on first page */}
    <div className={styles.contact}>
      {info.basicInfo.email && <p><FaEnvelope className={styles.icon} /><br />{info.basicInfo.email}</p>}
      {info.basicInfo.phone && <p><FaPhone className={styles.icon} /><br />{info.basicInfo.phone}</p>}
      {info.basicInfo.github && <p><FaGithub className={styles.icon} /><br /><a href={info.basicInfo.github}>{info.basicInfo.github}</a></p>}
      {info.basicInfo.linkedin && <p><FaLinkedin className={styles.icon} /><br /><a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a></p>}
    </div>
    
    {/* Skills Section - Show only on first page */}
    <div className={`${styles.section} page-break`}>
      <h3 className={styles.sideHeader}>Skills</h3>
      <p>{info.skills.join(", ") || "N/A"}</p>
    </div>

    {/* Education Section - Show only on first page */}
    <div className={`${styles.section} page-break`}>
      <h3 className={styles.sideHeader}>Education</h3>
      {info.education.map((edu, index) => (
        <p key={index}>
          <strong>{edu.title}</strong><br />
          {edu.college} ({new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"})
        </p>
      ))}
    </div>
  </div>
</div>


      {/* Right Content */}
      <div className={styles.rightPanel}>
        {/* Name and Title */}
        <div className={styles.nameStrip}>
          <h1>{info.basicInfo.name || "Your Name"}</h1>
        </div>
        <h2 className={styles.title}>{info.basicInfo.title || "Your Title"}</h2>

        {/* Summary */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Summary</h3>
          <p className={styles.justified}>{info.summary || "Your summary here..."}</p>
        </div>

        {/* Work Experience */}

        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Work Experience</h3>
          {info.workExp.map((work, index) => (
            <div key={index} className={styles.workItem}>
              <p>
                <strong>{work.title}</strong> - {work.companyName} (
                {new Date(work.startDate).getFullYear()} -{" "}
                {work.endDate ? new Date(work.endDate).getFullYear() : "Present"})
              </p>
              <ul>
                {work.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Projects</h3>
          {info.projects.map((project, index) => (
            <div key={index} className={styles.projectItem}>
              <p>
                <strong>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </strong>
              </p>
              <ul>
                    {project.overview.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
            </div>
          ))}
        </section>

        {/* Achievements */}
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Achievements</h3>
          <ul>
            {info.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        {/* Others */}
        <section className={`${styles.section} page-break`}>
          <h3 className={styles.sectionTitle}>Others</h3>
          <ul>
            {info.other.map((other, index) => (
              <li key={index}>{other}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    </div>
  </div>
  );
});

export default Template37;
