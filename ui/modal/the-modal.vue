<template>
  <div
    v-show="isActive"
    class="modal"
    :class="{ 'is-active': isActive }"
  >
    <div class="modal__wrapper">
      <div
        class="modal__overlay"
        data-close-modal=""
        @click="onModalClose"
      />
      <div
        :class="`modal__content ${className}`"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  type TheModalProps = {
    onModalClose: () => void
    className: string
    isActive: boolean
  };

defineProps<TheModalProps>();
</script>
