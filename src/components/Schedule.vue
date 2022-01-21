<script setup lang="ts">
import Card from "./Card.vue"
</script>

<template>
  <section class="section">
    <div class="section__wrapper schedule">

      <div class="schedule__column schedule__column--grid">
        <Card title="Ceremonia" text ="12:30" />
        <Card title="cocktail" text ="13:30" />
        <Card title="Fiesta" text ="17:00" />
        <Card title="Resopón" text ="21:00" />
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
  display: flex;
}

.schedule__column {
  width: 50%;
  padding: 0 16px;
}
.schedule__column--grid {
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 32px;
  row-gap: 32px;
}

.schedule__title {
  margin-bottom: 24px;
  font-family: var(--primary-font);
  font-size: 28px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--primary-color);
}

.schedule__text {
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  line-height: 1.44;
  color: var(--text-color);
}

.card {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  text-align: center;
}

.card__title {
  margin-bottom: 8px;
  font-family: var(--primary-font);
  font-size: 22px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--primary-color);
}

.card__text {
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: var(--text-color);
}
</style>
