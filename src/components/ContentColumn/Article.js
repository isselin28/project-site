import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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
            <div class={styles.titleContainer}>
              <div class={styles.projectTitle} name={project.id}>
                {project.title}
              </div>
              {project.tags?.map((tag) => (
                <div class={styles.tags}>{tag}</div>
              ))}
            </div>
            <div class={styles.projectAbout}>
              {project.about}
              {project.link && (
                <a
                  href={project.link}
                  class={styles.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Show Project
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </div>
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
