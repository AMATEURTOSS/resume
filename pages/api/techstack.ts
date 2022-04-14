import { NextApiRequest, NextApiResponse } from "next";

export interface TechStack {
  stack: Array<string>; // 기술 스택
  duty: Array<string>; // 직무
}

export const getData = async (): Promise<TechStack> => {
  const techStack: TechStack = {
    stack: [
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
    ],
    duty: ["웹 풀스택 개발자"],
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
