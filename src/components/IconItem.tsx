import {
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiSpring,
  SiMui,
  SiBootstrap,
  SiJsonwebtokens,
  SiGithubactions,
  SiDocker,
  SiCypress,
  SiVitest,
  SiTestinglibrary,
  SiJunit5,
  SiLinkedin,
  SiTwitter,
  SiGithub,
  SiAngular,
  SiPython,
  SiFastapi,
  SiNextdotjs,
} from "react-icons/si";

type IconProps = {
  name: string;
};

const iconMap: Record<string, JSX.Element> = {
  React: <SiReact size="35px" className="hover:fill-cyan-600 m-3" />,
  Tailwind: <SiTailwindcss size="35px" className="hover:fill-cyan-400 m-3" />,
  Typescript: <SiTypescript size="35px" className="hover:fill-blue-600 m-3" />,
  Javascript: (
    <SiJavascript size="35px" className="hover:fill-yellow-400 m-3" />
  ),
  Spring: <SiSpring size="35px" className="hover:fill-lime-600 m-3" />,
  MUI: <SiMui size="35px" className="hover:fill-blue-600 m-3" />,
  Bootstrap: <SiBootstrap size="37px" className="hover:fill-purple-600 m-3" />,
  JWT: <SiJsonwebtokens size="35px" className="hover:fill-fuchsia-600 m-3" />,
  GithubActions: (
    <SiGithubactions size="35px" className="hover:fill-blue-600 m-3" />
  ),
  Docker: <SiDocker size="35px" className="hover:fill-blue-600 m-3" />,
  Cypress: <SiCypress size="35px" className="hover:fill-teal-400 m-3" />,
  Vitest: <SiVitest size="35px" className="hover:fill-green-500 m-3" />,
  ReactTestingLibrary: (
    <SiTestinglibrary size="35px" className="hover:fill-rose-500 m-3" />
  ),
  Junit: <SiJunit5 size="35px" className="hover:fill-green-500 m-3" />,
  Angular: <SiAngular size="35px" className="hover:fill-red-600 m-3" />,
  Python: <SiPython size="35px" className="hover:fill-blue-600 m-3" />,
  FastAPI: <SiFastapi size="35px" className="hover:fill-teal-600 m-3" />,
  NextJS: <SiNextdotjs size="35px" className="hover:fill-slate-700 m-3" />,
  Twitter: <SiTwitter size="35px" className="hover:fill-blue-400 m-3" />,
  Linkedin: <SiLinkedin size="35px" className="hover:fill-blue-600 m-3" />,
  Github: <SiGithub size="35px" className="hover:fill-slate-700 m-3" />,
};

const socialLinks: Record<string, string> = {
  Linkedin:
    "https://www.linkedin.com/in/sergio-carrascosa-s%C3%A1nchez-867bab1a1/",
  Twitter: "https://twitter.com/Sergics11",
  Github: "https://github.com/SergioCarrascosaSanchez",
};

export function IconItem({ name }: IconProps) {
  const icon = iconMap[name];

  if (socialLinks[name]) {
    return (
      <a
        className="m-0"
        href={socialLinks[name]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  }

  return icon || <></>;
}
