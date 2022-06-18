import React from "react";
import styles from "./TechList.module.css";

function TechList() {
  const skillList = [
    "Node.js",
    "React",
    "Redux",
    "Next.js",
    "Styled-components",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Jest",
    "Cypress",
  ];

  const bookList = ["Eloquent JavaScript"];

  return (
    <div class={styles.container}>
      <div class={styles.title}>
        <b>Tech List</b>
      </div>
      <div class={styles.listContainer}>
        {skillList.map((item) => (
          <div class={styles.skillItem}>{item}</div>
        ))}
        {bookList.map((item) => (
          <div class={styles.skillItem}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default TechList;
