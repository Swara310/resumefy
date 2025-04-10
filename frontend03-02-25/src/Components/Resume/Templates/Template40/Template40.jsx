import React, { forwardRef, useState } from "react";
import styles from "./Template40.module.css";

// const Template40 = forwardRef(({ information, sections, activeColor }, ref) => {
//   const [info] = useState({
//     basicInfo: {
//       name: "John Doe",
//       title: "Frontend Developer | React.js Specialist",
//       phone: "+1234567890",
//       email: "john.doe@example.com",
//       github: "https://github.com/johndoe",
//       linkedin: "https://linkedin.com/in/johndoe",
//     },
//     workExp: [
//       {
//         title: "Senior Frontend Engineer",
//         companyName: "Tech Corp",
//         startDate: "2020-01-01",
//         endDate: "2023-01-01",
//         location: "London",
//       },
//       {
//         title: "Frontend Developer",
//         companyName: "Web Solutions Inc.",
//         startDate: "2018-06-01",
//         endDate: "2019-12-31",
//         location: "London",
//       },
//     ],
//     education: [
//       {
//         title: "Bachelor's in Computer Science",
//         college: "XYZ University",
//         startDate: "2016-01-01",
//         endDate: "2020-01-01",
//       },
//     ],
//     projects: [
//       {
//         title: "Portfolio Website",
//         points: [
//           "Built a personal portfolio website using React.js, Next.js, and Tailwind CSS.",
//           "Showcases projects, blogs, and interactive resume with optimized performance.",
//           "Implemented animations with Framer Motion and deployed on Vercel.",
//         ],
//       },
//       {
//         title: "E-commerce Platform",
//         points: [
//           "Developed a fully responsive e-commerce website with React and Redux Toolkit.",
//           "Integrated Stripe API for secure payments and Firebase for authentication.",
//           "Implemented product filtering, sorting, and cart functionality.",
//         ],
//       },
//     ],
//     achievements: [
//       "Recognized as 'Employee of the Month' at Tech Corp - March 2022.",
//       "Top 10 finalist in an international Hackathon with 500+ participants.",
//     ],
//     skills: [
//       "React.js",
//       "Next.js",
//       "JavaScript (ES6+)",
//       "TypeScript",
//       "Redux Toolkit",
//       "Tailwind CSS",
//       "Material-UI",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "RESTful APIs",
//       "Git & GitHub",
//       "Jest & Unit Testing",
//       "CI/CD Pipelines",
//       "Agile Development",
//       "Performance Optimization",
//     ],
//     languages: [
//       "English (Fluent)",
//       "Spanish (Intermediate)",
//       "Marathi (Native)",
//       "Hindi (Native)",
//     ],
//     summary:
//       "Experienced Frontend Developer with expertise in React.js, Next.js, and UI/UX optimization. Passionate about building high-performance web applications with clean and scalable code. Strong problem-solving skills, team leadership experience, and a commitment to continuous learning.",
//     other: [
//       "Volunteered as a mentor for coding bootcamps",
//       "Guiding aspiring developers in mastering React.js and JavaScript fundamentals.",
//       "Passionate about open-source contributions and active in the web development community.",
//     ],
//   });

//   return (
//     <div
//       className={styles.resumeWrapper}
//       style={{ "--theme-color": activeColor }}
//       ref={ref}
//     >
//       <div className={styles.leftSection}>
//         <h1>{info.basicInfo.name}</h1>
//         <h2>{info.basicInfo.title}</h2>
//         <div className={styles.section}>
//           <h3>Contact</h3>
//           <p>Email: {info.basicInfo.email}</p>
//           <p>Phone: {info.basicInfo.phone}</p>
//           <p>
//             LinkedIn: <a href={info.basicInfo.linkedin}>{info.basicInfo.linkedin}</a>
//           </p>
//           <p>
//             GitHub: <a href={info.basicInfo.github}>{info.basicInfo.github}</a>
//           </p>
//         </div>

//         <div className={styles.section}>
//           <h3>Skills</h3>
//           <div className={styles.bubbles}>
//             {info.skills.map((skill, i) => (
//               <span key={i}>{skill}</span>
//             ))}
//           </div>
//         </div>

//         <div className={styles.section}>
//           <h3>Languages</h3>
//           <div className={styles.bubbles}>
//             {info.languages.map((lang, i) => (
//               <span key={i}>{lang}</span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className={styles.rightSection}>
//         <div className={styles.section}>
//           <h3>Summary</h3>
//           <p>{info.summary}</p>
//         </div>

//         <div className={styles.section}>
//           <h3>Work Experience</h3>
//           {info.workExp.map((work, i) => (
//             <div key={i}>
//               <strong>{work.title}</strong> at {work.companyName} <br />
//               ({new Date(work.startDate).getFullYear()} -{" "}
//               {work.endDate ? new Date(work.endDate).getFullYear() : "Present"}) -{" "}
//               {work.location}
//             </div>
//           ))}
//         </div>

//         <div className={styles.section}>
//           <h3>Projects</h3>
//           {info.projects.map((proj, i) => (
//             <div key={i}>
//               <strong>{proj.title}</strong>
//               <ul>
//                 {proj.points.map((point, j) => (
//                   <li key={j}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className={styles.section}>
//           <h3>Education</h3>
//           {info.education.map((edu, i) => (
//             <div key={i}>
//               <strong>{edu.title}</strong> - {edu.college} <br />
//               ({new Date(edu.startDate).getFullYear()} -{" "}
//               {edu.endDate ? new Date(edu.endDate).getFullYear() : "Present"})
//             </div>
//           ))}
//         </div>

//         <div className={styles.section}>
//           <h3>Achievements</h3>
//           <ul>
//             {info.achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>

//         <div className={styles.section}>
//           <h3>Other</h3>
//           <ul>
//             {info.other.map((otherItem, i) => (
//               <li key={i}>{otherItem}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default Template40;
// import React, { forwardRef } from "react";
// import styles from "./Template40.module.css";

const Template40 = forwardRef(({ information, sections, activeColor }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    workExperience: information[sections.workExp]?.details || [],
    education: information[sections.education]?.details || [],
    projects: information[sections.project]?.details || [],
    achievements: information[sections.achievement]?.points || [],
    skills: information[sections.skills]?.points || [],
    languages: information[sections.languages]?.points || [],
    summary: information[sections.summary]?.detail || "",
    other: information[sections.other]?.other || [],
  };

  const extractYear = (date) =>
    date ? new Date(date).getFullYear() : "Present";

  return (
    <div
      className={styles.resumeWrapper}
      style={{ "--theme-color": activeColor }}
      ref={ref}
    >
      <div className={styles.leftSection}>
        <h1>{info.basicInfo.name || "Your Name"}</h1>
        <h2>{info.basicInfo.title || "Your Title"}</h2>

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

        <div className={styles.section}>
          <h3>Skills</h3>
          <div className={styles.bubbles}>
            {info.skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h3>Languages</h3>
          <div className={styles.bubbles}>
            {info.languages.map((lang, i) => (
              <span key={i}>{lang}</span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.section}>
          <h3>Summary</h3>
          <p>{info.summary}</p>
        </div>

        <div className={styles.section}>
          <h3>Work Experience</h3>
          {info.workExperience.map((work, i) => (
            <div key={i}>
              <strong>{work.title}</strong> at {work.companyName} <br />(
              {extractYear(work.startDate)} - {extractYear(work.endDate)}) -{" "}
              {work.location}
              <ul>
                {work.points?.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Projects</h3>
          {info.projects.map((proj, i) => (
            <div key={i}>
              <strong>{proj.title}</strong>
              {proj.github && (
                <p>
                  <strong>GitHub:</strong>{" "}
                  <a href={proj.github}>{proj.github}</a>
                </p>
              )}
              {proj.link && (
                <p>
                  <strong>Live Demo:</strong>{" "}
                  <a href={proj.link}>{proj.link}</a>
                </p>
              )}
              <ul>
                {proj.points?.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Education</h3>
          {info.education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.title}</strong> - {edu.college} <br />(
              {extractYear(edu.startDate)} - {extractYear(edu.endDate)})
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>Achievements</h3>
          <ul>
            {info.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Other</h3>
          <ul>
            {info.other.map((otherItem, i) => (
              <li key={i}>{otherItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Template40;
