<template>
  <svg
    width="12"
    height="11"
    aria-hidden="true"
  >
    <use
      v-if="isActive"
      xlink:href="#icon-full-star"
    />
    <use
      v-else
      xlink:href="#icon-star"
    />
  </svg>
</template>

<script setup>
defineProps({
  isActive: {
    type: Boolean,
    required: true,
  },
})
</script>
