import { links, linksEng } from "./links";
import { experiences, experiencesEng } from "./experiences";
import { about, engAbout } from "./About";

const sections = {
  experience: "Experience",
  contact: "Contact",
};
const sectionsEsp = {
  experience: "Experiencia",
  contact: "Contacto",
};

export interface pageContentI {
  links: typeof links;
  experiences: typeof experiences;
  about: string;
  goTop: string;
  title: string;
  sections?: typeof sections;
  to: string;
  from: string;
}

export const espPageContent: pageContentI = {
  links,
  experiences,
  about,
  goTop: "Inicio",
  title: "Desarrollador Web",
  sections: sectionsEsp,
  to: "a",
  from: "Del",
};

export const engPageContent: pageContentI = {
  links: linksEng,
  experiences: experiencesEng,
  about: engAbout,
  goTop: "Go Top ",
  title: "Web Developer",
  sections,
  to: "to",
  from: "From",
};
