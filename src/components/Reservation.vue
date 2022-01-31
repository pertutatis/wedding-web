<script setup lang="ts">
</script>

<template>
  <section class="section reservation">
    <div class="section__wrapper reservation__wrapper">
      <div class="reservation__head">
        <h3 class="reservation__title">¡Que no pare la fiesta!</h3>
      </div>
      <div class="reservation__form">
        <p class="reservation__text">¿Crees que hay alguna canción que no puede faltar y que tenemos que tenerla en cuenta si o si? ¿No concibes una boda sin paquito el chocolatero? ¿hay un temazo que nos quieres dedicar? No hay, problema, lo tendremos en cuenta, solo dinoslo. Tambien decirte que igual algo de filtro haremos... que nos conocemos.</p>
        <iframe id="JotFormIFrame-220224174899360" title="New Customer Registration Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/220224174899360" frameborder="0" style=" min-width: 100%; height:539px; border:none;" scrolling="no" > </iframe>  
      </div>
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
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100%;
    background: var(--background-color);
    height: 54px;
  }
}

.reservation__head {
  position: relative;
  padding: 24px;
  background-image: url(../assets/bg.jpg);
  background-size: cover;

  @media (min-width: 1024px) {
    padding-bottom: 184px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .4;
  }
}

.reservation__form {
  position: relative;
  z-index: 2;
  background-color: var(--background-color);

  @media (min-width: 1024px) {
    max-width: 80%;
    margin: -160px auto 0;
  }
}

.reservation__title {
  position: relative;
  width: 100%;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 96px;
  }
}

.reservation__text {
  max-width: 752px;
  margin: 0 auto 8px;
  padding-top: 24px;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);

  @media (min-width: 768px) {
    padding-left: 38px;
    padding-right: 38px;
    font-size: 18px;
  }
}
</style>
