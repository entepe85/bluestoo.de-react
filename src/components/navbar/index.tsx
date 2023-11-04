import { ReactElement, cloneElement } from 'react';

import styles from './navbar.module.scss';

export interface NavBarProps {
    children: ReactElement[];
}

export const NavBar = ({ children }: NavBarProps) => (
    <nav className={styles['main-nav']}>
        {children.map((child) =>
            cloneElement(child, { props: { className: styles.link } })
        )}
    </nav>
);
