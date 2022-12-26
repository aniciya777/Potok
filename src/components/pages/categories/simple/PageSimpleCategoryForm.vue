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
          <input class="form-control" id="input-p" @change="set_p($event)" :value="value_p">
          <button class="form-control__clear-btn">X</button>
        </div>
      </div>
      <div class="mb-3">
        <label for="input-i" class="form-label">
          Ставка наращения процентов
        </label>
        <input class="form-control" id="input-i" @change="set_i($event)" :value="value_i">
      </div>
      <div class="mb-3">
        <label for="input-n" class="form-label">
          Срок ссуды, лет
        </label>
        <input class="form-control" id="input-n" v-model="input_n">
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
import { PositiveValute, PositivePercent } from '@/types/types';
// import * as assert from "assert";

export default {
  name: "PageSimpleCategoryForm",
  data() {
    return {
      value_p: new PositiveValute(100000),
      value_i: new PositivePercent(0.1),
      input_n: 5,
    }
  },
  methods: {
    set_i: function (event) {
      this.value_i = PositivePercent.fromInput(event.target);
    },
    set_p: function (event) {
      this.value_p = PositiveValute.fromInput(event.target);
    },
  },
  computed: {
    // input_p: {
    //   get() {
    //     return this.value_p;
    //   },
    //   set(value) {
    //     let s = value.toString().replace(/\D/g, '');
    //     console.log(s);
    //     this.value_p = new Valute(s / 100);
    //   }
    // },
    input_i_big: correctCalcDecorator(function () {
      return 0;
      // return new Valute(this.value_p * this.value_i / 100 * this.input_n);
    }),
    input_s: correctCalcDecorator(function () {
      return 0;
      // return new Valute(this.value_p + this.input_i_big);
    }),
  },
}
</script>

<style scoped lang="scss">

</style>
