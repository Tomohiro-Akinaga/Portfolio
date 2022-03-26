import facePhoto from "../../../assets/images/face.jpg";
import styles from "./TopMain.module.scss";

const LinkedIn_URL = "https://www.linkedin.com/in/tomohiro-akinaga-b7b30a175/";
const GitHub_URL = "https://github.com/Tomohiro-Akinaga";
const Resume_URL = "";
const YouTube_URL = "https://www.youtube.com/channel/UC700Xq2XEMK_a1OHL88lrJg";
const Blog_URL = "https://medium.com/@tomohiroakinaga";

function TopMain() {
    return (
        <main className={styles.main}>
            <div className={styles.leftContainer}>
                <img src={facePhoto} className={styles.facePhoto} />
                <h1 className={styles.myName}>Tomohiro Akinaga</h1>
                <p className={styles.jobTitle}>
                    Front-End Developer &amp; YouTuber
                </p>
                <p className={styles.description}>
                    I am a curious Front-End Developer and Video Creator based
                    in Vancouver.
                </p>
            </div>
            <ul className={styles.rightContainer}>
                <a href={LinkedIn_URL} className={styles.externalUrl}>
                    LinkedIn
                </a>
                <a href={GitHub_URL} className={styles.externalUrl}>
                    GitHub
                </a>
                <a href={Resume_URL} className={styles.externalUrl}>
                    Resume
                </a>
                <a href={YouTube_URL} className={styles.externalUrl}>
                    YouTube
                </a>
                <a href={Blog_URL} className={styles.externalUrl}>
                    Blog
                </a>
            </ul>
        </main>
    );
}

export default TopMain;
