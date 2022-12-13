import ProjectsItem from "./ProjectsItem/ProjectsItem";
import WeatherForecastAppImg from "../../../assets/images/weather-forecast.png";
import TaskManagementAppImg from "../../../assets/images/task-management.jpg";
import NetFlixCloneAppImg from "../../../assets/images/netflix-clone.jpg";
// import CountryExplorerImg from "../../../assets/images/country-explorer.png";
import MusicianFirstImg from "../../../assets/images/musician-first.png";
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
            "See The current weather conditions and hourly the weather forecast. There are information such as High degree, Low degree, Humidity, Pressure, Sunrise Time, Sunset Time. You can search and manage multiple locations, using autocomplete search bar. This app uses weather API of Open Weather.",
        // react: ReactImg,
        team: "Personal Project",
        app: "https://weather-forecast-react-app.web.app/",
        github: "https://github.com/Tomohiro-Akinaga/WeatherForecast-App-React.js",
    },
    {
        name: "Task Management App",
        img: TaskManagementAppImg,
        emoji: "📓",
        description:
            "Simple to-do list app. You can organaized your tasks by things like completed, important and removed. Sign up and see your own tasks whenever you want. This app uses Firebase authentification and firestore.",
        // react: ReactImg,
        // firebase: FirebaseImg,
        team: "Personal Project",
        app: "https://task-management-react-ap-fce44.web.app/",
        github: "https://github.com/Tomohiro-Akinaga/TaskManagement-App-React.js",
    },
    {
        name: "NetFlix Clone App",
        img: NetFlixCloneAppImg,
        emoji: "🎥",
        description:
            "First version of NetFlix clone app. You can see Polular, Top Rated, Trending, Up Coming and Now Playing movies. Also detail information, such as movie description, genre, release data and so on. Next version has create account feature and favorite list feature by Firebase.",
        // react: ReactImg,
        // firebase: FirebaseImg,
        team: "Personal Project",
        app: "https://netflix-clone-react-app-2baad.web.app/",
        github: "https://github.com/Tomohiro-Akinaga/NetFlix-Clone-App-React.js",
    },
    {
        name: "Musician First",
        img: MusicianFirstImg,
        emoji: "🎸",
        description:
            "This is my work project. This service connects musicians who write songs with people who want their songs to be written.",
        // react: ReactImg,
        team: "Work Project",
        app: "https://www.musicianfirst.ca/filter1",
        // github: "https://github.com/Tomohiro-Akinaga/country-explorer",
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
