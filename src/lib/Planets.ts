import { PlanetT } from "@/components/SolarSystem/Planet";
const baseUrl = "/assets/imgs/planets";

const JupiterSize = 50;
const sizes = {
  Mercury: "9px",
  Venus: "18px",
  Earth: "18px",
  Mars: "10px",
  Saturn: "44px",
  Uranus: "19px",
  Neptune: "18px",
  Jupiter: "50px",
};

const planets: PlanetT[] = [
  {
    size: "120px",
    planetSize: sizes.Mercury,
    satelite: false,
    duration: 100,
    planetColor: `${baseUrl}/mercury.png`,
  },
  {
    size: "160px",
    planetSize: sizes.Venus,
    satelite: false,
    duration: 120,
    planetColor: `${baseUrl}/venus.png`,
  },
  {
    size: "240px",
    planetSize: sizes.Earth,
    satelite: true,
    duration: 160,
    planetColor: `${baseUrl}/earth.png`,
  },
  {
    size: "320px",
    planetSize: sizes.Mars,
    satelite: false,
    duration: 180,
    planetColor: `${baseUrl}/mars.png`,
  },
  {
    size: "400px",
    planetSize: sizes.Jupiter,
    satelite: false,
    duration: 200,
    planetColor: `${baseUrl}/jupiter.png`,
  },
  {
    size: "520px",
    planetSize: sizes.Saturn,
    satelite: false,
    duration: 210,
    planetColor: `${baseUrl}/saturn.png`,
  },
  {
    size: "610px",
    planetSize: sizes.Uranus,
    satelite: false,
    duration: 220,
    planetColor: `${baseUrl}/uranus.png`,
  },
  {
    size: "680px",
    planetSize: sizes.Neptune,
    satelite: false,
    duration: 230,
    planetColor: `${baseUrl}/neptune.png`,
  },
];

export default planets;
