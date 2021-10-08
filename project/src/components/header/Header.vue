<template>
  <header id="Header" class="header">
    <div class="container">
      <img src="/assets/logo-AlexShyjada.svg" alt="" />
      <nav class="nav">
        <ul class="navLinks">
          <li><a class="linkHeader" href="#">Inicio</a></li>
          <li><a class="linkHeader" href="#">Sobre mim</a></li>
          <li><a class="linkHeader" href="#">Portfólio</a></li>
          <li><a class="linkHeader" href="#">Darkmode</a></li>
        </ul>
      </nav>
      <button class="btnHeader">Entrar em contato</button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style scoped>

.header {
  padding: 2rem;
  position: fixed;
  display: flex;
  width: 100%;
}

.nav{
  display: flex;
  justify-content: center;
  align-items: center;
}

.navLinks{
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5rem;
}

.linkHeader{
  display: block;
  text-align: center;
  color: var(--dark-100);
  transition: 0.3s;
}

.linkHeader:hover{
  color: var(--green);
}

.btnHeader{
  color: var(--white);
  font-size: 1.4rem;
  border-radius: 0.5rem;
  padding: 1.5rem 2rem;
  background: rgb(43,214,123);
  background: linear-gradient(45deg, rgba(43,214,123,1) 0%, rgba(64,112,244,1) 100%);
  transition: 0.3s;
}

.btnHeader:hover{
  filter: brightness(0.9);
}

</style>
