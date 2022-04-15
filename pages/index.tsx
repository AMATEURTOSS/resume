import { getData as whoAmIGetData } from "./api/whoami";
import { getData as techStackGetData } from "./api/techstack";
import { getData as educationGetData } from "./api/education";
import { getData as careerGetData } from "./api/career";

import BasicInfoSection from "../component/BasicInfoSection";
import TechStackSection from "../component/TechStackSection";
import CareerSection from "../component/CareerSection";
import EducationSection from "../component/EducationSection";

import type { NextPage, GetStaticProps } from "next";
import type { WhoAmI } from "./api/whoami";
import type { TechStack } from "./api/techstack";
import type { Education } from "./api/education";
import type { Career } from "./api/career";

interface Props {
  whoami: WhoAmI;
  techStack: TechStack;
  edu: Education;
  career: Career;
}

const Home: NextPage<Props> = (info) => {
  const { whoami, techStack, edu, career } = info;
  return (
    <main>
      <BasicInfoSection whoami={whoami} />
      <TechStackSection techStack={techStack} />
      <CareerSection career={career} />
      <EducationSection edu={edu} />
      <div style={{ width: "100%", height: "200px" }} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const whoami: WhoAmI = await whoAmIGetData();
  const techStack: TechStack = await techStackGetData();
  const edu: Education = await educationGetData();
  const career: Career = await careerGetData();
  return {
    props: JSON.parse(
      JSON.stringify({
        whoami,
        techStack,
        edu,
        career,
      })
    ),
  };
};

export default Home;
