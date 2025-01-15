import React from "react";
import styles from "./Footer.module.css";
import { IoLogoInstagram, IoLogoWhatsapp, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export default function Footer() {
    return (
        <footer>
            <p  className={styles.textDireitos}>Direitos pertencentes a LinnYohan 2024-2025</p>
            <div className={styles.contactInfoContainer}>
                <h3>Contatos:</h3>
                <div className={styles.icon}>
                    <a
                        className={styles.instagram}
                        href="https://www.instagram.com/bsiforge/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoInstagram size={30} />
                    </a>
                    <a
                        className={styles.whatsapp}
                        href="https://web.whatsapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoWhatsapp size={30} />
                    </a>
                    <a
                        className={styles.linkedin}
                        href="https://www.linkedin.com/in/lilianefalcao"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoLinkedin size={30} />
                    </a>
                    <a
                        className={styles.gitHub}
                        href="https://github.com/LilianeFalcao"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
