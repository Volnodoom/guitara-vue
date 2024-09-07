<template>
  <li class="socials-item">
    <a
      class="socials__link"
      :href="link"
      aria-label="skype"
    >
      <svg
        class="socials__icon"
        width="24"
        height="24"
        aria-hidden="true"
      >
        <use :xlink:href="svgName" />
      </svg></a>
  </li>
</template>

<script setup lang="ts">
import type { SocialsNS } from '~/utils/name-space/global-ns';

type SocialItemProps = {
  link?: string
  title: SocialsNS
};

const { link = '#top', title } = defineProps<SocialItemProps>();
const svgName = `#icon-${title}`;
</script>
