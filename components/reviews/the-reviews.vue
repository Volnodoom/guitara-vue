<template>
  <section class="reviews">
    <h3 class="reviews__title title title--bigger">
      Отзывы
    </h3>
    <button
      class="button button--red-border button--big reviews__sumbit-button"
      type="button"
      @click="onModalOpen"
    >
      Оставить отзыв
    </button>

    <Review
      v-for="review in mockReviews"
      v-bind="review"
      :key="review.id"
    />

    <button
      class="button button--medium reviews__more-button"
      type="button"
    >
      Показать еще отзывы
    </button>
    <NuxtLink :to="{ hash: '#header' }">
      <div
        class="button button--up button--red-border button--big reviews__up-button"
      >
        Наверх
      </div>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import Review from '~/components/reviews/components/review.vue';

type TheReviewsProps = {
  onModalOpen: () => void
};

defineProps<TheReviewsProps>();

const mockReviews = [
  {
    id: 'f5c5022f-731d-4a1d-8777-717a794fb168',
    reviewer: 'Преображенская  Ксения',
    advantages: 'Хороший корпус, чистый звук, стурны хорошего качества',
    disadvantages: 'Тугие колонки',
    text: 'У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня. ',
    date: '12 декабря',
    rating: 5,
  },
  {
    id: 'e1706275-52b2-441a-b138-34980a1d823e',
    reviewer: 'Елена Соловьева',
    advantages: 'Стурны хорошего качества',
    disadvantages: 'Некачественные шнурки',
    text: 'Отличный звук, удобная форма. Хорошо подходит для игры на улице.',
    date: '15 января',
    rating: 2,
  },
  {
    id: '84761d71-ec97-4c3a-a309-8b5404bcb991',
    reviewer: 'Иван Иванов',
    advantages: 'Удобное управление',
    disadvantages: 'Недостаточная память',
    text: 'У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте неть чехла и ремня.',
    date: '22 января',
    rating: 3,
  },
];
</script>
