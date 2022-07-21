import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./Article.module.css";
import ReactMarkdown from "react-markdown";

export function Article(props) {
  const { text, markdown } = props;

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
              {markdown ? (
                <ReactMarkdown children={project.about} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: project.about }} />
              )}

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
            {project.images && (
              <div class={styles.imagesContainer}>
                {project.images?.map((img) => (
                  <img src={img} alt={project.title} class={styles.image} />
                ))}
              </div>
            )}
            <div class={styles.caption}>{project.caption}</div>
          </div>
        );
      })}
    </div>
  );
}
