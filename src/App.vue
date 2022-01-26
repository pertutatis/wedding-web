<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
import CountDown from "./components/CountDown.vue"
import Schedule from "./components/Schedule.vue"
import HowToArrive from "./components/HowToArrive.vue"
import Reservation from "./components/Reservation.vue"
import Contact from "./components/Contact.vue"
import Disclaimer from "./components/Disclaimer.vue"
import Footer from "./components/Footer.vue"
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
}

body {
  background-color: var(--background-color);
  font-family: var(--primary-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
}

.section {
  margin-top: 46px;
  margin-bottom: 46px;
}

.section__wrapper {
  max-width: 1440px;
  margin: auto;
  padding-left: 24px;
  padding-right: 24px;
  

  @media (min-width: 768px) {
    padding-left: 2.632rem;
    padding-right: 2.632rem;
  }
}
</style>
