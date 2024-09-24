<template>
  <template v-if="hasCouponProceeded">
    <p
      v-if="isCouponApplied"
      class="form-input__message form-input__message--success"
    >
      Promo code is valid
    </p>
    <p
      v-else
      class="form-input__message form-input__message--error"
    >
      Promo code is invalid
    </p>
  </template>

  <template v-else />
</template>

<script setup lang="ts">
  type CartCouponMessageProps = {
    hasCouponProceeded: boolean
    isCouponApplied: boolean
  };

defineProps<CartCouponMessageProps>();
</script>
