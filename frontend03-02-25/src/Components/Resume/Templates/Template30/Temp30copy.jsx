import React from "react";
import styles from "./Template30.module.css";

const Template30 = () => {
  return (
    <div className={styles["resume-container"]}>
      {/* Left Panel */}
      <div className={styles["left-panel"]}>
        <header>
          <h1 className={styles.name}>Rachelle Beaudry</h1>
          <p className={styles.summary}>
            Results-driven Accounting Executive with a proven record of
            optimizing financial performance. Expertise in strategic financial
            initiatives and team leadership. Seeking a challenging executive
            role to leverage analytical skills and drive organizational success.
          </p>
        </header>

        <section>
          <h2 className={styles["section-title"]}>Work Experience</h2>
          <div>
            <h3 className={styles["job-title"]}>
              Accounting Executive, Borcelle Corporation
            </h3>
            <p className={styles.date}>Jan 2023 - Present</p>
            <ul className={styles["job-list"]}>
              <li>
                Implemented cost-control measures resulting in a 15% reduction
                in operational expenses.
              </li>
              <li>
                Streamlined financial reporting processes, enhancing overall
                efficiency by 20%.
              </li>
              <li>
                Led a team in successfully navigating a complex audit, ensuring
                compliance with industry regulations.
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles["job-title"]}>Accountant, Salford & Co</h3>
            <p className={styles.date}>Mar 2021 - Dec 2022</p>
            <ul className={styles["job-list"]}>
              <li>
                Managed month-end close processes, reducing closing time by 25%.
              </li>
              <li>
                Implemented a new financial forecasting system, improving
                accuracy by 18%.
              </li>
              <li>
                Collaborated with cross-functional teams to develop and
                implement financial strategies, resulting in a 10% increase in
                revenue.
              </li>
              <li>
                Spearheaded automation, decreasing manual workload by 30%.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Educational Background</h2>
          <div>
            <h3 className={styles["degree-title"]}>
              Master of Business Administration (MBA), Financial Management
            </h3>
            <p className={styles.date}>Sep 2018 - Oct 2019</p>
            <p className={styles.institution}>
              University of Finance and Management
            </p>
          </div>
          <div>
            <h3 className={styles["degree-title"]}>
              Bachelor of Science in Accounting
            </h3>
            <p className={styles.date}>Aug 2015 - Aug 2018</p>
            <p className={styles.institution}>City College</p>
          </div>
        </section>
      </div>

      {/* Right Panel */}
      <div className={styles["right-panel"]}>
        <section>
          <h2 className={styles["section-title"]}>Contact</h2>
          <p className={styles["contact-info"]}>123 Anywhere St., Any City</p>
          <p className={styles["contact-info"]}>123-456-7890</p>
          <p className={styles["contact-info"]}>
            <a href="mailto:hello@reallygreatsite.com">
              hello@reallygreatsite.com
            </a>
          </p>
          <p className={styles["contact-info"]}>
            <a href="http://www.reallygreatsite.com">www.reallygreatsite.com</a>
          </p>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Skills</h2>
          <h3 className={styles["skill-category"]}>Technical Skills</h3>
          <ul className={styles["skill-list"]}>
            <li>Financial Analysis</li>
            <li>Budgeting and Forecasting</li>
            <li>Risk Management</li>
            <li>Data Analytics</li>
            <li>ERP Systems Implementation</li>
          </ul>

          {/* <h3 className={styles["skill-category"]}>Tools/Software</h3>
          <ul className={styles["skill-list"]}>
            <li>Accounting Software</li>
            <li>ERP Systems</li>
            <li>Finance Software</li>
            <li>Data Tools</li>
          </ul> */}

          <h3 className={styles["skill-category"]}>Languages</h3>
          <ul className={styles["skill-list"]}>
            <li>English (Fluent)</li>
            <li>Malay (Fluent)</li>
            <li>Mandarin (Proficient)</li>
          </ul>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Certifications</h2>
          <ul className={styles["certification-list"]}>
            <li>Certified Public Accountant (CPA)</li>
            <li>Chartered Financial Analyst (CFA)</li>
          </ul>
        </section>

        <section>
          <h2 className={styles["section-title"]}>Additional Information</h2>
          <ul className={styles["info-list"]}>
            <li>
              Served as Team Lead in the company-wide initiative for process
              improvement.
            </li>
            <li>Volunteer Treasurer, Local Nonprofit Organization.</li>
            <li>
              Received “Excellence” in Financial Management Award, Borcelle
              Corporation.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Template30;
