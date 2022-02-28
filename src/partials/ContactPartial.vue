<script setup lang="ts">
  import { ref } from 'vue'
  
  const amount = ref('') 

  function handleSubmit(event:Event) {
    event.preventDefault()
  }
</script>

<template>
  <div :class="$style.contactContainer">
    <h2 :class="$style.contactTitle">
      Support a Bluefin!
    </h2>
    <p :class="$style.contactSubtitle">
      Your donation will help in the conservation of Bluefin tuna in the oceans
    </p>
    <form @submit="handleSubmit($event)" :class="$style.contactForm">
      <fieldset :class="$style.contactFieldGroup">
        <datalist id="contact-field-money">
          <option value="10" />
          <option value="100" />
          <option value="250" />
          <option value="1000" />
        </datalist>
        <input 
          :class="[$style.contactFieldGroupItem, $style.contactFieldWritable]"
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
          :class="[$style.contactFieldGroupItem, $style.contactFieldAction]"
          type="submit" 
          value="Donate" 
        />
      </fieldset>
    </form>
  </div>
</template>

<style module lang="scss">
  @use '../assets/styles/features.scss' as *;

  .contactContainer {
    padding: var(--base-padding);
  }
  
  .contactTitle {
    font-family: var(--font-secondary);
    font-size: 2rem;
    margin-bottom: 0.75rem;
    @include media-phone {
      text-align: center;
    }
  }

  .contactSubtitle {
    font-weight: bolder;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .contactFieldGroup {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    &Item + &Item {
      margin-left: 1rem;
    }
  }

  .contactFieldWritable,
  .contactFieldAction {
    padding: var(--base-padding); 
    font-size: 1.1rem;
    line-height: 1;
    border-radius: 0.75rem;
  }

  .contactFieldWritable {
    flex: 1;
    width: 100%;
    border-radius: 0.75rem;
    color: var(--color);
    background: transparent;
    background: var(--bg-primary-end);
    box-shadow: inset 7px 7px 15px #003157,
                inset -7px -7px 15px #004375;
  }

  .contactFieldAction {
    min-width: 6rem;
  }
</style>
