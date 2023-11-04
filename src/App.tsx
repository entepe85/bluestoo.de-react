import { useLayoutEffect } from 'react';
import {
    IntroSection,
    Link,
    NavBar,
    Section,
    SectionTitle,
} from './components';

import navStyles from './components/navbar/navbar.module.scss';

function App() {
    useLayoutEffect(() => {
        window.addEventListener('hashchange', (ev: HashChangeEvent) => {
            const id = ev.newURL.split('#')[1];
            if (id !== undefined) {
                const activeLink = document.querySelector(
                    `.${navStyles['active']}`
                );
                const link = document.querySelector(`a[href="#${id}"]`);

                activeLink?.classList.remove(navStyles['active']);
                link?.classList.add(navStyles['active']);
            }
        });
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
                    Heinz-Jürgen Bergmanns virtuose Gitarrenarbeit, Jan-Hendrik
                    Wegners harmonische Harp-Klänge und Boris Ehlers’ präzises
                    Schlagzeugspiel verschmelzen zu einem hypnotischen
                    Klangteppich, der das Publikum in seinen Bann zieht.
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
                {/* TODO: Implement consent mechanism or risk a GDPR fine! >:o */}
                <iframe
                    width="100%"
                    height="480"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/214456951&color=%234c7484&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    frameBorder="0"
                />
                <div
                    style={{
                        fontSize: '10px',
                        color: '#cccccc',
                        lineBreak: 'anywhere',
                        wordBreak: 'normal',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        fontFamily:
                            'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                        fontWeight: '100',
                    }}
                >
                    <a
                        href="https://soundcloud.com/blues-too"
                        title="Blues Too"
                        target="_blank"
                        style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                        Blues Too
                    </a>
                    <a
                        href="https://soundcloud.com/blues-too/sets/demo-snippets"
                        title="Demo Snippets"
                        target="_blank"
                        style={{ color: '#cccccc', textDecoration: 'none' }}
                    >
                        Demo Snippets
                    </a>
                </div>
            </Section>
        </>
    );
}

export default App;
