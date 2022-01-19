import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import styles from "./HeaderToolbar.module.sass";

const HeaderToolbar = () => {
  return (
    <div className={styles.header__toolbar}>
      <Link href="/login">
        <a>
          <Icon icon="fa-solid:user" className={styles.icons} />
        </a>
      </Link>
      <Link href="/cart">
        <a>
          <Icon icon="clarity:shopping-bag-solid" className={styles.icons} />
        </a>
      </Link>
    </div>
  );
};

export default HeaderToolbar;
