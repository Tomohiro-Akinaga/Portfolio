import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import accordionButtonImg from "../../assets/images/accordion-button.png";
import accordionButtonCancelImg from "../../assets/images/accordion-button-cancel.png";
import styles from "./Header.module.scss";

function Header() {
    const [accordion, setAccordion] = useState(false);

    const link = [
        { text: "Top", path: "/top" },
        { text: "About", path: "/about" },
        { text: "Projects", path: "/projects" },
        { text: "Contact", path: "/contact" },
    ];

    return (
        <header
            className={
                accordion
                    ? `${styles.header} ${styles.isActive}`
                    : styles.header
            }
        >
            <i className={styles.logo}>
                <FontAwesomeIcon icon={faReact} className={styles.logoIcon} />
            </i>
            <button
                className={styles.accordionButton}
                onClick={() => setAccordion(!accordion)}
            >
                <img
                    src={
                        accordion
                            ? accordionButtonCancelImg
                            : accordionButtonImg
                    }
                    className={styles.accordionButtonImg}
                />
            </button>
            <nav
                className={
                    accordion
                        ? `${styles.navigation} ${styles.isActive}`
                        : styles.navigation
                }
            >
                {link.map((item, index) => (
                    <Link
                        to={item.path}
                        className={styles.navigationLink}
                        key={index}
                    >
                        {item.text}
                    </Link>
                ))}
                <a
                    href="https://drive.google.com/file/d/1EFaiR7ZVyXpI19X7yOfk82Ib8S7GL_lM/view?usp=sharing"
                    className={styles.navigationLink}
                >
                    Resume
                </a>
            </nav>
        </header>
    );
}

export default Header;
