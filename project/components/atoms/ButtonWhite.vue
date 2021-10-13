<template>
  <button class="btnWhite">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
  .btnWhite {
    padding: 1.5rem 2rem;
    display: block;
    border-radius: 0.5rem;
    border: 1px solid rgba(9, 9, 24, 0.1);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--dark-base);
    background-color: #f7f7f7;
    transition: 0.3s;
    color: var(--dark-base);
    a{
      display: block;
      color: var(--dark-base);
      background: transparent;
    }
  }

  .btnWhite:hover {
    filter: brightness(0.9);
    border: 1px solid var(--dark-base);
  }
</style>