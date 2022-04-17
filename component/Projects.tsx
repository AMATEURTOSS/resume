import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Projects.module.css";

const Projects: FC = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <h2 className={share.heading}>Latest works</h2>
        <div className={styles.listSection}>
          <div className={styles.list}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <section>
                  <h3 className={styles.title}>Tripy mobile app</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis quis sem maximus, ornare metus ut, congue enim. Sed
                    fermentum nulla tellus, quis efficitur mauris tristique
                    efficitur. Aliquam rhoncus sem sed ullamcorper venenatis.
                    Aenean malesuada eu orci non sodales.{" "}
                  </p>
                  <a href="works-setails.html" className={share.button}>
                    Details
                  </a>
                </section>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <figure>
                  <img src="/profile.jpg" />
                </figure>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <section>
                  <h3 className={styles.title}>Hello mobile app</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis quis sem maximus, ornare metus ut, congue enim. Sed
                    fermentum nulla tellus, quis efficitur mauris tristique
                    efficitur. Aliquam rhoncus sem sed ullamcorper venenatis.
                    Aenean malesuada eu orci non sodales.{" "}
                  </p>
                  <a href="works-setails.html" className={share.button}>
                    Details
                  </a>
                </section>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <figure>
                  <img src="/profile.jpg" />
                </figure>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                <section>
                  <h3 className={styles.title}>Cute cookies app</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis quis sem maximus, ornare metus ut, congue enim. Sed
                    fermentum nulla tellus, quis efficitur mauris tristique
                    efficitur. Aliquam rhoncus sem sed ullamcorper venenatis.
                    Aenean malesuada eu orci non sodales.{" "}
                  </p>
                  <a href="works-setails.html" className={share.button}>
                    Details
                  </a>
                </section>
              </div>
              <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                <figure>
                  <img src="/profile.jpg" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
