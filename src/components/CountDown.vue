<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

let day = ref<number>(0)
let hour = ref<number>(0)
let minute = ref<number>(0)
let second = ref<number>(0)

function countdown() {
  const COUNT_END:number = Date.parse(new Date('2022-06-11').toString());
  const NOW:number = Date.parse(new Date().toString());
  const MILLISECONDS_DIFFERENCE:number = COUNT_END - NOW;

  let innerDay:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 / 60 / 24);
  let hr:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 / 60 % 24);
  let min:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 / 60 % 60);
  let sec:number = Math.round(MILLISECONDS_DIFFERENCE / 1000 % 60);  

  day.value = innerDay;
  hour.value = hr;// > 9 ? hr : '0' + hr;
  minute.value = min;// > 9 ? min : '0' + min;
  second.value = sec;// > 9 ? sec : '0' + sec;
}

// interface iCountdown {
//     day: string,
//     hour: string,
//     minute: string,
//     second: string
// }
  
// const countdown = computed(() => {
//   return {
//     day: day.value.toString(),
//     hour: hour.value > 9 ? hour.value.toString() : '0' + hour.value,
//     minute: minute.value > 9 ? minute.value : '0' + minute.value,
//     second: second.value > 9 ? second.value : '0' + second.value
//   }
// })

  let _interval = setInterval(() => {
    countdown();
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
