<template>
  <Header />
  <Hero />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/header/Header.vue";
import Hero from "./components/hero/Hero.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Hero,
  },
});
</script>

<style>
:root{
  --white: #fff;
  --ice: #FAFAFA;
  --dark-100: #040413;
  --dark-80: #090918;
  --blue: #4070F4;
  --green: #2BD67B;
}

*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  background-color: transparent;
  text-decoration: none;
  border-radius: 0;
}

html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body{
  font-family: 'Epilogue', sans-serif;
  font-size: 1.6rem;
  background-color: var(--ice)
}

.container{
  margin: 0 auto;
  width: 1235px;
  display: flex;
  justify-content: space-between;
}
</style>
