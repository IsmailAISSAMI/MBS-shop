import React from 'react';
import Link from "next/link";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer__main}>
            <div className={styles.footer__logo}>
                {/* <img src={Logo.src} alt="Logo" /> */}
            </div>
        </div>
    );
}

export default Footer;
