<script setup lang="ts">
import { useAppStore } from '../stores/app'
import SongForm from './SongForm.vue'

const store = useAppStore()
</script>

<template>
  <section class="section form" v-if="store.reservation">
    <div class="section__wrapper form__wrapper">
      <div class="form__head">
        <h3 class="form__title">{{ store.reservation.title }}</h3>
      </div>
      <div class="form__form">
        <p class="form__text">
          {{ store.reservation.text }}
        </p>
        <SongForm />
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.form__wrapper {
  position: relative;
}

.form__head {
  position: relative;
  padding: 24px;
  background-image: url(../assets/bg.jpg);
  background-image: url(../assets/bg.webp);
  background-size: cover;

  @media (min-width: 1024px) {
    padding-bottom: 184px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
  }
}

.form__form {
  position: relative;
  z-index: 2;
  background-color: var(--background-color);

  @media (min-width: 1024px) {
    max-width: 80%;
    margin: -160px auto 0;
    padding-left: 80px;
    padding-right: 80px;
  }
}

.form__title {
  position: relative;
  width: 100%;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
}

.form__text {
  margin-bottom: 24px;
  padding-top: 24px;
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
