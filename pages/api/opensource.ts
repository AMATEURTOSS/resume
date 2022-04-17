import { NextApiRequest, NextApiResponse } from "next";

export interface Project {
  name: string;
  url: string;
  contributeType: Array<string>; // 기여 종류 (번역, 코드 수정 등등)
  issueURL: string | undefined; // Issue URL
  prURL: string | undefined; // Pull Request URL
  logo: string;
}

export type OpenSource = Array<Project>;

export const getData = async (): Promise<OpenSource> => {
  const openSource: OpenSource = [
    {
      name: "tldr",
      url: "https://github.com/tldr-pages/tldr",
      contributeType: ["번역"],
      issueURL: undefined,
      prURL:
        "https://github.com/tldr-pages/tldr/pulls?q=is%3Aissue+is%3Apr+author%3AAMATEURTOSS+",
      logo: "/opensource/tldr.png",
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
