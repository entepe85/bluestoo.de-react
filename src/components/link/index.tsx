export interface LinkProps {
    target: string;
    label: string;
    blank?: boolean;
    className?: string;
}

export const Link = ({
    target,
    label,
    blank = false,
    className = '',
}: LinkProps) => (
    <a
        href={target}
        className={className}
        target={blank ? '_blank' : undefined}
        rel={blank ? 'noopener' : undefined}
    >
        {label}
    </a>
);
