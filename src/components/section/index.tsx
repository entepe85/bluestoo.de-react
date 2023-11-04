import { ReactElement } from 'react';

import styles from './section.module.scss';

export interface SectionProps {
    id: string;
    hasWrapper?: boolean;
    children: ReactElement | ReactElement[];
}

export const Section = ({ id, hasWrapper = false, children }: SectionProps) => (
    <section id={id} className={styles['content-section']}>
        {hasWrapper ? (
            <section className={styles['content-wrapper']}>{children}</section>
        ) : (
            children
        )}
    </section>
);
