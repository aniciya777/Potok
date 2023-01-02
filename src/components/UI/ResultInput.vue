<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">
      {{ label }}
    </label>
    <input type="text" class="form-control" :id="id" :value="value" readonly>
  </div>
</template>

<script>
import { BaseCalculationType } from '@/types/types';

export default {
  name: "ResultInput",
  props: {
    value: {
      type: BaseCalculationType,
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
  },
}
</script>

<style scoped lang="scss">

</style>
