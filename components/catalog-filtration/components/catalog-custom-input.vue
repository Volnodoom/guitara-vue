<template>
  <div class="form-input">
    <label class="visually-hidden">{{ hiddenName }}</label>
    <input
      :id="id"
      type="text"
      :placeholder="placeholder.toLocaleString('ru-RU')"
      :name="name"
      :value="value ? value.toLocaleString('ru-RU') : ''"
      @input="handleInput"
    >
  </div>
</template>

<script setup lang="ts">
type CustomInputType = {
  hiddenName: string
  name: string
  placeholder: number
  id: string
};

defineProps<CustomInputType>();
const emit = defineEmits(['changeInput']);
const value = ref<number>();

const handleInput = (evt: Event) => {
  const inputValue = (evt.target as HTMLInputElement).value;

  const pureNumber = Number(inputValue
    .split('')
    .map(value => value.trim())
    .filter(value => Boolean(value)).join(''),
  );

  value.value = pureNumber;
  emit('changeInput', pureNumber);
};
</script>
