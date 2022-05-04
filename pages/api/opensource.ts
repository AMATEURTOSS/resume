import { NextApiRequest, NextApiResponse } from "next";
import { i18n } from "../../i18n";
import axios from "axios";

interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface Project {
  name: string;
  url: string;
  issueURL: string | undefined; // Issue URL
  prURL: string | undefined; // Pull Request URL
  logo: string;
  labels: Array<Label>;
  describe: string;
}

export type OpenSource = Array<Project>;

async function getOpensourceLabels(owner: string, repo: string) {
  try {
    const result = await axios.get(
      `https://api.github.com/search/issues?q=author%3A${"AMATEURTOSS"}+type%3Apr+repo%3A${owner}/${repo}`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_AUTH}`,
        },
      }
    );
    /* label들 하나의 배열로 */
    const labels: Array<Label> = result.data.items.reduce(
      (acc: Array<Label>, cur: { labels: Array<Label> }) => {
        return [...acc, ...cur.labels];
      },
      []
    );
    /* review needed 라벨과 중복되는 라벨들 제거*/
    return labels.filter(
      (value, index, self) =>
        value.name !== "review needed" &&
        index === self.findIndex((t) => t.name === value.name)
    );
  } catch (e) {
    return [];
  }
}

export const getData = async (): Promise<i18n<OpenSource>> => {
  const openSource: i18n<OpenSource> = {
    "ko-KR": [
      {
        name: "tldr",
        url: "https://github.com/tldr-pages/tldr",
        issueURL: undefined,
        prURL:
          "https://github.com/tldr-pages/tldr/pulls?q=is%3Aissue+is%3Apr+author%3AAMATEURTOSS+",
        logo: "/opensource/tldr.png",
        labels: await getOpensourceLabels("tldr-pages", "tldr"),
        describe:
          "tldr 프로젝트는 기존 매뉴얼 페이지 보다 더 간단하고 접근하기 쉬운 명령줄 도구 도움말 페이지 모음입니다.",
      },
      {
        name: "fig",
        url: "https://github.com/withfig/autocomplete",
        issueURL: undefined,
        prURL:
          "https://github.com/withfig/autocomplete/pulls?q=is%3Aissue+is%3Apr+author%3AAMATEURTOSS+",
        logo: "/opensource/fig.png",
        labels: await getOpensourceLabels("withfig", "autocomplete"),
        describe: "fig는 기존 터미널에 자동완성을 추가하는 프로젝트입니다.",
      },
    ],
    "en-US": [
      {
        name: "tldr",
        url: "https://github.com/tldr-pages/tldr",
        issueURL: undefined,
        prURL:
          "https://github.com/tldr-pages/tldr/pulls?q=is%3Aissue+is%3Apr+author%3AAMATEURTOSS+",
        logo: "/opensource/tldr.png",
        labels: await getOpensourceLabels("tldr-pages", "tldr"),
        describe:
          "The tldr project is a collection of command-line tool help pages that are simpler and easier to access than traditional manual pages.",
      },
      {
        name: "fig",
        url: "https://github.com/withfig/autocomplete",
        issueURL: undefined,
        prURL:
          "https://github.com/withfig/autocomplete/pulls?q=is%3Aissue+is%3Apr+author%3AAMATEURTOSS+",
        logo: "/opensource/fig.png",
        labels: await getOpensourceLabels("withfig", "autocomplete"),
        describe:
          "Fig adds visual apps, shortcuts, and autocomplete to your existing Terminal.",
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
