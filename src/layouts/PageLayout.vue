<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { key} from '../store'
  import View from './ViewLayout.vue'

  const store = useStore(key)

  const heroActiveIndex = computed(() => {
    switch(store.getters.currentView) {
      case 'first':
        return 1
      case 'second':
        return 2
      case 'third':
        return 3
      default:
        return ''
    }
  })
</script>

<template>
  <div :class="[$style.hero, $style['heroPos' + heroActiveIndex]]">
    <img :class="$style.heroImg" src="../assets/images/bluefin5.png" alt=""/>
  </div>

  <View name="first">
    <div :class="$style.firstContainer">
      <div :class="$style.firstHeader">
        <slot name="first-header"></slot>
      </div>
      <div :class="$style.firstContent">
        <slot name="first-content"></slot>
      </div>
    </div>
  </View>

  <View name="second">
    <div :class="$style.secondContent">
      <slot name="second-content"></slot>
    </div>
  </View>

  <View name="third">
    <div :class="$style.thirdContainer">
      <div :class="$style.thirdSide">
        <div :class="$style.thirdCard">
          <slot name="third-card"></slot>
        </div>
      </div>
      <div :class="$style.thirdMain">
        <slot name="third-content"></slot>
      </div>
    </div>
  </View>
</template>

<style module lang="scss">
  @use '../assets/styles/features.scss' as *;

  /* ---------- */
  /* Base hero */
  /* ---------- */
  .hero {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--zindex-hero);
    width: 90vmin;
    height: 50%;
    max-height: 50vmin;
    transform-origin: center;
    transform: translate(100vw, 20vh) scale(0.5);
    transition-property: all;
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
  }
  .heroImg {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  /* ---------- */
  /* First view */
  /* ---------- */
  .heroPos1 {
    transform: translate(calc(50vw - 50%), calc(50vh - 50%)) scale(1);
  }

  .firstContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    &:before {
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
  }

  .firstHeader {
    text-align: center;
    display: flex;
    height: 15vh;
    flex-basis: 15vh;
  }

  .firstContent {
    height: 25vh;
    flex-basis: 25vh;
    display: flex;
  }

  /* ---------- */
  /* Second view */
  /* ---------- */
  .heroPos2 {
    transform: translate(-55%, calc(40vh - 25%)) rotate(85deg) scale(1.2);
    @include media-phone {
      transform: translate(-60%, calc(40vh - 55%)) rotate(85deg) scale(1);
    }
  }

  .secondContent {
    width: calc(100vw - 50vmin);
    transform: translateX(25vmin);
    @include media-phone {
      width: calc(100vw - 20vmin);
      transform: translateX(10vmin);
    }
  }

  /* ---------- */
  /* Third view */
  /* ---------- */
  .heroPos3 {
    transform: translate(calc(25vw - 50%), calc(50vh - 50%)) scale(0.5);
    @include media-portrait {
      transition-delay: 0.6s;
      transform: translate(calc(50vw - 50%), calc(25vh - 50%)) scale(0.5);
    }
  }

  .thirdContainer {
    display: flex;
    flex-direction: row;
    width: 100vw;
    min-height: 100vh;
    @include media-portrait {
      flex-direction: column;
    }
  }

  .thirdMain,
  .thirdSide {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    @include media-portrait {
      width: 100%;
      min-height: 50vh;
    }
  }

  .thirdMain {
    @include media-landscape {
      max-width: calc(var(--max-container-width) / 2);
    }
  }

  .thirdSide {
    align-items: center;
  }

  .thirdCard {
    width: 60vmin; 
    height: 60vmin;
    @include media-portrait {
      height: 40vmax;
    }
  }
</style>

