import { NextApiRequest, NextApiResponse } from "next";

export type TechStack = Array<string>;

export const getData = async (): Promise<TechStack> => {
  const techStack: TechStack = [
    "javascript",
    "typescript",
    "nodejs",
    "mariadb",
    "python",
    "react",
    "expressjs",
    "nestjs",
    "nextjs",
    "c",
    "c++",
    "docker",
    "docker compose",
    "git",
  ];
  return techStack;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const techStack = await getData();
  res.status(200).json(techStack);
}
