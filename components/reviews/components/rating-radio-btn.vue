<template>
  <input
    :id="`star-${lvl}`"
    class="visually-hidden"
    :name="inputName"
    type="radio"
    :value="lvl"
    required
    v-model="picked"
  >
  <label
    class="rate__label"
    :for="`star-${lvl}`"
    :title="RatingCorrelation[lvl]"
  />
</template>

<script setup lang="ts">
import { RatingCorrelation } from '~/utils/name-space/global-ns';

const picked = ref('');

type RatingRadioBtnProps = {
  lvl: number
  inputName: string
};

defineProps<RatingRadioBtnProps>();
</script>
