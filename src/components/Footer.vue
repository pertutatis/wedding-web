<script setup lang="ts">
</script>

<template>
  <footer class="section footer">
    <div class="section__wrapper">
        <div class="footer__head">
        <h5 class="footer__title">Gracias</h5>
      </div>

    </div>
  </footer>
</template>

<style scoped lang="postcss">

.footer {
  margin-bottom: 0;
}

.footer__head {
  position: relative;
  padding: 48px;
  background-image: url(../assets/bg1.jpg);
  /* background-image: url(../assets/bg.webp); */
  background-size: cover;
  background-position: center;

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

.footer__title {
  position: relative;
  width: 100%;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
}
</style>
