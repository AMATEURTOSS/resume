import { NextApiRequest, NextApiResponse } from "next";

export type TechStack = {
  coreStack: Array<string>;
  otherStack: Array<string>;
};

export const getData = async (): Promise<TechStack> => {
  const techStack: TechStack = {
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
