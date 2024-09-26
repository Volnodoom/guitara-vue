<template>
  <div class="container">
    <h1 class="page-content__title title title--bigger">
      Товар
    </h1>
    <BreadcrumbsBasic />
    <CardProduct v-bind="mockData" />
    <TheReviews
      :on-modal-open="onModalOpen"
    />
    <TheModal
      class-name="modal__content-review"
      :on-modal-close="onModalClose"
      :is-active="isActive"
    >
      <ReviewModalForm
        :on-modal-close="onModalClose"
        :product-name="mockData.guitarName"
      />
    </TheModal>
  </div>
</template>

<script setup lang="ts">
import BreadcrumbsBasic from '~/ui/breadcrumbs/breadcrumbs-basic.vue';
import CardProduct from '~/components/card/card-product/card-product.vue';
import TheReviews from '~/components/reviews/the-reviews.vue';
import TheModal from '~/ui/modal/the-modal.vue';

const isActive = ref(false);
const route = useRoute();
const pageId = route.params.id;

const mockData = {
  guitarName: 'СURT Z30 Plus',
  articul: 'SO754565',
  guitarType: 'Электрогитара',
  numberOfStrings: '6 струнная',
  description: 'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
  price: 129500,
  rating: 4,
};

useHead({ title: 'Guitar shop | Product' });

const onModalClose = () => {
  isActive.value = false;
};

const onModalOpen = () => {
  isActive.value = true;
};

watchEffect(() => {
  if (typeof window === 'undefined') {
    return;
  }

  if (isActive.value) {
    document.body.classList.add('scroll-lock', 'scroll-lock-ios');
    return;
  }

  document.body.classList.remove('scroll-lock', 'scroll-lock-ios');
});
</script>
