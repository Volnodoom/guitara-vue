<template>
  <header
    id="header"
    class="header"
  >
    <div class="container header__wrapper">
      <Logo />
      <HeadNavigation />
      <HeadSearch />
      <HeadCart />
    </div>
  </header>
</template>

<script setup lang="ts">
import HeadNavigation from '~/ui/custom-header/components/head-navigation.vue';
import HeadSearch from '~/ui/custom-header/components/head-search.vue';
import HeadCart from '~/ui/custom-header/components/head-cart.vue';
import Logo from '~/ui/logo/base-logo.vue';
</script>
