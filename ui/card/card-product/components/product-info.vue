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

    <div class="tabs">
      <a
        class="button button--medium tabs__button"
        href="#characteristics"
      >Характеристики</a><a
        class="button button--black-border button--medium tabs__button"
        href="#description"
      >Описание</a>
      <div
        id="characteristics"
        class="tabs__content"
      >
        <table class="tabs__table">
          <tr class="tabs__table-row">
            <td class="tabs__title">
              Артикул:
            </td>
            <td class="tabs__value">
              SO754565
            </td>
          </tr>
          <tr class="tabs__table-row">
            <td class="tabs__title">
              Тип:
            </td>
            <td class="tabs__value">
              Электрогитара
            </td>
          </tr>
          <tr class="tabs__table-row">
            <td class="tabs__title">
              Количество струн:
            </td>
            <td class="tabs__value">
              6 струнная
            </td>
          </tr>
        </table>
        <p class="tabs__product-description hidden">
          Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RatingGlobal from '~/components/rating/rating-global/rating-global.vue';

const mockData = {
  rating: 4,
};
</script>
