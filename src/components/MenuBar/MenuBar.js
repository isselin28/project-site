import React from "react";
import styles from "./MenuBar.module.css";

function MenuBar() {
  const menuList = [
    "Gojek / Moka",
    "Personal Projects",
    "Activities & Events",
    "Art Projects",
  ];

  return (
    <div class={styles.container}>
      {menuList.map((menu) => (
        <div class={styles.menu}>{menu}</div>
      ))}
    </div>
  );
}

export default MenuBar;
