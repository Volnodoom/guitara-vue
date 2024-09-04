<template>
  <div class="form-checkbox catalog-filter__block-item">
    <input
      :id="name"
      v-model="pickedItem"
      class="visually-hidden"
      type="checkbox"
      :name="name"
      :value="name"
    >
    <label :for="name">{{ labelName }}</label>
  </div>
</template>

<script setup lang="ts">
type CustomCheckboxType = {
  name: string
  labelName: string
};

defineProps<CustomCheckboxType>();
const pickedItem = defineModel<string>();
</script>
