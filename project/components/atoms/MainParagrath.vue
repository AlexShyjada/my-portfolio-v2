<template>
  <p class="mainParagrath">
    <slot/>
  </p>
</template>

<style lang="scss" scoped>
  .mainParagrath {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--dark-base);
  }
</style>