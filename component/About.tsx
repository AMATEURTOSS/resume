import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/About.module.css";
import { text } from "../i18n";
import { useRouter } from "next/router";

const About: FC = () => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  function downloadResume() {
    window.print();
  }

  return (
    <div className={styles.aboutSection}>
      <div className="container">
        <section>
          <h2 className={share.heading}>About Me</h2>
          <p>{text[_locale]["aboutme.explain"]()}</p>
          <div className={`${styles.buttonSec} text-center`}>
            <button className={share.button} onClick={downloadResume}>
              Download Resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
