import { FC } from "react";
import type { WhoAmI } from "../pages/api/whoami";

const BasicInfoSection: FC<{ whoami: WhoAmI }> = ({ whoami }) => {
  return (
    <section className="basic_info">
      <img src="profile.jpg" alt="profile" />
      <div>
        <h1 className="name">{whoami.name}</h1>
        <span className="email">
          <i className="xi-mail-o" />
          {whoami.email}
        </span>
        <div className="phone_birth_year">
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
