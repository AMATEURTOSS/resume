import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Education.module.css";
import type { Schools } from "../pages/api/education";

interface EducationProps {
  edu: Schools;
}

const Education: FC<EducationProps> = ({ edu }) => {
  return (
    <div className={styles.section}>
      <div className="container">
        <h2 className={share.heading}>Education</h2>
        <div className={`row ${styles.list}`}>
          {edu
            .slice(0)
            .reverse()
            .map((school, idx) => {
              const enter = new Date(school.admissionDate).getFullYear();
              const out = school.graduationDate
                ? new Date(school.graduationDate).getFullYear()
                : "재학 중";
              return (
                <div
                  className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                  key={idx}
                >
                  <section>
                    <span className={styles.year}>
                      {enter} - {out}
                    </span>
                    <h3 className={styles.name}>{school.name}</h3>
                    <span className={styles.department}>
                      {school.department ?? "N/A"}
                    </span>
                    <p>{school.describe}</p>
                  </section>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Education;
