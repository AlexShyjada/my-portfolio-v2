<template>
  <section id="Contact" class="contact">
    <Container>
      <img src="/assets/img-Contact.png" alt="">
      <div class="contactContent">
        <TitleGroup
          title="Solicite um orçamento"
          description="Contato"
        />
        <form>        
          <Input
            label="Nome Completo"
            type="text"
            placeholder="Digite seu nome"
            value=""
          />
          <div class="inputGrid">
            <Input
              label="Email"
              type="text"
              placeholder="Digite seu email"
              value=""
            />
            <Input
              label="Telefone"
              type="text"
              placeholder="Digite seu telefone"
              value=""
            />
          </div>
          <Input
            label="Assunto"
            type="text"
            placeholder="Digite o assunto da sua mensagem"
            value=""
          />
          <TextArea
            label="Mensagem"
            type="text"
            placeholder="Escreva aqui sua mensagem"
            value=""
          />
          <ButtonGradient>
            Enviar mensagem
          </ButtonGradient>

        </form>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
  .contact{
    .container{
      display: flex;
      gap: 8rem;
      img{
        width: 50%;
      }
      .contactContent{
        width: 100%;
        padding: 6rem 0;
        display: flex;
        flex-direction: column;
        gap: 4rem;
        form{
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          .inputGrid{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }
        }
      }
    }
  }
</style>