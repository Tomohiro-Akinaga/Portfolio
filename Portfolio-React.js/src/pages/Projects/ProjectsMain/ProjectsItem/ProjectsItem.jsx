import { useState } from "react";
import styles from "./ProjectsItem.module.scss";

function ProjectsItem({ item }) {
    const [isHover, setIsHover] = useState(false);

    return (
        <li className={styles.wrapper}>
            <div
                className={styles.imgContent}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {isHover && (
                    <p className={styles.description}>{item.description}</p>
                )}
                <img src={item.img} className={styles.itemImg} />
            </div>
            <div className={styles.textContent}>
                <h2 className={styles.appName}>
                    {item.name}
                    <span role="img" aria-label="emoji">
                        {item.emoji}
                    </span>
                </h2>
                <div className={styles.headingContent}>
                    {item.react && (
                        <img src={item.react} className={styles.toolImg} />
                    )}
                    {item.firebase && (
                        <img src={item.firebase} className={styles.toolImg} />
                    )}
                    {item.javascript && (
                        <img src={item.javascript} className={styles.toolImg} />
                    )}
                    <p className={styles.team}>{item.team}</p>
                </div>
                <div className={styles.linkBox}>
                    <a href={item.app} className={styles.url} target="_blank">
                        URL &gt;
                    </a>
                    <a
                        href={item.github}
                        className={styles.url}
                        target="_blank"
                    >
                        GitHub &gt;
                    </a>
                </div>
            </div>
        </li>
    );
}

export default ProjectsItem;
