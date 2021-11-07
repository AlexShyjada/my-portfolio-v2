<template>
  <section id="Portfolio" class="portfolio">    
    <Container>
      <TitleGroup
        title="Projetos desenvolvidos por mim"
        description="Portfólio"
      />
      <div class="cardsContainer">
        <PortfolioCard
          img="/assets/project-SurfSsa.png"
          title="SurfSsa"
          description="Projeto construído para a SurfSsa, empresa de surf na capital Baiana."
          url="https://www.behance.net/gallery/119621147/Surf-Salvador"
        />
        <PortfolioCard
          img="/assets/project-SurfSsa.png"
          title="SurfSsa"
          description="Projeto construído para a SurfSsa, empresa de surf na capital Baiana."
          url="https://www.behance.net/gallery/119621147/Surf-Salvador"
        />
        <PortfolioCard
          img="/assets/project-SurfSsa.png"
          title="SurfSsa"
          description="Projeto construído para a SurfSsa, empresa de surf na capital Baiana."
          url="https://www.behance.net/gallery/119621147/Surf-Salvador"
        />
        <PortfolioCard
          img="/assets/project-SurfSsa.png"
          title="SurfSsa"
          description="Projeto construído para a SurfSsa, empresa de surf na capital Baiana."
          url="https://www.behance.net/gallery/119621147/Surf-Salvador"
        />
        <PortfolioCard
          img="/assets/project-SurfSsa.png"
          title="SurfSsa"
          description="Projeto construído para a SurfSsa, empresa de surf na capital Baiana."
          url="https://www.behance.net/gallery/119621147/Surf-Salvador"
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

  .portfolio{
    padding: 8rem 0;
    display: flex;
    flex-direction: column;
    gap: 6rem;
    .container {
      display: flex;
      flex-direction: column;
      gap: 6rem;
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
    .cardsContainer{
      display: flex;
      flex-direction: row;gap: 2.5rem;
    }
  }

</style>