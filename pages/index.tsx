import { getData as whoAmIGetData } from "./api/whoami";
import { getData as techStackGetData } from "./api/techstack";
import { getData as careerGetData } from "./api/career";
import { getData as educationGetData } from "./api/education";
import { getData as opensourceGetData } from "./api/opensource";
import { getData as projectsGetData } from "./api/project";
import { i18n, text } from "../i18n";

import type { NextPage, GetStaticProps } from "next";
import type { WhoAmI } from "./api/whoami";
import type { TechStack } from "./api/techstack";
import type { Schools } from "./api/education";
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
import Opensources from "../component/Opensources";
import { useRouter } from "next/router";

interface Props {
  whoami: i18n<WhoAmI>;
  techStack: i18n<TechStack>;
  edu: i18n<Schools>;
  career: i18n<Career>;
  opensource: i18n<OpenSource>;
  projects: i18n<ProjectList>;
}

const Home: NextPage<Props> = (info) => {
  const { whoami, techStack, edu, career, opensource, projects } = info;
  const { locale } = useRouter();
  const _locale = locale !== "ko-KR" && locale !== "en-US" ? "ko-KR" : locale;

  return (
    <>
      <Head>
        <title>{`<yochoi's resume />`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={text[_locale]["meta.describe"]} />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="<yochoi's resume />" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://resume.amateurtoss.info" />
        <meta property="og:image" content="/profile2.jpg" />
        <meta
          property="og:description"
          content={text[_locale]["meta.describe"]}
        />
        <meta name="twitter:image" content="/profile2.jpg" />
        <meta
          name="twitter:description"
          content={text[_locale]["meta.describe"]}
        />
        <meta name="theme-color" content="#6495ED" />
      </Head>
      <Header />
      <Banner whoami={whoami} />
      <About />
      <Skills techStack={techStack} />
      {/*<Experience career={career} />*/}
      <Education edu={edu} />
      <Opensources opensources={opensource} />
      <Projects projects={projects} />
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const whoami: i18n<WhoAmI> = await whoAmIGetData();
  const techStack: i18n<TechStack> = await techStackGetData();
  const career: i18n<Career> = await careerGetData();
  const edu: i18n<Schools> = await educationGetData();
  const opensource: i18n<OpenSource> = await opensourceGetData();
  const projects: i18n<ProjectList> = await projectsGetData();
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
