import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={`${styles.footer} text-center`}>
      <div className="container">
        <section>
          <span>Stay in touch</span>
          <h4>Ready to talk?</h4>
          <p>Feel free to contact us</p>
          <a href="mailto:test@test.com" className={share.button}>
            Lets Talk
          </a>
        </section>
        <span className={styles.copyright}>
          © 2022 All rights reserved. Free minimal bootstrap template by{" "}
          <a href="https://designstub.com/" target="_blank" rel="noreferrer">
            Designstub
          </a>
          .
        </span>
      </div>
    </footer>
  );
};

export default Footer;
