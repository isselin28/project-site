import React from "react";
import { Article } from "./Article.js";
import styles from "./ContentColumn.module.css";
import gojek from "../../assets/gojek";
import personal from "../../assets/personal.json";
import activities from "../../assets/activities";
import arts from "../../assets/arts";
import { isMobileDevice } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faHouse } from "@fortawesome/free-solid-svg-icons";

function ContentColumn() {
  const isMobile = isMobileDevice();
  return (
    <div className={isMobile ? styles.mobileContainer : styles.container}>
      <div className={styles.name}>Isselin Moektijono</div>
      <div className={styles.intro}>
        {/* <FontAwesomeIcon icon={faHouse} className={styles.icon} />
        Developer, Designer, Loves to imagine a different world. &nbsp;
        <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
        Singapore */}
      </div>
      <hr />
      <br />
      <Article text={gojek} />
      <Article text={personal} />
      <Article text={activities} />
      <Article text={arts} />
    </div>
  );
}

export default ContentColumn;
