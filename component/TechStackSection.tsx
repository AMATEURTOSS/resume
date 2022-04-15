import { FC } from "react";
import type { TechStack } from "../pages/api/techstack";

const TechStackSection: FC<{ techStack: TechStack }> = ({ techStack }) => {
  return (
    <section className="tech_stack">
      <h2>기술 스택</h2>
      <div className="stack_wrapper">
        {techStack.map((el, idx) => (
          <span key={idx}>{el}</span>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
