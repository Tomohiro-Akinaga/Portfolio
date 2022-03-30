import facePhoto from "../../../assets/images/face.jpg";
import LinkedInImg from "../../../assets/images/linkedin.png";
import GitHubImg from "../../../assets/images/github.png";
import ResumeImg from "../../../assets/images/resume.png";
import YouTubeImg from "../../../assets/images/youtube.png";
import BlogImg from "../../../assets/images/medium.png";

import styles from "./TopMain.module.scss";

const LinkedIn_URL = "https://www.linkedin.com/in/tomohiro-akinaga-b7b30a175/";
const GitHub_URL = "https://github.com/Tomohiro-Akinaga";
const YouTube_URL = "https://www.youtube.com/channel/UC700Xq2XEMK_a1OHL88lrJg";
const Blog_URL = "https://medium.com/@tomohiroakinaga";

const linkURL = [
    { text: "LinkedIn", img: LinkedInImg, url: LinkedIn_URL },
    { text: "GitHub", img: GitHubImg, url: GitHub_URL },
    { text: "YouTube", img: YouTubeImg, url: YouTube_URL },
    { text: "Blog", img: BlogImg, url: Blog_URL },
];

function TopMain() {
    return (
        <main className={styles.main}>
            <div className={styles.leftContainer}>
                <img src={facePhoto} className={styles.facePhoto} />
                <div className={styles.introduction}>
                    <h1 className={styles.myName}>Tomohiro Akinaga</h1>
                    <p className={styles.jobTitle}>
                        Front-End Developer &amp; YouTuber
                    </p>
                </div>
                <p className={styles.description}>
                    I am a curious Front-End Developer and Video Creator based
                    in Vancouver.
                </p>
            </div>
            <ul className={styles.rightContainer}>
                {linkURL.map((item, index) => (
                    <li key={index} className={styles.urlItem}>
                        <img src={item.img} className={styles.urlImg} />
                        <a
                            href={item.url}
                            className={styles.externalUrl}
                            target="_blank"
                        >
                            {item.text} &gt;
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default TopMain;
