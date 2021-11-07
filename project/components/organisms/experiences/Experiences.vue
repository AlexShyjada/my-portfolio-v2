<template>
  <section id="Experience">
    <Container>
      <TitleGroup
        title="Empresas por onde eu já passei"
        description="Sobre minha jornada"
      />
      <div class="gridContainer">
        <ExperienceCard 
          img="/assets/logo-Saltur.svg" 
          title="SALTUR" 
          position="Ui Design &amp;	Front-end intern - 2021.1"
          paragrath="Estatal de turismo e eventos da Prefeitura Municipal de Salvador."
        />
        <ExperienceCard 
          img="/assets/logo-InfoJr.svg" 
          title="Info Jr UFBA" 
          position="Instrutor de Design UI/UX - 2020.2"
          paragrath="Empresa composta por estudantes de  graduação da Universidade Federal da Bahia."
        />
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
  #Experience{
    padding: 8rem;
    .container{
      display: flex;
      flex-direction: column;
      gap: 6rem;
      .gridContainer{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
      }
    }
  }
</style>