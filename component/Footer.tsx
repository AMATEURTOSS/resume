import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Footer.module.css";
import { useRouter } from "next/router";
import { text } from "../i18n";

const Footer: FC = () => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <footer className={`${styles.footer} text-center`}>
      <div className="container">
        <ul className={styles.social}>
          <li>
            <a
              href="https://github.com/AMATEURTOSS"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-fill" />
            </a>
          </li>
          <li>
            <a
              href="https://www.amateurtoss.info/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-pages-line" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/%EC%98%81%EC%A7%84-%EC%B5%9C-588655229/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-fill" />
            </a>
          </li>
        </ul>
        <span className={styles.copyright}>© 2022 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
