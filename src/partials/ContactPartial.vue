<script setup lang="ts">
  import { ref } from 'vue'
  
  const amount = ref('') 

  function handleSubmit(event:Event) {
    event.preventDefault()
  }
</script>

<template>
  <div class="contact-container">
    <h2 class="contact-title">
      Support a Bluefin!
    </h2>
    <p class="contact-subtitle">
      Your donation will help in the conservation of Bluefin tuna in the oceans
    </p>
    <form @submit="handleSubmit($event)" class="contact-form">
      <fieldset class="contact-field-group">
        <datalist id="contact-field-money">
          <option value="10" />
          <option value="100" />
          <option value="250" />
          <option value="1000" />
        </datalist>
        <input 
          class="contact-field-group-item contact-field-writable"
          type="number" 
          min="1"
          step="1"
          v-model="amount" 
          placeholder="__ €"
          list="contact-field-money" 
          pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
          required
        /> 
        <input 
          class="contact-field-group-item contact-field-action"
          type="submit" 
          value="Donate" 
        />
      </fieldset>
    </form>
  </div>
</template>

<style scoped>
  .contact-container {
    padding: var(--base-padding);
  }

  .contact-title {
    font-family: var(--font-secondary);
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .contact-subtitle {
    font-weight: bolder;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  ::placeholder {
    color: var(--color);
    font-size: 1.1rem;
  }

  .contact-field-group {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  .contact-field-group-item + .contact-field-group-item {
    margin-left: 1rem;
  }

  .contact-field-writable,
  .contact-field-action {
    font-size: 1.1rem;
    padding: calc(var(--base-padding) * 1);
    line-height: 1;
    border-radius: 0.75rem;
  }

  .contact-field-writable {
    flex: 1;
    border-radius: 0.75rem;
    color: var(--color);
    background: transparent;
    background: var(--bg_variant_2);
    box-shadow: inset 7px 7px 15px #003157,
                inset -7px -7px 15px #004375;
  }

  .contact-field-action {
    min-width: 6rem;
    cursor: pointer;
    border-radius: 0.75rem;
    color: var(--color);
    background: linear-gradient(145deg, #003e6a, #004a7e);
    box-shadow:  7px 7px 15px #003f6b,
                -7px -7px 15px #004b81;
  }

  
</style>
