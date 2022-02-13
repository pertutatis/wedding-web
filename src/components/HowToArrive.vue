<script setup lang="ts">
import { useAppStore } from '../stores/app'
import Content from '../ui/Content.vue'

const store = useAppStore()
</script>

<template>
  <Content
    v-if="store.howToArrive"
    :title="store.howToArrive.title"
    :text="store.howToArrive.text"
    :linkUrl="store.howToArrive.link_url"
    :linkText="store.howToArrive.link_text"
  >
    <img class="map__image" src="../assets/mapa.webp" alt="Como llegar" width="596" height="514">
  </Content>
</template>

<style scoped lang="postcss">
.map__image {
  max-width: 100%;
  display: block;
  width: auto;
  height: auto;

  @media (min-width: 1100px) {
    margin-top: -80px;
  }
}
</style>
