interface iContentExperienceCardsProps {
  id: number;
  imgSRCLight: string;
  imgSRCDark: string;
  title: string;
  subTitle: string;
  description: string;
}

export const ExperienceContent = <iContentExperienceCardsProps[]>[
  {
    id: 1,
    imgSRCLight: "/assets/work/logo-infojrlight.svg",
    imgSRCDark: "/assets/work/logo-infojrdark.svg",
    title: "Info Jr UFBA",
    subTitle: "Diretor Comercial - 2022.1",
    description:
      "Entrei em 2020.1 como Desenvolvedor React.js e Designer UI/UX e terminei meu cíclo na empresa como diretor comercial.",
  },
  {
    id: 2,
    imgSRCLight: "/assets/work/logo-klutchlight.svg",
    imgSRCDark: "/assets/work/logo-klutchdark.svg",
    title: "Klutch Tecnologia",
    subTitle: "Front-end intern - 2021.2",
    description:
      "Software House focada em criação de sistemas web, criação de MVP e automatização de marketing.",
  },
  {
    id: 3,
    imgSRCLight: "/assets/work/logo-salturlight.svg",
    imgSRCDark: "/assets/work/logo-salturdark.svg",
    title: "SALTUR - Prefeitura de Salvador",
    subTitle: "UI Design & Front-end intern - 2021.1",
    description:
      "Estatal de turismo e eventos da Prefeitura Municipal de Salvador.",
  },
];
