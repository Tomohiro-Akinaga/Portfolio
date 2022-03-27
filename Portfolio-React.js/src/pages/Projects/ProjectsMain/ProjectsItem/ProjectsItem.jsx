import styles from "./ProjectsItem.module.scss";

const weatherForecastURL =
    "https://github.com/Tomohiro-Akinaga/WeatherForecast-App-React.js";

function ProjectsItem({ item }) {
    return (
        <li className={styles.wrapper}>
            <div className={styles.item}>
                <img src={item.img} className={styles.itemImg} />
                <div className={styles.textContent}>
                    <h2 className={styles.heading}>{item.name}</h2>
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
                        {item.html && (
                            <img src={item.html} className={styles.toolImg} />
                        )}
                        {item.css && (
                            <img src={item.css} className={styles.toolImg} />
                        )}
                        {item.javascript && (
                            <img
                                src={item.javascript}
                                className={styles.toolImg}
                            />
                        )}
                        <p className={styles.team}>{item.team}</p>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.linkBox}>
                        <a className={styles.url}>URL &gt;</a>
                        <a href={weatherForecastURL} className={styles.url}>
                            GitHub &gt;
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProjectsItem;
