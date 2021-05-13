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
          <div className={styles.stepContent}>
            <span>{copy.experiences.experienceContent.watonomous.title}</span>
            <p>{copy.experiences.experienceContent.watonomous.description}</p>
          </div>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
          <div className={styles.stepIconLine}></div>
        </div>
        <section className={styles.step}>
          <div className={styles.stepContent}>
            <span>{copy.experiences.experienceContent.intel.title}</span>
            <p>{copy.experiences.experienceContent.intel.description}</p>
          </div>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
          <div className={styles.stepIconLine}></div>
        </div>
        <section className={styles.step}>
          <div className={styles.stepContent}>
            <span>{copy.experiences.experienceContent.globe.title}</span>
            <p>{copy.experiences.experienceContent.globe.description}</p>
          </div>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
        </div>
        <section className={styles.step}>
          <div className={styles.stepContent}>
            <span>{copy.experiences.experienceContent.mindbeacon.title}</span>
            <p>{copy.experiences.experienceContent.mindbeacon.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
