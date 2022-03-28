import ProjectsItem from "./ProjectsItem/ProjectsItem";
import WeatherForecastAppImg from "../../../assets/images/weather-forecast.png";
import TaskManagementAppImg from "../../../assets/images/task-management.jpg";
import NetFlixCloneAppImg from "../../../assets/images/netflix-clone.jpg";
import CountryExplorerImg from "../../../assets/images/country-explorer.png";
import ReactImg from "../../../assets/images/react.png";
import FirebaseImg from "../../../assets/images/firebase.png";
import JavaScriptImg from "../../../assets/images/javascript.png";
import styles from "./ProjectsMain.module.scss";

const Projects = [
    {
        name: "Weather Forecast App",
        img: WeatherForecastAppImg,
        emoji: "⛅",
        description:
            "See The current weather conditions and hourly the weather forecast.There are many information such as High degree, Low degree, Humidity, Pressure, Sunrise Time, Sunset Time. You can search and manage multiple locations, using autocomplete search bar. This app uses weather API of Open Weather.",
        react: ReactImg,
        team: "Personal Project",
    },
    {
        name: "Task Management App",
        img: TaskManagementAppImg,
        emoji: "📓",
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
        react: ReactImg,
        firebase: FirebaseImg,
        team: "Personal Project",
    },
    {
        name: "NetFlix Clone App",
        img: NetFlixCloneAppImg,
        emoji: "🎥",
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
        react: ReactImg,
        firebase: FirebaseImg,
        team: "Personal Project",
    },
    {
        name: "Country Explorer App",
        img: CountryExplorerImg,
        emoji: "🇨🇦",
        description:
            "Every 5 days and 3 hours the weather forecast, and the current weather conditions. Using weather API of Open Weather.",
        javascript: JavaScriptImg,
        team: "Group Project",
        app: "https://country-explorer-83c77.web.app/",
        github: "https://github.com/Tomohiro-Akinaga/country-explorer",
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
