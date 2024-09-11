<template>
  <div :class="className">
    <RatingItem
      v-for="i in 5"
      :key="i"
      :is-active="i <= rating"
      :star-size="size || 12"
    />

    <p class="visually-hidden">
      Оценка: {{ RatingCorrelation[rating] }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { RatingCorrelation } from '~/utils/name-space/global-ns';
import RatingItem from '~/ui/rating/rating-item.vue';

type RatingGlobalProps = {
  className: string
  rating: number
  size?: number
};

defineProps<RatingGlobalProps>();
</script>
