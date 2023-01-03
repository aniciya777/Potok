<template>
  <div class="mb-3">
    <label :for="id" class="form-label">
      {{ label }}
    </label>
    <div class="input-group position-relative">
      <input class="form-control" :id="id" @change="set_value($event)" @focusin="focus_value" :value="value">
      <button class="form-control__clear-btn bi bi-x-circle" @click="clear_value">
      </button>
    </div>
  </div>
</template>

<script>
import { BaseCalculationType } from '@/types/types';

export default {
  name: "CalculationInput",
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
  methods: {
    set_value(event) {
      let obj = this.value.constructor.fromInput(event.target);
      // eslint-disable-next-line vue/no-mutating-props
      this.value.value = obj.value;
      // eslint-disable-next-line vue/no-mutating-props
      this.value.error = obj.error;
    },
    focus_value() {
      this.value.resetError()
    },
    clear_value() {
      this.value.reset();
    },
  },
  computed: {
    id() {
      return `calculation-input-${this.componentID}`;
    },
  }
}
</script>

<style scoped lang="scss">
.form-control__clear-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: bold;
  font-size: 80%;
  line-height: 1rem;
}
</style>
