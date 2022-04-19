import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Skills.module.css";
import type { TechStack } from "../pages/api/techstack";
import { useRouter } from "next/router";
import { i18n } from "../i18n";

interface SkillsProps {
  techStack: i18n<TechStack>;
}

const Skills: FC<SkillsProps> = ({ techStack }) => {
  const { locale } = useRouter();
  const _locale = locale !== "kr" && locale !== "en-US" ? "kr" : locale;

  return (
    <div className={styles.skillsSection}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 className={share.heading}>Core Skills</h2>
            <ul className={styles.skillsList}>
              {techStack[_locale].coreStack.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h2 className={share.heading}>Other Skills</h2>
            <ul className={styles.skillsList}>
              {techStack[_locale].otherStack.map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
