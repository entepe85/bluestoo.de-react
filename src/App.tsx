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
                <h3>In memoriam - Jan &amp; Heinz</h3>
                <p>
                    <strong>Blues Too</strong> zelebrierte den Blues und
                    verwandte Genres auf eine Weise, die Tradition und Moderne
                    vereint. Mit einer Mischung aus eigenen Stücken und
                    erstklassigen Coversongs brachten sie die Wurzeln des Blues
                    in die Gegenwart.
                </p>
                <p>
                    Die tiefen, seelenvollen Töne von Peter-Albert Schotts
                    Keyboard, die groovenden Bässe von Nils Torbjörn Petersen,
                    Heinz-Jürgen Bergmanns virtuose Gitarrenarbeit, die
                    akzentuierten und perkussiven Harp-Klänge Jan-Hendrik
                    Wegners und Boris Ehlers’ präzises Schlagzeugspiel
                    verschmolzen zu einem hypnotischen Klangteppich, der das
                    Publikum in seinen Bann zog.
                </p>
                <p>
                    <strong>
                        Leider haben wir im Jahre 2024 überraschend und sehr
                        bestürzt von nicht nur einem, sondern zwei langjährigen
                        musikalischen Weggefährten und guten Freunden -
                        Jan-Hendrik Wegner und Heinz Bergmann - Abschied nehmen
                        müssen.
                    </strong>
                </p>
                <p>
                    Wir hoffen, dass die beiden die Heavenly Band jetzt mit
                    ihrem ausgezeichneten Gitarren- und Harpspiel verstärken und
                    schauen erst einmal, ob und wie es mit Blues Too weitergeht.
                </p>
            </Section>
            <Section id="player" hasWrapper={true}>
                <SectionTitle label="Zum Reinhören" />
                <Player />
            </Section>
            <Section id="contact" hasWrapper={true}>
                <SectionTitle label="Kontakt" />
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
