import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Experience.module.css";
import type { Career } from "../pages/api/career";

interface ExperienceProps {
  career: Career;
}

const Experience: FC<ExperienceProps> = ({ career }) => {
  return (
    <div className={styles.experienceSection}>
      <div className="container">
        <h2 className={share.heading}>Work Experience</h2>
        <div className={`row ${styles.experienceList}`}>
          {career.map((company, idx) => {
            const enter = new Date(company.enteringDate).getFullYear();
            const out = company.resignationDate
              ? new Date(company.enteringDate).getFullYear()
              : "재직 중";
            return (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                key={idx}
              >
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
