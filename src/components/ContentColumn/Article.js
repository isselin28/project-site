import React from "react";
import styles from "./Article.module.css";

export function Article(props) {
  const { text } = props;

  return (
    <div className={styles.container}>
      <div class={styles.mainTitle}>{text.title}</div>
      <div>{text.intro}</div>
      {text.projects.map((project) => {
        return (
          <div class={styles.projectContainer}>
            <div class={styles.projectTitle} name={project.id}>
              {project.title}
            </div>
            <div class={styles.projectAbout}>{project.about}</div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                class={styles.image}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
