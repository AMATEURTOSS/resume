import { getData as whoAmIGetData } from "./api/whoami";
import { getData as techStackGetData } from "./api/techstack";
import type { NextPage, GetStaticProps } from "next";
import type { WhoAmI } from "./api/whoami";
import type { TechStack } from "./api/techstack";

interface Props {
  whoami: WhoAmI;
  techStack: TechStack;
}

const Home: NextPage<Props> = ({ whoami, techStack }) => {
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
      <section className="tech_stack">
        <h2>기술 스택</h2>
        <div className="stack_wrapper">
          {techStack.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </div>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps<{ whoami: WhoAmI }> = async () => {
  const whoami: WhoAmI = await whoAmIGetData();
  const techStack: TechStack = await techStackGetData();
  return {
    props: {
      whoami,
      techStack,
    },
  };
};

export default Home;
