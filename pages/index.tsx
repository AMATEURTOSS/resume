import { getData } from "./api/whoami";
import type { NextPage, GetStaticProps } from "next";
import type { WhoAmI } from "./api/whoami";

const Home: NextPage<{ whoami: WhoAmI }> = ({ whoami }) => {
  return (
    <main>
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
    </main>
  );
};

export const getStaticProps: GetStaticProps<{ whoami: WhoAmI }> = async () => {
  const whoami: WhoAmI = await getData();
  return {
    props: {
      whoami,
    },
  };
};

export default Home;
