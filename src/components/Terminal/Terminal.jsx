import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "./Terminal.module.css";
import terminal from "../../data/terminal.json";

const token = (className) => (text) => `<span class=${className}>${text}</span>`;
const keyword = token(styles.keyword);
const control = token(styles.control);
const variable = token(styles.variable);
const string = token(styles.string);
const tag = token(styles.tag);
const component = token(styles.component);
const func = token(styles.func);
const bracket = token(styles.bracket);

const codeLines = [
  `${control("import")} ${variable("React")} ${control("from")} ${string('"react"')};`,
  `${control("import")} ${variable("ReactDOM")} ${control("from")} ${string('"react-dom"')};`,
  ``,
  `${keyword("function")} ${func("Greeting")}() {`,
  `  ${control("return")} ${bracket("&lt;")}${tag("h1")}${bracket("&gt;")}${terminal.greeting}${bracket("&lt;/")}${tag("h1")}${bracket("&gt;")};`,
  `}`,
];

const renderLine = `${variable("ReactDOM")}.${func("render")}(${bracket("&lt;")}${component("Greeting")} ${bracket("/&gt;")}, ${variable("document")}.${func("getElementById")}(${string('"root"')}));`;

export const Terminal = () => {
  const outputRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(outputRef.current, {
      strings: [codeLines.join("\n"), "", renderLine],
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
    <div className={styles.container}>
      <pre ref={outputRef} className={styles.output}></pre>
    </div>
  );
};
