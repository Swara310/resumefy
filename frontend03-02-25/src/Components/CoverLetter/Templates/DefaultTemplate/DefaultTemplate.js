import React, { forwardRef } from "react";
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from "react-feather";
import styles from "./DefaultTemplate.module.css";

const DefaultTemplate = forwardRef(({ information, sections, activeColor, columns, sectionDiv }, ref) => {
  return (
    <div ref={ref}>
      <div ref={ref} className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>{information[sections.basicInfo]?.detail?.name}</p>
          <p className={styles.subHeading}>{information[sections.basicInfo]?.detail?.title}</p>

          <div className={styles.links}>
            {information[sections.basicInfo]?.detail?.email ? (
              <a className={styles.link} type="email">
                <AtSign /> {information[sections.basicInfo]?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {information[sections.basicInfo]?.detail?.phone ? (
              <a className={styles.link}>
                <Phone /> {information[sections.basicInfo]?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {information[sections.basicInfo]?.detail?.linkedin ? (
              <a className={styles.link}>
                <Linkedin /> {information[sections.basicInfo]?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {information[sections.basicInfo]?.detail?.github ? (
              <a className={styles.link}>
                <GitHub /> {information[sections.basicInfo]?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className={styles.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

export default DefaultTemplate;
