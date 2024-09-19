<template>
  <div class="product-container__info-wrapper">
    <h2 class="product-container__title title title--big title--uppercase">
      {{ guitarName }}
    </h2>
    <RatingGlobal
      class-name="rate product-container__rating"
      :rating="rating"
      :size="14"
    />
    <ProductDetails
      :articul="articul"
      :guitar-type="guitarType"
      :number-of-strings="numberOfStrings"
      :description="description"
    />
  </div>
</template>

<script setup lang="ts">
import RatingGlobal from '~/components/rating/rating-global/rating-global.vue';
import ProductDetails from '~/ui/card/card-product/components/product-details.vue';

type ProductInfoType = {
  guitarName: string
  articul: string
  guitarType: string
  numberOfStrings: string
  description: string
  rating: number
};

defineProps<ProductInfoType>();
</script>
