import React from 'react';
import HeaderMenu from '../header/HeaderMenu/HeaderMenu';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import Footer from '../footer/Footer';
import styles from "./MainLayout.module.sass";
import Logo from '../UI/Logo/Logo';

const MainLayout = ({children}) => {
    return (
        <>
            <header className={`.header .header-dark .text-light ${styles.header__main}`}>
                <Logo />
                <HeaderMenu/>
                <HeaderToolbar/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
}

export default MainLayout;
