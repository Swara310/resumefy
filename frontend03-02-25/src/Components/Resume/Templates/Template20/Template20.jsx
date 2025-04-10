import React, { forwardRef ,useState} from "react";
import styles from "./Template20.module.css";
import backgroundImage from "./background.png";
const Template20 = forwardRef(({ information, sections, activeColor }, ref) => {
  
  
    const info = {
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
  

/*
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
            location:"London"
          },
          {
            title: "Frontend Developer",
            companyName: "Web Solutions Inc.",
            startDate: "2018-06-01",
            endDate: "2019-12-31",
            location:"London",
          }
        ],
        education: [
          {
            title: "Bachelor's in Computer Science",
            college: "XYZ University",
            startDate: "2016-01-01",
            endDate: "2020-01-01",
           
          }
        ],
        projects: [
          {
            title: "Portfolio Website",
            overview: [
              "Built a personal portfolio website using React.js, Next.js, and Tailwind CSS.",
              "Showcases projects, blogs, and interactive resume with optimized performance.",
              "Implemented animations with Framer Motion and deployed on Vercel."
            ]
          },
          {
            title: "E-commerce Platform",
            overview: [
              "Developed a fully responsive e-commerce website with React and Redux Toolkit.",
              "Integrated Stripe API for secure payments and Firebase for authentication.",
              "Implemented product filtering, sorting, and cart functionality."
            ]
          }
        ],
        achievements: [
          "Recognized as 'Employee of the Month' at Tech Corp - March 2022.",
          "Top 10 finalist in an international Hackathon with 500+ participants.",
          ],
        skills: [
          "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript",
          "Redux Toolkit", "Tailwind CSS", "Material-UI",
          "Node.js", "Express.js", "MongoDB", "RESTful APIs",
          "Git & GitHub", "Jest & Unit Testing", "CI/CD Pipelines",
          "Agile Development", "Performance Optimization"
        ],
        languages: ["English (Fluent)", "Spanish (Intermediate)", "Marathi (Native)", "Hindi (Native)"],
        summary: "Experienced Frontend Developer with expertise in React.js, Next.js, and UI/UX optimization. Passionate about building high-performance web applications with clean and scalable code. Strong problem-solving skills, team leadership experience, and a commitment to continuous learning.",
        other:[ "Volunteered as a mentor for coding bootcamps", "guiding aspiring developers in mastering React.js and JavaScript fundamentals."," Passionate about open-source contributions and active in the web development community."],
        });*/

  return (
    <div className={styles.resumeContainer}>
    <div
      className={styles.resume}
      ref={ref}
      style={{ "--theme-color": activeColor, backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.name}>{info.basicInfo.name}</h1>
        <h2 className={styles.title}>{info.basicInfo.title}</h2>
      </header>

      {/* socials */}
      <section className={styles.socialsGrid}>
  <div><strong>Email:</strong> {info.basicInfo.email}</div>
  <div><strong>Phone:</strong> {info.basicInfo.phone}</div>
  <div><strong>LinkedIn:</strong> <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">{info.basicInfo.linkedin}</a></div>
  <div><strong>GitHub:</strong> <a href={info.basicInfo.github} target="_blank" rel="noreferrer">{info.basicInfo.github}</a></div>
</section>


      {/* Summary */}
      <br></br> <br></br>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Summary</div>
        <p>{info.summary}</p>
      </section>
      

      {/* Education */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Education</div>
        <br></br>
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
                <td>
                  {edu.startDate ? new Date(edu.startDate).getFullYear() : ""} -{" "}
                  {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Skills & Languages */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Skills & Languages</div>
        <p>
          <strong>Skills: </strong> {info.skills.join(", ")}
        </p>
        <p>
          <strong>Languages: </strong> {info.languages.join(", ")}
        </p>
      </section>

      {/* Work Experience */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Work Experience</div>
        {info.workExp.map((work, index) => (
          <div key={index} className={styles.workItem}>
            <p>
              <strong>{work.title}</strong> | {work.companyName} | {work.location}
            </p>
            <p>
              {work.startDate ? new Date(work.startDate).getFullYear() : ""} -{" "}
              {work.endDate ? new Date(work.endDate).getFullYear() : "Present"}
            </p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Projects</div>
        {info.projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <p>
              <strong>{project.title}</strong>
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
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Achievements</div>
        <ul>
          {info.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </section>

      {/* Others */}
      <section className={styles.section}>
        <div className={styles.sectionTitle}>Others</div>
        <ul>
          {info.other.map((other, index) => (
            <li key={index}>{other}</li>
          ))}
        </ul>
      </section>
    </div>
  </div>
  );
});

export default Template20;
