<template>
  <a
    class="button button--medium tabs__button"
    :class="{ 'button--black-border': !isSelected }"
    :href="`${htag}`"
  >{{ title }}</a>
</template>

<script setup lang="ts">
type TabSwitcherProps = {
  title: string
  htag: string
  isSelected: boolean
};

defineProps<TabSwitcherProps>();
</script>
