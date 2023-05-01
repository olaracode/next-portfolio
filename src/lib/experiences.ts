import moment from "moment";

export interface ExperienceI {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
  tags: string[];
}

export const experiences: ExperienceI[] = [
  {
    title: "Teacher Assistant",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "16/01/2022",
    endDate: "10/01/2022",
    description:
      "Asistente del profesor principal en el curso fullstack de 4geeks academy, corrigiendo tareas, dando mentorías y ayudando a los estudiantes a resolver sus dudas.",
    tags: [
      "React.js",
      "Javascript",
      "Bootstrap",
      "HTML",
      "CSS",
      "Python",
      "Flask",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Yoifirst",
    location: "@Remote",
    startDate: "12/03/2022",
    endDate: "06/04/2023",
    description:
      "Desarrollador frontend en el equipo de Yoifirst, encargado de crear y mantener 5 paginas de la empresa, utilizando next.js, react.js, typescript, Chakra-UI, Material-UI, html y css, Redux.",
    tags: [
      "React.js",
      "Next.js",
      "Material-UI",
      "HTML",
      "CSS",
      "Redux",
      "Chakra-UI",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "06/04/2022",
    endDate: "24/08/2022",
    description:
      "Desarrollador en el equipo de TechneStudioIT, encargado de crear una aplicación de evaluación de estudiantes de aviación militar utilizando Jquery, Bootstrap, html y css, Django, Python, PostgreSQL.",
    tags: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "Jquery",
    ],
  },
  {
    title: "Lead Teacher",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "16/01/2023",
    description:
      "Profesor principal encargado de enseñar el curso fullstack de 4geeks academy, corrigiendo tareas, dando mentorías y ayudando a los estudiantes a resolver sus dudas.",
    tags: [
      "React.js",
      "Javascript",
      "Bootstrap",
      "HTML",
      "CSS",
      "Python",
      "Flask",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "03/04/2023",
    description:
      "Parte de un equipo de desarrollo de frontend encargados de desarrollar una aplicación de gestion de pagos de servicios utilizando Next.js Chakra-UI, Recoil, axios",
    tags: [
      "React.js",
      "Next.js",
      "Chakra-UI",
      "HTML",
      "CSS",
      "Recoil",
      "Axios",
    ],
  },
];

export const experiencesEng: ExperienceI[] = [
  {
    title: "Teacher Assistant",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "16/01/2022",
    endDate: "10/01/2022",
    description:
      "Assistant to the main professor in the fullstack course at 4geeks academy, correcting assignments, providing mentorship, and helping students to solve their doubts.",
    tags: [
      "React.js",
      "Javascript",
      "Bootstrap",
      "HTML",
      "CSS",
      "Python",
      "Flask",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Yoifirst",
    location: "@Remote",
    startDate: "12/03/2022",
    endDate: "06/04/2023",
    description:
      "Frontend developer in the Yoifirst team, responsible for creating and maintaining 5 company pages, using next.js, react.js, typescript, Chakra-UI, Material-UI, html and css, Redux.",
    tags: [
      "React.js",
      "Next.js",
      "Material-UI",
      "HTML",
      "CSS",
      "Redux",
      "Chakra-UI",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "06/04/2022",
    endDate: "24/08/2022",
    description:
      "Fullstack developer in the TechneStudioIT team, responsible for creating a military aviation student evaluation application using Jquery, Bootstrap, html and css, and backend technologies such as Django, Python, and PostgreSQL.",
    tags: [
      "Python",
      "Django",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "Jquery",
    ],
  },
  {
    title: "Lead Teacher",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "16/01/2023",
    description:
      "Main professor responsible for teaching the fullstack course at 4Geeks Academy, correcting homework, providing mentorship, and helping students to resolve their doubts",
    tags: [
      "React.js",
      "Javascript",
      "Bootstrap",
      "HTML",
      "CSS",
      "Python",
      "Flask",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "03/04/2023",
    description:
      "Part of a frontend development team responsible for developing a payment services management application using Next.js, Chakra-UI, Recoil, and axios",
    tags: [
      "React.js",
      "Next.js",
      "Chakra-UI",
      "HTML",
      "CSS",
      "Recoil",
      "Axios",
    ],
  },
];
