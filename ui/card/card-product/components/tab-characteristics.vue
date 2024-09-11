<template>
  <div class="tabs">
    <TabSwitcher
      title="Характеристики"
      :htag="TabNames.Characteristics"
      :is-selected="activeTabName === TabNames.Characteristics"
    />
    <TabSwitcher
      title="Описание"
      :htag="TabNames.Description"
      :is-selected="activeTabName === TabNames.Description"
    />
    <div
      id="characteristics"
      class="tabs__content"
    >
      <table class="tabs__table">
        <tr class="tabs__table-row">
          <td class="tabs__title">
            Артикул:
          </td>
          <td class="tabs__value">
            SO754565
          </td>
        </tr>
        <tr class="tabs__table-row">
          <td class="tabs__title">
            Тип:
          </td>
          <td class="tabs__value">
            Электрогитара
          </td>
        </tr>
        <tr class="tabs__table-row">
          <td class="tabs__title">
            Количество струн:
          </td>
          <td class="tabs__value">
            6 струнная
          </td>
        </tr>
      </table>
      <p class="tabs__product-description hidden">
        Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabSwitcher from '~/ui/card/card-product/components/tab-switcher.vue';

const enum TabNames {
  Characteristics = '#characteristics',
  Description = '#description',
}
const activeTabName = ref(TabNames.Characteristics);
const route = useRoute();

watchEffect(() => {
  if (route.hash) {
    if (route.hash === TabNames.Characteristics) {
      activeTabName.value = TabNames.Characteristics;
    }
    else if (route.hash === TabNames.Description) {
      activeTabName.value = TabNames.Description;
    }
  }
});

watch(() => route.params,
  (currentParam, prevParam) => {
    if (currentParam.id !== prevParam.id) {
      activeTabName.value = TabNames.Characteristics;
    }
  },
);
</script>
