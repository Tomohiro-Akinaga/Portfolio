import styles from "./UseSkill.module.scss";
import HTMLImg from "../../../../assets/images/html.png";
import CSSImg from "../../../../assets/images/css.png";
import SassImg from "../../../../assets/images/sass.png";
import JavaScriptImg from "../../../../assets/images/javascript.png";
import ReactImg from "../../../../assets/images/react.png";
import FirebaseImg from "../../../../assets/images/firebase.png";
import npmImg from "../../../../assets/images/npm.png";
import GitHubImg from "../../../../assets/images/github.png";
import AdobePremiereProImg from "../../../../assets/images/adobe-premiere-pro.png";
import AdobePhotoShopImg from "../../../../assets/images/adobe-photoshop.png";
import GoogleAnalyticsImg from "../../../../assets/images/google-analytics.png";
import Jest from "../../../../assets/images/jest.png";
import ReactTestingLibrary from "../../../../assets/images/react-testing-library.png";
import webpack from "../../../../assets/images/webpack.png";
import TypeScriptImg from "../../../../assets/images/typescript.png";
import AdobeXD from "../../../../assets/images/adobe-xd.png";
import MaterialUIImg from "../../../../assets/images/materialui.png";
import NodeJSImg from "../../../../assets/images/nodejs.png";
import ExpressImg from "../../../../assets/images/expressjs.png";
import MongoDBImg from "../../../../assets/images/mongodb.png";

const skills = [
    { text: "HTML", img: HTMLImg },
    { text: "CSS", img: CSSImg },
    { text: "Sass", img: SassImg },
    { text: "JavaScript", img: JavaScriptImg },
    { text: "React", img: ReactImg },
    { text: "TypeScript", img: TypeScriptImg },
    { text: "Material-UI", img: MaterialUIImg },
    { text: "Node.js", img: NodeJSImg },
    { text: "Express.js", img: ExpressImg },
    { text: "MongoDB", img: MongoDBImg },
    { text: "Firebase", img: FirebaseImg },
    { text: "npm", img: npmImg },
    { text: "GitHub", img: GitHubImg },
    { text: "Adobe" + " " + "PremierePro", img: AdobePremiereProImg },
    { text: "Adobe" + " " + "PhotoShop", img: AdobePhotoShopImg },
    { text: "Google" + " " + "Analytics", img: GoogleAnalyticsImg },
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
