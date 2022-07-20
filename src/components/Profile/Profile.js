import React from "react";
import styles from "./Profile.module.css";
import photo from "../../assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div class={styles.container}>
      <img src={photo} alt="profile" class={styles.photo} />
      <div class={styles.iconWrapper}>
        <Link to="/" class={styles.icon}>
          <FontAwesomeIcon icon={faHouse} size="lg" />
        </Link>
        <a
          href="https://www.linkedin.com/in/isselinmoektijono/"
          target="_blank"
          class={styles.icon}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </a>
      </div>
    </div>
  );
}

export default Profile;
