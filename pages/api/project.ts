import { NextApiRequest, NextApiResponse } from "next";

interface Project {
  name: string;
  githubURL: string | undefined; // 프로젝트 github url
  url: string | undefined; // 프로젝트 url (서비스중인 경우)
  start: Date;
  end: Date | undefined;
  techStack: Array<string>;
  describe: string | undefined;
  image: Array<string>;
}

export type Projects = Array<Project>;

export const getData = async (): Promise<Projects> => {
  const projects: Projects = [
    {
      name: "ft_linear_regression",
      githubURL: "https://github.com/AMATEURTOSS/ft_linear_regression",
      url: undefined,
      start: new Date("2022-02-01"),
      end: new Date("2022-03-01"),
      techStack: ["python"],
      describe: "ML 알고리즘인 선형회귀를 구현한 프로젝트입니다.",
      image: [
        "/project/ft_linear_regression/1.png",
        "/project/ft_linear_regression/2.png",
      ],
    },
    {
      name: "트채통",
      githubURL: "https://github.com/team-irc/twitch-chat-analyzer",
      url: "https://tchatong.info",
      start: new Date("2021-11-01"),
      end: new Date("2022-01-01"),
      techStack: [
        "nextjs",
        "nestjs",
        "c++",
        "mariadb",
        "python",
        "nginx",
        "telegraf",
        "influxdb",
        "grafana",
      ],
      describe:
        "인터넷 방송 플랫폼인 Twitch에서 C++로 만든 IRC Client로 채팅 로그를 긁어와 분석, 통계를 제공하는 웹 사이트입니다.",
      image: ["/project/tchatong/1.png"],
    },
    {
      name: "pong_pong_website",
      githubURL: "https://github.com/team-pong/pong_pong_website",
      url: undefined,
      start: new Date("2021-06-01"),
      end: new Date("2021-11-01"),
      techStack: ["reactjs", "nestjs", "postgres"],
      describe:
        "온라인 실시간 탁구 게임채팅, Dm, 친구 추가/삭제, 전적 등의 서비스를 제공하는 웹 어플리케이션입니다.",
      image: ["/project/pong_pong_website/1.png"],
    },
    {
      name: "ft_irc",
      githubURL: "https://github.com/team-irc/ft_irc",
      url: undefined,
      start: new Date("2021-03-01"),
      end: new Date("2021-06-01"),
      techStack: ["c++"],
      describe: "RFC 문서를 바탕으로 작성된 IRC 서버입니다.",
      image: ["/project/ft_irc/1.png"],
    },
    {
      name: "ft_container",
      githubURL: undefined,
      url: undefined,
      start: new Date("2021-01-01"),
      end: new Date("2021-03-01"),
      techStack: ["c++"],
      describe: "c++의 표준 템플릿 라이브러리(STL)을 구현한 프로젝트입니다.",
      image: [],
    },
    {
      name: "Philosophers",
      githubURL: undefined,
      url: undefined,
      start: new Date("2020-11-01"),
      end: new Date("2021-01-01"),
      techStack: ["c"],
      describe:
        "dead lock, data race 등의 문제로 유명한 식사하는 철학자 문제를 c로 구현, 해결한 프로젝트입니다.",
      image: [],
    },
    {
      name: "ft_services",
      githubURL: undefined,
      url: undefined,
      start: new Date("2020-08-01"),
      end: new Date("2020-11-01"),
      techStack: [
        "kubernetes",
        "nginx",
        "mysql",
        "ftps",
        "wordpress",
        "phpmyadmin",
        "grafana",
        "influxdb",
      ],
      describe:
        "여러 서비스가 동작하는 컨테이너(nginx, mysql, ftps, wordpress, phpmyadmin, grafana, InfluxDB) 들을 쿠버네티스를 사용하여 관리하는 프로젝트입니다.",
      image: [],
    },
    {
      name: "minishell",
      githubURL: "https://github.com/team-minishell/minishell",
      url: undefined,
      start: new Date("2020-06-01"),
      end: new Date("2020-08-01"),
      techStack: ["c"],
      describe: "나만의 Shell을 만드는 프로젝트 입니다.",
      image: [],
    },
    {
      name: "libasm",
      githubURL: undefined,
      url: undefined,
      start: new Date("2020-04-01"),
      end: new Date("2020-05-01"),
      techStack: ["assembly"],
      describe:
        "strlen, strcpy, strdup 등의 함수를 assembly 언어로 구현한 프로젝트입니다.",
      image: [],
    },
    {
      name: "ft_printf",
      githubURL: undefined,
      url: undefined,
      start: new Date("2020-03-01"),
      end: new Date("2020-04-01"),
      techStack: ["c"],
      describe: "c의 printf 함수를 구현한 프로젝트입니다.",
      image: [],
    },
    {
      name: "libft",
      githubURL: undefined,
      url: undefined,
      start: new Date("2020-03-01"),
      end: new Date("2020-03-01"),
      techStack: ["c"],
      describe:
        "C library의 strdup, calloc 등 유용한 함수를 재 구현한 프로젝트입니다",
      image: [],
    },
  ];
  return projects;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const projects = await getData();
  res.status(200).json(projects);
}
