import { NextApiRequest, NextApiResponse } from "next";

interface Project {
  name: string;
  url: string;
  contributeType: string; // 기여 종류 (번역, 코드 수정 등등)
  prURL: Array<string>; // Pull Request URL
}

type OpenSource = Array<Project>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const openSource: OpenSource = [
    {
      name: "tldr",
      url: "https://github.com/tldr-pages/tldr",
      contributeType: "번역",
      prURL: [
        "https://github.com/tldr-pages/tldr/pull/7959",
        "https://github.com/tldr-pages/tldr/pull/7960",
        "https://github.com/tldr-pages/tldr/pull/7970",
      ],
    },
  ];
  res.status(200).json(openSource);
}
