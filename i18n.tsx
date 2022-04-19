export interface i18n<type> {
  kr: type;
  "en-US": type;
}

export const text: i18n<any> = {
  kr: {
    "meta.describe": "안녕하세요! 웹 개발자 최영진입니다.",
    "banner.hi": "안녕하세요!",
    "banner.adjective": "끈기있는",
    "banner.intro": (name: string) => `웹 개발자 ${name}입니다.`,
    "banner.year": "년차",
    "banner.project": "개인 프로젝트",
    "banner.opensource": "오픈소스 기여",
    "experience.current": "재직 중",
    "education.current": "재학 중",
    "footer.h4": "연락 기다리겠습니다",
    "footer.free2talk": "언제든지 연락주세요",
    "footer.button": "연락하기",
  },
  "en-US": {
    "meta.describe": "Hello! I'm Young-Jin Choi, the web developer.",
    "banner.hi": "hello!",
    "banner.adjective": "I'm Persistent",
    "banner.intro": (name: string) => `web developer, ${name}.`,
    "banner.year": "year",
    "banner.project": "personal project",
    "banner.opensource": "opensource contribute",
    "experience.current": "current",
    "education.current": "current",
    "footer.h4": "Ready to talk?",
    "footer.free2talk": "fell free to contact",
    "footer.button": "contact",
  },
};
