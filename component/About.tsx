import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/About.module.css";
import { text } from "../i18n";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const About: FC = () => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  function downloadResume() {
    (window as any).Tawk_API.hideWidget();
    setTimeout(() => {
      window.print();
      (window as any).Tawk_API.showWidget();
    }, 1);
  }

  return (
    <div className={styles.aboutSection}>
      <Container>
        <section>
          <h2 className={share.heading}>About Me</h2>
          <p>{text[_locale]["aboutme.explain"]()}</p>
          <div className={`${styles.buttonSec} text-center`}>
            <button className={share.button} onClick={downloadResume}>
              Download Resume
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
