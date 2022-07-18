import React from "react";
import styles from "./Article.module.css";

export function ArticleGojek(props) {
  const { text } = props;

  return (
    <div className={styles.container}>
      <div class={styles.mainTitle}>{text.title}</div>
      <div class={styles.intro}>{text.intro}</div>
      {text.projects.map((project) => {
        return (
          <div class={styles.projectContainer}>
            <div class={styles.projectTitle}>{project.title}</div>
            <div class={styles.projectAbout}>{project.about}</div>
          </div>
        );
      })}
    </div>
  );
}
