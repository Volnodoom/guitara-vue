<template>
  <div class="container">
    <h1 class="page-content__title title title--bigger">
      Товар
    </h1>
    <BreadcrumbsBasic />
    <CardProduct />
  </div>
</template>

<script setup lang="ts">
import BreadcrumbsBasic from '~/ui/breadcrumbs/breadcrumbs-basic.vue';
import CardProduct from '~/ui/card/card-product/card-product.vue';

const route = useRoute();
const pageId = route.params.id;
</script>
