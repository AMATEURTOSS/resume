import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Footer.module.css";
import { useRouter } from "next/router";
import { text } from "../i18n";

const Footer: FC = () => {
  const { locale } = useRouter();
  const _locale = locale !== "kr" && locale !== "en-US" ? "kr" : locale;

  return (
    <footer className={`${styles.footer} text-center`}>
      <div className="container">
        <section>
          <span>Stay in touch</span>
          <h4>{text[_locale]["footer.h4"]}</h4>
          <p>{text[_locale]["footer.free2talk"]}</p>
          <a
            href="mailto:amateur.toss@gmail.com"
            className={share.button}
            target="_blank"
            rel="noreferrer"
          >
            {text[_locale]["footer.button"]}
          </a>
        </section>
        <span className={styles.copyright}>© 2022 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
