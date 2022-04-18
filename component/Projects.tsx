import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Projects.module.css";
import { Projects } from "../pages/api/project";

interface ProjectsProps {
  projects: Projects;
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <div className={styles.section}>
      <div className="container">
        <h2 className={share.heading}>Personal Projects</h2>
        <div className={styles.listSection}>
          {projects.slice(0, 3).map((project, idx) => {
            const img = project.image[0] ?? "";
            return (
              <div className={styles.list} key={idx}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                    <section>
                      <h3 className={styles.title}>{project.name}</h3>
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
