<template>
  <svg
    :width="starSize || 12"
    :height="starSize || 12"
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

<script setup lang="ts">
type RatingItemProps = {
  isActive: boolean
  starSize?: number
};

defineProps<RatingItemProps>();
</script>
