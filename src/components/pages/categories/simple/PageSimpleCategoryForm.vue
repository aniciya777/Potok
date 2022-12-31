<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Расчет простых процентов
      </h3>
      <div class="mb-3">
        <label for="input-p" class="form-label">
          Первоначальная сумма долга
        </label>
        <div class="input-group position-relative">
          <input class="form-control" id="input-p" @change="set_p($event)" @focusin="focus_p" :value="value_p">
          <button class="form-control__clear-btn" @click="clear_p">X</button>
        </div>
      </div>
      <div class="mb-3">
        <label for="input-i" class="form-label">
          Ставка наращения процентов
        </label>
        <div class="input-group position-relative">
          <input class="form-control" id="input-i" @change="set_i($event)" @focusin="focus_i" :value="value_i">
          <button class="form-control__clear-btn" @click="clear_i">X</button>
        </div>
      </div>
      <div class="mb-3">
        <label for="input-n" class="form-label">
          Срок ссуды, лет
        </label>
        <div class="input-group position-relative">
          <input class="form-control" id="input-n" @change="set_n($event)" @focusin="focus_n" :value="value_n">
          <button class="form-control__clear-btn" @click="clear_n">X</button>
        </div>
      </div>
      <hr>
      <h3 class="text-center">
        Результаты расчета
      </h3>
      <div class="mb-3">
        <label for="input-i-big" class="form-label">
          Проценты за весь период
        </label>
        <input type="text" class="form-control" id="input-i-big" v-model="input_i_big" readonly>
      </div>
      <div class="mb-3">
        <label for="input-s" class="form-label">
          Наращенная сумма долга (сумма в конце срока)
        </label>
        <input type="text" class="form-control" id="input-s" v-model="input_s" readonly>
      </div>
    </div>
  </div>

</template>

<script>
import { correctCalcDecorator } from '@/utils/correctCalcDecorator';
import { PositiveValute, PositivePercent, PositiveFloat } from '@/types/types';
// import * as assert from "assert";

export default {
  name: "PageSimpleCategoryForm",
  data() {
    return {
      value_p: new PositiveValute(100000),
      value_i: new PositivePercent(0.1),
      value_n: new PositiveFloat(5),
    }
  },
  methods: {
    set_i: function (event) {
      this.value_i = PositivePercent.fromInput(event.target);
    },
    clear_i: function () {
      this.value_i.reset();
    },
    focus_i: function () {
      this.value_i.resetError();
    },
    set_p: function (event) {
      this.value_p = PositiveValute.fromInput(event.target);
    },
    clear_p: function () {
      this.value_p.reset();
    },
    focus_p: function () {
      this.value_p.resetError();
    },
    set_n: function (event) {
      this.value_n = PositiveFloat.fromInput(event.target);
    },
    clear_n: function () {
      this.value_n.reset();
    },
    focus_n: function () {
      this.value_n.resetError();
    },
  },
  computed: {
    input_i_big: correctCalcDecorator(function () {
      return new PositiveValute(this.value_p * this.value_i * this.value_n);
    }),
    input_s: correctCalcDecorator(function () {
      return new PositiveValute(this.value_p + this.input_i_big);
    }),
  },
}
</script>

<style scoped lang="scss">

</style>
