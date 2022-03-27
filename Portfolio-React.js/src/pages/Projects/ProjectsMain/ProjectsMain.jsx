import ProjectsItem from "./ProjectsItem/ProjectsItem";
import TaskManagementAppImg from "../../../assets/images/task-management.png";
import WeatherForecastAppImg from "../../../assets/images/weather-forecast.png";

import styles from "./ProjectsMain.module.scss";

const Projects = [
    {
        name: "Weather Forecast App",
        img: WeatherForecastAppImg,
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
    },
    {
        name: "Task Manegement App",
        img: TaskManagementAppImg,
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
    },
    {
        name: "NetFlix Clone App",
        img: WeatherForecastAppImg,
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
    },
    {
        name: "Search Country App",
        img: TaskManagementAppImg,
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
    },
];

function ProjectsMain() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Projects</h1>
            <ul className={styles.itemBox}>
                {Projects.map((item, index) => (
                    <ProjectsItem item={item} key={index} />
                ))}
            </ul>
        </main>
    );
}

export default ProjectsMain;
