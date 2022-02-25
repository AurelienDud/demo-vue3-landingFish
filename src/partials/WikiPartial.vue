<script setup lang="ts">
  import { ref, Transition } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'
  import imageValue1 from '../assets/images/bluefin2.png'
  import imageValue2 from '../assets/images/bluefin7.png'
  import imageValue3 from '../assets/images/bluefin8.png'

  // constants
  const PAR_COUNT = 3
  const FETCH_TIMER = 1500

  // store
  const store = useStore(key)
  
  // states
  const texto = ref<string>()
  const texts = ref<string[]>()
  const values = ref([
    {src: imageValue2, label: 'up to 680 kg'},
    {src: imageValue1, label: 'Thunnus thynnus'},
    {src: imageValue3, label: 'up to 2.55 m'},
  ])

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
  <div class="wiki-container">
    
    <div class="wiki-text">
      <Transition name="replace">
        <div v-if="texts" key="final">
          <p v-for="text in texts" class="wiki-text-par">
            {{ text }}
          </p>
        </div>
        <div v-else key="placeholder">
          <p v-for="_ in PAR_COUNT" class="wiki-text-par placeholder placeholder-wiki"></p>
        </div>
      </Transition>
    </div>

    <div class="wiki-values">
      <div class="wiki-value" v-for="{src, label} in values">
        <img 
          class="wiki-value-img"
          :src="src" 
          alt="" 
        />
        <p class="wiki-value-label">
          {{ label }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wiki-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: var(--max-container-width);
    margin: 0 auto;
    padding: var(--base-padding);
  }

  .wiki-text {
    display: block;
    font-size: 1.1rem;
    font-weight: lighter;
    width: 100%;
    margin: 0 auto 2rem;
  }

  .wiki-text-par {
    margin: 0 auto 1rem;
  }

  .wiki-values {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .wiki-value {
    max-width: 6rem;
    margin: 1rem;
  }
  .wiki-value-img {
    display: block;
    width: 100%;
    height: 4rem;
    object-fit: contain;
  }
  .wiki-value-label {
    margin: 0.5rem 0 0;
    text-align: center;
    font-size: 0.8rem;
    font-weight: lighter;
    opacity: 0.7;
  }

  .placeholder-wiki {
    height: 8rem;
  }
  @media (max-width: var(--breakpoint-mobile)) {
   .placeholder-wiki {
      height: 12rem;
    } 
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
