import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

import copy from "../copy/home";

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <Link href={`/`}>
        <div className={styles.navHover}>
          <Image src={"/svgs/YJ.svg"} height={26} width={26} />
        </div>
      </Link>
      <span className={styles.linksContainer}>
        <a className={styles.linkButton} href="#aboutMeSection">
          {copy.navbar.aboutMe.title}
        </a>
        <a className={styles.linkButton} href="#experienceSection">
          {copy.navbar.experience.title}
        </a>
        <a className={styles.linkButton} href="#projectsSection">
          {copy.navbar.project.title}
        </a>
        <a
          className={styles.linkButton}
          href={copy.navbar.resume.link}
          target="_blank"
        >
          {copy.navbar.resume.title}
        </a>
      </span>
    </div>
  );
}
