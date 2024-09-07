<template>
  <form
    id="form-search"
    class="form-search__form"
  >
    <SearchSubmitBtn />
    <input
      id="search"
      class="form-search__input"
      type="text"
      autocomplete="off"
      placeholder="что вы ищите?"
    >
    <label
      class="visually-hidden"
      for="search"
    >Поиск</label>
  </form>
</template>

<script setup lang="ts">
import SearchSubmitBtn from '~/ui/custom-header/components/search-submit-btn.vue';
</script>
