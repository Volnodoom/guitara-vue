<template>
  <p class="cart__total-item">
    <span class="cart__total-value-name">
      {{ name }}:
    </span>
    <span :class="`cart__total-value ${priceClassName}`">
      {{ value.toLocaleString('ru-Ru') }} ₽
    </span>
  </p>
</template>

<script setup lang="ts">
type CartTotalLineProps = {
  priceClassName?: string
  name: string
  value: number
};

defineProps<CartTotalLineProps>();
</script>
