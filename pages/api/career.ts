import { NextApiRequest, NextApiResponse } from "next";
import { i18n } from "../../i18n";

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

export const getData = async (): Promise<i18n<Career>> => {
  const career: i18n<Career> = {
    "ko-KR": [
      {
        name: "(주)에프원시큐리티",
        department: "악성코드대응사업부",
        position: "주임",
        describe: `에프원시큐리티와 한국인터넷진흥원이 함께 진행한 "내pc돌보미" 사업의 웹사이트를 개발하는 업무와 문서형 악성코드 감지 AI 프레임워크의 프론트엔드를 구현하는 업무를 맡았습니다.`,
        enteringDate: "2022-02-21",
        resignationDate: undefined,
        projects: [
          '"내pc돌보미" 단체 예약 페이지 UI 구현',
          '"내pc돌보미" nice 본인인증 api를 활용하여 만 14세 미만 학생용 학부모 동의 페이지 백엔드 서버 및 UI 구현',
          '"내pc돌보미" 점검원 배정 로직 리팩토링',
          '"문서형 악성코드 감지 AI 프레임워크" UI 구현',
        ],
      },
    ],
    "en-US": [
      {
        name: "F1 Security",
        department: "Malicious code response business department",
        position: "Senior staff",
        describe: `I developed a website for the "My PC Care" project jointly conducted by F1 Security and the Korea Internet & Security Agency.`,
        enteringDate: "2022-02-21",
        resignationDate: undefined,
        projects: [
          "Implementation of the group reservation page UI",
          "Implementation of the back-end server and UI of the parent consent page for students under the age of 14",
        ],
      },
    ],
  };
  return career;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const career = await getData();
  res.status(200).json(career);
}
