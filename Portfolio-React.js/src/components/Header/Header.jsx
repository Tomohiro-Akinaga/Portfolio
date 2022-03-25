import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
    const [accordion, setAccordion] = useState(false);

    return (
        <header>
            <button
                className={styles.button}
                onClick={() => setAccordion(!accordion)}
            >
                accordion
            </button>
            <nav
                className={
                    accordion ? `${styles.nav} ${styles.isActive}` : styles.nav
                }
            >
                <Link to="/top">Top</Link>
                <Link to="/about">About</Link>
                <Link to="/work">Work</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
