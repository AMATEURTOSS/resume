import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Projects.module.css";
import { Projects } from "../pages/api/project";
import { useRouter } from "next/router";
import { i18n } from "../i18n";

function getIconFromTechStack(techStack: string): JSX.Element | undefined {
  switch (techStack) {
    case "c":
      return <i className="devicon-c-plain colored" />;
    case "c++":
      return <i className="devicon-cplusplus-plain colored" />;
    case "nextjs":
      return <i className="devicon-nextjs-plain colored" />;
    case "nestjs":
      return <i className="devicon-nestjs-plain colored" />;
    case "mariadb" || "mysql":
      return <i className="devicon-mysql-plain colored" />;
    case "nginx":
      return <i className="devicon-nginx-plain colored" />;
    case "grafana":
      return <i className="devicon-grafana-original colored" />;
    case "reactjs":
      return <i className="devicon-react-original colored" />;
    case "postgresql":
      return <i className="devicon-postgresql-plain colored" />;
    case "python":
      return <i className="devicon-python-plain colored" />;
    default:
      return undefined;
  }
}

interface ProjectsProps {
  projects: i18n<Projects>;
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const { locale } = useRouter();
  const _locale = locale !== "kr" && locale !== "en-US" ? "kr" : locale;

  return (
    <div className={styles.section}>
      <div className="container">
        <h2 className={share.heading}>Personal Projects</h2>
        <div className={styles.listSection}>
          {projects[_locale].slice(0, 4).map((project, idx) => {
            const img = project.image[0] ?? "";
            return (
              <div className={styles.list} key={idx}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                    <section>
                      <h3 className={styles.title}>{project.name}</h3>
                      <ul className={styles.stack}>
                        {project.techStack.map((stack, idx) => {
                          const i = getIconFromTechStack(stack);
                          if (i) return <li key={idx}>{i}</li>;
                        })}
                      </ul>
                      <p>{project.describe} </p>
                      <a
                        href={project.githubURL}
                        className={share.button}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Details
                      </a>
                    </section>
                  </div>
                  <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                    <figure>
                      <img src={img} />
                    </figure>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
