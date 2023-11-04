import { useState } from 'react';

import styles from './player.module.scss';

export const Player = () => {
    const [isActive, setIsActive] = useState(false);

    if (isActive) {
        return (
            <>
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
                ></div>
            </>
        );
    }

    return (
        <section className={styles['player-info']}>
            <p>
                Hier ist ein Audio-Player von Soundcloud eingebunden. Durch das
                Aktivieren stimmt ihr der Datenübertragung zu Soundcloud gemäß
                deren&nbsp;
                <a
                    href="https://soundcloud.com/pages/privacy"
                    target="_blank"
                    rel="noopener"
                >
                    Datenschutzbestimmungen
                </a>
                &nbsp;zu.
            </p>
            <button
                type="button"
                onClick={() => setIsActive(true)}
                className={styles['player-button']}
            >
                ▶ Player aktivieren
            </button>
        </section>
    );
};
