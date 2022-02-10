<script setup lang="ts">
import { ref } from 'vue'
import { sendForm } from '../api/sendForm';

type TFormStatus = 'active' | 'error' | 'success'

let name = ref<string>('')
let comment = ref<string>('')
let formStatus = ref<TFormStatus>('active')

function handleSubmit () {
  sendForm({
    'form-name': 'ask-song',
    'name': name.value,
    'comment': comment.value
  })
  .then(() => formStatus.value = 'success')
  .catch(() => formStatus.value = 'error')
}
</script>

<template>
  <form
    v-if="formStatus == 'active'"
    name="ask-song"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    @submit.prevent="handleSubmit"
  >
    <input type="hidden" name="form-name" value="ask-song" />
    <label class="form__label">
      Dinos quien eres *
      <input type="text" v-model="name" name="name" required/>
    </label>

    <label class="form__label">
      ¿Qué canción no puede faltar? *
      <textarea cols="30" rows="5" v-model="comment" name="comment" required></textarea>
    </label>

    <input type="submit" value="Enviar" />
  </form>

  <div class="form__response" v-if="formStatus == 'success'">Gracias por la sugerencia de canción {{ name }}. Nos guardamos la sugerencia de canción. Quien sabe si la pondremos y quien sabe si te tocará bailar con nosotros...</div>
  <div class="form__response form__response--error" v-if="formStatus == 'error'">Vaya, actualmente el formulario no está funcionando, mejor contactanos por whatsapp.</div>
</template>

<style scoped lang="postcss">
</style>
