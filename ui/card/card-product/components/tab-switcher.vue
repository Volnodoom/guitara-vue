<template>
  <a
    class="button button--medium tabs__button button--prevent-hover"
    :class="{
      'button--black-border': !isSelected,
      'button--prevent-hover': isSelected,
    }"
    :href="`${htag}`"
  >
    {{ title }}
  </a>
</template>

<script setup lang="ts">
type TabSwitcherProps = {
  title: string
  htag: string
  isSelected: boolean
};

defineProps<TabSwitcherProps>();
</script>

<style scoped lang="scss">
.button--prevent-hover {
  &:hover {
    color: #fefafa;
    background-color: #131212;
  }
}
</style>
