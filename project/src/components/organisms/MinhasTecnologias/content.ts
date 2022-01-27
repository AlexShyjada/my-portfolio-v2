interface iTechnologysAndDesignContentProps {
  id: number;
  imgSRC: string;
  title: string;
  description: string;
}

export const TechnologysContent = <iTechnologysAndDesignContentProps[]>[
  {
    id: 1,
    imgSRC: "/assets/technologys/logo-javascript.svg",
    title: "Javascript",
    description: "É a base do desenvolvimento web sem ele nada existe!",
  },
  {
    id: 2,
    imgSRC: "/assets/technologys/logo-typescript.svg",
    title: "Typescript",
    description: "É o javascript com tipagem, não vivo sem 💚",
  },
  {
    id: 3,
    imgSRC: "/assets/technologys/logo-react.svg",
    title: "React",
    description: "Framework javscript perfeita para aplicações simples",
  },
  {
    id: 4,
    imgSRC: "/assets/technologys/logo-next.svg",
    title: "Next",
    description: "É o react com CEO e roteamento dinâmico de páginas",
  },
  {
    id: 5,
    imgSRC: "/assets/technologys/logo-vue.svg",
    title: "Vue",
    description: "Já pensou criar um componente em um só arquivo nativamente?",
  },
  {
    id: 6,
    imgSRC: "/assets/technologys/logo-nuxt.svg",
    title: "Nuxt",
    description: "É o Vue com CEO e roteamento dinâmico de páginas",
  },
  {
    id: 7,
    imgSRC: "/assets/technologys/logo-sass.svg",
    title: "Sass",
    description: "Identação para CSS? Tem algo melhor que isso?",
  },
  {
    id: 8,
    imgSRC: "/assets/technologys/logo-styledcomponents.svg",
    title: "Styled components",
    description: "Se SASS era bom, imagina trazer o CSS para o javascript",
  },
  {
    id: 9,
    imgSRC: "/assets/technologys/logo-talwindcss.svg",
    title: "Tailwind css",
    description: "Prefiro o bom e velho css, mas serve para padronizar código.",
  },
  {
    id: 10,
    imgSRC: "/assets/technologys/logo-netlifycms.svg",
    title: "Netlify CMS",
    description: "Um CMS que funciona junto com o versionamento no GitHub",
  },
  {
    id: 11,
    imgSRC: "/assets/technologys/logo-storyblokcms.svg",
    title: "Storyblok CMS",
    description: "Um headless CMS de respeito, o usuário final agradece!",
  },
  {
    id: 12,
    imgSRC: "/assets/technologys/logo-git.svg",
    title: "Git",
    description: "Hoje, Git é tudo, facilita até no deploy!",
  },
];

export const DesignsContent = <iTechnologysAndDesignContentProps[]>[
  {
    id: 1,
    imgSRC: "/assets/technologys/",
    title: "Figma",
    description: "Usei essa ferramenta para construir o design e UX desse site 🥰",
  },
  {
    id: 2,
    imgSRC: "/assets/technologys/",
    title: "Adobe Xd",
    description: "Comecei aqui no design de interfaces, até descobrir o Figma rs.",
  },
  {
    id: 3,
    imgSRC: "/assets/technologys/",
    title: "Miro",
    description: "Fazer UX aqui é maravilhoso, Mas o FigJam está dividindo opiniões!",
  },
  {
    id: 4,
    imgSRC: "/assets/technologys/",
    title: "Illustrator",
    description: "Criar e editar illustrações é aqui mesmo",
  },
  {
    id: 5,
    imgSRC: "/assets/technologys/",
    title: "Photoshop",
    description: "Foi aqui onde comecei! Quando cheguei aqui ainda existia a versão CS5.",
  },
];
