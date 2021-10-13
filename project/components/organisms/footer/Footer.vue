<template>
  <footer id="Footer" class="footer">
    <p>Copyright &copy; {{currentYear}} - Alguns direitos reservados a</p>
    <Logo/>
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

</style>