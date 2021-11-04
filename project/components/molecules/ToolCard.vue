<template>
  <article class="articleTool">
    <img :src="img" :alt="title">
    <div class="textContainer">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
    </div>
  </article>
</template>

<script lang="ts">
  export default {
    props:{
      img: { type: String, required: true},
      title: { type: String, required: true},
      description: { type: String, required: true},
    }
  }
</script>

<style lang="scss" scoped>
  .articleTool{
    min-width: 18.5rem;
    width: 18.5rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    background-color: var(--white-base);
    padding: 3rem 1.5rem;
    img{
      width: max-content;
    }
    .textContainer{
      height:9.8rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 1rem;
      p{
        font-size: 1.3rem;
        line-height: 1.6rem
      }
    }
  }
</style>