import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./Article.module.css";
import ReactMarkdown from "react-markdown";

export function Article(props) {
  const { text, markdown } = props;

  const showProjectLink = (link) => {
    return (
      <a
        href={link}
        class={styles.projectLink}
        target="_blank"
        rel="noreferrer"
      >
        Show Project
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    );
  };

  return (
    <div className={styles.container}>
      <div class={styles.mainTitle}>{text.title}</div>
      <div dangerouslySetInnerHTML={{ __html: text.intro }} />
      {text.link && showProjectLink(text.link)}
      {text.projects?.map((project) => {
        const { title, id, about } = project;

        return (
          <div class={styles.projectContainer}>
            <div class={styles.titleContainer}>
              {title && (
                <div class={styles.projectTitle} name={id}>
                  {title}
                </div>
              )}
              {project.tags?.map((tag) => (
                <div class={styles.tags}>{tag}</div>
              ))}
            </div>

            <div class={styles.projectAbout}>
              {markdown ? (
                <ReactMarkdown children={about} />
              ) : (
                <div dangerouslySetInnerHTML={{ __html: project.about }} />
              )}

              {project.link && showProjectLink(project.link)}
            </div>
            {project.images && (
              <div>
                <div class={styles.imagesContainer}>
                  {project.images?.map((img) => (
                    <img
                      src={img}
                      alt={project.title}
                      class={
                        project.images_size ? styles.smallImage : styles.image
                      }
                    />
                  ))}
                </div>
                <div class={styles.caption}>{project.caption}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
