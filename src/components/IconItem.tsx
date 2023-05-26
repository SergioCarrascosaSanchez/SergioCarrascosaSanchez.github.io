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
  SiGithub
} from "react-icons/si";

type IconProps = {
  name: string;
}

export function IconItem({ name }: IconProps) {
  if (name === "React")
    return <SiReact size="35px" className="hover:fill-cyan-600 m-3" />;
  if (name === "Tailwind")
    return <SiTailwindcss size="35px" className="hover:fill-cyan-400 m-3" />;
  if (name === "Typescript")
    return <SiTypescript size="35px" className="hover:fill-blue-600 m-3" />;
  if (name === "Javascript")
    return <SiJavascript size="35px" className="hover:fill-yellow-400 m-3" />;
  if (name === "Spring")
    return <SiSpring size="35px" className="hover:fill-lime-600 m-3" />;
  if (name === "MUI")
    return <SiMui size="35px" className="hover:fill-blue-600 m-3" />;
  if (name === "Bootstrap")
    return <SiBootstrap size="37px" className="hover:fill-purple-600 m-3" />;
  if (name === "JWT")
    return (
      <SiJsonwebtokens size="35px" className="hover:fill-fuchsia-600 m-3" />
    );
  if (name === "GithubActions")
    return <SiGithubactions size="35px" className="hover:fill-blue-600 m-3" />;
  if (name === "Docker")
    return <SiDocker size="35px" className="hover:fill-blue-600 m-3" />;
  if (name === "Cypress")
    return <SiCypress size="35px" className="hover:fill-teal-400 m-3" />;
  if (name === "Vitest")
    return <SiVitest size="35px" className="hover:fill-green-500 m-3" />;
  if (name === "ReactTestinglibrary")
    return <SiTestinglibrary size="35px" className="hover:fill-rose-500 m-3" />;
  if (name === "Junit")
    return <SiJunit5 size="35px" className="hover:fill-green-500 m-3" />;
  if (name === "Linkedin")
    return (
      <a
        className="m-0"
        href="https://www.linkedin.com/in/sergio-carrascosa-s%C3%A1nchez-867bab1a1/"
        target="blank"
      >
        <SiLinkedin size="35px" className="hover:fill-blue-600 m-3" />
      </a>
    );
  if (name === "Twitter")
    return (
      <a
        className="m-0"
        href="https://twitter.com/Sergics11"
        target="blank"
      >
        <SiTwitter size="35px" className="hover:fill-blue-400 m-3" />
      </a>
    );
    if (name === "Github")
    return (
      <a
        className="m-0"
        href="https://github.com/SergioCarrascosaSanchez"
        target="blank"
      >
        <SiGithub size="35px" className="hover:fill-slate-700 m-3" />
      </a>
    );
  return <></>;
}
