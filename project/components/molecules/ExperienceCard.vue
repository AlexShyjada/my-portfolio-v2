<template>
  <article class="experienceCard">
    <img :src="img" :alt="title">
    <div class="textContainer">
      <h3> {{title}} </h3>
      <span> {{position}} </span>
      <p> {{paragrath}} </p>
    </div>
  </article>
</template>

<script lang="ts">
  export default{
    props:{
      img: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      position:{
        type: String, 
        required: true
      },
      paragrath: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .experienceCard{
    border-radius: 2rem;
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    align-items: center;
    padding: 2.5rem;
    transition: all 0.3s;
    background-color: var(--white-base);

    &:hover{
      background-color: var(--white-medium);
    }

    .textContainer{
      display: flex;
      flex-direction: column;
      gap:0.5rem;

      h3{
        font-size: 22px;
        font-weight: 700;
        line-height: 33px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--dark-base);
      }

      span{
        font-style: italic;
        font-size: 16px;
        font-style: italic;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--dark-base);
      }

      p{
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--dark-base);
      }
    }
  }


</style>