<script setup lang="ts">
import Content from '../ui/Content.vue'
import Card from "../ui/Card.vue"

import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>

<template>
  <Content
    v-if="store.contact"
    :title="store.contact.title"
    :text="store.contact.text"
  >
    <Card
      v-if="store.contactAna"
      :title="store.contactAna.title"
      :text="store.contactAna.text"
      class="contact__card"
    />
    <Card
      v-if="store.contactDiego"
      :title="store.contactDiego.title"
      :text="store.contactDiego.text"
      class="contact__card"
    />
  </Content>
</template>

<style scoped lang="postcss">
.contact__card {
  margin-bottom: 24px;
  max-width: 320px;
  margin-right: auto;
  margin-left: auto;
}
</style>
