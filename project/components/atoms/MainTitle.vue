<template>
  <h1 class="mainTitle">
    <slot/>
  </h1>
</template>

<style lang="scss" scoped>
  .mainTitle{
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 69px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--dark-base);
  }
</style>