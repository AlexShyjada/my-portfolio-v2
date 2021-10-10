<template>
  <section id="Hero" class="container">
    <aside class="heroTextContainer">
      <span class="myName">Alexandre Shyjada</span>
      <h1 class="titleHero">Designer UI/UX e Desenvolvedor Web</h1>
      <p class="heroParagrath">
        A sua disposição para desenvolver soluções em tecnologia que atendam as
        necessidades de seu negócio
      </p>
      <div class="btnGroup">
        <button><a class="btnContact" href="#">Entrar em contato</a></button>
        <button><a class="btnCurriculum" href="#">Currículo CV</a></button>
      </div>
    </aside>
    <figure>
      <img
        src="/assets/img-hero.svg"
        alt="Designer UI/UX e Desenvolvedor Web"
      />
    </figure>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
#Hero {
  padding: 5.5rem 0;
  margin-top: 8.8rem;
  display: flex;
  align-items: center;
  gap: 8rem;
}

.heroTextContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.myName {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.2em;
  text-align: left;
  text-transform: uppercase;
  color: var(--dark-100);
}

.titleHero {
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: 69px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--dark-100);
}

.heroParagrath {
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--dark-100);
}

.btnGroup {
  display: flex;
  gap: 2.5rem;
}

.btnContact {
  padding: 1.5rem 2rem;
  display: block;
  border-radius: 0.5rem;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--white);
  background: rgb(43, 214, 123);
  background: linear-gradient(
    45deg,
    rgba(43, 214, 123, 1) 0%,
    rgba(64, 112, 244, 1) 100%
  );
  transition: 0.3s;
}

.btnContact:hover {
  filter: brightness(0.9);
}

.btnCurriculum {
  padding: 1.5rem 2rem;
  display: block;
  border-radius: 0.5rem;
  border: 1px solid rgba(9, 9, 24, 0.1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: var(--dark-100);
  background-color: #f7f7f7;
  transition: 0.3s;
}

.btnCurriculum:hover {
  filter: brightness(0.9);
  border: 1px solid var(--dark-100);
}
</style>
