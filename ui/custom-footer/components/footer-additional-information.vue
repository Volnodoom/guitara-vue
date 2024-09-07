<template>
  <section class="footer__nav-section footer__nav-section--links">
    <h2 class="footer__nav-title">
      Информация
    </h2>

    <ul class="footer__nav-list">
      <AdditionalItem
        v-for="item in listInfo"
        :key="item.title"
        :title=" item.title "
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import AdditionalItem from '~/ui/custom-footer/components/additional-item.vue';

const listInfo = [
  {
    title: 'Где купить?',
  },
  {
    title: 'Блог',
  },
  {
    title: 'Вопрос - ответ',
  },
  {
    title: 'Возврат',
  },
  {
    title: 'Сервис-центры',
  },
];
</script>
