<script setup lang="ts">
  import { ref, Transition } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'
  import imageValue1 from '../assets/images/bluefin2.png'
  import imageValue2 from '../assets/images/bluefin7.png'
  import imageValue3 from '../assets/images/bluefin8.png'

  // constants
  const PAR_COUNT = 3
  const FETCH_TIMER = 1000

  // store
  const store = useStore(key)
  
  // states
  const isTextLimited = ref(true)
  const texto = ref<string>()
  const texts = ref<string[]>()
  const values = ref([
    {src: imageValue2, label: 'up to 680 kg'},
    {src: imageValue1, label: 'Thunnus thynnus'},
    {src: imageValue3, label: 'up to 2.55 m'},
  ])

  function handleTextLimiter() {
    isTextLimited.value = false 
  }

  // fetch data
  async function getData () {
    if (!texts.value) {
      return fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${PAR_COUNT}&format=text`)
        .then(data => data.text())
        .then(dataText => {
          setTimeout(() => {
            texts.value = dataText.split("\n").filter(v => v.length > 0)
            texto.value = dataText
          }, FETCH_TIMER)
        })
    }
  }   

  // watch store changes
  store.watch(() => store.getters.currentView, val => (val === 'second') && getData())
</script>

<template>
  <div :class="$style.wikiContainer">
    <div :class="$style.wikiText">
      <div :class="{[$style.wikiTextLimiter]: isTextLimited}">
        <Transition name="replace">
          <div v-if="texts" key="final">
            <p v-for="text in texts" :class="$style.wikiTextPar">
              {{ text }}
            </p>
          </div>
          <div v-else key="placeholder">
            <p v-for="_ in PAR_COUNT" :class="[$style.wikiTextPar, $style.placeholder]"></p>
          </div>
        </Transition>>
      </div>
      <button v-if="isTextLimited" :class="$style.wikiTextLimiterButton" @click="handleTextLimiter">
        Show
      </button>
    </div>

    <div :class="$style.wikiValues">
      <div :class="$style.wikiValue" v-for="{src, label} in values">
        <img 
          :class="$style.wikiValueImg"
          :src="src" 
          alt="" 
        />
        <p :class="$style.wikiValueLabel">
          {{ label }}
        </p>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
  @use '../assets/styles/features.scss' as *;

  .wikiContainer {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: var(--max-container-width);
    margin: 0 auto;
    padding: var(--base-padding);
  }

  .wikiText {
    display: block;
    font-size: 1.1rem;
    font-weight: lighter;
    width: 100%;
    margin: 0 auto 2rem;
    &Par {
      margin: 0 auto 1rem;
    }
  }

  .wikiValues {
    display: flex;  
    @include media-desktop {
      flex-direction: row;
      justify-content: space-around;
    }
    @include media-phone {
      flex-direction: column;
      align-items: center;
    }
  }

  .wikiValue {
    margin: 1rem;
    @include media-desktop {
      max-width: 6rem;
    }

    &Img {
      display: block;
      width: 100%;
      object-fit: contain;
      @include media-desktop {
        height: 4rem;
      }
    }
    
    &Label {
      margin: 0.5rem 0 0;
      text-align: center;
      font-size: 0.8rem;
      font-weight: lighter;
      opacity: 0.7;
    }
  }

  /* placeholder */
  .placeholder {
    display: inline-block;
    width: 100%;
    background: var(--bg-primary-end);
    opacity: 0.6;
    animation:placeholderEffect 2s alternate infinite;
    @include media-desktop {
      height: 8rem;
    }
    @include media-phone {
      height: 12rem;
    }
  }

  @keyframes placeholderEffect{
    from {
      opacity: 0.6
    }
    to {
      opacity: 0.3
    }
  }

  .wikiTextLimiter {
    @include media-phone {
      position: relative;
      max-height: 60vh;
      overflow: hidden;
    }
  }
  .wikiTextLimiterButton {
    @include media-desktop {
      display: none;
    }
    margin: 1rem auto;
  }
</style>
