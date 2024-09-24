<template>
  <div class="container">
    <h1 class="title title--bigger page-content__title">
      Корзина
    </h1>

    <BreadcrumbsBasic />
    <div class="cart">
      <CardCart
        v-for="item in mockData"
        v-bind="item"
        :key="item.articul"
        :handle-item-remove="handleItemRemove"
        :handle-item-increase="handleItemIncrease"
        :handle-item-decrease="handleItemDecrease"
      />
      <div class="cart__footer">
        <CartCoupon
          :handle-coupon-submit="handleCouponSubmit"
          :has-coupon-proceeded="hasCouponProceeded"
          :is-coupon-applied="isCouponApplied"
        />
        <CartTotal
          :total="totalSum"
          :discount="discountValue"
          :on-purchase-click="onPurchaseClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadcrumbsBasic from '~/ui/breadcrumbs/breadcrumbs-basic.vue';
import type { CardCartProps } from '~/components/card/card-cart/card-cart.vue';
import CardCart from '~/components/card/card-cart/card-cart.vue';

const mockData = ref<
  Omit<CardCartProps,
    'handleItemRemove' | 'handleItemIncrease' | 'handleItemDecrease'
  >[]>([
  {
    name: 'СURT Z30 Plus',
    articul: 'SO754565',
    guitarType: 'Электрогитара',
    stringCount: 6,
    price: 129500,
    guitarCount: 1,
    imgUrl: '/assets/img/content/catalog-product-2.jpg',
    imgUrl2: '/assets/img/content/catalog-product-2@2x.jpg',
  },
  {
    name: 'B&W 606 S2 Anniversary',
    articul: 'SO754566',
    guitarType: 'Акустическая гитара',
    stringCount: 6,
    price: 99000,
    guitarCount: 1,
    imgUrl: '/assets/img/content/catalog-product-2.jpg',
    imgUrl2: '/assets/img/content/catalog-product-2@2x.jpg',
  },
  {
    name: 'KEF Q350',
    articul: 'SO754567',
    guitarType: 'Электрогитара',
    stringCount: 6,
    price: 89000,
    guitarCount: 1,
    imgUrl: '/assets/img/content/catalog-product-2.jpg',
    imgUrl2: '/assets/img/content/catalog-product-2@2x.jpg',
  },
  {
    name: 'Wharfedale Diamond 11.1',
    articul: 'SO754568',
    guitarType: 'Акустическая гитара',
    stringCount: 6,
    price: 79000,
    guitarCount: 1,
    imgUrl: '/assets/img/content/catalog-product-2.jpg',
    imgUrl2: '/assets/img/content/catalog-product-2@2x.jpg',
  },
]);

const totalSum = ref(0);
const discountValue = ref(0);
const hasCouponProceeded = ref(false);
const isCouponApplied = ref(false);

const handleItemRemove = (itemArticul: string) => {
  mockData.value = mockData.value.filter(item => item.articul !== itemArticul);
};

const handleItemIncrease = (itemArticul: string) => {
  mockData.value = mockData.value.map((item) => {
    if (item.articul === itemArticul) {
      return {
        ...item,
        guitarCount: item.guitarCount + 1,
      };
    }
    return item;
  });
};

const handleItemDecrease = (itemArticul: string) => {
  mockData.value = mockData.value.map((item) => {
    if (item.articul === itemArticul) {
      return {
        ...item,
        guitarCount: item.guitarCount - 1,
      };
    }
    return item;
  });
};

const handleCouponSubmit = () => {
  hasCouponProceeded.value = true;
  if (discountValue.value) {
    discountValue.value = 0;
    isCouponApplied.value = false;
    return;
  }

  isCouponApplied.value = true;
  discountValue.value = 0.15;
};

const onPurchaseClick = () => {
};

watchEffect(() => {
  totalSum.value = mockData.value.reduce((acc, item) => acc + (item.price * item.guitarCount), 0);
});
</script>
