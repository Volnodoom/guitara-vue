<template>
  <footer class="footer">
    <div class="footer__container container">
      <BaseLogo is-footer />
      <FooterSocial />
      <FooterAboutSection />
      <FooterAdditionalInformation />
      <FooterContacts />
    </div>
  </footer>
</template>

<script setup lang="ts">
import BaseLogo from '~/ui/logo/base-logo.vue';
import FooterAboutSection from '~/ui/custom-footer/components/footer-about-section.vue';
import FooterAdditionalInformation from '~/ui/custom-footer/components/footer-additional-information.vue';
import FooterSocial from '~/ui/custom-footer/components/footer-social.vue';
import FooterContacts from '~/ui/custom-footer/components/footer-contacts.vue';
</script>
