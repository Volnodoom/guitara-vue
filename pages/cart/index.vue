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
        <div class="cart__coupon coupon">
          <h2 class="title title--little coupon__title">
            Промокод на скидку
          </h2>
          <p class="coupon__info">
            Введите свой промокод, если он у вас есть.
          </p>
          <form
            id="coupon-form"
            class="coupon__form"
            method="post"
            action="/"
          >
            <div class="form-input coupon__input">
              <label class="visually-hidden">Промокод</label>
              <input
                id="coupon"
                type="text"
                placeholder="Введите промокод"
                name="coupon"
              >
              <p class="form-input__message form-input__message--success">
                Промокод принят
              </p>
            </div>
            <button class="button button--big coupon__button">
              Применить
            </button>
          </form>
        </div>
        <div class="cart__total-info">
          <p class="cart__total-item">
            <span class="cart__total-value-name">Всего:</span><span class="cart__total-value">52 000 ₽</span>
          </p>
          <p class="cart__total-item">
            <span class="cart__total-value-name">Скидка:</span><span class="cart__total-value cart__total-value--bonus">- 3000 ₽</span>
          </p>
          <p class="cart__total-item">
            <span class="cart__total-value-name">К оплате:</span><span class="cart__total-value cart__total-value--payment">49 000 ₽</span>
          </p>
          <button class="button button--red button--big cart__order-button">
            Оформить заказ
          </button>
        </div>
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
</script>
