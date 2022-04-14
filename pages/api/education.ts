import { NextApiRequest, NextApiResponse } from "next";

interface School {
  schoolName: string; // 학교 이름
  schoolType: string; // 학교 종류 (고등학교, 4년제 대학, 비학위 등등)
  department: string | undefined; // 학과
  admissionDate: Date; // 입학일자
  graduationDate: Date | undefined; // 졸업일자
  describe: string | undefined;
}

type Education = Array<School>;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const edu: Education = [
    {
      schoolName: "충훈고등학교",
      schoolType: "고등학교",
      department: "문과",
      admissionDate: new Date("2017-03-02"),
      graduationDate: new Date("2020-01-07"),
      describe: undefined,
    },
    {
      schoolName: "42Seoul",
      schoolType: "비학위 과정",
      department: undefined,
      admissionDate: new Date("2020-02-24"),
      graduationDate: undefined,
      describe: `PBL(Project Base Learning)과 동료학습(Peer Learning) 기반의 소프트웨어 인재 양성 프로그램`,
    },
  ];
  res.status(200).json(edu);
}
