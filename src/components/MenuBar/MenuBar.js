import React from "react";
import styles from "./MenuBar.module.css";
import gojek from "../../assets/gojek";
import personal from "../../assets/personal.json";
import activities from "../../assets/activities.js";
import { Link } from "react-scroll";
import { isMobileDevice } from "../../utils";

const menuList = [
  gojek,
  personal,
  activities,
  {
    title: "Art & Graphic Design",
    id: "arts",
  },
];

function MenuBar(props) {
  const { onCloseModal } = props;
  const isMobile = isMobileDevice();

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
              onClick={onCloseModal}
            >
              {menu.title}
            </Link>
          </div>
          {!isMobile && (
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
          )}
        </div>
      ))}
    </div>
  );
}

export default MenuBar;
