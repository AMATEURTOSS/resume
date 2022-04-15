import { FC, useState } from "react";
import type { OpenSource, Project } from "../pages/api/opensource";

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
      <div className="opensource_wrapper" key={key} onClick={onClick}>
        <img src={project.logo} alt={`${project.name}'s logo`} />
        <div className="opensource_info">
          <span className="name">{project.name}</span>
          <div className="contribute_type_wrapper">
            {project.contributeType.map((contributeType, idx) => (
              <span
                className="type"
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
        <div className="opensource_describe">
          <a href={project.url} target="_blank" rel="noreferrer">
            <i className="xi-github"></i>github 바로가기
          </a>
          <div className="key_value">
            <span>{project.name}이란?</span>
            <span>{project.describe}</span>
          </div>
          <div className="key_value">
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

const OpensourceSection: FC<{ opensource: OpenSource }> = ({ opensource }) => {
  return (
    <section className="opensource">
      <h2>오픈소스 활동</h2>
      {opensource.map((el, idx) => (
        <ProjectElement project={el} key={idx} />
      ))}
    </section>
  );
};

export default OpensourceSection;
