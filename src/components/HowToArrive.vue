<script setup lang="ts">
import Content from '../ui/Content.vue'
</script>

<template>
  <Content
    title="Como llegar"
    text="¡Llegar a Huerto Bonet es super fácil y no tiene perdida! Y es que está situado al lado de la autovía A7 en el propio Alginet. De todos modos no te preocupes por que te dejamos un pequeño mapa aquí al lado y un enlace que te llevará directamente a él desde google maps."
    linkUrl="https://goo.gl/maps/m8q8pZCd7A7xqw848"
    linkText="Ver en google maps."
  >
    <img class="map__image" src="../assets/mapa.webp" alt="Como llegar" width="596" height="514">
  </Content>
</template>

<style scoped lang="postcss">
.map__image {
  @media (min-width: 1100px) {
    margin-top: -80px;
  }
}
</style>
