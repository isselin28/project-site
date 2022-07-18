import React from "react";
import styles from "./TechList.module.css";

function TechList() {
  const skillList = [
    "Node.js",
    "JavaScript",
    "React",
    "Redux",
    "Next.js",
    "Styled-components",
    "Tailwind CSS",
    "CSS",
    "Jest",
    "Cypress",
    "HTML",
  ];

  return (
    <div class={styles.container}>
      <div class={styles.title}>
        <b>Tech List</b>
      </div>
      <div class={styles.listContainer}>
        {skillList.map((item) => (
          <div class={styles.skillItem}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default TechList;
