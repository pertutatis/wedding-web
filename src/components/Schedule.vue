<script setup lang="ts">
import { useAppStore } from '../stores/app'
import Card from "../ui/Card.vue"

const store = useAppStore()
</script>

<template>
  <section class="section">
    <div class="section__wrapper schedule">

      <div class="schedule__column schedule__column--grid">
        <Card v-if="store.scheduleCeremony" :is-small="true" :title="store.scheduleCeremony.title" :text="store.scheduleCeremony.text" />
        <Card v-if="store.scheduleCocktail" :is-small="true" :title="store.scheduleCocktail.title" :text="store.scheduleCocktail.text" />
        <Card v-if="store.scheduleParty" :is-small="true" :title="store.scheduleParty.title" :text="store.scheduleParty.text" />
        <Card v-if="store.scheduleResopon" :is-small="true" :title="store.scheduleResopon.title" :text="store.scheduleResopon.text" />
      </div>

      <div class="schedule__column" v-if="store.schedule">
        <h3 class="schedule__title">{{ store.schedule.title }}</h3>
        <p class="schedule__text">{{ store.schedule.text }}</p>
      </div>
      
    </div>
  </section>
</template>

<style scoped lang="postcss">
.schedule {
  margin-top: 46px;
  margin-bottom: 46px;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  } 
}

.schedule__column {
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 16px;
  }
}
.schedule__column--grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    column-gap: 32px;
    row-gap: 32px;
  }
}

.schedule__title {
  margin-bottom: 24px;
  font-family: var(--primary-font);
  font-size: 22px;
  font-weight: bold;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 28px;
  }
}

.schedule__text {
  margin-bottom: 16px;
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
