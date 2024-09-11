<template>
  <div class="product-container__info-wrapper">
    <h2 class="product-container__title title title--big title--uppercase">
      СURT Z30 Plus
    </h2>
    <RatingGlobal
      class-name="rate product-container__rating"
      :rating="mockData.rating"
      :size="14"
    />
    <TabCharacteristics />
  </div>
</template>

<script setup lang="ts">
import RatingGlobal from '~/components/rating/rating-global/rating-global.vue';
import TabCharacteristics from '~/ui/card/card-product/components/tab-characteristics.vue';

const mockData = {
  rating: 4,
};
</script>
