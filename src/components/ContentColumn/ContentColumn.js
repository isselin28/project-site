import React, { useState } from "react";
import { Article } from "./Article.js";
import styles from "./ContentColumn.module.css";
import gojek from "../../assets/gojek.json";
import personal from "../../assets/personal.json";
import activities from "../../assets/activities";
import arts from "../../assets/arts";

function ContentColumn() {
  return (
    <div className={styles.container}>
      <Article text={gojek} />
      <Article text={personal} />
      <Article text={activities} />
      <Article text={arts} />
    </div>
  );
}

export default ContentColumn;
