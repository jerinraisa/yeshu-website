import styles from "../styles/Projects.module.scss";

import copy from "../copy/home";

export default function Project() {
  return (
    <div className={styles.recentProject}>
      <div className={styles.sectionTitle}>{copy.projects.title}</div>

      <div className={styles.steps}>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
          <div className={styles.stepIconLine}></div>
        </div>
        <section className={styles.step}>
          <a
            href={
              "https://devpost.com/software/hear-me-out-hykmc7?fbclid=IwAR3H05nwfTbdAxHsRggcfI4f3HpZmmOy8PUCwdEEV6qosOipJBEPliPRXdU"
            }
            target={"_blank"}
          >
            <div className={styles.stepContent}>
              <span>{copy.projects.projectContent.hairMeOut.title}</span>
              <p>{copy.projects.projectContent.hairMeOut.description}</p>
            </div>
          </a>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
          <div className={styles.stepIconLine}></div>
        </div>
        <section className={styles.step}>
          <div className={styles.stepContent}>
            <span>{copy.projects.projectContent.riscV.title}</span>
            <p>{copy.projects.projectContent.riscV.description}</p>
          </div>
        </section>
        <div className={styles.stepIconWrapper}>
          <div className={styles.stepIconCircle}></div>
        </div>
        <section className={styles.step}>
          <div className={styles.stepContent}>
            <span>{copy.projects.projectContent.controller.title}</span>
            <p>{copy.projects.projectContent.controller.description}</p>
          </div>
        </section>
      </div>
    </div>
  );
}
