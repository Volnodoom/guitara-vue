<template>
  <div class="rate product-card__rate">
    <RatingItem
      v-for="i in 5"
      :key="i"
      :is-active="i <= rating"
    />

    <p class="visually-hidden">
      Рейтинг: {{ RatingCorrelation[rating] }}
    </p>

    <p class="rate__count">
      <span class="visually-hidden">Всего оценок:</span>
      {{ voteCount }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { RatingCorrelation } from '~/utils/name-space/global-ns';
import RatingItem from '~/ui/rating/rating-item.vue';

type TheRatingType = {
  rating: number
  voteCount: number
};

defineProps<TheRatingType>();
</script>
