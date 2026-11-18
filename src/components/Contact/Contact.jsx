import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import contact from "../../data/contact.json";

export const Contact = () => {
  return (
    <footer id="Contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{contact.title}</h2>
        <p>{contact.description}</p>
      </div>

      <ul className={styles.links}>
        {contact.links.map((link, id) => (
          <li key={id} className={styles.link}>
            <img src={getImageUrl(link.icon)} alt={link.iconAlt} />
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
