<script setup lang="ts">
defineProps<{ 
  title: string,
  text: string
}>();
</script>

<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <div class="card__text">{{ text }}</div>
  </div>
</template>

<style scoped lang="postcss">
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
