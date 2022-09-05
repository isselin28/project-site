import React from "react";
import styles from "./Modal.module.css";
import MenuBar from "../MenuBar/MenuBar";

function Modal(props) {
  const { onClose } = props;
  return (
    <div className={styles.modal}>
      <div className={styles.closeIcon} onClick={onClose}>
        &#215;
      </div>
      <div className={styles.menuContainer}>
        <MenuBar onCloseModal={onClose} />
      </div>
    </div>
  );
}

export default Modal;
