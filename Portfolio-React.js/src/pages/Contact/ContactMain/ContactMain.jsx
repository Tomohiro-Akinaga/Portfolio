import styles from "./ContactMain.module.scss";

function ContactMain() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Thank you for visiting my portfolio !
            </h1>
            <p className={styles.text}>
                If you require any further information, feel free to contact me
                :)
            </p>
            <a href="mailto:akitomo129@gmail.com" className={styles.email}>
                akitomo129@gmail.com
            </a>
        </main>
    );
}

export default ContactMain;
