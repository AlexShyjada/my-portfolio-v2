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
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>

  .portfolio{
    padding: 8rem;
    .container {
      display: flex;
      gap: 6rem;
      flex-direction: column;
      .cardsContainer{
        display: flex;
        flex-direction: row;gap: 2.5rem;
      }
    }
  }

</style>