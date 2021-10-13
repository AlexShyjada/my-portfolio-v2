<template>
  <main>
    <Header/>
    <Nuxt/>
    <Footer/>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
  :root{
    --green: #2bd67b;
    --blue: #4070f4;
    --white-base: #ffffff;
    --white-darkest: #fafafa;
    --dark-base: #040413;
    --dark-darkest: #090918;
  }

  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    border: none;
    background-color: transparent;
    text-decoration: none;
    border-radius: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Epilogue', sans-serif;
    font-size: 1.6rem;
    background-color: var(--ice);
  }
</style>