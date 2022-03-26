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
        { text: "Work", path: "/work" },
        { text: "Resume", path: "/resume" },
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
            </nav>
        </header>
    );
}

export default Header;
