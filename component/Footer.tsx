import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/AMATEURTOSS"
          target="_blank"
          rel="noreferrer"
        >
          <i className="xi-github" />
        </a>
        <a
          href="https://www.amateurtoss.info/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="xi-blogger" />
        </a>
      </div>
      <span>© 2021 YoungJin-Choi all rights reserved.</span>
    </footer>
  );
};

export default Footer;
