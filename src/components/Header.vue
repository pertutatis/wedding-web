<script setup lang="ts"></script>

<template>
  <section class="section header">
    <div class="section__wrapper header__container">
      <img class="header__image" alt="wedding brand" src="../assets/leave.svg" />
      <h1 class="header__title">ANA / DIEGO</h1>
      <h2 class="header__subtitle">Huerto Bonet · 12/06/2022 · 12:45</h2>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.header {
  padding-top: 120px;
  padding-bottom: 120px;
}

.header__container {
  position: relative;
}

.header__title {
  font-family: var(--primary-font);
  font-size: 84px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--primary-color);
  margin-left: 16.667%;
  z-index: 1;
  position: relative;
}

.header__subtitle {
  font-family: var(--secondary-font);
  font-size: 26px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--text-color);
  margin-left: 16.667%;
  padding-left: 320px;
  z-index: 1;
  position: relative;
}

.header__image {
  position: absolute;
  top: -100px;
  left: 13.5%;
  /* transform: translateY(-50%); */
  z-index: 0;
}
</style>
