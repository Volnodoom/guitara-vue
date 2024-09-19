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
      <table
        class="tabs__table"
        :class="{ hidden: activeTabName !== TabNames.Characteristics }"
      >
        <tr class="tabs__table-row">
          <td class="tabs__title">
            Артикул:
          </td>
          <td class="tabs__value">
            {{ articul }}
          </td>
        </tr>
        <tr class="tabs__table-row">
          <td class="tabs__title">
            Тип:
          </td>
          <td class="tabs__value">
            {{ guitarType }}
          </td>
        </tr>
        <tr class="tabs__table-row">
          <td class="tabs__title">
            Количество струн:
          </td>
          <td class="tabs__value">
            {{ numberOfStrings }} струнная
          </td>
        </tr>
      </table>
      <p
        class="tabs__product-description"
        :class="{ hidden: activeTabName !== TabNames.Description }"
      >
        {{ description }}
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

type ProductDetailsProps = {
  description: string
  articul: string
  guitarType: string
  numberOfStrings: string
};

defineProps<ProductDetailsProps>();
const activeTabName = ref(TabNames.Characteristics);
const route = useRoute();

watchEffect(() => {
  if (route.hash && route.hash === TabNames.Description) {
    activeTabName.value = TabNames.Description;
  }
  else {
    activeTabName.value = TabNames.Characteristics;
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
