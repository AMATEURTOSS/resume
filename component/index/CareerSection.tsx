import { FC } from "react";
import share from "../../styles/share.module.css";
import styles from "../../styles/component/index/CareerSection.module.css";
import type { Career } from "../../pages/api/career";

const CareerSection: FC<{ career: Career }> = ({ career }) => {
  return (
    <section>
      <h2>경력</h2>
      {career
        .slice(0)
        .reverse()
        .map((el, idx) => {
          return (
            <div className={styles.career_wrapper} key={idx}>
              <div className={`${share.key_value} ${styles.name}`}>
                <span>회사명</span>
                <span>{el.name}</span>
              </div>
              <div className={`${share.key_value} ${styles.department}`}>
                <span>부서명</span>
                <span>{el.department}</span>
              </div>
              <div className={`${share.key_value} ${styles.position}`}>
                <span>직책</span>
                <span>{el.position}</span>
              </div>
              <div className={`${share.key_value} ${styles.entering}`}>
                <span>입사일</span>
                <span>{el.enteringDate}</span>
              </div>
              <div className={`${share.key_value} ${styles.resignation}`}>
                <span>퇴사일</span>
                <span>{el.resignationDate ?? "재직중"}</span>
              </div>
              <div className={`${share.key_value} ${styles.projects}`}>
                <span>프로젝트</span>
                <ul>
                  {el.projects
                    .slice(0)
                    .reverse()
                    .map((el, idx) => (
                      <li key={idx}>{el}</li>
                    ))}
                </ul>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default CareerSection;
