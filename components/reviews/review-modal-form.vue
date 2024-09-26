<template>
  <h2 class="modal__header modal__header--review title title--medium">
    Your review
  </h2>
  <h3 class="modal__product-name title title--medium-20 title--uppercase">
    {{ productName }}
  </h3>
  <form
    class="form-review"
    @submit="handleSubmit"
  >
    <div class="form-review__wrapper">
      <div class="form-review__name-wrapper">
        <FormLineBase
          :label-for="userName"
          label-name="Your Name"
        />
      </div>
      <div class="rating__wrapper">
        <FormLineRating :input-name="rate" />
      </div>
    </div>
    <FormLineBase
      :label-for="adv"
      label-name="Advantages"
    />
    <FormLineBase
      :label-for="disadv"
      label-name="Disadvantages"
    />
    <FormLineBase
      :label-for="comment"
      label-name="Comments"
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
import FormLineBase from '~/ui/form/form-line-base.vue';
import FormLineRating from '~/components/reviews/components/form-line-rating.vue';

type ReviewModalFormProps = {
  productName: string
  onModalClose: () => void
};

const { onModalClose } = defineProps<ReviewModalFormProps>();
const userName = 'userName';
const rate = 'rate';
const adv = 'adv';
const disadv = 'disadv';
const comment = 'comment';

const handleSubmit = (evt: Event) => {
  evt.preventDefault();
  const formElement = evt.target as HTMLFormElement;
  const formData = new FormData(formElement);
  const formUserName = formData.get(userName) as string;
  const formRate = Number(formData.get(rate) as string);
  const formAdv = formData.get(adv) as string;
  const formDisadv = formData.get(disadv) as string;
  const formComment = formData.get(comment) as string;

  console.log('data to send: ', {
    formUserName,
    formRate,
    formAdv,
    formDisadv,
    formComment,
  });

  onModalClose();
  formElement.reset();
};
</script>

<style scoped>
.rating__wrapper {
  position: relative;
  width: 145px;
}
</style>
