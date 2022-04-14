import { NextApiRequest, NextApiResponse } from "next";

interface Company {
  companyName: string; // 회사 이름
  department: string | undefined; // 부서명
  position: string | undefined; // 직책
  enteringDate: Date; // 입사일자
  resignationDate: Date | undefined; // 퇴사일자
  projects: Array<string>; // 프로젝트들
}

type Career = Array<Company>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const career: Career = [
    {
      companyName: "f1security",
      department: "악성코드대응사업부",
      position: "주임",
      enteringDate: new Date("2022-02-21"),
      resignationDate: undefined,
      projects: [
        "내pc돌보미 단체 예약 프론트 구현",
        "내pc돌보미 학부모 동의 api 및 프론트 구현",
      ],
    },
  ];
  res.status(200).json(career);
}
