import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Experience.module.css";
import type { Career } from "../pages/api/career";
import { useRouter } from "next/router";
import { i18n, text } from "../i18n";
import { Container, Row, Col } from "react-bootstrap";

interface ExperienceProps {
  career: i18n<Career>;
}

const Experience: FC<ExperienceProps> = ({ career }) => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <div className={styles.section}>
      <Container>
        <h2 className={share.heading}>Work Experience</h2>
        <Row className={styles.list}>
          {career[_locale].map((company, idx) => {
            const enter = new Date(company.enteringDate).getFullYear();
            const out = company.resignationDate
              ? new Date(company.resignationDate).getFullYear()
              : text[_locale]["experience.current"];
            return (
              <Col sm={12} md={6} lg={6} xl={6} xxl={6} key={idx}>
                <section>
                  <span className={styles.year}>
                    {enter} - {out}
                  </span>
                  <h3 className={styles.officename}>{company.name}</h3>
                  <span className={styles.department}>
                    {company.department} / {company.position}
                  </span>
                  <p>{company.describe}</p>
                  <ul>
                    {company.projects.map((project, idx) => (
                      <li key={idx}>{project}</li>
                    ))}
                  </ul>
                </section>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
