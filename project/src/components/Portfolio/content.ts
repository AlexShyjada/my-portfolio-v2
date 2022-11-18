interface ICardPortfolioProps {
  id: number;
  title: string;
  description: string;
  link: string;
  imageURL: string;
}

export const portifolioCardsInformation = [
  {
    id: 1,
    title: 'Alfa Consultoria Jurídica Jr',
    description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque consequat non interdum risus.',
    link: 'https://dribbble.com/shots/17156280-Alfa-Consultoria-Jur-dica-Jr',
    imageURL: '/portfolio/alfaconsultoriajuridicajr.png'
  },
  {
    id: 2,
    title: 'Enpresa Júnior de Informárica da UFBA',
    description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque consequat non interdum risus.',
    link: 'https://dribbble.com/shots/17156427-Site-Info-Jr-UFBA',
    imageURL: '/portfolio/infojrufba.png'
  },
  {
    id: 3,
    title: 'Escola de Surf Salvador',
    description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque consequat non interdum risus.',
    link: 'https://dribbble.com/shots/17165169-Website-SurfSSA',
    imageURL: '/portfolio/escoladesurfssa.png'
  },
  {
    id: 4,
    title: 'Riffar.io',
    description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque consequat non interdum risus.',
    link: 'https://dribbble.com/shots/17176845-Plataforma-Rifar-io',
    imageURL: '/portfolio/riffar.png'
  },
  {
    id: 5,
    title: 'Kobraza Imóveis',
    description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque consequat non interdum risus.',
    link: 'https://dribbble.com/shots/17176726-Site-Kobraza-Im-veis',
    imageURL: '/portfolio/kobraza.png'
  },
  {
    id: 6,
    title: 'Sistema Clínica AMAD',
    description: 'Lorem ipsum dolor sit amet consectetur. Scelerisque consequat non interdum risus.',
    link: 'https://dribbble.com/shots/17156844-Cl-nica-AMAD',
    imageURL: '/portfolio/amad.png'
  },

] as ICardPortfolioProps[]