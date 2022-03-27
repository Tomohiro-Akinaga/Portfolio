import styles from "./ProjectsItem.module.scss";

const weatherForecastGitHub =
    "https://github.com/Tomohiro-Akinaga/WeatherForecast-App-React.js";

function ProjectsItem({ item }) {
    return (
        <li className={styles.wrapper}>
            <div className={styles.item}>
                <img src={item.img} className={styles.itemImg} />
                <div className={styles.textContent}>
                    <h2 className={styles.appName}>{item.name}</h2>
                    <div className={styles.headingContent}>
                        <img src={item.react} className={styles.toolImg} />
                        <p className={styles.team}>{item.team}</p>
                    </div>
                    <p className={styles.description}>{item.description}</p>
                    <div className={styles.linkBox}>
                        <a className={styles.url}>URL &gt;</a>
                        <a href={weatherForecastGitHub} className={styles.url}>
                            GitHub &gt;
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProjectsItem;
