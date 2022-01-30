<script setup lang="ts">
</script>

<template>
  <section class="section">
    <div class="section__wrapper content">

        <p class="content__text">Para nosotros el mayor regalo es que nos acompañes ese día. Aún así, como nos lo habéis pedido muchos, aquí dejamos el número de cuenta:</p>
        <p class="content__text">ESXX XXXX XX XXXXXXXXXXXXXX</p>
       
    </div>
  </section>
</template>

<style scoped lang="postcss">

.content {
  text-align: center;
  max-width: 960px;
}

.content__text {
  margin-bottom: 8px;
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
