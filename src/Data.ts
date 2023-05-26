import GroupPic from "./assets/group_1.png";
import TaskPic from "./assets/task_1.png";
import ProfilePic from "./assets/profile_1.png";
import MarketPic from "./assets/MercadosCryptoMynce.png";
import StudentPic from "./assets/StudentCryptoMynce.png";
import CoinPic from "./assets/CoinCryptoMynce.png";
import PortfolioPic from "./assets/Portfolio.png";

export const ProjectArray = [
    {
      title: "CryptoMynce",
      description:"Simulador de trading con Criptomonedas. Está implementado con React y Spring Boot principalmente, aunque también se han utilizado  tecnologías y librerías como Docker, Cypress, JUnit, React Testing Library, Vitest, MUI o JWT. Además, se ha incluido Integración Continua con Github Actions y está desplegado en la plataforma OktetoCloud. La mayoría de las tecnologías utilizadas fueron  aprendidas de manera autodidacta",
      technologies:[
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
      listOfImageSrc:[MarketPic, StudentPic, CoinPic],
    },
    {
      title: "Página web personal",
      description:"Es mi portafolio web personal, donde actualizo todos los proyectos personales que voy realizando por mi cuenta y comparto mi trayectoria profesional. Es el primer proyecto que desarrollo utilizando tanto Typescript y como TailwindCSS. Ambas tecnologías las he aprendido de forma completamente autodidacta.",
      technologies: ["React", "Typescript", "Tailwind"],
      listOfImageSrc: [PortfolioPic],
    },
    {
      title: "ON TASK",
      description:"ON TASK es un gestor de tareas simple creado con React y Spring. Durante este verano he estado aprendiendo React de forma autodidacta con el objetivo de utilizarlo en mi Trabajo Fin de Grado que comenzaré en los próximos meses. Para poner en práctica todo lo aprendido, he desarrollado este proyecto. Además, me ha servido para profundizar un poco más en tecnologías como Spring o Bootstrap, y aprender otras como JsonWebTokens. Puedes encontrar más información haciendo click en el logo de Github.",
      technologies: ["React", "Javascript", "Spring", "Bootstrap", "JWT"],
      listOfImageSrc:[GroupPic, TaskPic, ProfilePic],
    }
  ]

export  const ExperienceArray = [
    {
      title: "Auditor IT",
      company: "KPMG (Enero 2023 - Mayo 2023)",
      description:
        "Durante mi periodo de prácticas en KPMG trabajé en el departamento de Auditoría Tecnológica realizando Controles Generales y participando en reuniones con clientes.",
    },
    {
      title: "Doble grado en Ingeniería Informática y ADE",
      company: "Universidad Rey Juan Carlos (2018-2023)",
      description:
        "Durante estos años he aprendí distintos lenguajes de programación como Java o Python que me han motivado a seguir ampliando mis conocimientos en programación.",
    },
  ];