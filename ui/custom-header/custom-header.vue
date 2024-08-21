<template>
  <header
    id="header"
    class="header"
  >
    <div class="container header__wrapper">
      <a class="header__logo logo"><img
        class="logo__img"
        width="70"
        height="70"
        src="/assets/img/svg/logo.svg"
        alt="Логотип"
      ></a>
      <nav class="main-nav">
        <ul class="main-nav__list">
          <li>
            <a
              class="link main-nav__link link--current"
              href="#"
            >Каталог</a>
          </li>
          <li>
            <a
              class="link main-nav__link"
              href="#"
            >Где купить?</a>
          </li>
          <li>
            <a
              class="link main-nav__link"
              href="#"
            >О компании</a>
          </li>
        </ul>
      </nav>
      <div class="form-search">
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
        <ul class="form-search__select-list hidden">
          <li
            class="form-search__select-item"
            tabindex="0"
          >
            Четстер Plus
          </li>
          <li
            class="form-search__select-item"
            tabindex="0"
          >
            Четстер UX
          </li>
          <li
            class="form-search__select-item"
            tabindex="0"
          >
            Четстер UX2
          </li>
          <li
            class="form-search__select-item"
            tabindex="0"
          >
            Четстер UX3
          </li>
          <li
            class="form-search__select-item"
            tabindex="0"
          >
            Четстер UX4
          </li>
          <li
            class="form-search__select-item"
            tabindex="0"
          >
            Четстер UX5
          </li>
        </ul>
        <button
          class="form-search__reset"
          type="reset"
          form="form-search"
        >
          <svg
            class="form-search__icon"
            width="14"
            height="15"
            aria-hidden="true"
          >
            <use xlink:href="#icon-close" />
          </svg><span class="visually-hidden">Сбросить поиск</span>
        </button>
      </div>
      <a
        class="header__cart-link"
        href="#"
        aria-label="Корзина"
      >
        <svg
          class="header__cart-icon"
          width="14"
          height="14"
          aria-hidden="true"
        >
          <use xlink:href="#icon-basket" />
        </svg>
        <span class="visually-hidden">Перейти в корзину</span>
        <span class="header__cart-count">2</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CustomHeader',
}
</script>
