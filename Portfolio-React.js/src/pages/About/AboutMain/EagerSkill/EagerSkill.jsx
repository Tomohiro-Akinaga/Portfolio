import styles from "./EagerSkill.module.scss";
import JestImg from "../../../../assets/images/jest.png";
import ReactTestingLibraryImg from "../../../../assets/images/react-testing-library.png";
import webpackImg from "../../../../assets/images/webpack.png";
import AdobeXDImg from "../../../../assets/images/adobe-xd.png";

const skills = [
    { text: "webpack", img: webpackImg },
    { text: "Jest", img: JestImg },
    {
        text: "React" + " " + "Testing" + " " + "Library",
        img: ReactTestingLibraryImg,
    },
    { text: "Adobe" + " " + "XD", img: AdobeXDImg },
];

function UseSkill() {
    return (
        <ul className={styles.skillBox}>
            {skills.map((item, index) => (
                <li key={index} className={styles.skill}>
                    <img src={item.img} className={styles.skillImg} />
                    <p className={styles.skillText}>{item.text}</p>
                </li>
            ))}
        </ul>
    );
}

export default UseSkill;
