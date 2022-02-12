<script setup lang="ts">
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <section class="section">
    <div class="section__wrapper content" v-if="store.bankAccount">

        <p class="content__text">{{ store.bankAccount.text }}</p>
        <p class="content__text">{{ store.bankAccount.account }}</p>
       
    </div>
  </section>
</template>

<style scoped lang="postcss">

.content {
  text-align: center;
  max-width: 960px;
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
</style>
