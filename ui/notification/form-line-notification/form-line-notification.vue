<template>
  <p
    v-if="status === LoadingStatusLib.Success"
    :class="`${className} form-input__message--success`"
  >
    {{ textSuccess }}
  </p>

  <p
    v-else-if="status === LoadingStatusLib.Error"
    :class="`${className} form-input__message--error`"
  >
    {{ textError }}
  </p>

  <p
    v-else
    :class="`${className} form-input__message--error`"
    style="color: transparent"
    aria-hidden="true"
  >
    {{ textError }}
  </p>
</template>

<script setup lang="ts">
import { LoadingStatusLib } from '~/utils/name-space/global-ns';

type FormLineNotificationProps = {
  className?: string
  status?: LoadingStatusLib
  textSuccess?: string
  textError?: string
};

defineProps<FormLineNotificationProps>();
</script>
