import ProjectsItem from "./ProjectsItem/ProjectsItem";
import TaskManagementAppImg from "../../../assets/images/task-management.png";
import WeatherForecastAppImg from "../../../assets/images/weather-forecast.png";
import ReactImg from "../../../assets/images/react.png";
import FirebaseImg from "../../../assets/images/firebase.png";
import HTMLImg from "../../../assets/images/html.png";
import CSSImg from "../../../assets/images/css.png";
import JavaScriptImg from "../../../assets/images/javascript.png";
import styles from "./ProjectsMain.module.scss";

const Projects = [
    {
        name: "Weather Forecast App",
        img: WeatherForecastAppImg,
        description:
            "See The current weather conditions and hourly the weather forecast with autocomplete country search feature. This app uses weather API of Open Weather.",
        react: ReactImg,
        team: "Personal",
    },
    {
        name: "Weather Forecast App",
        img: WeatherForecastAppImg,
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
        react: ReactImg,
        team: "Personal",
    },
    {
        name: "Weather Forecast App",
        img: WeatherForecastAppImg,
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
        react: ReactImg,
        team: "Personal",
    },
    {
        name: "Weather Forecast App",
        img: WeatherForecastAppImg,
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
        react: ReactImg,
        team: "Personal",
    },
    // {
    //     name: "Task Manegement App",
    //     img: TaskManagementAppImg,
    //     description:
    //         "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
    //     react: ReactImg,
    //     firebase: FirebaseImg,
    // },
    // {
    //     name: "NetFlix Clone App",
    //     img: WeatherForecastAppImg,
    //     description:
    //         "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
    //     react: ReactImg,
    //     firebase: FirebaseImg,
    // },
    // {
    //     name: "Search Country App",
    //     img: TaskManagementAppImg,
    //     description:
    //         "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
    //     html: HTMLImg,
    //     css: CSSImg,
    //     javascript: JavaScriptImg,
    // },
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
