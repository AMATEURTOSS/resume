import { NextApiRequest, NextApiResponse } from "next";

interface TechStack {
  stack: Array<string>; // 기술 스택
  duty: Array<string>; // 직무
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const techStack: TechStack = {
    stack: [
      "javascript",
      "typescript",
      "node.js",
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
  res.status(200).json(techStack);
}
