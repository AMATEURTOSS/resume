import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Experience.module.css";

const Experience: FC = () => {
  return (
    <div className={styles.experienceSection}>
      <div className="container">
        <h2 className={share.heading}>Work Experience</h2>
        <div className={`row ${styles.experienceList}`}>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className={styles.year}>2019 - Present</span>
              <h3 className={styles.officename}>Matrix Media Inc</h3>
              <span className={styles.department}>Full Stack developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quis sem maximus, ornare metus ut, congue enim. Sed fermentum.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis sem maximus, ornare metus ut.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
            </section>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <section>
              <span className={styles.year}>2018 - 2019</span>
              <h3 className={styles.officename}>Lexind</h3>
              <span className={styles.department}>Senior app developer</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                quis sem maximus, ornare metus ut, congue enim. Sed fermentum.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis sem maximus, ornare metus ut.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  quis sem maximus, ornare metus ut.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
