<template>
  <div class="review">
    <div class="review__wrapper">
      <h4 class="review__title review__title--author title title--lesser">
        {{ reviewer }}
      </h4><span class="review__date">{{ date }}</span>
    </div>

    <RatingGlobal
      class-name="rate review__rating-panel"
      star-size="16"
      :rating="rating"
    />

    <h4 class="review__title title title--lesser">
      Достоинства:
    </h4>
    <p class="review__value">
      {{ advantages }}
    </p>
    <h4 class="review__title title title--lesser">
      Недостатки:
    </h4>
    <p class="review__value">
      {{ disadvantages }}
    </p>
    <h4 class="review__title title title--lesser">
      Комментарий:
    </h4>
    <p class="review__value">
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
type ReviewProps = {
  rating: number
  advantages: string
  disadvantages: string
  text: string
  date: string
  reviewer: string
};

defineProps<ReviewProps>();
</script>
