import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={`${styles.footer} text-center`}>
      <div className="container">
        <section>
          <span>Stay in touch</span>
          <h4>이야기를 하고싶으신가요?</h4>
          <p>언제든지 연락주세요</p>
          <a
            href="mailto:amateur.toss@gmail.com"
            className={share.button}
            target="_blank"
            rel="noreferrer"
          >
            연락하기
          </a>
        </section>
        <span className={styles.copyright}>© 2022 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
