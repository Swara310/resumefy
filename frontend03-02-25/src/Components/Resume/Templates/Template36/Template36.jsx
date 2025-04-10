import React, { useState, forwardRef } from "react";
import styles from "./Template36.module.css";

const Template36 = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles.resumeContainer}>
      <header className={styles.resumeHeader}>
        <h1>Rachelle Beaudry</h1>
        <h4>Site Realibility Engineer</h4>
        <p>
          Results-driven Accounting Executive with a proven record of optimizing
          financial performance. Results-driven Accounting Executive with a
          proven record of optimizing financial performance.
        </p>
      </header>

      <div className={styles.panel}>
        <div className={styles.leftPanel}>
          <section>
            <h2>Contact</h2>
            <p>123 Anywhere St., Any City</p>
            <p>123-456-7890</p>
            <p>
              <a href="mailto:hello@reallygreatsite.com">
                hello@reallygreatsite.com
              </a>
            </p>
            <p>
              <a href="http://www.reallygreatsite.com">
                www.reallygreatsite.com
              </a>
            </p>
          </section>
          <section>
            <h2>Skills</h2>
            <div>
              <h3>Technical Skills</h3>
              <ul>
                <li>ReactJs</li>
                <li>TypeScript</li>
                <li>MongoDB</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </section>

          <section>
            <div>
              <h2>Languages</h2>

              <ul>
                <li>English (Fluent)</li>
                <li>Marathi (Fluent)</li>
                <li>Mandarin (Proficient)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Certifications</h2>
            <ul>
              <li>Certified Kubernetes Administrator (CKA)</li>
              <li>Chartered Financial Analyst (CFA)</li>
            </ul>
          </section>

          <section>
            <h2>Additional Information</h2>
            <ul>
              <li>
                Served as Team Lead in the company-wide initiative for process
                improvement.
              </li>
              <li>Volunteer Treasurer, Local Nonprofit Organization.</li>
            </ul>
          </section>
        </div>

        <div className={styles.rightPanel}>
          <section>
            <h2>Work Experience</h2>
            <div>
              <h3>Accounting Executive, Borcelle Corporation</h3>
              <p className={styles.date}>Jan 2023 - Present</p>
              <ul>
                <li>
                  Implemented cost-control measures resulting in a 15% reduction
                  in operational expenses.
                </li>
                <li>
                  Streamlined financial reporting processes, enhancing overall
                  efficiency by 20%.
                </li>
              </ul>
            </div>

            <div>
              <h3>Accountant, Salford & Co</h3>
              <p className={styles.date}>Mar 2021 - Dec 2022</p>
              <ul>
                <li>
                  Managed month-end close processes, reducing closing time by
                  25%.
                </li>
                <li>
                  Spearheaded automation, decreasing manual workload by 30%.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Projects</h2>
            <div>
              <h3>Visualising Website Data with Apache Hadoop</h3>
              <p className={styles.date}>Mar 2021 - Dec 2022</p>
              <ul>
                <li>
                  Managed month-end close processes, reducing closing time by
                  25%.
                </li>
                <li>
                  Implemented a new financial forecasting system, improving
                  accuracy by 18%.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2>Educational Background</h2>
            <div>
              <h3>
                Master of Business Administration (MBA), Financial Management
              </h3>
              <p className={styles.date}>Sep 2018 - Oct 2019</p>
              <p>University of Finance and Management</p>
            </div>
            <div>
              <h3>Bachelor of Science in Accounting</h3>
              <p className={styles.date}>Aug 2015 - Aug 2018</p>
              <p>City College</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

export default Template36;
