<template>
    <header id="Header" class="header">
      <Container>
        <LogoDark/>
        <nav class="navLinks">
          <a class="linkHeader" href="#">Inicio</a>
          <a class="linkHeader" href="#About">Sobre mim</a>
          <a class="linkHeader" href="#Portfolio">Portfólio</a>
          <a class="linkHeader" href="#Contact">Contato</a>
          <a class="linkHeader" href="#">Darkmode</a>
        </nav>
        <ButtonGradient>
          <a href="#">Entrar em contato</a> 
        </ButtonGradient>
      </Container>
    </header>
</template>

<style lang="scss" scoped>
  #Header {
    padding: 2rem;
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    border-bottom: solid 2px #E7E7E7;
    background-color: #EDEDED77;
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    z-index: 100;

    .container{
      display : flex;
      align-items : center;
      justify-content: space-between;

      .navLinks{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        .linkHeader{
          display: block;
          text-align: center;
          color: var(--dark-base);
          transition: 0.3s;
        }

        .linkHeader:hover{
          color: var(--green);
        }
      }
    }
  }
</style>
