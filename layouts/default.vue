<template>
  <SvgSprint />
  <div class="wrapper">
    <CustomHeader />
    <main class="page-content">
      <slot />
    </main>
    <CustomFooter />
  </div>
</template>

<script setup>
import SvgSprint from '~/ui/svg-sprint/svg-sprint.vue';
import CustomHeader from '~/ui/custom-header/custom-header.vue';
import CustomFooter from '~/ui/custom-footer/custom-footer.vue';

useHead({
  htmlAttrs: {
    lang: 'en',
  },
});
</script>
