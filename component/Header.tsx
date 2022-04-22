import { FC, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/component/Header.module.css";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const Header: FC = () => {
  const header = useRef<HTMLElement>(null);

  const router = useRouter();
  let _locale =
    router.locale !== "ko-KR" && router.locale !== "en-US"
      ? "ko-KR"
      : router.locale;

  useEffect(() => {
    _locale =
      router.locale !== "ko-KR" && router.locale !== "en-US"
        ? "ko-KR"
        : router.locale;
  }, [router.locale]);

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
      <Container>
        <div className={styles.headerInner}>
          <Link href="/">
            <div className={styles.logo}>
              <span>C</span>Choi Young-Jin
            </div>
          </Link>
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
            <li>
              <select
                className="form-select"
                value={_locale}
                onChange={(e) => {
                  if (e.target.value === "ko-KR") location.href = "/";
                  else if (e.target.value === "en-US") location.href = "/en-US";
                }}
              >
                <option value="ko-KR">한국어</option>
                <option value="en-US">English</option>
              </select>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
