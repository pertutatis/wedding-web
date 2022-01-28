<script setup lang="ts">
import Content from '../ui/Content.vue'
import Card from "../ui/Card.vue"
</script>

<template>
  <Content
    title="¿Necesitas algo?"
    text="Puedes contactar con nosotros en cualquier momento por WhatsApp o por email. Te dejamos aquí abajo el contacto de los dos por si no los tienes:"
  >
    <Card
      class="contact__card"
      title="Ana caballero"
      text="600761357 anacaballero@gmail.com"
    />
    <Card
      class="contact__card"
      title="Diego Pertusa"
      text="600761357 anacaballero@gmail.com"
    />
  </Content>
</template>

<style scoped lang="postcss">
.contact__card {
  margin-bottom: 24px;
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
}
</style>
