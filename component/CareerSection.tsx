import { FC } from "react";
import type { Career } from "../pages/api/career";

const CareerSection: FC<{ career: Career }> = ({ career }) => {
  return (
    <section className="career">
      <h2>경력</h2>
      {career
        .slice(0)
        .reverse()
        .map((el, idx) => {
          return (
            <div className="career_wrapper" key={idx}>
              <div className="key_value name">
                <span>회사명</span>
                <span>{el.name}</span>
              </div>
              <div className="key_value department">
                <span>부서명</span>
                <span>{el.department}</span>
              </div>
              <div className="key_value position">
                <span>직책</span>
                <span>{el.position}</span>
              </div>
              <div className="key_value entering">
                <span>입사일</span>
                <span>{el.enteringDate}</span>
              </div>
              <div className="key_value resignation">
                <span>퇴사일</span>
                <span>{el.resignationDate ?? "재직중"}</span>
              </div>
              <div className="key_value projects">
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
