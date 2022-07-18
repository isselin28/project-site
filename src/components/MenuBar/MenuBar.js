import React from "react";
import styles from "./MenuBar.module.css";

function MenuBar() {
  const menuList = [
    {
      main: "Gojek / Moka",
      submenu: [
        "React Component Library",
        "Gofood Middleware UI",
        "GoStore",
        "POS Features",
      ],
    },
    { main: "Personal Projects", submenu: ["Tetris", "Lotek Kalipah Apo"] },
    {
      main: "Activities & Events",
      submenu: [
        "NTU Open House 2019",
        "MAE Club",
        "NTU Peak Leadership",
        "Berkeley Summer Exchange",
        "International Math Competitions",
      ],
    },
    { main: "Art Projects", submenu: [] },
  ];

  return (
    <div class={styles.container}>
      {menuList.map((menu) => (
        <div class={styles.dropdownContainer}>
          <div class={styles.menu}>{menu.main}</div>
          <div class={styles.submenu}>
            {menu.submenu.map((submenu) => (
              <div>{submenu}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuBar;
