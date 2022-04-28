import { FC } from "react";
import styles from "../styles/component/Banner.module.css";
import type { WhoAmI } from "../pages/api/whoami";
import { i18n, text } from "../i18n";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";

interface BannerProps {
  whoami: i18n<WhoAmI>;
}

const Banner: FC<BannerProps> = ({ whoami }) => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  function goto(target: string) {
    const yOffset = -100;
    const element = document.getElementById(target);
    if (!element) throw Error();
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
    <div className={styles.banner}>
      <Container>
        <Row>
          <Col sm={12} md={5} lg={5} xl={5} xxl={5}>
            <figure>
              <img src="/profile2.jpg" alt="프로필 사진" />
            </figure>
          </Col>
          <Col sm={12} md={7} lg={7} xl={7} xxl={7}>
            <section>
              <h1>
                <span>{text[_locale]["banner.hi"]}</span>
                {text[_locale]["banner.adjective"]}
                <br />
                {text[_locale]["banner.intro"](whoami[_locale].name)}
              </h1>
              <ul className={styles.numbervalulist}>
                <li onClick={() => goto("experience")}>
                  <strong>{whoami[_locale].year}</strong>
                  <span>{text[_locale]["banner.year"]}</span>
                </li>
                <li onClick={() => goto("project")}>
                  <strong>{whoami[_locale].projectCount}+</strong>
                  <span>{text[_locale]["banner.project"]}</span>
                </li>
                <li onClick={() => goto("opensource")}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
