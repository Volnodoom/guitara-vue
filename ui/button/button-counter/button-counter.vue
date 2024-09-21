<template>
  <button
    class="quantity__button"
    :aria-label="ariaLabel"
  >
    <svg
      width="8"
      height="8"
      aria-hidden="true"
    >
      <use
        :xlink:href="iconName"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ChangeCountLib } from '~/utils/name-space/global-ns';

type ButtonCounterProps = {
  countType: ChangeCountLib
};

const AriaLabelLib = {
  increase: 'Increase count',
  decrease: 'Decrease count',
};

const { countType } = defineProps<ButtonCounterProps>();

const ariaLabel = computed(() => AriaLabelLib[countType]);
const iconName = computed(() => countType === ChangeCountLib.Increase ? '#icon-plus' : '#icon-minus');
</script>
