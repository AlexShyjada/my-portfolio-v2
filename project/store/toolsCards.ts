import { Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'toolCards', stateFactory: true, namespaced: true })
export default class ToolCards extends VuexModule {
  toolCards = [
    {
      img: '/assets/tools/logo-Javascript.svg',
      title: 'Javascript',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Typescript.svg',
      title: 'Typescript',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-React.svg',
      title: 'React',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Next.svg',
      title: 'Next',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Vue.svg',
      title: 'Vue',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Nuxt.svg',
      title: 'Nuxt',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Sass.svg',
      title: 'Sass',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-TailwindCss.svg',
      title: 'Tailwind Css',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-NetlifyCMS.svg',
      title: 'Netlify CMS',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-StoryblokCMS.svg',
      title: 'Storyblok CMS',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Git.svg',
      title: 'Git',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Figma.svg',
      title: 'Figma',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-AdobeXD.svg',
      title: 'Adobe XD',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-Miro.svg',
      title: 'Miro',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-AdobePhotoshop.svg',
      title: 'Photoshop',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
    {
      img: '/assets/tools/logo-AdobeIllustrator.svg',
      title: 'Illustrator',
      description: 'É a base do desenvolvimento web sem ele nada existe!'
    },
  ]
}
