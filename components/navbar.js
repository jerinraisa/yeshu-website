import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.scss";

import copy from "../copy/home";

function testFunction() {
  return console.log("hi");
}

export default function Navbar() {
  return (
    <div className={styles.navContainer}>
      <Link href={`/`}>
        <div className={styles.navHover}>
          <Image src={"/svgs/YJ.svg"} height={26} width={26} />
        </div>
      </Link>
      <span className={styles.linksContainer}>
        <button className={styles.linkButton} onClick={testFunction}>
          {copy.navbar.aboutMe.title}
        </button>
        <button className={styles.linkButton} onClick={testFunction}>
          {copy.navbar.experience.title}
        </button>
        <button className={styles.linkButton} onClick={testFunction}>
          {copy.navbar.project.title}
        </button>
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
