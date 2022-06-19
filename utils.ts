class Utils {
  public static getIconFromTechStack(techStack: string): string {
    switch (techStack) {
      case "c":
        return "devicon-c-plain colored";
      case "c++":
        return "devicon-cplusplus-plain colored";
      case "nextjs":
        return "devicon-nextjs-plain colored";
      case "nestjs":
        return "devicon-nestjs-plain colored";
      case "mariadb":
      case "mysql":
        return "devicon-mysql-plain colored";
      case "redis":
        return "devicon-redis-plain-wordmark colored";
      case "nginx":
        return "devicon-nginx-plain colored";
      case "grafana":
        return "devicon-grafana-original colored";
      case "reactjs":
      case "react":
        return "devicon-react-original colored";
      case "postgresql":
        return "devicon-postgresql-plain colored";
      case "go":
      case "golang":
        return "devicon-go-original-wordmark colored";
      case "python":
        return "devicon-python-plain colored";
      case "javascript":
        return "devicon-javascript-plain colored";
      case "typescript":
        return "devicon-typescript-plain colored";
      case "nodejs":
        return "devicon-nodejs-plain colored";
      case "express":
      case "expressjs":
        return "devicon-express-original colored";
      case "docker":
        return "devicon-docker-plain colored";
      case "git":
        return "devicon-git-plain colored";
      case "tailwindcss":
        return "devicon-tailwindcss-plain colored";
      default:
        return "";
    }
  }
}

export default Utils;
