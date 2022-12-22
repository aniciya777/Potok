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
        <input class="form-control" id="input-p" v-model.number="input_p">
      </div>
      <div class="mb-3">
        <label for="input-i" class="form-label">
          Ставка наращения процентов, %
        </label>
        <input class="form-control" id="input-i" v-model.number="input_i">
      </div>
      <div class="mb-3">
        <label for="input-n" class="form-label">
          Срок ссуды, лет
        </label>
        <input class="form-control" id="input-n" v-model.number="input_n">
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
import { correctCalcDecorator } from '@/utils/correctCalcDecorator'
import * as assert from "assert";

export default {
  name: "PageSimpleCategoryForm",
  data() {
    return {
      input_p: 100000,
      input_i: 10,
      input_n: 5,
    }
  },
  computed: {
    input_i_big: correctCalcDecorator(function () {
      assert (this.input_p > 0, "Первоначальная сумма долга должна быть больше нуля");
      return this.input_p * this.input_i / 100 * this.input_n;
    }),
    input_s: function () {
      return this.input_p + this.input_i_big;
    }
  },
}
</script>

<style scoped lang="scss">

</style>
