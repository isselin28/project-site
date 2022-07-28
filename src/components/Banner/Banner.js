import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Banner.module.css";

function Banner() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    showBanner && (
      <div className={styles.banner}>
        <div>
          Hi, I'm <b>Isselin</b>! Welcome to my projects space &#128578;
          &#128075;
        </div>
        <FontAwesomeIcon icon={faXmark} onClick={() => setShowBanner(false)} />
      </div>
    )
  );
}

export default Banner;
