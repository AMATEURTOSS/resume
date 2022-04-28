import { NextApiRequest, NextApiResponse } from "next";
import { i18n } from "../../i18n";

type tech = {
  icon: string;
  tech: string;
};

export type TechStack = {
  coreStack: Array<tech>;
  otherStack: Array<tech>;
};

export const getData = async (): Promise<i18n<TechStack>> => {
  const techStack: i18n<TechStack> = {
    "ko-KR": {
      coreStack: [
        { icon: "devicon-javascript-plain colored", tech: "javascript" },
        { icon: "devicon-typescript-plain colored", tech: "typescript" },
        { icon: "devicon-nodejs-plain colored", tech: "nodejs" },
        { icon: "devicon-mysql-plain colored", tech: "mariadb" },
        { icon: "devicon-react-original colored", tech: "react" },
        { icon: "devicon-express-original colored", tech: "expressjs" },
        { icon: "devicon-nextjs-original colored", tech: "nextjs" },
        { icon: "devicon-docker-plain colored", tech: "docker" },
        { icon: "devicon-git-plain colored", tech: "git" },
      ],
      otherStack: [
        { icon: "devicon-c-plain colored", tech: "c" },
        { icon: "devicon-cplusplus-plain colored", tech: "c++" },
        { icon: "devicon-nestjs-plain colored", tech: "nestjs" },
        { icon: "devicon-python-plain colored", tech: "python" },
      ],
    },
    "en-US": {
      coreStack: [
        { icon: "devicon-javascript-plain colored", tech: "javascript" },
        { icon: "devicon-typescript-plain colored", tech: "typescript" },
        { icon: "devicon-nodejs-plain colored", tech: "nodejs" },
        { icon: "devicon-mysql-plain colored", tech: "mariadb" },
        { icon: "devicon-react-original colored", tech: "react" },
        { icon: "devicon-express-original colored", tech: "expressjs" },
        { icon: "devicon-nextjs-original colored", tech: "nextjs" },
        { icon: "devicon-docker-plain colored", tech: "docker" },
        { icon: "devicon-git-plain colored", tech: "git" },
      ],
      otherStack: [
        { icon: "devicon-c-plain colored", tech: "c" },
        { icon: "devicon-cplusplus-plain colored", tech: "c++" },
        { icon: "devicon-nestjs-plain colored", tech: "nestjs" },
        { icon: "devicon-python-plain colored", tech: "python" },
      ],
    },
  };
  return techStack;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const techStack = await getData();
  res.status(200).json(techStack);
}
