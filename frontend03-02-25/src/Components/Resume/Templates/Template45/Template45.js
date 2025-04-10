import React, { forwardRef } from "react";
import styles from "./Template45.module.css";

const Template45 = forwardRef(({ information, sections }, ref) => {
  const demoData = {
    basicInfo: {
      name: "John Doe",
      position: "Software Engineer",
      email: "johndoe@example.com",
      phone: "+1 (123) 456-7890",
      location: "New York, USA",
      linkedin: "https://linkedin.com/in/johndoe",
    },
    recipient: {
      name: "Jane Smith",
      position: "HR Manager",
      company: "Tech Solutions Inc.",
      address: "123 Business St, San Francisco, CA",
    },
    content:
      "I am excited to apply for the Software Engineer position at Tech Solutions Inc. With a strong background in web development and problem-solving, I believe my skills align well with your company's needs. Over the past five years, I have successfully built and deployed multiple web applications that have significantly improved user experience and operational efficiency. My expertise in front-end and back-end technologies enables me to create seamless, high-performance applications that meet business objectives.",
    bulletPoints: [
      "5+ years of experience in full-stack development",
      "Proficient in React, Node.js, and MongoDB",
      "Strong problem-solving and teamwork skills",
      "Experience in developing scalable applications",
      "Passionate about writing clean and efficient code",
    ],
    closing:
      "I would love the opportunity to bring my skills and passion for technology to your esteemed company. Please feel free to contact me at your earliest convenience to discuss how my background can benefit your team. Thank you for your time and consideration. I look forward to your response.",
  };

  const info = {
    basicInfo: information?.[sections?.basicInfo]?.detail || demoData.basicInfo,
    recipient: information?.recipient || demoData.recipient,
    content: information?.content || demoData.content,
    bulletPoints: information?.bulletPoints || demoData.bulletPoints,
    closing: information?.closing || demoData.closing,
  };

  return (
    <div className={styles.container} ref={ref}>
      {/* Header Section */}
      <div className={styles.header}>
        {/* Name & Position */}
        <div className={styles.nameBlock}>
          <h1 className={styles.name}>{info.basicInfo.name}</h1>
          <p className={styles.position}>{info.basicInfo.position}</p>
        </div>
        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <p>{info.basicInfo.email}</p>
          <p>{info.basicInfo.phone}</p>
          <p>{info.basicInfo.location}</p>
          <p>
            <a href={info.basicInfo.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      <hr className={styles.line} />

      {/* Recipient Information */}
      <div className={styles.recipient}>
        <p>
          <strong>{info.recipient.name}</strong>
        </p>
        <p>{info.recipient.position}</p>
        <p>{info.recipient.company}</p>
        <p>{info.recipient.address}</p>
      </div>

      {/* Cover Letter Content */}
      <div className={styles.content}>
        <p>Dear {info.recipient.name},</p>
        <p>{info.content}</p>
        <ul>
          {info.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p>{info.closing}</p>
      </div>

      {/* Signature */}
      <div className={styles.signature}>
        <p>Sincerely,</p>
        <p>{info.basicInfo.name}</p>
      </div>
    </div>
  );
});

export default Template45;
