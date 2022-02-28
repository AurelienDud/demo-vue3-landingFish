<script setup lang="ts">
</script>

<template>
  <p :class="$style.title">
    Discovering the Bluefin fish
  </p>
</template>

<style module lang="scss">
  .title {
    padding: calc(var(--base-padding) * 1.5);
    margin: auto auto 0;
    font-family: var(--font-secondary);
    text-align: center;
    font-size: 1.5rem;
  }
</style>
