import React, { useState } from "react";
import Modal from "./Modal";
import styles from "./Modal.module.css";
import Bar from "../../assets/bars_solid.svg";

function Burger() {
  const [isShow, setShow] = useState(false);

  return (
    <div className={styles.stickyContainer}>
      <div onClick={() => setShow(true)}>
        <img className={styles.burgerIcon} src={Bar} alt="bar icon" />
      </div>
      <Modal isShow={isShow} onClose={() => setShow(false)} />
    </div>
  );
}

export default Burger;
