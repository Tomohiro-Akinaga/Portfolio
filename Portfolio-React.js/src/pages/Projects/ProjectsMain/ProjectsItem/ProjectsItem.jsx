import styles from "./ProjectsItem.module.scss";

function ProjectsItem({ item }) {
    return (
        <li className={styles.wrapper}>
            <div className={styles.item}>
                <img src={item.img} className={styles.itemImg} />
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
                            <img
                                src={item.firebase}
                                className={styles.toolImg}
                            />
                        )}
                        {item.javascript && (
                            <img
                                src={item.javascript}
                                className={styles.toolImg}
                            />
                        )}
                        <p className={styles.team}>{item.team}</p>
                    </div>
                    {/* <p className={styles.description}>{item.description}</p> */}
                    <div className={styles.linkBox}>
                        <a href={item.app} className={styles.url}>
                            URL &gt;
                        </a>
                        <a href={item.github} className={styles.url}>
                            GitHub &gt;
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProjectsItem;
