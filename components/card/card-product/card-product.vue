<template>
  <div class="product-container">
    <img
      class="product-container__img"
      src="/assets/img/content/catalog-product-2.jpg"
      srcset="/assets/img/content/catalog-product-2@2x.jpg 2x"
      width="90"
      height="235"
      alt=""
    >
    <ProductInfo
      :guitar-name="guitarName"
      :articul="articul"
      :guitar-type="guitarType"
      :number-of-strings="numberOfStrings"
      :description="description"
      :rating="rating"
    />
    <ProductPrice :price="price" />
  </div>
</template>

<script setup lang="ts">
import ProductInfo from '~/components/card/card-product/components/product-info.vue';
import ProductPrice from '~/components/card/card-product/components/product-price.vue';

type CardProductProps = {
  guitarName: string
  articul: string
  guitarType: string
  numberOfStrings: string
  description: string
  rating: number
  price: number
};

defineProps<CardProductProps>();
</script>
