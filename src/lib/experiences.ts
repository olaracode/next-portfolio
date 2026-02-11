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
    title: "Subject Matter Expert",
    company: "TripleTen",
    location: "@Remote",
    startDate: "01/2026",
    description:
      "Experto en la materia colaborando en el desarrollo del curriculum de Ingeniería de Software, creación de APIs REST para uso educativo y elaboración de guías de revisión de proyectos.",
    tags: ["REST APIs", "Curriculum Design", "Node.js"],
  },
  {
    title: "Lead Programming Instructor",
    company: "TripleTen",
    location: "@Remote",
    startDate: "10/2025",
    description:
      "Instructor líder responsable de la mejora y actualización del curriculum, supervisión del equipo de instructores y liderazgo de cohortes completas desde el inicio hasta la graduación.",
    tags: ["React", "Node.js", "Mentorship", "Code Review"],
  },
  {
    title: "Programming Instructor",
    company: "TripleTen",
    location: "@Remote",
    startDate: "06/2025",
    endDate: "10/2025",
    description:
      "Instructor de programación encargado de impartir clases en vivo, corregir proyectos, realizar revisiones de código y contribuir a la estructura del contenido académico en el programa de Software Engineering.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
  },
  {
    title: "Programming Tutor",
    company: "TripleTen",
    location: "@Remote",
    startDate: "07/2024",
    endDate: "06/2025",
    description:
      "Tutor de programación enfocado en resolución de bugs, explicación de conceptos complejos y guía en la implementación de proyectos. Acompañamiento técnico continuo para fomentar la confianza y autonomía de los estudiantes.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Teacher Assistant",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "03/2022",
    endDate: "01/2023",
    description:
      "Asistente del profesor principal en el programa Fullstack. Corrección de tareas, mentorías 1:1 y apoyo continuo a estudiantes en HTML, CSS, JavaScript, React y Python, fomentando la autonomía y buenas prácticas de desarrollo.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Python", "Flask"],
  },
  {
    title: "Frontend Developer",
    company: "YOI",
    location: "@Remote",
    startDate: "04/2022",
    endDate: "04/2023",
    description:
      "Desarrollador frontend dentro del ecosistema de aplicaciones web de YOI. Desarrollo de dashboards dinámicos, chat en tiempo real, consumo de CMS, sistema de comentarios y ratings, autenticación de usuarios y personalización de temas, trabajando con equipos de backend y DevOps.",
    tags: ["Next.js", "React.js", "Chakra-UI", "HTML", "CSS", "CI/CD"],
  },
  {
    title: "Fullstack Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "06/2022",
    endDate: "10/2022",
    description:
      "Desarrollo de una plataforma de gestión y administración de estudiantes para una academia de vuelo. Participación en el diseño de modelos de base de datos, creación de vistas con Django Templates, implementación de interacciones con jQuery y definición de rutas en Django.",
    tags: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Teacher",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "01/2023",
    endDate: "07/2024",
    description:
      "Profesor de programación Fullstack. Dictado de clases en vivo, corrección de proyectos, revisiones de código y mentorías. Acompañamiento a estudiantes desde fundamentos hasta proyectos finales, promoviendo buenas prácticas y pensamiento crítico.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Python", "Flask"],
  },
  {
    title: "Frontend Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "03/2023",
    endDate: "02/2024",
    description:
      "Programador principal del frontend en una aplicación de gestión de pagos de servicios. Responsable del desarrollo de páginas corporativas, dashboard de usuario, sistema de billetera digital, pagos de servicios y visualización de transacciones.",
    tags: ["Next.js", "React.js", "Chakra-UI", "Recoil", "Axios"],
  },
];


export const experiencesEng: ExperienceI[] = [
  {
    title: "Subject Matter Expert",
    company: "TripleTen",
    location: "@Remote",
    startDate: "01/2026",
    description:
      "Subject Matter Expert collaborating on Software Engineering curriculum development, building REST APIs for educational use, and creating project review guidelines.",
    tags: ["REST APIs", "Curriculum Design", "Node.js"],
  },
  {
    title: "Lead Programming Instructor",
    company: "TripleTen",
    location: "@Remote",
    startDate: "10/2025",
    description:
      "Lead instructor responsible for curriculum improvements, mentoring instructors, and leading full student cohorts from onboarding to graduation.",
    tags: ["React", "Node.js", "Mentorship", "Code Review"],
  },
  {
    title: "Programming Instructor",
    company: "TripleTen",
    location: "@Remote",
    startDate: "06/2025",
    endDate: "10/2025",
    description:
      "Programming instructor delivering live classes, project reviews, and code reviews while contributing to the structure and content of the Software Engineering program.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express"],
  },
  {
    title: "Programming Tutor",
    company: "TripleTen",
    location: "@Remote",
    startDate: "07/2024",
    endDate: "06/2025",
    description:
      "Provided technical support to students by debugging issues, explaining complex web development concepts, and guiding project implementations to foster confidence and autonomy.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Teacher Assistant",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "03/2022",
    endDate: "01/2023",
    description:
      "Assistant to the main instructor in the Fullstack program. Responsible for assignment reviews, 1:1 mentorship sessions, and continuous student support in HTML, CSS, JavaScript, React, and Python.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap", "Python", "Flask"],
  },
  {
    title: "Frontend Developer",
    company: "YOI",
    location: "@Remote",
    startDate: "04/2022",
    endDate: "04/2023",
    description:
      "Frontend developer within YOI’s web application ecosystem. Built dynamic dashboards, real-time chat, CMS integrations, comments and rating systems, user authentication, and custom theming, collaborating closely with backend and DevOps teams.",
    tags: ["Next.js", "React.js", "Chakra-UI", "HTML", "CSS", "CI/CD"],
  },
  {
    title: "Fullstack Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "06/2022",
    endDate: "10/2022",
    description:
      "Worked on a student management platform for a flight academy. Contributed to database modeling, Django Templates views, interactive features with jQuery, and Django routing.",
    tags: ["Python", "Django", "PostgreSQL", "HTML", "CSS", "Bootstrap", "jQuery"],
  },
  {
    title: "Teacher",
    company: "4Geeks Academy",
    location: "@Remote",
    startDate: "01/2023",
    endDate: "07/2024",
    description:
      "Fullstack programming instructor delivering live classes, code reviews, project feedback, and mentorship, guiding students from fundamentals to production-ready projects.",
    tags: ["React.js", "JavaScript", "HTML", "CSS", "Python", "Flask"],
  },
  {
    title: "Frontend Developer",
    company: "TechneStudioIT",
    location: "@Remote",
    startDate: "03/2023",
    endDate: "02/2024",
    description:
      "Lead frontend developer for a service payments management application. Built corporate pages, user dashboards, digital wallet top-ups, service payments, and transaction data tables.",
    tags: ["Next.js", "React.js", "Chakra-UI", "Recoil", "Axios"],
  },

];

