import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/EducationSection.module.css";
import type { Education } from "../pages/api/education";

const EducationSection: FC<{ edu: Education }> = ({ edu }) => {
  return (
    <section>
      <h2>교육 이력</h2>
      {edu
        .slice(0)
        .reverse()
        .map((el, idx) => {
          return (
            <div className={styles.school_wrapper} key={idx}>
              <div className={`${share.key_value} ${styles.name}`}>
                <span>학교명</span>
                <span>{el.name}</span>
              </div>
              <div className={`${share.key_value} ${styles.type}`}>
                <span>학교 종류</span>
                <span>{el.type}</span>
              </div>
              <div className={`${share.key_value} ${styles.admission}`}>
                <span>입학일</span>
                <span>{el.admissionDate}</span>
              </div>
              <div className={`${share.key_value} ${styles.graduation}`}>
                <span>졸업일</span>
                <span>{el.graduationDate ?? "재학중"}</span>
              </div>
              <div className={`${share.key_value} ${styles.department}`}>
                <span>학과</span>
                <span>{el.department ?? "N/A"}</span>
              </div>
              <div className={`${share.key_value} ${styles.describe}`}>
                <span>설명</span>
                <span>{el.describe ?? "N/A"}</span>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default EducationSection;
