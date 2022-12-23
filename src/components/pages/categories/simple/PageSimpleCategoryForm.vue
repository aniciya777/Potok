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
        <input class="form-control" id="input-p" v-model="input_p">
      </div>
      <div class="mb-3">
        <label for="input-i" class="form-label">
          Ставка наращения процентов
        </label>
        <input class="form-control" id="input-i" @change="set_i($event)" v-on:value="value_i">
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
import { Valute, Percent } from '@/types/types';
import * as assert from "assert";

export default {
  name: "PageSimpleCategoryForm",
  data() {
    return {
      value_p: new Valute(100000),
      value_i: new Percent(10),
      input_n: 5,
    }
  },
  methods: {
    set_i: function (value) {
      let s = value.target.value.toString().replace(',', '.').replace(/[^.\d]/g, '');
      this.value_i = new Percent(s);
      console.log(value);
    },
  },
  computed: {
    input_p: {
      get() {
        return this.value_p;
      },
      set(value) {
        let s = value.toString().replace(/\D/g, '');
        console.log(s);
        this.value_p = new Valute(s / 100);
      }
    },
    input_i: {
      get() {
        return this.value_i;
      },
      set(value) {
        this.value_i = value;
      }
    },
    input_i_big: correctCalcDecorator(function () {
      assert (this.input_p > 0, "Первоначальная сумма долга должна быть больше нуля");
      return new Valute(this.value_p * this.input_i / 100 * this.input_n);
    }),
    input_s: correctCalcDecorator(function () {
      return new Valute(this.value_p + this.input_i_big);
    }),
  },
  watch: {
    input_i: function (val, oldVal) {
      console.log(val, oldVal);
    }
  },
}
</script>

<style scoped lang="scss">

</style>
