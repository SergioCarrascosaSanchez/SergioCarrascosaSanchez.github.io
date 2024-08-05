import GroupPic from "./assets/group_1.png";
import TaskPic from "./assets/task_1.png";
import ProfilePic from "./assets/profile_1.png";
import MarketPic from "./assets/MercadosCryptoMynce.png";
import StudentPic from "./assets/StudentCryptoMynce.png";
import CoinPic from "./assets/CoinCryptoMynce.png";
import PortfolioPic from "./assets/Portfolio.png";
import Welz1 from "./assets/Welz1.png";
import Welz2 from "./assets/Welz2.png";
import Welz3 from "./assets/Welz3.png";
import Welz4 from "./assets/Welz4.png";
import TheCliff from "./assets/TheCliff.jpg";
import Minsait from "./assets/Minsait.jpg";
import KPMG from "./assets/KPMG.jpg";
import URJC from "./assets/URJC.jpg";

export const ProjectArray = [
  {
    title: "Welz",
    description:
      "Aplicación web donde los usuarios pueden hacer un seguimiento de sus cuentas bancarias y transacciones diarias dentro de un presupuesto, dividiéndolas en diferentes categorías. Desarrollada con Angular, TypeScript y FastAPI como backend. Pruebas unitarias con Jasmine y Karma, y pruebas de End to End con Cypress",
    technologies: [
      "Angular",
      "Typescript",
      "Python",
      "FastAPI",
      "GithubActions",
      "Cypress",
      "JWT",
    ],
    listOfImageSrc: [Welz1, Welz2, Welz3, Welz4],
  },
  {
    title: "CryptoMynce",
    description:
      "Simulador de trading implementado con React y Spring Boot principalmente, aunque también se han utilizado tecnologías y librerías como Docker, Cypress, JUnit, React Testing Library, Vitest, MUI o JWT. Además, se ha incluido Integración Continua con Github Actions y se encuentra desplegado en la plataforma OktetoCloud. La gran mayoría de las tecnologías empleadas fueron aprendidas de manera autodidacta.",
    technologies: [
      "React",
      "Javascript",
      "Spring",
      "Docker",
      "GithubActions",
      "Cypress",
      "Junit",
      "Vitest",
      "ReactTestinglibrary",
      "MUI",
      "JWT",
    ],
    listOfImageSrc: [MarketPic, StudentPic, CoinPic],
  },
  {
    title: "Página web personal",
    description:
      "Es el portafolio donde actualizo todos los proyectos que voy realizando por mi cuenta y comparto mi trayectoria profesional. Es el primer proyecto que desarrollo utilizando tanto Typescript como TailwindCSS. Ambas tecnologías las he aprendido de forma completamente autodidacta.",
    technologies: ["React", "Typescript", "Tailwind"],
    listOfImageSrc: [PortfolioPic],
  },
  {
    title: "ON TASK",
    description:
      "ON TASK es un gestor de tareas simple creado con React y Spring. Durante el verano de 2022 estuve aprendiendo React de forma autodidacta con el objetivo de utilizarlo en el Trabajo Fin de Grado de 2023. Para poner en práctica todo lo aprendido, desarrollé este proyecto. Además, me ha servido para profundizar un poco más en tecnologías como Spring o Bootstrap, y aprender otras como JsonWebTokens.",
    technologies: ["React", "Javascript", "Spring", "Bootstrap", "JWT"],
    listOfImageSrc: [GroupPic, TaskPic, ProfilePic],
  },
];

export const ExperienceArray = [
  {
    logo: TheCliff,
    title: "Frontend Developer",
    company: "TheCliff (Feb 2024 - actualidad)",
    description:
      "Actualmente colaboro en el desarrollo frontend de Maind, un producto propio de TheCliff basado en la Inteligencia Artificial. También soy el responsable de la parte Frontend de varios proyectos con clientes.",
    technologies: ["React", "NextJS", "Typescript", "Cypress"],
  },
  {
    logo: Minsait,
    title: "Software Engineer I",
    company: "Minsait (Junio 2023 - Feb-2024)",
    description:
      "Desarrollador Frontend con React y NextJS para diversos clientes.",
    technologies: ["React", "NextJS", "Javascript"],
  },
  {
    logo: KPMG,
    title: "Auditor IT",
    company: "KPMG (Enero 2023 - Mayo 2023)",
    description:
      "Durante mi periodo de prácticas en KPMG trabajé en el departamento de Auditoría Tecnológica realizando Controles Generales y participando en reuniones con clientes.",
    technologies: [],
  },
  {
    logo: URJC,
    title: "Doble grado en Ingeniería Informática y ADE",
    company: "Universidad Rey Juan Carlos (2018-2023)",
    description:
      "Durante estos años he aprendí distintos lenguajes de programación como Java o Python que me han motivado a seguir ampliando mis conocimientos en programación.",
    technologies: ["React", "Java", "Javascript", "Python", "Spring"],
  },
];
