export interface SectionTitleProps {
    label: string;
    className?: string;
    id?: string;
}

import styles from './section-title.module.scss';

export const SectionTitle = ({
    label,
    className = '',
    id,
}: SectionTitleProps) => (
    <h2 className={`${styles['section-title']} ${className}`} id={id}>
        {label}
    </h2>
);
