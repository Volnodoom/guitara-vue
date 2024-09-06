<template>
  <form class="catalog-filter">
    <h2 class="title title--bigger catalog-filter__title">
      Фильтр
    </h2>

    <CatalogFormSection section-name="Цена, ₽">
      <div class="catalog-filter__price-range">
        <CatalogCustomInput
          id="priceMin"
          hidden-name="Минимальная цена"
          name="от"
          placeholder="1 000"
          @change-input="handleChangeMinInput"
        />

        <CatalogCustomInput
          id="priceMax"
          hidden-name="Максимальная цена"
          name="до"
          placeholder="30 000"
          @change-input="handleChangeMaxInput"
        />
      </div>
    </CatalogFormSection>

    <CatalogFormSection section-name="Тип гитар">
      <CatalogCustomCheckbox
        v-for="({ name, labelName }) of checkBoxMockData"
        :key="name"
        v-model="pickedItemList"
        :name="name"
        :label-name="labelName"
      />
    </CatalogFormSection>

    <CatalogFormSection section-name="Количество струн">
      <CatalogCustomCheckbox
        v-for="({ name, labelName }) of stringsMockData"
        :key="name"
        v-model="pickedStringsList"
        :name="name"
        :label-name="labelName"
      />
    </CatalogFormSection>

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
const pickedStringsList = ref([]);
const minPriceValue = ref();
const maxPriceValue = ref(1_000);

const handleChangeMinInput = (val: number) => {
  minPriceValue.value = val;
};

const handleChangeMaxInput = (val: number) => {
  maxPriceValue.value = val;
};
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

const stringsMockData = [
  {
    name: '4-strings',
    labelName: '4',
  },
  {
    name: '6-strings',
    labelName: '6',
  },
  {
    name: '7-strings',
    labelName: '7',
  },
  {
    name: '12-strings',
    labelName: '12',
  },
];
</script>
