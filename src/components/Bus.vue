<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '../stores/app'
import BusForm from './BusForm.vue'

const store = useAppStore()

let popupIsOpened = ref<boolean>(false)
</script>

<template>
  <section class="section" v-if="store.bus">
    <div class="section__wrapper content">

        <h4 class="content__title">{{ store.bus.title }}</h4>
        <p class="content__text">{{ store.bus.text }}</p>
        <button class="content__link" @click.prevent="popupIsOpened = true" v-text="store.bus.link_text" />
       
    </div>
  </section>


  <BusForm
    v-show="popupIsOpened"
    @close="popupIsOpened = false"
  />
</template>

<style scoped lang="postcss">

.content {
  text-align: center;
  max-width: 960px;
}

.content__title {
  margin-bottom: 24px;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 28px;
  }
}

.content__text {
  margin-bottom: 8px;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

.content__link {
  margin-bottom: 8px;
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.44;
  color: var(--primary-color);
  text-decoration: underline;
  cursor: pointer;
}
</style>
