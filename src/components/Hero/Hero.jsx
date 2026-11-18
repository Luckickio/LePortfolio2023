import { getImageUrl } from "../../utils";
import hero from "../../data/hero.json";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.description}>{hero.description}</p>
        <a className={styles.contactBtn} href={hero.button.href}>
          {hero.button.label}
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl(hero.image)}
        alt={hero.imageAlt}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
