<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
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
    const seesaw = (viewportHeight * 0.7)
    const isVisible = (componentRec.top < seesaw) && (componentRec.top + componentRec.height >= seesaw)
  
    store.commit('updatePageVisibility', { pageName: props.name, isVisible })
  }

  // run services when ref element is rendered first
  onMounted(() => {
    checkVisibility()
    window.addEventListener('scroll', checkVisibility)
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

<style scoped>
</style>
