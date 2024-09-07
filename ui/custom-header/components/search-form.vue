<template>
  <form
    id="form-search"
    class="form-search__form"
  >
    <button
      class="form-search__submit"
      type="submit"
    >
      <svg
        class="form-search__icon"
        width="14"
        height="15"
        aria-hidden="true"
      >
        <use xlink:href="#icon-search" />
      </svg><span class="visually-hidden">Начать поиск</span>
    </button>
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

<script>
export default {

}
</script>
