import React from "react";
import Link from "next/link";
import styles from "./HeaderMenu.module.sass";

const HeaderMenu = () => {
  return (
    <div className={styles.header__menu}>
      <nav>
        <ul>
          <li>
            <Link href="/recently-added">
              <a>Récemment ajouté</a>
            </Link>
          </li>
          <li>
            <Link href="/collections">
              <a>Collections</a>
            </Link>
          </li>
          <li>
            <Link href="/Accessories">
              <a>Accessoires</a>
            </Link>
          </li>
          <li>
            <Link href="/outside">
              <a>Extérieur</a>
            </Link>
          </li>
          <li>
            <Link href="/Furniture">
              <a>Meubles</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderMenu;
