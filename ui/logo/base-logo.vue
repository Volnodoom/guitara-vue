<template>
  <a
    :class="`${isFooter ? 'footer__logo' : 'header__logo'}` +' logo'"
  >
    <img
      class="logo__img"
      width="70"
      height="70"
      src="/assets/img/svg/logo.svg"
      alt="Логотип"
    >
  </a>
</template>

<script setup lang="ts">
type HeadLogoProps = {
  isFooter?: boolean
};

defineProps<HeadLogoProps>();
</script>
