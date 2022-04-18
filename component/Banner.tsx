import { FC } from "react";
import styles from "../styles/component/Banner.module.css";
import type { WhoAmI } from "../pages/api/whoami";

interface BannerProps {
  whoami: WhoAmI;
  projectCount: number;
  opensourceCount: number;
}

const Banner: FC<BannerProps> = ({ whoami, projectCount, opensourceCount }) => {
  return (
    <div className={styles.banner} style={{ marginTop: "180px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
            <figure>
              <img src="/profile2.jpg" />
            </figure>
          </div>
          <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
            <section>
              <h1>
                <span>안녕하세요!</span>
                저는 구로에 사는
                <br />웹 개발자 {whoami.name}입니다.
              </h1>
              <ul className={styles.numbervalulist}>
                <li>
                  <strong>{whoami.year}</strong>
                  <span>년차</span>
                </li>
                <li>
                  <strong>{projectCount}+</strong>
                  <span>개인 프로젝트</span>
                </li>
                <li>
                  <strong>{opensourceCount}</strong>
                  <span>오픈소스 기여</span>
                </li>
              </ul>
              <div className={styles.contact}>
                <div>
                  <i className={`ri-phone-line ${styles.icon}`} />
                  {whoami.phone}
                </div>
                <div>
                  <i className={`ri-mail-line ${styles.icon}`} />
                  {whoami.email}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
