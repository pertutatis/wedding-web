<script setup lang="ts">
import { ref } from 'vue'
// import { sendForm } from '../api/sendFrom';
interface IObjectKeys {
  [key: string]: string ;
}

let name = ref<string>('')
let comment = ref<string>('')

function encode(data:IObjectKeys) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

const handleSubmit = () => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      'form-name': 'ask-song',
      'name': name.value,
      'comment': comment.value
    }),
  })
    .then(() => console.log("/thank-you/"))
    .catch((error) => alert(error));
};

// function handleSubmit () {
//   sendForm({
//     'form-name': 'ask-song',
//     name: name.value,
//     comment: comment.value
//   })
// }
</script>

<template>
  <section class="section reservation">
    <div class="section__wrapper reservation__wrapper">
      <div class="reservation__head">
        <h3 class="reservation__title">¡Que no pare la fiesta!</h3>
      </div>
      <div class="reservation__form">
        <p class="reservation__text">
          ¿Crees que hay alguna canción que no puede faltar y que tenemos que tenerla en
          cuenta si o si? ¿No concibes una boda sin paquito el chocolatero? ¿hay un temazo
          que nos quieres dedicar? No hay, problema, lo tendremos en cuenta, solo dinoslo.
          Tambien decirte que igual algo de filtro haremos... que nos conocemos.
        </p>

        <form
          name="ask-song"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
        >
          <input type="hidden" name="form-name" value="ask-song" />
          <label>
            Dinos quien eres *
            <input type="text" v-model="name" name="name" />
          </label>

          <label>
            ¿Qué canción no puede faltar?
            <textarea cols="30" rows="5" v-model="comment" name="comment"></textarea>
          </label>

          <input type="submit" value="Enviar" />
        </form>

      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.reservation__wrapper {
  position: relative;
}

.reservation__head {
  position: relative;
  padding: 24px;
  background-image: url(../assets/bg.jpg);
  background-image: url(../assets/bg.webp);
  background-size: cover;

  @media (min-width: 1024px) {
    padding-bottom: 184px;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
  }
}

.reservation__form {
  position: relative;
  z-index: 2;
  background-color: var(--background-color);

  @media (min-width: 1024px) {
    max-width: 80%;
    margin: -160px auto 0;
    padding-left: 80px;
    padding-right: 80px;
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
  margin-bottom: 24px;
  padding-top: 24px;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

label {
  display: block;
  font-family: var(--primary-font);
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px 0;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid var(--text-color);
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &:focus {
    border-bottom: 1px solid black;
    outline: none;
  }

  &::placeholder {
    color: gray;
  }
}

textarea {
  display: block;
  min-height: 50px;
}

/* input[type="checkbox"],
input[type="radio"] {
  width: 10px;
  height: 10px;
  margin-right: 8px;
} */

input[type="submit"] {
  display: block;
  padding: 16px 56px;
  margin: 0 auto;
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: 500;
  color: var(--primary-color);
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: white;
    background-color: var(--primary-color);
  }

  &:disabled {
    opacity: .5;
  }
}
</style>
