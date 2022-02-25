<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { key} from '../store'
  import View from './ViewLayout.vue'

  const store = useStore(key)

  const heroPositionClassName = computed(() => {
    switch(store.getters.currentView) {
      case 'first':
        return 'hero-pos1'
      case 'second':
        return 'hero-pos2'
      case 'third':
        return 'hero-pos3'
      default:
        return ''
    }
  })
</script>

<template>
  <div class="hero" :class="heroPositionClassName">
    <img src="../assets/images/bluefin5.png" alt=""/>
  </div>

  <View name="first">
    <div class="first-container">
      <div class="first-header">
        <slot name="first-header"></slot>
      </div>
      <div class="first-content">
        <slot name="first-content"></slot>
      </div>
    </div>
  </View>

  <View name="second">
    <div class="second-content">
      <slot name="second-content"></slot>
    </div>
  </View>

  <View name="third">
    <div class="third-container">
      <div class="third-side">
        <div class="third-card">
          <slot name="third-card"></slot>
        </div>
      </div>
      <div class="third-main">
        <slot name="third-content"></slot>
      </div>
    </div>
  </View>
</template>

<style scoped>
  /* ---------- */
  /* Base hero */
  /* ---------- */
  .hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--zindex-hero);
    width: 90vmin;
    height: calc(var(--hero-ratio) * 100%);
    max-height: 50vmin;
    transform-origin: center;
    transform: translate(100vw, 20vh) scale(0.5);
    transition-property: all;
    transition-duration: 1.2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
  .hero img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  /* ---------- */
  /* First view */
  /* ---------- */
  .hero-pos1 {
    transform: translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1);
  }

  .first-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    min-height: 100vh;
  }

  .first-container:before {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex: 1;
    background-image: url('../assets/images/effect.png');
    background-repeat: no-repeat;
    background-size: 60vmin;
    background-position: center;
    filter: blur(3px) opacity(0.3) hue-rotate(301deg);
  }

  .first-header {
    text-align: center;
    display: flex;
    height: 15vh;
    flex-basis: 15vh;
  }

  .first-content {
    height: 25vh;
    flex-basis: 25vh;
    display: flex;
  }

  /* ---------- */
  /* Second view */
  /* ---------- */
  .hero-pos2 {
    /* width: 120vmin; */
    /* height: calc(var(--hero-ratio) * 120%); */
    transform: translate(-55%, calc(40vh - 25%)) rotate(85deg) scale(1.2);
  }

  .second-content {
    width: calc(100vw - 50vmin);
    height: 100%;
    min-height: 100vh;  
    transform: translateX(25vmin)
  }
  @media (orientation: portrait) {
    .second-content {
      width: calc(100vw - 25vmin);
    }
  }

  /* ---------- */
  /* Third view */
  /* ---------- */
  .hero-pos3 {
    transform: translate(calc(25vw - 50%), calc(50vh - 50%)) scale(0.5);
  }
  @media (orientation: portrait) {
    .hero-pos3 {
      transition-delay: 0.6s;
      transform: translate(calc(50vw - 50%), calc(25vh - 50%)) scale(0.5);
    }
  }

  .third-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
    min-height: 100vh;
  }
  @media (orientation: portrait) {
    .third-container {
      flex-direction: column;
    }
  }

  .third-main,
  .third-side {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
  @media (orientation: portrait) {
    .third-main,
    .third-side {
      width: 100%;
      min-height: 50vh;
    }
  }

  .third-main {
    max-width: calc(var(--max-container-width) / 2);
  }

  .third-side {
    align-items: center;
  }

  .third-card {
    width: 60vmin; 
    height: 60vmin;
  }
</style>

