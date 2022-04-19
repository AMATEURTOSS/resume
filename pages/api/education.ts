import { NextApiRequest, NextApiResponse } from "next";
import { i18nType } from "../../i18nType";

interface School {
  name: string; // 학교 이름
  type: string; // 학교 종류 (고등학교, 4년제 대학, 비학위 등등)
  department: string | undefined; // 학과
  admissionDate: string; // 입학일자
  graduationDate: string | undefined; // 졸업일자
  describe: string | undefined;
}

export type Schools = Array<School>;

export const getData = async (): Promise<i18nType<Schools>> => {
  const edu: i18nType<Schools> = {
    kr: [
      {
        name: "충훈고등학교",
        type: "고등학교",
        department: "문과",
        admissionDate: "2017-03-02",
        graduationDate: "2020-01-07",
        describe: "공립 인문계 고등학교",
      },
      {
        name: "42Seoul",
        type: "비학위 과정",
        department: undefined,
        admissionDate: "2020-02-24",
        graduationDate: undefined,
        describe: `과학기술정보통신부에서 주관하는 PBL(Project Base Learning)과 동료학습(Peer Learning) 기반의 소프트웨어 인재 양성 프로그램`,
      },
    ],
    "en-US": [
      {
        name: "Chunghun High School",
        type: "High School",
        department: "literature",
        admissionDate: "2017-03-02",
        graduationDate: "2020-01-07",
        describe: "A public liberal arts High School",
      },
      {
        name: "42Seoul",
        type: "Non-degree",
        department: undefined,
        admissionDate: "2020-02-24",
        graduationDate: undefined,
        describe: `Project Base Learning (PBL) and Peer Learning-based software talent training programs`,
      },
    ],
  };
  return edu;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const edu = await getData();
  res.status(200).json(edu);
}
