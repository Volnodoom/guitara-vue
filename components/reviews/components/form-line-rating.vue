<template>
  <span class="form-review__label form-review__label--required rating__label-correction">
    Product rating
  </span>
  <div class="rate rate--reverse rate-correction">
    <RatingRadioBtn
      v-for="item in Array.from({ length: 5 }, (_, i) => i + 1).reverse()"
      :key="item"
      :lvl="item"
      :input-name="inputName"
    />
  </div>
  <FormLineNotification
    text-success=""
    class-name="rate__message rating__message-correction"
    :text-error="generalValidationStatus.errorMessage"
    :status="generalValidationStatus.validationStatus"
  />
</template>

<script setup lang="ts">
import FormLineNotification from '~/ui/notification/form-line-notification/form-line-notification.vue';
import RatingRadioBtn from '~/components/reviews/components/rating-radio-btn.vue';
import { LoadingStatusLib } from '~/utils/name-space/global-ns';

type FormLineRatingProps = {
  inputName: string
};

defineProps<FormLineRatingProps>();

const MessageListLib = {
  Empty: 'Please fill out the field',
};

const generalValidationStatus = ref({
  validationStatus: LoadingStatusLib.Idle,
  errorMessage: MessageListLib.Empty,
});
</script>

<style scoped>
.rating__message-correction {
  width: 145px;
  bottom: 5px;
  text-align: end;
  padding-right: 12px;
}

.rate-correction {
  justify-content: end;
}

.rating__label-correction {
  right: -50px;
}
</style>
