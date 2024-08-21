<template>
  <ul class="pagination__list">
    <PaginationItem
      v-if="prevBtnValue"
      :href="hrefBase + prevComputedHref"
      text="Назад"
    />
    <PaginationItem
      v-for="number in totalPages"
      :key="number"
      :href="hrefBase + number"
      :text="String(number)"
    />
    <PaginationItem
      v-if="nextBtnValue"
      :href="hrefBase + nextComputedHref"
      text="Далее"
    />
  </ul>
</template>

<script setup lang="ts">
import PaginationItem from '~/ui/pagination/pagination-basic/components/pagination-item.vue';

type PaginationBasicType = {
  totalPages: number
  hrefBase: string
};

const ONLY_ONE_PAGE = 1;
const props = defineProps<PaginationBasicType>();
const rout = useRoute();
const totalPages = toRef(props, 'totalPages');
const prevBtnValue = ref(false);
const nextBtnValue = ref(false);
const currentPaginationNumber = ref(0);

watchEffect(() => {
  const query = rout.query;
  currentPaginationNumber.value = Number(query?.pagination);

  if (totalPages.value !== ONLY_ONE_PAGE) {
    if (currentPaginationNumber.value) {
      const isLeftBorder = Number(currentPaginationNumber.value) === 1;
      const isRightBorder = Number(currentPaginationNumber.value) === totalPages.value;

      if (isLeftBorder) {
        prevBtnValue.value = false;
        nextBtnValue.value = true;
      }
      else if (isRightBorder) {
        prevBtnValue.value = true;
        nextBtnValue.value = false;
      }
      else {
        prevBtnValue.value = true;
        nextBtnValue.value = true;
      }
    }
  }
});

const prevComputedHref = computed(() => {
  if (currentPaginationNumber.value) {
    return Number(currentPaginationNumber.value) - 1;
  }
  else {
    return 1;
  }
});

const nextComputedHref = computed(() => {
  if (currentPaginationNumber.value) {
    return Number(currentPaginationNumber.value) + 1;
  }
  else {
    return 1;
  }
});
</script>
