import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Opensources.module.css";
import { OpenSource } from "../pages/api/opensource";
import { useRouter } from "next/router";
import { i18n } from "../i18n";
import { Container, Row, Col } from "react-bootstrap";

interface ProjectsProps {
  opensources: i18n<OpenSource>;
}

const Projects: FC<ProjectsProps> = ({ opensources }) => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <div className={styles.section} id="opensource">
      <Container>
        <h2 className={share.heading}>Opensource Contribute</h2>
        <div className={styles.listSection}>
          {opensources[_locale].slice(0, 1).map((os, idx) => {
            return (
              <div className={styles.list} key={idx}>
                <Row>
                  <Col sm={12} md={7} lg={7} xl={7} xxl={7}>
                    <section>
                      <h3 className={styles.title}>{os.name}</h3>
                      <ul className={styles.contributeTypeList}>
                        {os.labels.map((label, idx) => {
                          return (
                            <li
                              key={idx}
                              style={{ backgroundColor: `#${label.color}` }}
                            >
                              {label.name}
                            </li>
                          );
                        })}{" "}
                      </ul>
                      <p>{os.describe}</p>
                      <a
                        href={os.prURL}
                        className={share.button}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Details
                      </a>
                    </section>
                  </Col>
                  <Col sm={12} md={5} lg={5} xl={5} xxl={5}>
                    <figure>
                      <img src={os.logo} />
                    </figure>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
