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
    <ProductInfo />
    <div class="product-container__price-wrapper">
      <p class="product-container__price-info product-container__price-info--title">
        Цена:
      </p>
      <p class="product-container__price-info product-container__price-info--value">
        52 000 ₽
      </p><a
        class="button button--red button--big product-container__button"
        href="#"
      >Добавить в корзину</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductInfo from '~/ui/card/card-product/components/product-info.vue';
</script>
