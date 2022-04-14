import { NextApiRequest, NextApiResponse } from "next";

interface URL {
  type: string; // 사이트 종류(github, blog, etc...)
  url: string; // URL
}

type Link = Array<URL>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const link: Link = [
    {
      type: "github",
      url: "https://github.com/AMATEURTOSS",
    },
    {
      type: "blog",
      url: "https://www.amateurtoss.info",
    },
  ];
  res.status(200).json(link);
}
