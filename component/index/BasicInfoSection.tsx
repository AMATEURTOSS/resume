import { FC } from "react";
import styles from "../../styles/component/index/BasicInfoSection.module.css";
import type { WhoAmI } from "../../pages/api/whoami";

const BasicInfoSection: FC<{ whoami: WhoAmI }> = ({ whoami }) => {
  return (
    <section className={styles.basic_info}>
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
    </section>
  );
};

export default BasicInfoSection;
