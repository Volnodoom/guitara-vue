<template>
  <div class="cart-item">
    <button
      class="cart-item__close-button button-cross"
      type="button"
      aria-label="Delete item"
      @click="handleItemRemove(articul)"
    >
      <span class="button-cross__icon" />
      <span class="cart-item__close-button-interactive-area" />
    </button>
    <div class="cart-item__image">
      <img
        :src="imgUrl"
        :srcset="`${imgUrl2} 2x`"
        width="55"
        height="130"
        :alt="name"
      >
    </div>
    <div class="product-info cart-item__info">
      <p class="product-info__title">
        {{ name }}
      </p>
      <p class="product-info__info">
        Артикул: {{ articul }}
      </p>
      <p class="product-info__info">
        {{ guitarType }}, {{ stringCount }} струнная
      </p>
    </div>
    <div class="cart-item__price">
      {{ price.toLocaleString('ru-Ru') }} ₽
    </div>
    <div class="quantity cart-item__quantity">
      <ButtonCounter
        :count-type="ChangeCountLib.Decrease"
        @click="handleDecreaseClick"
      />
      <input
        id="2-count"
        v-model="currentGuitarCount"
        class="quantity__input"
        type="number"
        placeholder="1"
        name="2-count"
        max="99"
      >
      <ButtonCounter
        :count-type="ChangeCountLib.Increase"
        @click="handleIncreaseClick"
      />
    </div>
    <div class="cart-item__price-total">
      {{ totalPrice.toLocaleString('ru-Ru') }} ₽
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonCounter from '~/ui/button/button-counter/button-counter.vue';
import { ChangeCountLib } from '~/utils/name-space/global-ns';

export type CardCartProps = {
  handleItemRemove: (itemArticul: string) => void
  handleItemIncrease: (itemArticul: string) => void
  handleItemDecrease: (itemArticul: string) => void
  name: string
  articul: string
  guitarType: string
  stringCount: number
  price: number
  guitarCount: number
  imgUrl: string
  imgUrl2: string
};

const { guitarCount,
  price,
  articul,
  handleItemRemove,
  handleItemIncrease,
  handleItemDecrease,
} = defineProps<CardCartProps>();

const currentGuitarCount = ref(guitarCount);

const handleIncreaseClick = () => {
  handleItemIncrease(articul);
  currentGuitarCount.value += 1;
};

const handleDecreaseClick = () => {
  if (currentGuitarCount.value === 1) {
    handleItemRemove(articul);
    return;
  }

  handleItemDecrease(articul);
  currentGuitarCount.value -= 1;
};

const totalPrice = computed(() => currentGuitarCount.value * price);
</script>
