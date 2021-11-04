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
          img="/assets/logo-Javascript.svg"
          title="Javascript"
          description="É a base do desenvolvimento web sem ele nada existe!"
        />
        <ToolCard
          img="/assets/logo-Javascript.svg"
          title="Javascript"
          description="É a base do desenvolvimento web sem ele nada existe!"
        />
        <ToolCard
          img="/assets/logo-Javascript.svg"
          title="Javascript"
          description="É a base do desenvolvimento web sem ele nada existe!"
        />
        <ToolCard
          img="/assets/logo-Javascript.svg"
          title="Javascript"
          description="É a base do desenvolvimento web sem ele nada existe!"
        />
        <ToolCard
          img="/assets/logo-Javascript.svg"
          title="Javascript"
          description="É a base do desenvolvimento web sem ele nada existe!"
        />
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
  .tools {
    .container{
      display: flex;
      flex-direction: column;
      gap: 9rem;
      .gridTools{
        display: flex;
        flex-wrap: nowrap;
        gap: 2.5rem;
        overflow: auto;
      }
    }
  }
</style>