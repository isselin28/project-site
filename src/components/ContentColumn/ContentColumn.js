import React from "react";
import { ArticleGojek } from "./Article.js";
import styles from "./ContentColumn.module.css";
import gojek from "../../assets/gojek.json";

function ContentColumn() {
  return (
    <div className={styles.container}>
      <ArticleGojek text={gojek} />
    </div>
  );
}

export default ContentColumn;
