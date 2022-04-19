import { FC } from "react";
import share from "../styles/share.module.css";
import styles from "../styles/component/About.module.css";

const About: FC = () => {
  function downloadResume() {
    const header = document.getElementsByTagName("header")[0];
    const footer = document.getElementsByTagName("footer")[0];
    header.style.display = "none";
    footer.style.display = "none";
    window.print();
    header.style.display = "block";
    footer.style.display = "block";
  }

  return (
    <div className={styles.aboutSection}>
      <div className="container">
        <section>
          {/*<h2 className={share.heading}>About Me</h2>*/}
          {/*<p>*/}
          {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis*/}
          {/*  interdum ante a porta blandit. Quisque velit tortor, ultricies in*/}
          {/*  quam ut, luctus convallis metus. Nunc vitae felis rutrum, mattis*/}
          {/*  justo quis, bibendum tellus. Integer bibendum eget dolor nec*/}
          {/*  venenatis. Aliquam erat volutpat. Etiam et est vitae turpis accumsan*/}
          {/*  vulputate. Curabitur et vehicula nisl, eu congue dolor. Vivamus nec*/}
          {/*  hendrerit mi Nulla consequat tempor.*/}
          {/*</p>*/}
          <div className={`${styles.buttonSec} text-center`}>
            <button className={share.button} onClick={downloadResume}>
              Download Resume
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
