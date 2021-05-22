import styles from "../styles/Experiences.module.scss";

import copy from "../copy/home";

export default function Experience() {
  return (
    <div className={styles.recentExperience}>
      <div className={styles.sectionTitle}>{copy.experiences.title}</div>

      <div className={styles.steps}>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
          <div className={styles.stepIconLine}></div>
        </div>
        <section className={styles.step}>
          <a
            href={
              "https://www.watonomous.ca/?fbclid=IwAR2z3x67cbHrAWP10kYAxl_SsCupqFH5Q-tMXbsQ7blRz6h_Gxo1kdltIXw"
            }
            target="_blank"
          >
            <div className={styles.stepContent}>
              <span>{copy.experiences.experienceContent.watonomous.title}</span>
              <p>{copy.experiences.experienceContent.watonomous.description}</p>
            </div>
          </a>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
          <div className={styles.stepIconLine}></div>
        </div>
        <section className={styles.step}>
          <a
            href={
              "https://www.intel.com/content/www/us/en/company-overview/company-overview.html"
            }
            target="_blank"
          >
            <div className={styles.stepContent}>
              <span>{copy.experiences.experienceContent.intel.title}</span>
              <p>{copy.experiences.experienceContent.intel.description}</p>
            </div>
          </a>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
          <div className={styles.stepIconLine}></div>
        </div>
        <section className={styles.step}>
          <a href={"https://www.theglobeandmail.com/"} target="_blank">
            <div className={styles.stepContent}>
              <span>{copy.experiences.experienceContent.globe.title}</span>
              <p>{copy.experiences.experienceContent.globe.description}</p>
            </div>
          </a>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
        </div>
        <section className={styles.step}>
          <a href={"https://www.mindbeacon.com/"} target="_blank">
            <div className={styles.stepContent}>
              <span>{copy.experiences.experienceContent.mindbeacon.title}</span>
              <p>{copy.experiences.experienceContent.mindbeacon.description}</p>
            </div>
          </a>
        </section>
      </div>
    </div>
  );
}
