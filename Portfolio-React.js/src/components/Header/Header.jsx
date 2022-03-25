import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import accordionButtonImg from "../../assets/images/accordion-button.png";
import styles from "./Header.module.scss";

function Header() {
    const [accordion, setAccordion] = useState(false);

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
                    src={accordionButtonImg}
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
                <Link to="/top" className={styles.navigationLink}>
                    Top
                </Link>
                <Link to="/about" className={styles.navigationLink}>
                    About
                </Link>
                <Link to="/work" className={styles.navigationLink}>
                    Work
                </Link>
                <Link to="/contact" className={styles.navigationLink}>
                    Contact
                </Link>
            </nav>
        </header>
    );
}

export default Header;
