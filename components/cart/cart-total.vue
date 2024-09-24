<template>
  <div class="cart__total-info">
    <CartTotalLine
      name="Total"
      :value="total.toLocaleString('ru-Ru')"
    />
    <CartTotalLine
      price-class-name="cart__total-value--bonus"
      name="Discount"
      :value="discountPrice.toLocaleString('ru-Ru')"
    />
    <CartTotalLine
      price-class-name="cart__total-value--payment"
      name="Final price"
      :value="finalPrice.toLocaleString('ru-Ru')"
    />

    <button
      class="button button--red button--big cart__order-button"
      @click="onPurchaseClick"
    >
      Proceed with the payment
    </button>
  </div>
</template>

<script setup lang="ts">
type CartTotalProps = {
  total: number
  discount: number
  onPurchaseClick: () => void
};

const props = defineProps<CartTotalProps>();
const discountPrice = computed<number>(() => Math.floor(props.total * props.discount));
const finalPrice = computed<number>(() => Math.ceil(props.total * (1 - props.discount)));
</script>
