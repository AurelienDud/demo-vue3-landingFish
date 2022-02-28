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

<style lang="scss">
  /* use custom SCSS features */
  @use './assets/styles/features.scss' as *;

  /* fonts */
  @import url('https://fonts.googleapis.com/css2?family=Oleo+Script&family=Work+Sans:wght@400;500&display=swap');

  /* custom tiny CSS reset */
  @import url('./assets/styles/reset.scss');

  /* vue animations */
  @import url('./assets/styles/vue_animations.scss');

  /* theme */
  @import url('./assets/styles/theme.scss');

  /* app */
  html {
    box-sizing: border-box;
    line-height: var(--base-line-height, 1);
    font-size: var(--base-font-size, 16px);
    font-family: var(--font-primary, inherit);
    color: var(--color, white);
  }

  body {
    overflow-x: hidden;
    background: var(--bg-primary-start, blue);
    background-image: linear-gradient(148deg, var(--bg-primary-start) 0%, var(--bg-primary-end) 100%);
  }  

  button, 
  input[type="button"], 
  input[type="submit"] {
    padding: var(--base-padding);
    line-height: 1;
    border-radius: 0.75rem;
    font-size: 1.1rem;
    color: var(--color);
    background: linear-gradient(145deg, #00000015, #FFFFFF15);
    box-shadow:  7px 7px 15px #00000010,
                -7px -7px 15px #FFFFFF10;
    cursor: pointer;
  }
</style>
