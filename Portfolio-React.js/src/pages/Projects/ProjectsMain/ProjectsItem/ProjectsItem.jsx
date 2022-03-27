import styles from "./ProjectsItem.module.scss";

function ProjectsItem({ item }) {
    return (
        <li className={styles.wrapper}>
            <div className={styles.item}>
                <img src={item.img} className={styles.itemImg} />
                <div className={styles.textContent}>
                    <h2 className={styles.heading}>{item.name}</h2>
                    <p className={styles.text}>{item.description}</p>
                    <div className={styles.linkBox}>
                        <a className={styles.url}>URL</a>
                        <a className={styles.url}>GitHub</a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProjectsItem;
