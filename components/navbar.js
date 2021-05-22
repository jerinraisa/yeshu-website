import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";

import styles from "../styles/Navbar.module.scss";

import copy from "../copy/home";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setIsMobile(true);
    }
  }, []);
  return (
    <div
      className={classnames(styles.navContainer, {
        [styles.disableMobile]: isMobile,
      })}
    >
      <Link href={`/`}>
        <div className={styles.navHover}>
          <Image src={"/svgs/YJ.svg"} height={26} width={26} />
        </div>
      </Link>
      <span className={styles.linksContainer}>
        <a
          className={classnames(styles.linkButton, {
            [styles.disableMobile]: isMobile,
          })}
          href="#aboutMeSection"
        >
          {copy.navbar.aboutMe.title}
        </a>
        <a
          className={classnames(styles.linkButton, {
            [styles.disableMobile]: isMobile,
          })}
          href="#experienceSection"
        >
          {copy.navbar.experience.title}
        </a>
        <a
          className={classnames(styles.linkButton, {
            [styles.disableMobile]: isMobile,
          })}
          href="#projectsSection"
        >
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
