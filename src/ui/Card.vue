<script setup lang="ts">
interface Props{ 
  title: string,
  text: string,
  isSmall?: boolean
};

withDefaults(defineProps<Props>(), {
  isSmall: false,
})
</script>

<template>
  <div class="card" :class="{'card--small-card' : isSmall}" data-test-id="card">
    <div class="card__title" data-test-id="card-title">{{ title }}</div>
    <div class="card__text" data-test-id="card-text">{{ text }}</div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  position: relative;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  background-image: url(../assets/leaf.svg);
  background-size: 200px auto;
  background-repeat: no-repeat;
  background-position: 10% 50%;

  &:before {
    content: '';
    background-color: #fff;
    opacity: .6;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}

.card--small-card {
   background-size: 130px auto;
}

.card__title {
  position: relative;
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
  position: relative;
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
