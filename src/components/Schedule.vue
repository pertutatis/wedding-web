<script setup lang="ts">
import Card from "../ui/Card.vue"
</script>

<template>
  <section class="section">
    <div class="section__wrapper schedule">

      <div class="schedule__column schedule__column--grid">
        <Card :is-small="true" title="Ceremonia" text ="12:30" />
        <Card :is-small="true" title="cocktail" text ="13:30" />
        <Card :is-small="true" title="Fiesta" text ="17:00" />
        <Card :is-small="true" title="Resopón" text ="21:00" />
      </div>

      <div class="schedule__column">
        <h4 class="schedule__title">Bienvenidos a nuesta boda, ¡por fin!</h4>
        <p class="schedule__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum placeat incidunt dolore ab enim deserunt voluptates, itaque nobis. Necessitatibus repellendus tempora, delectus nam aliquid ipsum qui. Quisquam, sit harum.</p>
        <p class="schedule__text">
          Si quieres reservar una plaza no te olvides de hablar con nosotros para que lo tengamos en cuenta.
          Puedes hacerlo por teléfono/whatsapp o a través de <a href="">este formulario</a>.
        </p>
      </div>
      
    </div>
  </section>
</template>

<style scoped lang="postcss">
.schedule {
  margin-top: 46px;
  margin-bottom: 46px;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  } 
}

.schedule__column {
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 16px;
  }
}
.schedule__column--grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    column-gap: 32px;
    row-gap: 32px;
  }
}

.schedule__title {
  margin-bottom: 24px;
  font-family: var(--primary-font);
  font-size: 22px;
  font-weight: bold;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 28px;
  }
}

.schedule__text {
  margin-bottom: 16px;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);

  @media (min-width: 768px) {
    font-size: 18px;
  }

  a {
    color: var(--primary-color);
    text-decoration: underline;
  }
}
</style>
