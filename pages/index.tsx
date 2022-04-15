import { getData as whoAmIGetData } from "./api/whoami";
import { getData as techStackGetData } from "./api/techstack";
import { getData as careerGetData } from "./api/career";
import { getData as educationGetData } from "./api/education";
import { getData as opensourceGetData } from "./api/opensource";

import BasicInfoSection from "../component/BasicInfoSection";
import TechStackSection from "../component/TechStackSection";
import CareerSection from "../component/CareerSection";
import EducationSection from "../component/EducationSection";
import OpensourceSection from "../component/OpensourceSection";

import type { NextPage, GetStaticProps } from "next";
import type { WhoAmI } from "./api/whoami";
import type { TechStack } from "./api/techstack";
import type { Education } from "./api/education";
import type { Career } from "./api/career";
import type { OpenSource } from "./api/opensource";
import Footer from "../component/Footer";
import Head from "next/head";

interface Props {
  whoami: WhoAmI;
  techStack: TechStack;
  edu: Education;
  career: Career;
  opensource: OpenSource;
}

const Home: NextPage<Props> = (info) => {
  const { whoami, techStack, edu, career, opensource } = info;
  return (
    <>
      <Head>
        <title>&lt;yochoi&apos;s resume /&gt;</title>
      </Head>
      <main>
        <BasicInfoSection whoami={whoami} />
        <TechStackSection techStack={techStack} />
        <CareerSection career={career} />
        <EducationSection edu={edu} />
        <OpensourceSection opensource={opensource} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const whoami: WhoAmI = await whoAmIGetData();
  const techStack: TechStack = await techStackGetData();
  const career: Career = await careerGetData();
  const edu: Education = await educationGetData();
  const opensource: OpenSource = await opensourceGetData();
  return {
    props: JSON.parse(
      JSON.stringify({
        whoami,
        techStack,
        edu,
        career,
        opensource,
      })
    ),
  };
};

export default Home;
