<template>
  <button class="btnGrad">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
  .btnGrad{
    color: var(--white-base);
    font-size: 1.4rem;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    background: rgb(43,214,123);
    background: linear-gradient(45deg, rgba(43,214,123,1) 0%, rgba(64,112,244,1) 100%);
    transition: 0.3s;
  }
  .btnGrad:hover{
    filter: contrast(120%);
  }
</style>