import React, { forwardRef } from "react";
import styles from "./Template2.module.css";

const Template2 = forwardRef(({ information, sections }, ref) => {
  const info = {
    basicInfo: information[sections.basicInfo]?.detail || {},
    coverLetter: information.coverLetter || "",
    recipient: information.recipient || {}, // Recipient details
  };

  return (
    <div className={styles.coverContainer} ref={ref}>
      <div className={styles.coverPage}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h1 className={styles.name}>{info.basicInfo.name || "Your Name"}</h1>
          <p className={styles.title}>
            {info.basicInfo.title || "Your Position"}
          </p>

          <div className={styles.contactInfo}>
            {info.basicInfo.email && <p>✉️ {info.basicInfo.email}</p>}
            {info.basicInfo.phone && <p>📞 {info.basicInfo.phone}</p>}
            {info.basicInfo.linkedin && (
              <p>
                🔗{" "}
                <a
                  href={info.basicInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Recipient Details */}
          <section className={styles.recipientSection}>
            <p>
              <strong>{info.recipient.name || "Hiring Manager"}</strong>
            </p>
            <p>{info.recipient.company || "Company Name"}</p>
            <p>{info.recipient.address || "Company Address"}</p>
            <p>{info.recipient.date || new Date().toDateString()}</p>
          </section>

          {/* Cover Letter Content */}
          <section className={styles.letterContent}>
            <p>{info.coverLetter || "Your cover letter content goes here."}</p>
          </section>

          {/* Footer */}
          <footer className={styles.footer}>
            <p>Sincerely,</p>
            <p className={styles.signature}>
              {info.basicInfo.name || "Your Name"}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
});

export default Template2;
