<script setup lang="ts">
import { ref } from 'vue'
import { sendForm } from '../api/sendFrom';

type TFormStatus = 'active' | 'error' | 'success'
type TOrigin = 'turia' | 'valencia' | 'indiferente'

let name = ref<string>('')
let seats = ref<string>('1')
let origin = ref<TOrigin>('turia')
let comment = ref<string>('')
let formStatus = ref<TFormStatus>('active')

const emit = defineEmits(['close'])

function handleSubmit () {
  sendForm({
    'form-name': 'bus-request',
    'name': name.value,
    'seats': seats.value,
    'origin': origin.value,
    'comment': comment.value
  })
  .then(() => formStatus.value = 'success')
  .catch(() => formStatus.value = 'error')
}

function close ():void {
  emit('close')
}
</script>

<template>
  <div class="popup" @click="close">
    <div class="popup__wrapper" @click.stop>
      <p class="popup__title">¿Quieres venir en bus?</p>
      <p class="popup__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, eaque laborum reprehenderit sapiente voluptatibus.</p>

      <form
        v-if="formStatus == 'active'"
        name="bus-request"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="bus-request" />
        <label class="form__label">
          Dinos quien eres *
          <input type="text" v-model="name" name="name" required/>
        </label>

        <label class="form__label">
          ¿Cuantas plazas te gustaría reservar? *
          <input type="number" v-model="seats" name="seats" min="1" required/>
        </label>

        <div class="form__label">
          ¿Desde donde te gustaría salir? *
          <label class="radio">
            <input type="radio" name="color" value="turia" v-model="origin">
            <div class="radio-label">Camp del Turia</div>
          </label>
          <label class="radio">
            <input type="radio" name="color" value="valencia" v-model="origin">
            <div class="radio-label">Valencia</div>
          </label>
          <label class="radio">
            <input type="radio" name="color" value="indiferente" v-model="origin">
            <div class="radio-label">Indiferente</div>
          </label>
        </div>

        <label class="form__label">
          ¿Hay algo más al respecto que nos quieras comentar?
          <textarea cols="30" rows="5" v-model="comment" name="comment" ></textarea>
        </label>

        <input type="submit" value="Enviar" />
      </form>

      <div class="form__response" v-if="formStatus == 'success'">Gracias por contactar {{ name }}. Nos pondremos en contacto contigo para confirmar.</div>
      <div class="form__response form__response--error" v-if="formStatus == 'error'">Vaya, actualmente el formulario no está funcionando, mejor contactanos por whatsapp.</div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.popup {
  position: fixed;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #00000070;
  cursor: pointer;
}
.popup__wrapper {
  background-color: white;
  width: 100%;
  height: auto;
  max-width: 600px;
  max-height: 90vh;
  padding: 32px;
  overflow-y: scroll;
  cursor: auto;
}

.popup__title {
  margin-bottom: 24px;
  font-family: var(--primary-font);
  font-size: 22px;
  font-weight: bold;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 28px;
  }
}

.popup__text {
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

.radio {
  display: block;
  margin: 16px 0;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 18px;
  cursor: pointer;

  input[type="radio"] {
    position: absolute;
    opacity: 0;

    + .radio-label {
      &:before {
        content: '';
        background: #f4f4f4;
        border-radius: 100%;
        border: 1px solid var(--primary-color);
        display: inline-block;
        width: 16px;
        height: 16px;
        position: relative;
        margin-right: 8px; 
        vertical-align: baseline;
        text-align: center;
        transition: all 250ms ease;
      }
    }
    &:checked {
      + .radio-label {
        &:before {
          background-color: var(--primary-color);
          box-shadow: inset 0 0 0 2px #f4f4f4;
        }
      }
    }
    &:focus {
      + .radio-label {
        &:before {
          outline: none;
          border-color: var(--primary-color);
        }
      }
    }
    &:disabled {
      + .radio-label {
        &:before {
          box-shadow: inset 0 0 0 4px #f4f4f4;
          border-color: black;
          background: black;
        }
      }
    }
    + .radio-label {
      &:empty {
        &:before {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
