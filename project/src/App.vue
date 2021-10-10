<template>
  <Header />
  <Hero />
  <History />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/header/Header.vue'
import Hero from './components/hero/Hero.vue'
import History from './components/about/History.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Hero,
    History
  }
})
</script>

<style>
:root {
  --white: #fff;
  --ice: #fafafa;
  --dark-100: #040413;
  --dark-80: #090918;
  --blue: #4070f4;
  --green: #2bd67b;
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

.container {
  margin: 0 auto;
  width: 1235px;
}
</style>
