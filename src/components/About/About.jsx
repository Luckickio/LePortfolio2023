import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import about from "../../data/about.json";
import { Terminal } from "../Terminal/Terminal";

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>{about.title}</h2>
      <div className={styles.content}>
        <Terminal />
        <ul className={styles.aboutItems}>
          {about.items.map((item, id) => (
            <li key={id} className={styles.aboutItem}>
              <img src={getImageUrl(item.icon)} alt={item.iconAlt} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
