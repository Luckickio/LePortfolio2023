import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>N'hésitez pas à me contacter !</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:contact@lucasguell.com">contact@lucasguell.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/luckickio">github.com/luckickio</a>
        </li>
      </ul>
    </footer>
  );
};
