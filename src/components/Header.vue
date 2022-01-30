<script setup lang="ts"></script>

<template>
  <section class="section header">
    <div class="section__wrapper header__container">
      <img class="header__image" alt="wedding brand" src="../assets/leave.svg" />
      <h1 class="header__title">ANA / DIEGO</h1>
      <h2 class="header__subtitle">Huerto Bonet · 11/06/2022 · 12:30</h2>
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
  text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
}

.header__title {
  position: relative;
  z-index: 1;
  color: var(--primary-color);
  font-family: var(--primary-font);
  font-size: 42px;
  font-weight: bold;

  @media (min-width: 768px) {
    margin-left: 16.667%;
    font-size: 84px;
  }
}

.header__subtitle {
  position: relative;
  z-index: 1;
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: 300;
  color: var(--text-color);

  @media (min-width: 768px) {
    margin-left: 16.667%;
    padding-left: 50px;
    font-size: 26px;
  }

  @media (min-width: 1024px) {
    padding-left: 320px;
  }

}

.header__image {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  max-width: 40%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    top: 50px;
    left: 8%;
    transform: translateY(-50%);
  }

  @media (min-width: 1024px) {
    top: -100px;
    left: 13.5%;
    transform: translateY(0%);
  }
}
</style>
