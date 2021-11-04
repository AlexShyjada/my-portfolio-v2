<template>
  <section id="About">
    <Container>
      <TitleGroup 
        class="titleGroup"
        title="Um pouco da minha história"
        description="Sobre mim"
      />

      <article class="articleContainer">
        <img src="/assets/foto-AlexShyjada.png" alt="Alexandre Shyjada" />
        <div class="textContainer">

          <h3 class="whoIsMe">Quem é Alexandre Shyjada?</h3>

          <MainParagrath>
            Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado de
            Sistemas de Sistemas de Informação pela Universidade Federal da Bahia.
          </MainParagrath>

          <MainParagrath>
            Comecei minha carreira como designer aos 15 anos com trabalho
            voluntário em uma instituição religiosa. Lá conheci desenvolvedores
            Front-End que começaram a passar clientes para desenvolver Interfaces
            de Usuário.
          </MainParagrath>

          <cite>"Never stop learning" - Rocketseat</cite>
        </div>
      </article>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
  #About{
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    gap: 7rem;

    .container{
      display: flex;
      flex-direction: column;
      gap: 6.6rem;

      .articleContainer{
        display: flex;
        align-items : center;
        gap: 12rem;

        .textContainer{
          display: flex;
          flex-direction: column;
          gap: 3rem;
          
          .whoIsMe{
            font-size: 26px;
            font-style: normal;
            font-weight: 600;
            line-height: 23px;
            letter-spacing: 0em;
            text-align: left;
            color: var(--dark-base);
          }
        }
      }
    }
  }
</style>
