<script setup lang="ts">
interface Props {
  title: string,
  text: string,
  linkUrl?: string,
  linkText?: string
}

withDefaults(defineProps<Props>(), {
  linkUrl: '#',
})

</script>

<template>
  <section class="section">
    <div class="section__wrapper content">

      <div class="content__column">
        <h4 class="content__title" data-test-id="content-title">{{ title }}</h4>
        <p class="content__text" data-test-id="content-text">{{ text }}</p>
        <a v-if="linkText" class="content__link" :href="linkUrl" target="_blank" rel="noopener" data-test-id="content-link">{{ linkText }}</a>
      </div>

      <div class="content__column">
        <slot />
      </div>
      
    </div>
  </section>
</template>

<style scoped lang="postcss">

.content {
  @media (min-width: 768px) {
    display: flex;
  } 
}

.content__column {
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 16px;
  }

  &:not(:last-child) {
    margin-bottom: 36px;
  }
}

.content__title {
  margin-bottom: 24px;
  font-family: var(--primary-font);
  font-size: 34px;
  font-weight: bold;
  color: var(--primary-color);

  @media (min-width: 768px) {
    font-size: 28px;
  }
}

.content__text {
  margin-bottom: 8px;
  font-family: var(--secondary-font);
  font-weight: 300;
  font-size: 16px;
  line-height: 1.44;
  color: var(--text-color);

  @media (min-width: 768px) {
    font-size: 18px;
  }
}

.content__link {
  margin-bottom: 8px;
  font-family: var(--secondary-font);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.44;
  color: var(--primary-color);
  text-decoration: underline;
}
</style>
