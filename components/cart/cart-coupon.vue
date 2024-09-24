<template>
  <div class="cart__coupon coupon">
    <h2 class="title title--little coupon__title">
      Get discount
    </h2>
    <p class="coupon__info">
      Inter the promo code if you have.
    </p>
    <form
      id="coupon-form"
      class="coupon__form"
      method="post"
      action="/"
      @submit.prevent="handleCouponSubmit"
    >
      <div class="form-input coupon__input">
        <label class="visually-hidden">Promo code</label>
        <input
          id="coupon"
          type="text"
          placeholder="Inter the promo cod"
          name="coupon"
        >
        <CartCouponMessage
          :has-coupon-proceeded="hasCouponProceeded"
          :is-coupon-applied="isCouponApplied"
        />
      </div>
      <button
        class="button button--big coupon__button"
      >
        Apply
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
type CartCouponProps = {
  hasCouponProceeded: boolean
  isCouponApplied: boolean
  handleCouponSubmit: () => void
};

defineProps<CartCouponProps>();
</script>
