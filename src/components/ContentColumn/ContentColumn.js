import React, { useState } from "react";
import { Article } from "./Article.js";
import styles from "./ContentColumn.module.css";
import gojek from "../../assets/gojek.json";
import personal from "../../assets/personal.json";
import activities from "../../assets/activities.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ContentColumn() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className={styles.container}>
      {showBanner && (
        <div className={styles.banner}>
          Hi! Welcome to my project space &#128578; &#128075;
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setShowBanner(false)}
          />
        </div>
      )}
      <Article text={gojek} />
      <Article text={personal} />
      <Article text={activities} />
    </div>
  );
}

export default ContentColumn;
