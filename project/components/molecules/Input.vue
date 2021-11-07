<template>
  <div class="inputGroup">
    <label>
      {{label}}
      <input 
        :type="type"
        :placeholder="placeholder"
        :value="value"
      >
    </label>
  </div>
</template>

<script lang="ts">
export default {
  props:{
    label : { type: String, required: true},
    type : { type: String, required: true},
    placeholder : { type: String, required: true},
    value : { type: String, required: true}
  }
}
</script>

<style lang=scss scoped>
  .inputGroup{
    label{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    input{
      border-radius: 0.5rem;
      padding: 1.7rem 2.5rem;
      background-color: var(--white-base);
    }
  }
</style>