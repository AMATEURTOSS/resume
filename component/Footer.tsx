import { FC } from "react";
import styles from "../styles/component/Footer.module.css";
import { Container } from "react-bootstrap";

const Footer: FC = () => {
  return (
    <footer className={`${styles.footer} text-center`}>
      <Container>
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
      </Container>
    </footer>
  );
};

export default Footer;
