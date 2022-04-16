import { FC } from "react";
import styles from "../../styles/component/index/TechStackSection.module.css";
import type { TechStack } from "../../pages/api/techstack";

const TechStackSection: FC<{ techStack: TechStack }> = ({ techStack }) => {
  return (
    <section className={styles.tech_stack}>
      <h2>기술 스택</h2>
      <div className={styles.stack_wrapper}>
        {techStack.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
