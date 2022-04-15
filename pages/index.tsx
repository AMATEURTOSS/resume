import { getData as whoAmIGetData } from "./api/whoami";
import { getData as techStackGetData } from "./api/techstack";
import { getData as educationGetData } from "./api/education";
import { getData as careerGetData } from "./api/career";
import type { NextPage, GetStaticProps } from "next";
import type { WhoAmI } from "./api/whoami";
import type { TechStack } from "./api/techstack";
import type { Education } from "./api/education";
import type { Career } from "./api/career";

interface Props {
  whoami: WhoAmI;
  techStack: TechStack;
  edu: Education;
  career: Career;
}

const Home: NextPage<Props> = (info) => {
  const { whoami, techStack, edu, career } = info;
  return (
    <main>
      <section className="basic_info">
        <img src="profile.jpg" alt="profile" />
        <div>
          <h1 className="name">{whoami.name}</h1>
          <span className="email">
            <i className="xi-mail-o" />
            {whoami.email}
          </span>
          <div className="phone_birth_year">
            <span>
              <i className="xi-call" />
              {whoami.phone}
            </span>
            <span>
              <i className="xi-calendar" />
              {whoami.birth}
            </span>
            <span>
              <i className="xi-briefcase" />
              {whoami.year}년차
            </span>
          </div>
        </div>
      </section>
      <section className="tech_stack">
        <h2>기술 스택</h2>
        <div className="stack_wrapper">
          {techStack.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </div>
      </section>
      <section className="career">
        <h2>경력</h2>
        {career
          .slice(0)
          .reverse()
          .map((el, idx) => {
            return (
              <div className="career_wrapper" key={idx}>
                <div className="key_value name">
                  <span>회사명</span>
                  <span>{el.name}</span>
                </div>
                <div className="key_value department">
                  <span>부서명</span>
                  <span>{el.department}</span>
                </div>
                <div className="key_value position">
                  <span>직책</span>
                  <span>{el.position}</span>
                </div>
                <div className="key_value entering">
                  <span>입사일</span>
                  <span>{el.enteringDate}</span>
                </div>
                <div className="key_value resignation">
                  <span>퇴사일</span>
                  <span>{el.resignationDate ?? "재직중"}</span>
                </div>
                <div className="key_value projects">
                  <span>프로젝트</span>
                  <ul>
                    {el.projects
                      .slice(0)
                      .reverse()
                      .map((el, idx) => (
                        <li key={idx}>{el}</li>
                      ))}
                  </ul>
                </div>
              </div>
            );
          })}
      </section>
      <section className="education">
        <h2>교육 이력</h2>
        {edu
          .slice(0)
          .reverse()
          .map((el, idx) => {
            return (
              <div className="school_wrapper" key={idx}>
                <div className="key_value name">
                  <span>학교명</span>
                  <span>{el.name}</span>
                </div>
                <div className="key_value type">
                  <span>학교 종류</span>
                  <span>{el.type}</span>
                </div>
                <div className="key_value admission">
                  <span>입학일</span>
                  <span>{el.admissionDate}</span>
                </div>
                <div className="key_value graduation">
                  <span>졸업일</span>
                  <span>{el.graduationDate ?? "재학중"}</span>
                </div>
                <div className="key_value department">
                  <span>학과</span>
                  <span>{el.department ?? "N/A"}</span>
                </div>
                <div className="key_value describe">
                  <span>설명</span>
                  <span>{el.describe ?? "N/A"}</span>
                </div>
              </div>
            );
          })}
      </section>
      <div style={{ width: "100%", height: "200px" }} />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const whoami: WhoAmI = await whoAmIGetData();
  const techStack: TechStack = await techStackGetData();
  const edu: Education = await educationGetData();
  const career: Career = await careerGetData();
  return {
    props: JSON.parse(
      JSON.stringify({
        whoami,
        techStack,
        edu,
        career,
      })
    ),
  };
};

export default Home;
