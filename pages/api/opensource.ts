import { NextApiRequest, NextApiResponse } from "next";
import { i18n } from "../../i18n";

export interface Project {
  name: string;
  url: string;
  contributeType: Array<string>; // 기여 종류 (번역, 코드 수정 등등)
  issueURL: string | undefined; // Issue URL
  prURL: string | undefined; // Pull Request URL
  logo: string;
  describe: string;
}

export type OpenSource = Array<Project>;

export const getData = async (): Promise<i18n<OpenSource>> => {
  const openSource: i18n<OpenSource> = {
    kr: [
      {
        name: "tldr",
        url: "https://github.com/tldr-pages/tldr",
        contributeType: ["번역"],
        issueURL: undefined,
        prURL:
          "https://github.com/tldr-pages/tldr/pulls?q=is%3Aissue+is%3Apr+author%3AAMATEURTOSS+",
        logo: "/opensource/tldr.png",
        describe:
          "tldr 프로젝트는 기존 매뉴얼 페이지 보다 더 간단하고 접근하기 쉬운 명령줄 도구 도움말 페이지 모음입니다.",
      },
    ],
    "en-US": [
      {
        name: "tldr",
        url: "https://github.com/tldr-pages/tldr",
        contributeType: ["translate"],
        issueURL: undefined,
        prURL:
          "https://github.com/tldr-pages/tldr/pulls?q=is%3Aissue+is%3Apr+author%3AAMATEURTOSS+",
        logo: "/opensource/tldr.png",
        describe:
          "The tldr project is a collection of command-line tool help pages that are simpler and easier to access than traditional manual pages.",
      },
    ],
  };
  return openSource;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const openSource = await getData();
  res.status(200).json(openSource);
}
