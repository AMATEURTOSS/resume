import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Skills.module.css";

const Skills: FC = () => {
  return (
    <div className={styles.skillsSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 className={share.heading}>Core Skills</h2>
            <ul className={styles.skillsList}>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Vue.js</li>
              <li>React</li>
              <li>Sequelize</li>
              <li>Github</li>
              <li>HTML</li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 className={share.heading}>Other Skills</h2>
            <ul className={styles.skillsList}>
              <li>Storyblok</li>
              <li>PWAs</li>
              <li>Responsive Web Design</li>
              <li>React</li>
              <li>Vuetify</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
