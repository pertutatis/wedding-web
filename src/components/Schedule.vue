<script setup lang="ts">
import Card from "../ui/Card.vue"
</script>

<template>
  <section class="section">
    <div class="section__wrapper schedule">

      <div class="schedule__column schedule__column--grid">
        <Card :is-small="true" title="Ceremonia" text ="12:30" />
        <Card :is-small="true" title="cocktail" text ="13:30" />
        <Card :is-small="true" title="Fiesta" text ="17:00" />
        <Card :is-small="true" title="Resopón" text ="21:00" />
      </div>

      <div class="schedule__column">
        <h4 class="schedule__title">Let me introduce you this amazing wedding.</h4>
        <p class="schedule__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
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
