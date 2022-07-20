import React from "react";
import styles from "./MenuBar.module.css";
import gojek from "../../assets/gojek.json";
import personal from "../../assets/personal.json";
import activities from "../../assets/activities.json";
import { Link } from "react-scroll";

const menuList = [
  gojek,
  personal,
  activities,
  {
    title: "Art Projects",
    projects: [],
    link: "https://imisselin.portfoliobox.net/digitalarts",
  },
];

function MenuBar() {
  return (
    <div class={styles.container}>
      {menuList.map((menu) => (
        <div class={styles.dropdownContainer}>
          {menu.link ? (
            <div class={styles.menu}>
              <a
                href={menu.link}
                target="_blank"
                class={styles.menu}
                rel="noreferrer"
              >
                {menu.title}
              </a>
            </div>
          ) : (
            <div class={styles.menu}>{menu.title}</div>
          )}
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
