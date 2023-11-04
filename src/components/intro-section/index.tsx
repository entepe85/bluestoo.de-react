import { Claim, Section } from '..';

export const IntroSection = () => (
    <Section id="intro">
        <img
            src="./src/assets/header.webp"
            alt="BluesToo Bandbild"
            id="group-image"
            className="full-width"
        />
        <Claim />
    </Section>
);
