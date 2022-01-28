<script setup lang="ts">
</script>

<template>
  <section class="section reservation">
    <div class="section__wrapper reservation__wrapper">
      <div class="reservation__head" style="background-image: url(https://picsum.photos/id/112/1440/400)">
        <h3 class="reservation__title">Confirmar Asistencia</h3>
      </div>
      <iframe id="JotFormIFrame-220224174899360" title="New Customer Registration Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/220224174899360" frameborder="0" style=" min-width: 100%; height:539px; border:none;" scrolling="no" > </iframe>  
    </div>
  </section>
</template>

<style scoped lang="postcss">
.reservation {
  margin-bottom: 0;
}

.reservation__wrapper {
  position: relative;
  bottom: -50px;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    background: var(--background-color);
    height: 54px;
  }
}

.reservation__head {
  padding: 24px;
  background-size: cover;
}

.reservation__title {
  width: 100%;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: #fff;
}
</style>
