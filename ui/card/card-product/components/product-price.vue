<template>
  <div class="product-container__price-wrapper">
    <p class="product-container__price-info product-container__price-info--title">
      Цена:
    </p>
    <p class="product-container__price-info product-container__price-info--value">
      {{ price.toLocaleString('ru-Ru') }} ₽
    </p>

    <button
      class="button button--red button--big product-container__button"
      type="button"
    >
      Добавить в корзину
    </button>
  </div>
</template>

<script setup lang="ts">
type ProductPriceType = {
  price: number
};

defineProps<ProductPriceType>();
</script>
