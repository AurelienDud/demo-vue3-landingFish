<script setup lang="ts">
  import Page from './layouts/PageLayout.vue'
  import Header from './partials/HeaderPartial.vue'
  import Title from './partials/TitlePartial.vue'
  import Wiki from './partials/WikiPartial.vue'
  import Card from './partials/CardPartial.vue'
  import Contact from './partials/ContactPartial.vue'
</script>

<template>
  <Page>
    <template v-slot:first-header>
      <Header />
    </template>

    <template v-slot:first-content>
      <Title />
    </template>
    
    <template v-slot:second-content>
      <Wiki />
    </template>

    <template v-slot:third-card>
      <Card />
    </template>

    <template v-slot:third-content>
      <Contact />
    </template>
  </Page>
</template>

<style>
  /* fonts */
  @import url('https://fonts.googleapis.com/css2?family=Oleo+Script&family=Work+Sans:wght@400;500&display=swap');

  /* variables */
  :root {
    --zindex-hero: 100;
    --max-container-width: 870px;
    --base-padding: 1rem;
    --breakpoint-mobile: 600px;
    --color: #b8d1e3;
    --bg: #cfdae2;
    --bg_variant_1: #0075bd;
    --bg_variant_2: #003a66; 
    --hero-ratio: 0.5;
    --font-primary: 'Work Sans', sans-serif;
    --font-secondary: 'Oleo Script', cursive;
  }

  /* reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  form, fieldset, 
  input, textarea,
  input:hover, textarea:hover,
  input:focus, textarea:focus {
    display: block;
    border: unset;
    outline: unset;
  } 

  /* base */
  body {
    box-sizing: border-box;
    overflow-x: hidden;
    color: var(--color);
    font-size: 16px;
    line-height: 1.5;
    font-family: var(--font-primary);
    background: var(--bg_variant_1);
    background-size: cover;
    background-image: linear-gradient(148deg, var(--bg_variant_1) 0%, var(--bg_variant_2) 100%);
  } 

  /* placeholder */
  .placeholder {
    display: inline-block;
    width: 100%;
    background: var(--bg_variant_2);
    opacity: 0.6;
    animation:placeholderEffect 2s alternate infinite;
  }

  @keyframes placeholderEffect{
    from {
      opacity: 0.6
    }
    to {
      opacity: 0.3
    }
  }

  /* vue transition */
  .replace-enter-active {
    transition: opacity 0.8s ease-out;
  }

  .replace-enter-from {
    opacity: 0;
  }
  
  .replace-leave-to {
    display: none;
  }


</style>
