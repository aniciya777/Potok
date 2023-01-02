<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Расчет простых процентов
      </h3>
      <CalculationInput
        :value="value_p"
        label="Первоначальная сумма долга"
      />
      <CalculationInput
        :value="value_i"
        label="Ставка наращения процентов"
      />
      <CalculationInput
        :value="value_n"
        label="Срок ссуды, лет"
      />

      <hr>
      <h3 class="text-center">
        Результаты расчета
      </h3>
      <ResultInput
        :value="input_i_big"
        label="Проценты за весь период"
      />
      <ResultInput
        :value="input_s"
        label="Наращенная сумма долга (сумма в конце срока)"
      />
    </div>
  </div>
</template>

<script>
import CalculationInput from '@/components/UI/CalculationInput.vue';
import ResultInput from "@/components/UI/ResultInput.vue";
import { correctCalcDecorator } from '@/utils/correctCalcDecorator';
import { PositiveValute, PositivePercent, PositiveFloat } from '@/types/types';
// import * as assert from "assert";

export default {
  name: "PageSimpleCategoryForm",
  components: {
    CalculationInput,
    ResultInput,
  },
  data() {
    return {
      value_p: new PositiveValute(100000),
      value_i: new PositivePercent(0.1),
      value_n: new PositiveFloat(5),
    }
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
