<template>
  <section id="Tools" class="tools"> 
    <Container>
      <TitleGroup
        title="Minhas ferramentas"
        description="Portfólio"
      />
      <div class="gridTools">
        <ToolCard
          img="/assets/logo-Javascript.svg"
          title="Javascript"
          description="É a base do desenvolvimento web sem ele nada existe!"
        />
        <ToolCard
          img="/assets/logo-Typescript.svg"
          title="Typescript"
          description="É o Javascript só que não aceita qualquer tipo de dado 🎲"
        />
        <ToolCard
          img="/assets/logo-React.svg"
          title="React"
          description="Veio para mudar o conceito de aplicações web 💻"
        />
        <ToolCard
          img="/assets/logo-Next.svg"
          title="Next"
          description="Veio para mudar o conceito de aplicações web 💻"
        />
        <ToolCard
          img="/assets/logo-Sass.svg"
          title="Sass"
          description="Css identado e com variáveis pode ser a melhor opção 🤔"
        />
        <ToolCard
          img="/assets/logo-StyledComponents.svg"
          title="Styled components"
          description="Se você gosta de Sass você irá gostar de Styled Components 💅"
        />
        <ToolCard
          img="/assets/logo-TailwindCss.svg"
          title="Tailwind css"
          description="Se você gosta de Sass você irá gostar de Styled Components 💅"
        />
        <ToolCard
          img="/assets/logo-NetlifyCMS.svg"
          title="Netlify CMS"
          description="Se você gosta de Sass você irá gostar de Styled Components 💅"
        />
        <ToolCard
          img="/assets/logo-StoryblokCsm.svg"
          title="Storyblok CMS"
          description="Se você gosta de Sass você irá gostar de Styled Components 💅"
        />
        <ToolCard
          img="/assets/logo-Git.svg"
          title="Git"
          description="Se você gosta de Sass você irá gostar de Styled Components 💅"
        />
      </div>
        <div class="btnGroup">
          <ButtonWhite>
            Anterior
          </ButtonWhite>
          <ButtonGradient>
            Próximo
          </ButtonGradient>
        </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
  .tools {
    padding: 8rem 0;
    .container{
      display: flex;
      flex-direction: column;
      gap: 9rem;
      .gridTools{
        display: flex;
        flex-wrap: nowrap;
        gap: 2.5rem;
      }
      .btnGroup{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        .btnGrad{
          width: 18.5rem;
        }
        .btnWhite{
          width: 18.5rem;
        }
      }
    }
  }
</style>