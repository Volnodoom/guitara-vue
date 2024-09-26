<template>
  <label
    class="form-review__label form-review__label--required"
    :for="labelFor"
  >
    {{ labelName }}
  </label>
  <input
    :id="labelFor"
    class="form-review__input"
    type="text"
    autocomplete="off"
  >
  <FormLineNotification
    text-success=""
    :text-error="textError"
    class-name="form-review__warning"
    :status="status"
  />
</template>

<script setup lang="ts">
import FormLineNotification from '~/ui/notification/form-line-notification/form-line-notification.vue';
import type { LoadingStatusLib } from '~/utils/name-space/global-ns';

type FormLineBaseProps = {
  labelName: string
  labelFor: string
  textError: string
  status: LoadingStatusLib
};

defineProps<FormLineBaseProps>();
</script>
