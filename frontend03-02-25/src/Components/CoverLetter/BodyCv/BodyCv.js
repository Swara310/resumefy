import React, { useRef, useState } from "react";
import axios from "axios";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { useLocation } from "react-router-dom";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";
import Header from "../Header/Header";
import styles from "./BodyCv.module.css";
import { url } from "../../api/apiendpoint";

function BodyCv() {
  const colors = ["#239ce2", "#48bb78", "#082a4d", "#a0aec0", "#ed8936"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    skills: "Skills", // Add this line
    languages: "Languages", // Add this line
    other: "Other",
  };
  const resumeRef = useRef();
  const location = useLocation();
  const { templateId } = location.state || { templateId: 1 }; // Default to Template 1 if none selected

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      summary: "",
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [], // Holds the list of skills
    },
    [sections.languages]: {
      id: sections.languages,
      sectionTitle: sections.languages,
      points: [], // Holds the list of languages
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      other: "",
    },
  });

  // Function to handle the resume data submission to the API
  const saveResumeToServer = async () => {
    const updatedResumeInfo = {
      ...resumeInformation,
      [sections.workExp]: {
        ...resumeInformation[sections.workExp],
        details: JSON.stringify(resumeInformation[sections.workExp].details),
      },
      [sections.project]: {
        ...resumeInformation[sections.project],
        details: JSON.stringify(resumeInformation[sections.project].details),
      },
      [sections.education]: {
        ...resumeInformation[sections.education],
        details: JSON.stringify(resumeInformation[sections.education].details),
      },
    };
    //  await setResumeInformation(updatedResumeInfo);
    console.log("Sending resume information:", updatedResumeInfo); // Log the data before sending

    try {
      const response = await axios.post(
        url + "/api/resume/create",
        updatedResumeInfo
      );
      console.log("Response from server:", response.data);
      alert("Resume saved successfully!");
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("Failed to save resume. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
        <button onClick={saveResumeToServer} className={styles.saveButton}>
          Save Resume
        </button>
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
          templateId={templateId} // Pass templateId here
        />
      </div>
    </div>
  );
}

export default BodyCv;
