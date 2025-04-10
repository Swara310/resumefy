return (
  <div className={styles.resumeContainer}>
    <div ref={ref}>
      {/* Left Panel */}
      <div className={styles.leftPanel}>
        <header>
          <h1 className={styles.name}>Rachelle Beaudry</h1>
          <p className={styles.summary}>
            Results-driven Accounting Executive with a proven record of
            optimizing financial performance. Expertise in strategic financial
            initiatives and team leadership. Seeking a challenging executive
            role to leverage analytical skills and drive organizational success.
          </p>
        </header>

        <section className={styles.experience}>
          <h2 className={styles.sectionTitle}>Work Experience</h2>

          <div className={styles.job}>
            <h3 className={styles.jobTitle}>
              Accounting Executive, Borcelle Corporation
            </h3>
            <p className={styles.date}>Jan 2023 - Present</p>
            <ul className={styles.jobList}>
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

          <div className={styles.job}>
            <h3 className={styles.jobTitle}>Accountant, Salford & Co</h3>
            <p className={styles.date}>Mar 2021 - Dec 2022</p>
            <ul className={styles.jobList}>
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

        <section className={styles.education}>
          <h2 className={styles.sectionTitle}>Educational Background</h2>
          <div className={styles.degree}>
            <h3 className={styles.degreeTitle}>
              Master of Business Administration (MBA), Financial Management
            </h3>
            <p className={styles.date}>Sep 2018 - Oct 2019</p>
            <p className={styles.institution}>
              University of Finance and Management
            </p>
          </div>
          <div className={styles.degree}>
            <h3 className={styles.degreeTitle}>
              Bachelor of Science in Accounting
            </h3>
            <p className={styles.date}>Aug 2015 - Aug 2018</p>
            <p className={styles.institution}>City College</p>
          </div>
        </section>
      </div>

      {/* Right Panel */}
      <div className={styles.rightPanel}>
        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={styles.contactInfo}>123 Anywhere St., Any City</p>
          <p className={styles.contactInfo}>123-456-7890</p>
          <p className={styles.contactInfo}>
            <a href="mailto:hello@reallygreatsite.com">
              hello@reallygreatsite.com
            </a>
          </p>
          <p className={styles.contactInfo}>
            <a href="http://www.reallygreatsite.com">www.reallygreatsite.com</a>
          </p>
        </section>

        <section className={styles.skills}>
          <h2 className={styles.sectionTitle}>Skills</h2>

          <h3 className={styles.skillCategory}>Technical Skills</h3>
          <ul className={styles.skillList}>
            <li>Financial Analysis</li>
            <li>Budgeting and Forecasting</li>
            <li>Risk Management</li>
            <li>Data Analytics</li>
            <li>ERP Systems Implementation</li>
          </ul>

          <h3 className={styles.skillCategory}>Tools/Software</h3>
          <ul className={styles.skillList}>
            <li>Accounting Software</li>
            <li>ERP Systems</li>
            <li>Finance Software</li>
            <li>Data Tools</li>
          </ul>

          <h3 className={styles.skillCategory}>Languages</h3>
          <ul className={styles.skillList}>
            <li>English (Fluent)</li>
            <li>Malay (Fluent)</li>
            <li>Mandarin (Proficient)</li>
          </ul>
        </section>

        <section className={styles.certifications}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <ul className={styles.certificationList}>
            <li>Certified Public Accountant (CPA)</li>
            <li>Chartered Financial Analyst (CFA)</li>
          </ul>
        </section>

        <section className={styles.additional - info}>
          <h2 className={styles.sectionTitle}>Additional Information</h2>
          <ul className={styles.infoList}>
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
  </div>
);
