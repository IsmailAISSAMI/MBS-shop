import React from 'react';
import styles from "./Logo.module.sass";

const Logo = () => {
    return (
        <div className={styles.logo__container}>
            <hr className={styles.line}/>
            <div className={styles.brand__name}>
                TBS
            </div>
        </div>
    );
}

export default Logo;
