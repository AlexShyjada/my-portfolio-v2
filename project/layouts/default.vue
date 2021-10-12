<template>
  <main>
    <header id="Header" class="header">
      <div class="container">
        <img src="/assets/logo-AlexShyjada.svg" alt="Logo Alexandre Shyjada"/>
        <nav class="navLinks">
          <a class="linkHeader" href="#">Inicio</a>
          <a class="linkHeader" href="#">Sobre mim</a>
          <a class="linkHeader" href="#">Portfólio</a>
          <a class="linkHeader" href="#">Darkmode</a>
        </nav>
        <button class="btnHeader">Entrar em contato</button>
      </div>
    </header>

    <Nuxt/>

    <footer>
      <p>Copyright © 2021 - Alguns direitos reservados a</p>
      <img src="/static/logo.svg" alt="Logo Alexandre Shyjada">
    </footer>
  </main>
</template>

<style lang="scss">
  #Header {
    padding: 2rem;
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    border-bottom: solid 2px #E7E7E7;
    background-color: #FAFAFA77;
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    z-index: 100;
  }
</style>