export interface i18n<type> {
  kr: type;
  "en-US": type;
}

export const text: i18n<any> = {
  kr: {
    "meta.describe": "안녕하세요! 웹 개발자 최영진입니다.",
    "banner.hi": "안녕하세요!",
    "banner.adjective": "끈기있는",
    "banner.intro": (name: string) => <>웹 개발자 {name}입니다.</>,
    "banner.year": "년차",
    "banner.project": "개인 프로젝트",
    "banner.opensource": "오픈소스 기여",
    "aboutme.explain": () => (
      <>
        대입을 준비하던 고3 여름 즈음에, 프랑스에서 시작된 세계적인 프로그래머
        교육기관인 Ecole42 가 42Seoul이라는 이름으로 한국에 들어온다는 소식을
        들었습니다. 대학교도 좋지만, 실무 능력을 기르고 싶다는 생각에 고등학교를
        졸업하고 한달동안 치뤄진 입학시험(라피신)을 거쳐 42Seoul 에
        입학하였습니다. 42Seoul에서는 동료들과 C/C++, JS, Network, Computer
        Science 등에 대해 공부했습니다. 현재는 F1 Security에서 웹 개발자로
        근무하고 있습니다.
      </>
    ),
    "experience.current": "재직 중",
    "education.current": "재학 중",
    "footer.h4": "연락 기다리겠습니다",
    "footer.free2talk": "언제든지 연락주세요",
    "footer.button": "연락하기",
  },
  "en-US": {
    "meta.describe": "Hello! I'm Young-Jin Choi, the Web Developer.",
    "banner.hi": "hello!",
    "banner.adjective": "I'm Persistent",
    "banner.intro": (name: string) => (
      <>
        Web Developer, <br />
        {name}.
      </>
    ),
    "banner.year": "year",
    "banner.project": "project",
    "banner.opensource": "opensource",
    "aboutme.explain": () => (
      <>
        Around the summer of my third year of high school, I heard that Ecole42,
        a world-class programmer education institution that started in France,
        will enter Korea under the name of 42Seoul. College is good, but I
        wanted to develop practical skills, so I graduated from high school and
        entered 42Seoul after a month-long entrance examination. At 42Seoul, I
        studied with my colleagues C/C++, JS, Network, Computer Science. I am
        currently working as a web developer at F1 Security.
      </>
    ),
    "experience.current": "current",
    "education.current": "current",
    "footer.h4": "Ready to talk?",
    "footer.free2talk": "fell free to contact",
    "footer.button": "contact",
  },
};
