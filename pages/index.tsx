import { getData as whoAmIGetData } from "./api/whoami";
import { getData as techStackGetData } from "./api/techstack";
import { getData as careerGetData } from "./api/career";
import { getData as educationGetData } from "./api/education";
import { getData as opensourceGetData } from "./api/opensource";
import { getData as projectsGetData } from "./api/project";

import type { NextPage, GetStaticProps } from "next";
import type { WhoAmI } from "./api/whoami";
import type { TechStack } from "./api/techstack";
import type { Education as EduType } from "./api/education";
import type { Career } from "./api/career";
import type { OpenSource } from "./api/opensource";
import type { Projects as ProjectList } from "./api/project";
import Head from "next/head";

import Header from "../component/Header";
import Banner from "../component/Banner";
import About from "../component/About";
import Skills from "../component/Skills";
import Education from "../component/Education";
import Experience from "../component/Experience";
import Projects from "../component/Projects";
import Footer from "../component/Footer";

interface Props {
  whoami: WhoAmI;
  techStack: TechStack;
  edu: EduType;
  career: Career;
  opensource: OpenSource;
  projects: ProjectList;
}

const Home: NextPage<Props> = (info) => {
  const { whoami, techStack, edu, career, opensource, projects } = info;
  return (
    <>
      <Head>
        <title>{`<yochoi's resume />`}</title>
      </Head>
      <Header />
      <Banner
        whoami={whoami}
        projectCount={projects.length}
        opensourceCount={opensource.length}
      />
      <About />
      <Skills techStack={techStack} />
      <Experience career={career} />
      <Education edu={edu} />
      <Projects projects={projects} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const whoami: WhoAmI = await whoAmIGetData();
  const techStack: TechStack = await techStackGetData();
  const career: Career = await careerGetData();
  const edu: EduType = await educationGetData();
  const opensource: OpenSource = await opensourceGetData();
  const projects: ProjectList = await projectsGetData();
  return {
    props: JSON.parse(
      JSON.stringify({
        whoami,
        techStack,
        edu,
        career,
        opensource,
        projects,
      })
    ),
  };
};

export default Home;
