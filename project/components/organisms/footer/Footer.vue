<template>
  <footer id="Footer" class="footer">
    <Container>
      <p>Copyright &copy; {{currentYear}} - Alguns direitos reservados a</p>
      <LogoLight/>
    </Container>
  </footer>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    computed: {
      currentYear(){
        return new Date().getFullYear()
      }
    }
  })
</script>

<style lang="scss" scoped>
  #Footer{
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    background-color: var(--dark-base);
    .container{
      display: flex;
      justify-content: center;
      align-items : center;
      gap: 1rem;
      p{
        font-weight: 400;
        color: var(--white-base)
      }
    }
  }
</style>