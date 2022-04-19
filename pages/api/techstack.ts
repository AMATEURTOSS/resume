import { NextApiRequest, NextApiResponse } from "next";
import { i18nType } from "../../i18nType";

export type TechStack = {
  coreStack: Array<string>;
  otherStack: Array<string>;
};

export const getData = async (): Promise<i18nType<TechStack>> => {
  const techStack: i18nType<TechStack> = {
    kr: {
      coreStack: [
        "javascript",
        "typescript",
        "nodejs",
        "mariadb",
        "react",
        "expressjs",
        "nextjs",
        "docker",
        "docker compose",
        "git",
      ],
      otherStack: ["c", "c++", "nestjs", "python"],
    },
    "en-US": {
      coreStack: [
        "javascript",
        "typescript",
        "nodejs",
        "mariadb",
        "react",
        "expressjs",
        "nextjs",
        "docker",
        "docker compose",
        "git",
      ],
      otherStack: ["c", "c++", "nestjs", "python"],
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
