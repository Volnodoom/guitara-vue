<template>
  <div class="form-search">
    <SearchForm />
    <ul class="form-search__select-list hidden">
      <SearchItem
        v-for="name in mockNameList"
        :key="name"
        :name="name"
      />
    </ul>

    <SearchResetBtn />
  </div>
</template>

<script setup lang="ts">
import SearchForm from '~/ui/custom-header/components/search-form.vue';
import SearchItem from '~/ui/custom-header/components/search-item.vue';
import SearchResetBtn from '~/ui/custom-header/components/search-reset-btn.vue';

const mockNameList = [
  'Четстер Plus',
  'Четстер UX',
  'Четстер UX2',
  'Четстер UX3',
  'Четстер UX4',
  'Четстер UX5',
];
</script>
