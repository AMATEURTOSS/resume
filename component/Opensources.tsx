import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/Opensources.module.css";
import { OpenSource } from "../pages/api/opensource";
import { useRouter } from "next/router";
import { i18n } from "../i18n";

interface ProjectsProps {
  opensources: i18n<OpenSource>;
}

const Projects: FC<ProjectsProps> = ({ opensources }) => {
  const { locale } = useRouter();
  const _locale = locale !== "kr" && locale !== "en-US" ? "kr" : locale;

  return (
    <div className={styles.section}>
      <div className="container">
        <h2 className={share.heading}>Opensource Contribute</h2>
        <div className={styles.listSection}>
          {opensources[_locale].slice(0, 3).map((os, idx) => {
            return (
              <div className={styles.list} key={idx}>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                    <section>
                      <h3 className={styles.title}>{os.name}</h3>
                      <ul className={styles.contributeTypeList}>
                        {os.labels.map((label, idx) => {
                          return (
                            <li
                              key={idx}
                              style={{ backgroundColor: `#${label.color}` }}
                            >
                              {label.name}
                            </li>
                          );
                        })}{" "}
                      </ul>
                      <p>{os.describe}</p>
                      <a
                        href={os.prURL}
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
                      <img src={os.logo} />
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
