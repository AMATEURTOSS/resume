import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Education.module.css";
import type { Schools } from "../pages/api/education";
import { i18n, text } from "../i18n";
import { useRouter } from "next/router";
import { Container, Col, Row } from "react-bootstrap";

interface EducationProps {
  edu: i18n<Schools>;
}

const Education: FC<EducationProps> = ({ edu }) => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <div id="education" className={styles.section}>
      <Container>
        <h2 className={share.heading}>Education</h2>
        <Row className={styles.list}>
          {edu[_locale]
            .slice(0)
            .reverse()
            .map((school, idx) => {
              const enter = new Date(school.admissionDate).getFullYear();
              const out = school.graduationDate
                ? new Date(school.graduationDate).getFullYear()
                : text[_locale]["education.current"];
              return (
                <Col sm={12} md={6} lg={6} xl={6} xxl={6} key={idx}>
                  <section>
                    <span className={styles.year}>
                      {enter} - {out}
                    </span>
                    <h3 className={styles.name}>{school.name}</h3>
                    {/*<span className={styles.department}>*/}
                    {/*  {school.department ?? "N/A"}*/}
                    {/*</span>*/}
                    <p>{school.describe}</p>
                  </section>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default Education;
