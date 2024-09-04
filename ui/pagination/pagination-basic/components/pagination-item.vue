<template>
  <li
    class="pagination__page"
    :class="{ 'pagination__page--prev': isSpecial }"
  >
    <NuxtLink
      class="link pagination__page-link"
      :class="{ 'pagination__page--active': isActivePagination }"
      :href="href"
    >
      {{ text }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
type PaginationItemProps = {
  href: string
  text: string
};

const props = defineProps<PaginationItemProps>();
const rout = useRoute();

const text = toRef(props, 'text');
const isSpecial = ref(false);
const isActivePagination = ref(false);

watchEffect(async () => {
  const query = rout.query;
  const hasPagination = query?.pagination;

  // do not take in account the case when pagination starts from 0
  isSpecial.value = !parseInt(text.value, 10);

  if (!hasPagination) {
    await navigateTo ({ query: { ...query, pagination: 1 } });
  }

  isActivePagination.value = query?.pagination === text.value;
});
</script>
