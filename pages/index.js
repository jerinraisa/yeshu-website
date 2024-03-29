import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Navbar from "../components/navbar";
import Experience from "../components/experience";
import Project from "../components/projects";

import copy from "../copy/home";

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mainContainer}>
        <section>
          <div className={styles.mainHero}>
            <h1
              className={styles.heroTitle}
              dangerouslySetInnerHTML={{
                __html: copy.hero.title,
              }}
            ></h1>
            <h3 className={styles.heroDescription}>{copy.hero.blurb}</h3>
          </div>
        </section>
        <div id="aboutMeSection" className={styles.divider} />
        <section>
          <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeText}>
              <div className={styles.sectionTitle}>{copy.aboutMe.title}</div>
              <p
                className={styles.sectionDescription}
                dangerouslySetInnerHTML={{
                  __html: copy.aboutMe.blurb,
                }}
              ></p>
            </div>
            <div className={styles.aboutMeImage}>
              <Image src="/images/yeshu-image.png" height={323} width={323} />
            </div>
          </div>
        </section>
        <div id="experienceSection" className={styles.divider} />
        <section>
          <Experience />
        </section>
        <div id="projectsSection" className={styles.divider} />
        <section>
          <Project />
        </section>
        <div className={styles.divider} />
        <section>
          <div className={styles.footer}>
            <h5
              className={styles.footerText}
              dangerouslySetInnerHTML={{
                __html: copy.footer.text,
              }}
            ></h5>
          </div>
        </section>
        <section>
          <div className={styles.scrollBack}>
            <a className={styles.scrollBackText} onClick={topFunction}>
              {copy.scrollBack.text} &#8593;
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
