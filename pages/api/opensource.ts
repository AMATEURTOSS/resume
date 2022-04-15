import { NextApiRequest, NextApiResponse } from "next";

export interface Project {
  name: string;
  url: string;
  contributeType: Array<string>; // 기여 종류 (번역, 코드 수정 등등)
  prURL: Array<string>; // Pull Request URL
  logo: string;
  describe: string;
}

export type OpenSource = Array<Project>;

export const getData = async (): Promise<OpenSource> => {
  const openSource: OpenSource = [
    {
      name: "tldr",
      url: "https://github.com/tldr-pages/tldr",
      contributeType: ["번역"],
      prURL: [
        "https://github.com/tldr-pages/tldr/pull/7959",
        "https://github.com/tldr-pages/tldr/pull/7960",
        "https://github.com/tldr-pages/tldr/pull/7970",
      ],
      logo: "/opensource/tldr.png",
      describe:
        "tldr은 CLI에서 사용하는 도움말 페이지 모음으로, " +
        "기존 man page 보다 간결하고 접근하기 쉽게 보완하는 것을 목표로 하는 프로젝트입니다.",
    },
  ];
  return openSource;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const openSource = await getData();
  res.status(200).json(openSource);
}
