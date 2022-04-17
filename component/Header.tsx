import { FC, useEffect, useRef } from "react";
import styles from "../styles/component/Header.module.css";

const Header: FC = () => {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 10) {
        header.current?.classList.add(styles.fixedHeader);
      } else {
        header.current?.classList.remove(styles.fixedHeader);
      }
    });
  }, []);

  return (
    <header className={styles.header} id="site-header" ref={header}>
      <div className="container">
        <div className={styles.headerInner}>
          <a href="index.html" className={styles.logo}>
            <span>C</span>Choi Young-Jin
          </a>
          <ul className={styles.social}>
            <li>
              <a href="#" target="_blank">
                <i className="ri-github-fill" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="ri-stack-overflow-line" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="ri-linkedin-fill" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
