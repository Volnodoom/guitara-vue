<template>
  <label
    class="form-review__label form-review__label--required"
    :for="labelFor"
  >
    {{ labelName }}
  </label>
  <input
    :id="labelFor"
    :name="labelFor"
    class="form-review__input"
    type="text"
    autocomplete="off"
    required
    @input="handleInput"
  >
  <FormLineNotification
    class-name="form-review__warning"
    text-success=""
    :text-error="generalValidationStatus.errorMessage"
    :status="generalValidationStatus.validationStatus"
  />
</template>

<script setup lang="ts">
import FormLineNotification from '~/ui/notification/form-line-notification/form-line-notification.vue';
import { LoadingStatusLib } from '~/utils/name-space/global-ns';

type FormLineBaseProps = {
  labelName: string
  labelFor: string
};

defineProps<FormLineBaseProps>();

const MessageListLib = {
  Empty: 'Please fill out the field',
};

const generalValidationStatus = ref({
  validationStatus: LoadingStatusLib.Idle,
  errorMessage: MessageListLib.Empty,
});

const handleInput = (evt: Event) => {
  const value = (evt.target as HTMLInputElement).value;

  if (value.trim() === '') {
    generalValidationStatus.value.validationStatus = LoadingStatusLib.Error;
    return;
  }

  generalValidationStatus.value.validationStatus = LoadingStatusLib.Idle;
};
</script>
