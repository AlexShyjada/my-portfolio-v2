<template>
  <div class="titleGroup">
    <Description>{{description}}</Description>
    <SecundTitle>{{title}}</SecundTitle>
  </div>
</template>

<script lang="ts">
  export default{
    props: {
      title: { type: String, required: true},
      description:{ type: String, required: true }
    }
  }
</script>

<style scoped>
  .titleGroup{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>