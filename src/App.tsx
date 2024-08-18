import { useLayoutEffect } from 'react';
import {
    IntroSection,
    Link,
    NavBar,
    Player,
    Section,
    SectionTitle,
} from './components';

import navStyles from './components/navbar/navbar.module.scss';

const handleHashChange = (ev: HashChangeEvent) => {
    const id = ev.newURL.split('#')[1];
    if (id !== undefined) {
        const activeLink = document.querySelector(`.${navStyles['active']}`);
        const link = document.querySelector(`a[href="#${id}"]`);

        activeLink?.classList.remove(navStyles['active']);
        link?.classList.add(navStyles['active']);
    }
};

function App() {
    useLayoutEffect(() => {
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <>
            <header className="page-header">
                <NavBar>
                    <Link
                        target="#about"
                        label="Über"
                        className={navStyles.link}
                        key="link-about"
                    />
                    <Link
                        target="#player"
                        label="Reinhören"
                        className={navStyles.link}
                        key="link-player"
                    />
                    <Link
                        target="#contact"
                        label="Kontakt"
                        className={navStyles.link}
                        key="link-contact"
                    />
                </NavBar>
            </header>
            <IntroSection />
            <Section id="about" hasWrapper={true}>
                <SectionTitle label="Über uns" />
                <p>
                    <strong>Blues Too</strong> zelebriert den Blues und
                    verwandte Genres auf eine Weise, die Tradition und Moderne
                    vereint. Mit einer Mischung aus eigenen Stücken und
                    erstklassigen Coversongs bringen sie die Wurzeln des Blues
                    in die Gegenwart.
                </p>
                <p>
                    Die tiefen, seelenvollen Töne von Peter-Albert Schotts
                    Keyboard, die groovenden Bässe von Nils Torbjörn Petersen,
                    Heinz-Jürgen Bergmanns virtuose Gitarrenarbeit und Boris
                    Ehlers’ präzises Schlagzeugspiel verschmelzen zu einem
                    hypnotischen Klangteppich, der das Publikum in seinen Bann
                    zieht.
                </p>
                <p>
                    <strong>Blues Too - Keeping the Blues Alive</strong> ist
                    mehr als nur eine Band. Es ist eine Mission. Die
                    Bandmitglieder sind leidenschaftliche Botschafter des Blues,
                    die es sich zur Aufgabe gemacht haben, die Flamme dieser
                    Musikrichtung am Brennen zu halten.
                </p>
                <p>
                    Ihre Live-Auftritte sind mit Energie und Leidenschaft
                    geladen, und die Zuhörer werden auf eine emotionale Reise
                    mitgenommen, die von tiefer Melancholie bis hin zu
                    ekstatischer Freude reicht.
                </p>
            </Section>
            <Section id="player" hasWrapper={true}>
                <SectionTitle label="Zum Reinhören" />
                <Player />
            </Section>
            <Section id="contact" hasWrapper={true}>
                <SectionTitle label="Kontakt & Booking" />
                <p>
                    Peter-Ludolf Petersen
                    <br />
                    @: kontakt@bluestoo.de
                    <br />
                    M: +49 (0) 151 55885969
                </p>
                <img src="./assets/contact.webp" className="full-width" />
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Blues Too - all rights
                    reserved
                </p>
            </Section>
        </>
    );
}

export default App;
