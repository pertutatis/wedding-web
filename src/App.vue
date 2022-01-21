<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
</template>

<style lang="postcss">
:root {
  --primary-font: "Playfair Display", baskerville, serif;
  --secondary-font: "Montserrat", helvetica, arial, sans-serif;
  --primary-color: #274035;
  --text-color: #706e67;
  --background-color: #f3f2f1;
}

body {
  background-color: var(--background-color);
}

#app {
  font-family: var(--primary-font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  margin-top: 60px;
}
</style>
