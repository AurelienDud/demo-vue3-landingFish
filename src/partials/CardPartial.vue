<script setup lang="ts">
</script>

<template>
  <div class="card-ctn">
    <div class="card"></div>
  </div>
</template>

<style scoped>
  .card-ctn {
    width: 100%;
    height: 100%;
    perspective: 600px;
  }
  .card {
    width: 100%;
    height: 100%;
    transform: rotateX(15deg);
    background: var(--bg);
    border-radius: 1rem;
    box-shadow: 20px 20px 60px #002a4a,
             -20px -20px 60px #004a82;
  }
</style>
