<template>
  <span class="description">
    <slot/>
  </span>
</template>

<style scoped>
  .description{
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.2em;
    text-align: left;
    text-transform: uppercase;
    color: var(--dark-base);
  }
</style>