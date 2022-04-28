import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Skills.module.css";
import type { TechStack } from "../pages/api/techstack";
import Utils from "../utils";
import { useRouter } from "next/router";
import { i18n } from "../i18n";
import { Container, Row, Col } from "react-bootstrap";

interface SkillsProps {
  techStack: i18n<TechStack>;
}

const Skills: FC<SkillsProps> = ({ techStack }) => {
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <div className={styles.skillsSection}>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
            <h2 className={share.heading}>Core Skills</h2>
            <ul className={styles.skillsList}>
              {techStack[_locale].coreStack.map((el, idx) => (
                <li key={idx}>
                  <i className={Utils.getIconFromTechStack(el)} />
                  {el}
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={12} md={6} lg={6} xl={6} xxl={6}>
            <h2 className={share.heading}>Other Skills</h2>
            <ul className={styles.skillsList}>
              {techStack[_locale].otherStack.map((el, idx) => (
                <li key={idx}>
                  <i className={Utils.getIconFromTechStack(el)} />
                  {el}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
