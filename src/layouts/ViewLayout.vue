<script setup lang="ts">
  import { ref, onMounted, onUnmounted, onActivated } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store'

  const store = useStore(key)
  const elRef = ref<HTMLElement>()

  const props = defineProps({
    name: {
      type: String,
      required: true
    }
  })

  // check is the component is visible into the viewport
  function checkVisibility () {
    if (!elRef.value) return 

    const componentRec = elRef.value.getBoundingClientRect()
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight  
    const seesaw = viewportHeight * 0.5
    const isVisible = (componentRec.top < seesaw) && (componentRec.top + componentRec.height >= seesaw)
  
    store.commit('updatePageVisibility', { pageName: props.name, isVisible })
  }

  // run services when ref element is rendered first
  onMounted(() => {
    window.addEventListener('scroll', checkVisibility)
    // hack: 
    // the current page detection doesn't work well on production
    // problably cause the drawing time in the browser
    // delaying a bit that detection is a simple workarount 
    setTimeout(() => checkVisibility(), 300)
  })

  onActivated(() => {
    console.log('onActivated')
  })


  // unmount services
  onUnmounted(() => {
    window.removeEventListener('scroll', checkVisibility)
  })

  // expose values to the template
  defineExpose({ elRef })
</script>

<template>
  <div ref="elRef">
    <slot></slot>
  </div>
</template>

<style module>
</style>
