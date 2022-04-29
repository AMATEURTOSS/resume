import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/About.module.css";
import { text } from "../i18n";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const About: FC = () => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  /* pdf 생성용 함수, <a>Download Resume</a> 태그를 button으로 바꾼뒤
     실행시켜 pdf로 전환 후에 a tag로 다시 변경
   */
  // function downloadResume() {
  //   (window as any).Tawk_API.hideWidget();
  //   setTimeout(() => {
  //     window.print();
  //     (window as any).Tawk_API.showWidget();
  //   }, 1);
  // }

  return (
    <div className={styles.aboutSection}>
      <Container>
        <section>
          <h2 className={share.heading}>About Me</h2>
          <p>{text[_locale]["aboutme.explain"]()}</p>
          <div className={`${styles.buttonSec} text-center`}>
            <a
              className={share.button}
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default About;
