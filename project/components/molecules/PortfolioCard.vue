<template>
  <article class="portfolioCard">
    <img :src="img" :alt="title">

    <div class="textContainer">
      <h3>{{title}}</h3>
      <p>{{description}}</p>
      <a :href="url">
        Saiba mais
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 11L13 6L8 1" stroke="#387BC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1 11L6 6L1 1" stroke="#387BC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </article>
</template>

<script lang="ts">
  export default {
    props: {
      img: {type: String, required: true},
      title: {type: String, required: true},
      description: {type: String, required: true},
      url: {type: String, required: true}
    }
  }
</script>

<style lang="scss" scoped>
  .portfolioCard{
    overflow: hidden;
    border-radius: 1rem;
    min-width: 39.5rem;
    width: 39.5rem;
    display: flex;
    flex-direction: column;
    background: var(--white-base);
    .textContainer{
      padding: 2.5rem 2.5rem 5.5rem 2.5rem;
      h3{
        font-size: 2.2rem;
        margin-bottom: 2rem;
      }
      p{
        font-size: 1.6rem;
        margin-bottom: 3rem;
        line-height: 2.5rem;
      }
      a{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        font-weight: 700;
        color: var(--dark-darkest);
        transition: 0.3s;

        &:hover{
          color: var(--blue);
        }
      }
    }
  }
</style>