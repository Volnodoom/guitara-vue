<template>
  <div class="product-card">
    <img
      :src="image"
      :srcset="image2x + ' 2x'"
      width="75"
      height="190"
      :alt="title"
    >

    <div class="product-card__info">
      <RatingCatalogCard
        :rating="rating"
        :vote-count="voteCount"
      />
      <p class="product-card__title">
        {{ title }}
      </p>
      <p class="product-card__price">
        <span class="visually-hidden">Цена:</span>{{ price }}
      </p>
    </div>

    <div class="product-card__buttons">
      <a
        class="button button--mini"
        href="#"
      >Подробнее</a>

      <a
        class="button button--red button--mini button--add-to-cart"
        href="#"
      >Купить</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import RatingCatalogCard from '~/components/rating/rating-catalog/rating-catalog-card.vue';

type CardCatalogType = {
  title: string
  price: string
  rating: number
  voteCount: number
  image: string
  image2x: string
};

defineProps<CardCatalogType>();
</script>
