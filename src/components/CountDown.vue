<script setup lang="ts"></script>

<template>
  <section class="section countdown">
    <div class="section__wrapper countdown__wrapper">
      <div class="countdown__item">
        <div class="countdown__time">120</div>
        <div class="countdown__label">días</div>
      </div>
      <div class="countdown__item">
        <div class="countdown__time">23</div>
        <div class="countdown__label">horas</div>
      </div>
      <div class="countdown__item">
        <div class="countdown__time">12</div>
        <div class="countdown__label">minutos</div>
      </div>
      <div class="countdown__item">
        <div class="countdown__time">3</div>
        <div class="countdown__label">segundos</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">

.countdown {
  margin-top: 46px;
  margin-bottom: 46px;
}
.countdown__wrapper {
  display: flex;
}

.countdown__item {
  flex: 0 1 25%;
  text-align: center;
}
.countdown__time {
  font-family: var(--primary-font);
  font-size: 24px;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 46px;
  }
}

.countdown__label {
  font-family: var(--secondary-font);
  font-size: 12px;
  font-weight: 300;
  color: var(--text-color);

  @media (min-width: 768px) {
    font-size: 26px;
  }
}
</style>
