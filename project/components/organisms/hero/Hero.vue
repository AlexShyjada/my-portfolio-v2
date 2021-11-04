<template>
  <section id="Hero">
    <Container>
      <aside class="heroTextContainer">
        <Description>Alexandre Shyjada</Description>
        <MainTitle>Designer UI/UX e Desenvolvedor Web</MainTitle>
        <MainParagrath>
          A sua disposição para desenvolver soluções em tecnologia que atendam as
          necessidades de seu negócio
        </MainParagrath>
        <div class="btnGroup">
          <ButtonGradient><a href="#">Entrar em contato</a></ButtonGradient>
          <ButtonWhite><a href="#">Currículo CV</a></ButtonWhite>
        </div>
      </aside>

      <figure>
        <img src="/assets/img-hero.svg" alt="Designer UI/UX e Desenvolvedor Web"/>
      </figure>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
  #Hero {
    margin-top: 8.8rem;
    padding: 5.5rem 0;
    display: flex;
    align-items: center;
    gap: 8rem;

    .container {
      display: flex;
      align-items : center;
      flex-direction: row;
      gap: 8rem;

      aside{
        display: flex;
        flex-direction: column;

        .mainTitle{
          margin: 2rem 0;
        }
        
        .btnGroup {
          margin-top: 3rem;
          display: flex;
          gap: 2.5rem;
        }
      }
    }
  }


</style>
