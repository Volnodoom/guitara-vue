<template>
  <form class="catalog-filter">
    <h2 class="title title--bigger catalog-filter__title">
      Фильтр
    </h2>
    <fieldset class="catalog-filter__block">
      <legend class="catalog-filter__block-title">
        Цена, ₽
      </legend>
      <div class="catalog-filter__price-range">
        <div class="form-input">
          <label class="visually-hidden">Минимальная цена</label>
          <input
            id="priceMin"
            type="number"
            placeholder="1 000"
            name="от"
          >
        </div>
        <div class="form-input">
          <label class="visually-hidden">Максимальная цена</label>
          <input
            id="priceMax"
            type="number"
            placeholder="30 000"
            name="до"
          >
        </div>
      </div>
    </fieldset>
    <fieldset class="catalog-filter__block">
      <legend class="catalog-filter__block-title">
        Тип гитар
      </legend>
      <CatalogCustomCheckbox
        v-for="({ name, labelName }) of checkBoxMockData"
        :key="name"
        v-model="pickedItemList"
        :name="name"
        :label-name="labelName"
      />
    </fieldset>
    <fieldset class="catalog-filter__block">
      <legend class="catalog-filter__block-title">
        Количество струн
      </legend>
      <div class="form-checkbox catalog-filter__block-item">
        <input
          id="4-strings"
          class="visually-hidden"
          type="checkbox"
          name="4-strings"
          checked
        >
        <label for="4-strings">4</label>
      </div>
      <div class="form-checkbox catalog-filter__block-item">
        <input
          id="6-strings"
          class="visually-hidden"
          type="checkbox"
          name="6-strings"
          checked
        >
        <label for="6-strings">6</label>
      </div>
      <div class="form-checkbox catalog-filter__block-item">
        <input
          id="7-strings"
          class="visually-hidden"
          type="checkbox"
          name="7-strings"
        >
        <label for="7-strings">7</label>
      </div>
      <div class="form-checkbox catalog-filter__block-item">
        <input
          id="12-strings"
          class="visually-hidden"
          type="checkbox"
          name="12-strings"
          disabled
        >
        <label for="12-strings">12</label>
      </div>
    </fieldset>
    <button
      class="catalog-filter__reset-btn button button--black-border button--medium"
      type="reset"
    >
      Очистить
    </button>
  </form>
</template>

<script setup lang="ts">
const pickedItemList = ref([]);
const checkBoxMockData = [
  {
    name: 'acoustic',
    labelName: 'Акустические гитары',
  },
  {
    name: 'electric',
    labelName: 'Электрогитары',
  },
  {
    name: 'ukulele',
    labelName: 'Укулеле',
  },
];
</script>
