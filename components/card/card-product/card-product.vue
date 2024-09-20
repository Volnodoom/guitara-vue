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
      :guitar-name="mockData.guitarName"
      :articul="mockData.articul"
      :guitar-type="mockData.guitarType"
      :number-of-strings="mockData.numberOfStrings"
      :description="mockData.description"
      :rating="mockData.rating"
    />
    <ProductPrice :price="mockData.price" />
  </div>
</template>

<script setup lang="ts">
import ProductInfo from '~/components/card/card-product/components/product-info.vue';
import ProductPrice from '~/components/card/card-product/components/product-price.vue';

const mockData = {
  guitarName: 'СURT Z30 Plus',
  articul: 'SO754565',
  guitarType: 'Электрогитара',
  numberOfStrings: '6 струнная',
  description: 'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
  price: 129500,
  rating: 4,
};
</script>
