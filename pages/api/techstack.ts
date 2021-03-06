import { NextApiRequest, NextApiResponse } from "next";
import { i18n } from "../../i18n";

export type TechStack = {
  coreStack: Array<string>;
  otherStack: Array<string>;
};

export const getData = async (): Promise<i18n<TechStack>> => {
  const techStack: i18n<TechStack> = {
    "ko-KR": {
      coreStack: [
        "javascript",
        "typescript",
        "nodejs",
        "mariadb",
        "redis",
        "react",
        "go",
        "nextjs",
        "tailwindcss",
        "docker",
        "git",
      ],
      otherStack: ["c", "c++", "nestjs", "python", "expressjs"],
    },
    "en-US": {
      coreStack: [
        "javascript",
        "typescript",
        "nodejs",
        "mariadb",
        "redis",
        "react",
        "go",
        "nextjs",
        "tailwindcss",
        "docker",
        "git",
      ],
      otherStack: ["c", "c++", "nestjs", "python", "expressjs"],
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
