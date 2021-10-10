<template>
  <section id="MyHistory" class="container">
    <div class="titleGroup">
      <span class="topicHistory">Sobre mim</span>
      <h2 class="titleHistory">Um pouco da minha história</h2>
    </div>
    <article class="myHistoryContent">
      <img src="/assets/foto-AlexShyjada.png" alt="Alexandre Shyjada" />
      <div class="myHistorytextContent">
        <h4 class="titleSubTopic">Quem é Alexandre Shyjada?</h4>
        <p class="paragrathSubTopic">
          Designer UI/UX, Desenvolvedor Front-End e Graduando no Bacharelado de
          Sistemas de Sistemas de Informação pela Universidade Federal da Bahia.
        </p>
        <p class="paragrathSubTopic">
          Comecei minha carreira como designer aos 15 anos com trabalho
          voluntário em uma instituição religiosa. Lá conheci desenvolvedores
          Front-End que começaram a passar clientes para desenvolver Interfaces
          de Usuário.
        </p>
        <cite>"Never stop learning" - Rocketseat</cite>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped>
#MyHistory{
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  gap: 7rem;
}

.titleGroup{
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.topicHistory{
  text-transform: uppercase;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.2em;
  text-align: left;
  color: var(--dark-100);
}

.titleHistory{
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--dark-100);
}

.myHistoryContent{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12rem;
}

.myHistorytextContent{
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
.titleSubTopic{
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--dark-100);
}

.paragrathSubTopic{
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--dark-100);
}

</style>
