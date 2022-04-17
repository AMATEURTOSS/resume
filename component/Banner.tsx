import { FC } from "react";
import styles from "../styles/component/Banner.module.css";

const Banner: FC = () => {
  return (
    <div className={styles.banner} style={{ marginTop: "180px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <figure>
              <img src="/profile.jpg" />
            </figure>
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <section>
              <h1>
                <span>HI THERE</span>
                I’m Jason Stroff <br /> UI/UX DESIGNER + DEVELOPER based in
                Florida.
              </h1>
              <ul className={styles.numbervalulist}>
                <li>
                  <strong>6+</strong>
                  <span>Experience</span>
                </li>
                <li>
                  <strong>89</strong>
                  <span>Projects</span>
                </li>
                <li>
                  <strong>52</strong>
                  <span>Happy Clients</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
