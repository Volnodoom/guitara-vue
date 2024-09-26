<template>
  <h2 class="modal__header modal__header--review title title--medium">
    Your review
  </h2>
  <h3 class="modal__product-name title title--medium-20 title--uppercase">
    {{ productName }}
  </h3>
  <form class="form-review">
    <div class="form-review__wrapper">
      <div class="form-review__name-wrapper">
        <FormLineBase
          label-for="userName"
          :text-error="nameValidationStatus.errorMessage"
          label-name="Your Name"
          :status="nameValidationStatus.validationStatus"
        />
      </div>
      <div class="rating__wrapper">
        <span class="form-review__label form-review__label--required rating__label-correction">
          Product rating
        </span>
        <div class="rate rate--reverse rate-correction">
          <RatingRadioBtn
            v-for="item in Array.from({ length: 5 }, (_, i) => i + 1).reverse()"
            :key="item"
            :lvl="item"
          />
        </div>
        <FormLineNotification
          text-success=""
          :text-error="ratingValidationStatus.errorMessage"
          class-name="rate__message rating__message-correction"
          :status="ratingValidationStatus.validationStatus"
        />
      </div>
    </div>
    <FormLineBase
      label-for="adv"
      :text-error="advantagesValidationStatus.errorMessage"
      label-name="Advantages"
      :status="advantagesValidationStatus.validationStatus"
    />
    <FormLineBase
      label-for="disadv"
      :text-error="disadvantagesValidationStatus.errorMessage"
      label-name="Disadvantages"
      :status="disadvantagesValidationStatus.validationStatus"
    />
    <FormLineBase
      label-for="comment"
      :text-error="commentValidationStatus.errorMessage"
      label-name="Comments"
      :status="commentValidationStatus.validationStatus"
    />
    <button
      class="button button--medium-20 form-review__button"
      type="submit"
    >
      Post your review
    </button>
  </form>
  <button
    class="modal__close-btn button-cross"
    type="button"
    aria-label="Close."
    @click="onModalClose"
  >
    <span class="button-cross__icon" />
    <span class="modal__close-btn-interactive-area" />
  </button>
</template>

<script setup lang="ts">
import { LoadingStatusLib } from '~/utils/name-space/global-ns';
import FormLineBase from '~/ui/form/form-line-base.vue';
import RatingRadioBtn from '~/components/reviews/components/rating-radio-btn.vue';
import FormLineNotification from '~/ui/notification/form-line-notification/form-line-notification.vue';

type ReviewModalFormProps = {
  productName: string
  onModalClose: () => void
};

defineProps<ReviewModalFormProps>();

const MessageListLib = {
  Empty: 'Please fill out the field',

};

const nameValidationStatus = ref({
  validationStatus: LoadingStatusLib.Error,
  errorMessage: MessageListLib.Empty,
});

const ratingValidationStatus = ref({
  validationStatus: LoadingStatusLib.Error,
  errorMessage: MessageListLib.Empty,
});

const advantagesValidationStatus = ref({
  validationStatus: LoadingStatusLib.Error,
  errorMessage: MessageListLib.Empty,
});

const disadvantagesValidationStatus = ref({
  validationStatus: LoadingStatusLib.Error,
  errorMessage: MessageListLib.Empty,
});

const commentValidationStatus = ref({
  validationStatus: LoadingStatusLib.Error,
  errorMessage: MessageListLib.Empty,
});
</script>

<style scoped>
.rating__wrapper {
  position: relative;
  width: 145px;
}

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
