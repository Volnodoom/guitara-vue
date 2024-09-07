<template>
  <footer class="footer">
    <div class="footer__container container">
      <BaseLogo is-footer />
      <div class="socials footer__socials">
        <ul class="socials__list">
          <li class="socials-item">
            <a
              class="socials__link"
              href="https://www.skype.com/"
              aria-label="skype"
            >
              <svg
                class="socials__icon"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <use xlink:href="#icon-skype" />
              </svg></a>
          </li>
          <li class="socials-item">
            <a
              class="socials__link"
              href="https://www.vsco.com/"
              aria-label="vsco"
            >
              <svg
                class="socials__icon"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <use xlink:href="#icon-vsco" />
              </svg></a>
          </li>
          <li class="socials-item">
            <a
              class="socials__link"
              href="https://www.pinterest.com/"
              aria-label="pinterest"
            >
              <svg
                class="socials__icon"
                width="24"
                height="24"
                aria-hidden="true"
              >
                <use xlink:href="#icon-pinterest" />
              </svg></a>
          </li>
        </ul>
      </div>
      <section class="footer__nav-section footer__nav-section--info">
        <h2 class="footer__nav-title">
          О нас
        </h2>
        <p class="footer__nav-content footer__nav-content--font-secondary">
          Магазин гитар, музыкальных инструментов и гитарная мастерская <br> в Санкт-Петербурге.<br><br>Все инструменты проверены, отстроены <br> и доведены до идеала!
        </p>
      </section>
      <section class="footer__nav-section footer__nav-section--links">
        <h2 class="footer__nav-title">
          Информация
        </h2>
        <ul class="footer__nav-list">
          <li class="footer__nav-list-item">
            <a
              class="link"
              href="#top"
            >Где купить?</a>
          </li>
          <li class="footer__nav-list-item">
            <a
              class="link"
              href="#top"
            >Блог</a>
          </li>
          <li class="footer__nav-list-item">
            <a
              class="link"
              href="#top"
            >Вопрос - ответ</a>
          </li>
          <li class="footer__nav-list-item">
            <a
              class="link"
              href="#top"
            >Возврат</a>
          </li>
          <li class="footer__nav-list-item">
            <a
              class="link"
              href="#top"
            >Сервис-центры</a>
          </li>
        </ul>
      </section>
      <section class="footer__nav-section footer__nav-section--contacts">
        <h2 class="footer__nav-title">
          Контакты
        </h2>
        <p class="footer__nav-content">
          г. Санкт-Петербург,<br> м. Невский проспект, <br>ул. Казанская 6.
        </p>
        <div class="footer__nav-content">
          <svg
            class="footer__icon"
            width="8"
            height="8"
            aria-hidden="true"
          >
            <use xlink:href="#icon-phone" />
          </svg><a
            class="link"
            href="tel:88125005050"
          > 8-812-500-50-50</a>
        </div>
        <p class="footer__nav-content">
          Режим работы:<br><span class="footer__span">
            <svg
              class="footer__icon"
              width="13"
              height="13"
              aria-hidden="true"
            >
              <use xlink:href="#icon-clock" />
            </svg><span> с 11:00 до 20:00</span><span>без выходных</span></span>
        </p>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts">

import BaseLogo from "~/ui/logo/base-logo.vue";
</script>
