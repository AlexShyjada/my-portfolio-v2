export default {
  head: {
    title: 'AlexShyjada',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { 
        name: 'creator', 
        content: 'Alexandre Shyjada Sousa- 2021' 
      },
      { 
        name: 'keywords',
        content: 'Programação, website, desenvolvimento de websites, ui/ux, ui ,ux, serviços, computação, TI, Design, Alexandre Shyjada, Alexandre, Shyjada, HTML, CSS, Javascript, JavaScript, website, site, aplicativo, protótipo, Bahia, Salvador, web application, landing page, software, apps mobile, app, aplicativos, desenvolvimento de app Bahia' 
      },
      { 
        content: '21 anos, Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado de Sistemas de Informação pela Universidade Federal da Bahia.',
        name: 'description'
      },
    ],
    link: [
      { 
        rel: 'icon', 
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      { 
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      { 
        rel: 'preconnect', 
        href: 'https://fonts.googleapis.com',  
        crossorigin:''
      },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&display=swap'
      }
    ]
  },

  css: ['normalize.css/normalize.css'],

  styleResources: {scss:[]},

  plugins: [],

  components: [{path: '@/components', pathPrefix: false}],

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [],

  build: {}
}
