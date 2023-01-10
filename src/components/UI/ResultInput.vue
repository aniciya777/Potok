<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}
    </label>
    <input type="text" :class="inputClasses" :id="id" :value="value" readonly>
  </div>
</template>

<script>
import { BaseCalculationType } from '@/types/types';

export default {
  name: "ResultInput",
  props: {
    value: {
      type: [BaseCalculationType, String],
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
  },
  computed: {
    id() {
      return `result-input-${this.componentID}`;
    },
    inputClasses() {
      return {
        "form-control": true,
        "input_is-invalid": this.value instanceof String && this.value !== '...' || this.value.error !== null && !this.value.wait,
        "input_waiting": this.value instanceof String && this.value === '...' || this.value.wait,
      };
    },
  },
}
</script>

<style scoped lang="scss">

</style>
