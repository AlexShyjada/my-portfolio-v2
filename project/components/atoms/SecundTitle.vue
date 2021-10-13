<template>
  <h2 class="secundTitle">
    <slot/>
  </h2>
</template>

<style lang="scss" scoped>
  .secundTitle{
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--dark-100);
  }
</style>