import { FC } from "react";
import styles from "../styles/component/Banner.module.css";
import type { WhoAmI } from "../pages/api/whoami";
import { i18n, text } from "../i18n";
import { useRouter } from "next/router";

interface BannerProps {
  whoami: i18n<WhoAmI>;
}

const Banner: FC<BannerProps> = ({ whoami }) => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <div className={styles.banner}>
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
                <span>{text[_locale]["banner.hi"]}</span>
                {text[_locale]["banner.adjective"]}
                <br />
                {text[_locale]["banner.intro"](whoami[_locale].name)}
              </h1>
              <ul className={styles.numbervalulist}>
                <li>
                  <strong>{whoami[_locale].year}</strong>
                  <span>{text[_locale]["banner.year"]}</span>
                </li>
                <li>
                  <strong>{whoami[_locale].projectCount}+</strong>
                  <span>{text[_locale]["banner.project"]}</span>
                </li>
                <li>
                  <strong>{whoami[_locale].opensourceCount}+</strong>
                  <span>{text[_locale]["banner.opensource"]}</span>
                </li>
              </ul>
              <div className={styles.contact}>
                <div>
                  <i className={`ri-phone-line ${styles.icon}`} />
                  {whoami[_locale].phone}
                </div>
                <div>
                  <i className={`ri-mail-line ${styles.icon}`} />
                  {whoami[_locale].email}
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
