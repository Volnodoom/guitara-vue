<template>
  <input
    :id="`star-${lvl}`"
    class="visually-hidden"
    name="rate"
    type="radio"
    :value="lvl"
  >
  <label
    class="rate__label"
    :for="`star-${lvl}`"
    :title="RatingCorrelation[lvl]"
  />
</template>

<script setup lang="ts">
import { RatingCorrelation } from '~/utils/name-space/global-ns';

type RatingRadioBtnProps = {
  lvl: number
};

defineProps<RatingRadioBtnProps>();
</script>
