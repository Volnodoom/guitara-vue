<template>
  <div class="container">
    <h1 class="page-content__title title title--bigger">
      Каталог гитар
    </h1>
    <BreadcrumbsBasic />
    <div class="catalog">
      <CatalogFiltration />
      <div class="catalog-sort">
        <h2 class="catalog-sort__title">
          Сортировать:
        </h2>
        <div class="catalog-sort__type">
          <button
            class="catalog-sort__type-button"
            aria-label="по цене"
          >
            по цене
          </button>
          <button
            class="catalog-sort__type-button"
            aria-label="по популярности"
          >
            по популярности
          </button>
        </div>
        <div class="catalog-sort__order">
          <button
            class="catalog-sort__order-button catalog-sort__order-button--up"
            aria-label="По возрастанию"
          />
          <button
            class="catalog-sort__order-button catalog-sort__order-button--down"
            aria-label="По убыванию"
          />
        </div>
      </div>
      <div class="cards catalog__cards">
        <CardCatalog
          v-for="card in mockData"
          v-bind="card"
          :key="card.id"
        />
      </div>
      <div class="pagination page-content__pagination">
        <PaginationBasic
          :total-pages="6"
          href-base="/?pagination="
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardCatalog from '~/ui/card/card-catalog/card-catalog.vue';
import PaginationBasic from '~/ui/pagination/pagination-basic/pagination-basic.vue';
import BreadcrumbsBasic from "~/ui/breadcrumbs/breadcrumbs-basic.vue";
import CatalogFiltration from "~/components/catalog-filtration/catalog-filtration.vue";

definePageMeta({
  layout: 'default',
});

const mockData = [
  {
    id: 1,
    title: 'СURT Z30 Plus Acoustics',
    price: '129 500 ₽',
    image: '/assets/img/content/catalog-product-0.jpg',
    image2x: '/assets/img/content/catalog-product-0@2x.jpg',
    rating: 2,
    voteCount: 9,
  },
  {
    id: 2,
    title: 'B&W 606 S2 Anniversary',
    price: '99 000 ₽',
    image: '/assets/img/content/catalog-product-1.jpg',
    image2x: '/assets/img/content/catalog-product-1@2x.jpg',
    rating: 5,
    voteCount: 12,
  },
  {
    id: 3,
    title: 'KEF Q350',
    price: '89 000 ₽',
    image: '/assets/img/content/catalog-product-2.jpg',
    image2x: '/assets/img/content/catalog-product-2@2x.jpg',
    rating: 4,
    voteCount: 8,
  },
  {
    id: 4,
    title: 'Wharfedale Diamond 11.1',
    price: '79 000 ₽',
    image: '/assets/img/content/catalog-product-3.jpg',
    image2x: '/assets/img/content/catalog-product-3@2x.jpg',
    rating: 1,
    voteCount: 10,
  },
  {
    id: 5,
    title: 'ELAC Debut 2.0 B6.2',
    price: '69 000 ₽',
    image: '/assets/img/content/catalog-product-4.jpg',
    image2x: '/assets/img/content/catalog-product-4@2x.jpg',
    rating: 5,
    voteCount: 15,
  },
  {
    id: 6,
    title: 'Q Acoustics 3030i',
    price: '59 000 ₽',
    image: '/assets/img/content/catalog-product-5.jpg',
    image2x: '/assets/img/content/catalog-product-5@2x.jpg',
    rating: 3,
    voteCount: 9,
  },
  {
    id: 7,
    title: 'Monitor Audio Bronze 2',
    price: '49 000 ₽',
    image: '/assets/img/content/catalog-product-6.jpg',
    image2x: '/assets/img/content/catalog-product-6@2x.jpg',
    rating: 4,
    voteCount: 8,
  },
  {
    id: 8,
    title: 'Dali Zensor 3',
    price: '39 000 ₽',
    image: '/assets/img/content/catalog-product-7.jpg',
    image2x: '/assets/img/content/catalog-product-7@2x.jpg',
    rating: 3,
    voteCount: 10,
  },
  {
    id: 9,
    title: 'Polk Audio Signature S15',
    price: '29 000 ₽',
    image: '/assets/img/content/catalog-product-8.jpg',
    image2x: '/assets/img/content/catalog-product-8@2x.jpg',
    rating: 4,
    voteCount: 9,
  },
  {
    id: 10,
    title: 'Yamaha NS-777',
    price: '19 000 ₽',
    image: '/assets/img/content/catalog-product-8.jpg',
    image2x: '/assets/img/content/catalog-product-8@2x.jpg',
    rating: 5,
    voteCount: 8,
  },
  {
    id: 11,
    title: 'Edifier R1280T',
    price: '9 000 ₽',
    image: '/assets/img/content/catalog-product-7.jpg',
    image2x: '/assets/img/content/catalog-product-7@2x.jpg',
    rating: 4,
    voteCount: 10,
  },
  {
    id: 12,
    title: 'Microlab FC300',
    price: '5 000 ₽',
    image: '/assets/img/content/catalog-product-6.jpg',
    image2x: '/assets/img/content/catalog-product-6@2x.jpg',
    rating: 1,
    voteCount: 9,
  },
  {
    id: 13,
    title: 'Auna Line 302',
    price: '3 000 ₽',
    image: '/assets/img/content/catalog-product-5.jpg',
    image2x: '/assets/img/content/catalog-product-5@2x.jpg',
    rating: 4,
    voteCount: 8,
  },
];
</script>
