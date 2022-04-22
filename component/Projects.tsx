import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Projects.module.css";
import { Projects } from "../pages/api/project";
import { useRouter } from "next/router";
import { i18n } from "../i18n";
import { Container, Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

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
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <div className={styles.section}>
      <Container>
        <h2 className={share.heading}>Personal Projects</h2>
        <div className={styles.listSection}>
          {projects[_locale].slice(0, 4).map((project, idx) => {
            const img = project.image[0] ?? "";
            const startDate = new Date(project.start);
            const endDate = new Date(project.end);
            return (
              <div className={styles.list} key={idx}>
                <Row>
                  <Col sm={12} md={7} lg={7} xl={7} xxl={7}>
                    <section>
                      <span>
                        {startDate.getFullYear()}.{startDate.getMonth() + 1} -{" "}
                        {endDate.getFullYear()}.{endDate.getMonth() + 1}
                      </span>
                      <h3 className={styles.title}>{project.name}</h3>
                      <ul className={styles.stack}>
                        {project.techStack.map((stack, idx) => {
                          const i = getIconFromTechStack(stack);
                          if (i)
                            return (
                              <OverlayTrigger
                                key={idx}
                                placement="top"
                                overlay={<Tooltip>{stack}</Tooltip>}
                              >
                                <li>{i}</li>
                              </OverlayTrigger>
                            );
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
                  </Col>
                  <Col sm={12} md={5} lg={5} xl={5} xxl={5}>
                    <figure>
                      <img src={img} />
                    </figure>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
