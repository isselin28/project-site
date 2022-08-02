import React from "react";
import styles from "./MenuBar.module.css";
import gojek from "../../assets/gojek.json";
import personal from "../../assets/personal.json";
import activities from "../../assets/activities.js";
import { Link } from "react-scroll";

const menuList = [
  gojek,
  personal,
  activities,
  {
    title: "Art & Graphic Design",
    id: "arts",
  },
];

function MenuBar() {
  return (
    <div class={styles.container}>
      {menuList.map((menu) => (
        <div class={styles.dropdownContainer}>
          <div class={styles.menu}>
            <Link
              to={menu.id}
              spy={true}
              smooth="easeInOutQuad"
              isDynamic={true}
            >
              {menu.title}
            </Link>
          </div>
          <div class={styles.submenuContainer}>
            {menu.projects?.map((submenu) => (
              <Link
                to={submenu.id}
                spy={true}
                smooth="easeInOutQuad"
                isDynamic={true}
              >
                <div class={styles.submenu}>{submenu.menu}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuBar;
