import React from "react";
import { Article } from "./Article.js";
import styles from "./ContentColumn.module.css";
import gojek from "../../assets/gojek";
import personal from "../../assets/personal.json";
import activities from "../../assets/activities";
import arts from "../../assets/arts";
import { isMobileDevice } from "../../utils";
function ContentColumn() {
  const isMobile = isMobileDevice();
  return (
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <Article text={gojek} />
      <Article text={personal} />
      <Article text={activities} />
      <Article text={arts} />
    </div>
  );
}

export default ContentColumn;
