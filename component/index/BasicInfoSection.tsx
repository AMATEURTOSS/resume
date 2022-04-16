import { FC, useState } from "react";
import styles from "../../styles/component/index/BasicInfoSection.module.css";
import type { WhoAmI } from "../../pages/api/whoami";
import type { TechStack } from "../../pages/api/techstack";
import { OpenSource, Project } from "../../pages/api/opensource";
import share from "../../styles/share.module.css";

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

const ProjectElement: FC<{ project: Project; key: number }> = ({
  project,
  key,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.opensource_wrapper} key={key} onClick={onClick}>
        <img
          src={project.logo}
          alt={`${project.name}'s logo`}
          className={styles.opensource_img}
        />
        <div className={styles.info}>
          <span className={styles.opensource_name}>{project.name}</span>
          <div className={styles.contribute_type_wrapper}>
            {project.contributeType.map((contributeType, idx) => (
              <span
                className={styles.type}
                key={idx}
                style={{
                  backgroundColor: getBackgroundColorFromType(contributeType),
                }}
              >
                {contributeType}
              </span>
            ))}
          </div>
        </div>
        <i className={isOpen ? "xi-caret-up" : "xi-caret-down"} />
      </div>
      {isOpen && (
        <div className={styles.opensource_describe}>
          <a href={project.url} target="_blank" rel="noreferrer">
            <i className="xi-github"></i>github 바로가기
          </a>
          <div className={share.key_value}>
            <span>{project.name}이란?</span>
            <span>{project.describe}</span>
          </div>
          <div className={share.key_value}>
            <span>PR 리스트</span>
            <ul>
              {project.prURL.map((prURL, idx) => (
                <li key={idx}>
                  <a href={prURL} target="_blank" rel="noreferrer">
                    {prURL.split("/").at(-1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

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
    <section className={styles.info}>
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
          <ProjectElement project={el} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
