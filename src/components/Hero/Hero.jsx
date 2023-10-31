import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Bienvenue</h1>
        <p className={styles.description}>
          Développeur polyvalent : Compétences Full Stack, Cybersécurité et
          maîtrise de diverses technologies.
        </p>
        <a className={styles.contactBtn} href="mailto:guelllucas@hotmail.fr">
          Contact
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Her"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
