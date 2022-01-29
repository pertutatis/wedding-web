<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import Countdown from '../utils/countdown'

const myCountdown = new Countdown('2022-06-11')

let day = ref<string>('0')
let hour = ref<string>('0')
let minute = ref<string>('0')
let second = ref<string>('0')

let _interval = setInterval(() => {
  const {days, hours, minutes, seconds} = myCountdown.getCountdown();  

  day.value = days;
  hour.value = hours;
  minute.value = minutes;
  second.value = seconds;
}, 500)

onUnmounted(() => {
  clearInterval(_interval)
})
</script>

<template>
  <section class="section countdown">
    <div class="section__wrapper countdown__wrapper">
      <div class="countdown__item">
        <div class="countdown__time">{{ day }}</div>
        <div class="countdown__label">días</div>
      </div>
      <div class="countdown__item">
        <div class="countdown__time">{{ hour }}</div>
        <div class="countdown__label">horas</div>
      </div>
      <div class="countdown__item">
        <div class="countdown__time">{{ minute }}</div>
        <div class="countdown__label">minutos</div>
      </div>
      <div class="countdown__item">
        <div class="countdown__time">{{ second }}</div>
        <div class="countdown__label">segundos</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
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
