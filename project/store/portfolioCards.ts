import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'portfolioCards', stateFactory: true, namespaced: true })
export default class PortfolioCards extends VuexModule {
  portfolioCards = [
    {
      img: '/assets/project/project-SurfSsa.png',
      title: 'SurfSsa',
      description:
        'Projeto construído para a SurfSsa, empresa de surf na capital Baiana.',
      url: 'https://www.behance.net/gallery/119621147/Surf-Salvador'
    },
    {
      img: '/assets/project/project-Alfa.png',
      title: 'SurfSsa',
      description:
        'Projeto construído para a SurfSsa, empresa de surf na capital Baiana.',
      url: 'https://www.behance.net/gallery/119621147/Surf-Salvador'
    },
    {
      img: '/assets/project/project-CssBank.png',
      title: 'SurfSsa',
      description:
        'Projeto construído para a SurfSsa, empresa de surf na capital Baiana.',
      url: 'https://www.behance.net/gallery/119621147/Surf-Salvador'
    },
    {
      img: '/assets/project/project-InfoJr.png',
      title: 'SurfSsa',
      description:
        'Projeto construído para a SurfSsa, empresa de surf na capital Baiana.',
      url: 'https://www.behance.net/gallery/119621147/Surf-Salvador'
    },
    {
      img: '/assets/project/project-Saltur.png',
      title: 'SurfSsa',
      description:
        'Projeto construído para a SurfSsa, empresa de surf na capital Baiana.',
      url: 'https://www.behance.net/gallery/119621147/Surf-Salvador'
    },
    {
      img: '/assets/project/project-ExamesMedicos',
      title: 'SurfSsa',
      description:
        'Projeto construído para a SurfSsa, empresa de surf na capital Baiana.',
      url: 'https://www.behance.net/gallery/119621147/Surf-Salvador'
    },
    {
      img: '/assets/project/project-SemcompSSA2021',
      title: 'SurfSsa',
      description:
        'Projeto construído para a SurfSsa, empresa de surf na capital Baiana.',
      url: 'https://www.behance.net/gallery/119621147/Surf-Salvador'
    }
  ]
}
