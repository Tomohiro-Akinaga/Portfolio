import styles from "./AboutMain.module.scss";

function AboutMain() {
    return (
        <main className={styles.main}>
            <div className={styles.leftContainer}>
                <h2 className={styles.heading}>About me</h2>
                <p className={styles.paragraph}>
                    Hello, my name is Tomo. I was born and raised in Japan.
                    After graduating from university, I worked in digital
                    marketing and as a counsellor at a tourist information
                    center in Tokyo.
                </p>
                <br />
                <p className={styles.paragraph}>
                    In order to become a front-end developer, I am currently
                    studying programming with a focus on JavaScript at a college
                    in Vancouver. In addition to coding, I also love photo
                    processing, video editing, and digital marketing. I am
                    familiar with all areas of the web and can handle a wide
                    range of tasks from design, development, and analysis.
                </p>
                <br />
                <p className={styles.paragraph}>
                    I am a very passionate and curious person who pursues
                    everything to the fullest. There are still many things that
                    I have yet to learn, but I am eager to learn and improve my
                    skills.
                </p>
            </div>
            <div className={styles.rightContainer}>
                <div usingCurrently>
                    <h2 className={styles.heading}>Use currently</h2>
                </div>
                <div eagerToLearn>
                    <h2 className={styles.heading}>Eager to learn</h2>
                    <p></p>
                </div>
            </div>
        </main>
    );
}

export default AboutMain;
