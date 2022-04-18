import { NextApiRequest, NextApiResponse } from "next";

interface Company {
  name: string; // 회사 이름
  department: string | undefined; // 부서명
  position: string | undefined; // 직책
  describe: string;
  enteringDate: string; // 입사일자
  resignationDate: string | undefined; // 퇴사일자
  projects: Array<string>; // 프로젝트들
}

export type Career = Array<Company>;

export const getData = async (): Promise<Career> => {
  const career: Career = [
    {
      name: "f1security",
      department: "악성코드대응사업부",
      position: "주임",
      describe: `f1 security 주력 사업 중 하나인, "내pc돌보미" 사업의 웹사이트를 개발하는 업무를 진행했습니다.`,
      enteringDate: "2022-02-21",
      resignationDate: undefined,
      projects: [
        "내pc돌보미 단체 예약 프론트 구현",
        "내pc돌보미 학부모 동의 api 및 프론트 구현",
      ],
    },
  ];
  return career;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const career = await getData();
  res.status(200).json(career);
}
