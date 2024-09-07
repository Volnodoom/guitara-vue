<template>
  <div class="socials footer__socials">
    <ul class="socials__list">
      <SocialItem
        v-for="social in defaultSocialList"
        :key="social.title"
        :title="social.title"
        :link="social.link"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import SocialItem from '~/ui/custom-footer/components/social-item.vue';
import { SocialsNS } from '~/utils/name-space/global-ns';

const defaultSocialList = [
  {
    title: SocialsNS.Skype,
    link: 'https://www.skype.com/',
  },
  {
    title: SocialsNS.Vsco,
    link: 'https://www.vsco.com/',
  },
  {
    title: SocialsNS.Pinterest,
    link: 'https://www.pinterest.com/',
  },
];
</script>
