import { FC } from "react";
import styles from "../../styles/component/index/HelloSection.module.css";

const HelloSection: FC = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>안녕하세요!</h1>
      <h2 className={styles.h2}>웹 개발자 최영진 입니다</h2>
      <div className={`${styles.div}`} id="arrow">
        <i className={`xi-angle-down-thin ${styles.arrow}`} />
      </div>
    </section>
  );
};

export default HelloSection;
