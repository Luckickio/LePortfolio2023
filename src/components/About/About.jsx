import React, { useEffect } from "react";
import Typed from "typed.js";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  useEffect(() => {
    const typed = new Typed("#typed-output", {
      strings: [
        `<span class=${styles.keyword}>import</span> React <span class=${styles.keyword}>from</span> <span class=${styles.string}>"react"</span>;` +
          "\n" +
          `<span class=${styles.keyword}>import</span> ReactDOM <span class=${styles.keyword}>from</span> <span class=${styles.string}>"react-dom"</span>;` +
          "\n" +
          `<span class=${styles.keyword}>function</span> Greeting() {
  <span class=${styles.keyword}>return</span> <span class=${styles.tag}><</span><span class=${styles.tag}>h1</span>>Bonjour, Je suis Lucas !<span class=${styles.tag}><</span><span class=${styles.tag}>/h1</span>><span class=${styles.tag}>;</span>
  }`,
        "",
        `ReactDOM.<span class=${styles.func}>render</span>(<span class=${styles.tag}><</span>Greeting <span class=${styles.tag}>/</span>><span class=${styles.tag}>,</span> <span class=${styles.keyword}>document</span>.<span class=${styles.func}>getElementById</span>(<span class=${styles.string}>"root"</span>)<span class=${styles.tag}>);</span>`,
      ],
      typeSpeed: 75,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: "_",
      contentType: "html",
      showCursor: true,
      startDelay: 500,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>à Propos</h2>
      <div className={styles.content}>
        <div className={styles.AnimationContainer}>
          <pre id="typed-output" className={styles["typedOutput"]}></pre>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Développeur Frontend</h3>
              <p>
                Avec une connaissance solide en HTML, CSS, JavaScript et React,
                je travaille à développer des interfaces web dynamiques et
                réactives.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Développeur Backend</h3>
              <p>
                Familier avec PHP, Node.js et les systèmes Linux, je participe à
                la mise en place de solutions backend adaptées et performantes.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UX / UI Designer</h3>
              <p>
                Passionné par l'expérience utilisateur, je conçois des
                interfaces intuitives et esthétiquement plaisantes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
