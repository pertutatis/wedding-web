<script setup lang="ts">
import Header from "./components/Header.vue";
import CountDown from "./components/CountDown.vue"
import Schedule from "./components/Schedule.vue"
import HowToArrive from "./components/HowToArrive.vue"
import Reservation from "./components/Reservation.vue"
import Contact from "./components/Contact.vue"
import Disclaimer from "./components/Disclaimer.vue"
import Footer from "./components/Footer.vue"

import { onBeforeMount } from 'vue'
import { useAppStore } from './stores/app'

const store = useAppStore()

onBeforeMount(async () => {
  store.getContent()
})

</script>

<template>
  <Header />
  <CountDown />
  <Schedule />
  <HowToArrive />
  <Reservation />
  <Contact />
  <Disclaimer />
  <Footer />

</template>

<style lang="postcss">
@import url("./assets/reset.css");
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Playfair+Display:wght@400;500;700&display=swap');

:root {
  --primary-font: "Playfair Display", arial, serif;
  --secondary-font: "Montserrat", baskerville, arial, sans-serif;
  --primary-color: #274035;
  --text-color: #706e67;
  --background-color: #f3f2f1;
  --error-color: #b13b3b;
}

body {
  background-color: var(--background-color);
  font-family: var(--primary-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

.section {
  margin-top: 48px;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  @media (min-width: 1024px) {
    margin-top: 104px;
    margin-bottom: 104px;
  }
}

.section__wrapper {
  max-width: 1440px;
  margin: auto;
  padding-left: 24px;
  padding-right: 24px;
  

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (min-width: 1024px) {
    padding-left: 2.632rem;
    padding-right: 2.632rem;
  }
}

/* ========================================
  FORMS 
  ========================================*/

.form__response {
  font-family: var(--primary-font);
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 24px;
  }
}

.form__response--error {
  color: var(--error-color);
}

.form__label {
  display: block;
  font-family: var(--primary-font);
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px 0;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid var(--text-color);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &:focus {
    border-bottom: 1px solid black;
    outline: none;
  }

  &::placeholder {
    color: gray;
  }
}

textarea {
  display: block;
  min-height: 50px;
}

input[type="checkbox"],
input[type="radio"] {
  width: 10px;
  height: 10px;
  margin-right: 8px;
}

input[type="submit"] {
  display: block;
  padding: 16px 56px;
  margin: 0 auto;
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: 500;
  color: var(--primary-color);
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: var(--primary-color);
  }

  &:disabled {
    opacity: .5;
  }
}

</style>
