import { FC, useState } from "react";
import share from "../../styles/share.module.css";
import styles from "../../styles/component/index/InfoSection.module.css";
import type { WhoAmI } from "../../pages/api/whoami";
import type { TechStack } from "../../pages/api/techstack";
import { OpenSource, Project } from "../../pages/api/opensource";

function getBackgroundColorFromType(type: string) {
  switch (type) {
    case "번역":
      return "#dba617";
    case "리팩터링":
      return "#00a32a";
    case "버그 수정":
      return "#e65054";
    case "버그 리포트":
      return "#f86368";
    default:
      return "#80808090";
  }
}

interface InfoSectionProps {
  whoami: WhoAmI;
  techStack: TechStack;
  opensource: OpenSource;
}

const InfoSection: FC<InfoSectionProps> = ({
  whoami,
  techStack,
  opensource,
}) => {
  return (
    <section className={share.section}>
      <div className={styles.basic_info}>
        <img src="profile.jpg" alt="profile" className={styles.profile_image} />
        <div>
          <h1 className={styles.name}>{whoami.name}</h1>
          <span className={styles.email}>
            <i className="xi-mail-o" />
            {whoami.email}
          </span>
          <div className={styles.phone_birth_year}>
            <span>
              <i className="xi-call" />
              {whoami.phone}
            </span>
            <span>
              <i className="xi-calendar" />
              {whoami.birth}
            </span>
            <span>
              <i className="xi-briefcase" />
              {whoami.year}년차
            </span>
          </div>
        </div>
      </div>
      <div className={styles.tech_stack}>
        <h2>기술 스택</h2>
        <div className={styles.stack_wrapper}>
          {techStack.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </div>
      </div>
      <div>
        <h2>오픈소스 활동</h2>
        {opensource.map((el, idx) => (
          <div className={styles.opensource_wrapper} key={idx}>
            <img
              src={el.logo}
              alt={`${el.name}'s logo`}
              className={styles.opensource_img}
            />
            <div className={styles.opensource_info}>
              <span className={styles.opensource_name}>{el.name}</span>
              <div className={styles.contribute_type_wrapper}>
                {el.contributeType.map((contributeType, idx) => (
                  <span
                    className={styles.type}
                    key={idx}
                    style={{
                      backgroundColor:
                        getBackgroundColorFromType(contributeType),
                    }}
                  >
                    {contributeType}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.contribute}>
              <a
                href={el.prURL}
                target="_blank"
                rel="noreferrer"
                style={{
                  cursor: el.prURL ? "pointer" : "none",
                  color: el.prURL ? "inherit" : "#eeeeff",
                }}
              >
                PR
              </a>
              <a
                href={el.issueURL}
                target="_blank"
                rel="noreferrer"
                style={{
                  cursor: el.issueURL ? "pointer" : "not-allowed",
                  color: el.issueURL ? "inherit" : "#b8b8c7",
                }}
              >
                Issue
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
