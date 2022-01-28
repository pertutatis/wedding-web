<script setup lang="ts">
</script>

<template>
  <footer class="section footer">
    <div class="section__wrapper">
        <div class="footer__head" style="background-image: url(https://picsum.photos/id/112/1440/400)">
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
  padding: 48px;
  background-size: cover;
}

.footer__title {
  width: 100%;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  text-align: center;
  color: #fff;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
