<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Расчет сложных процентов
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
        label="Срок ссуды"
      />

      <hr>
      <h3 class="text-center">
        Результаты расчета
      </h3>
      <ResultInput
        :value="compound_interest_factor"
        label="Множитель наращения сложных процентов"
      />
      <ResultInput
        :value="input_i_big"
        label="Проценты за весь период"
      />
      <ResultInput
        :value="input_i_big_p"
        label="Проценты на проценты"
      />
      <ResultInput
        :value="input_s"
        label="Наращенная сумма долга (сумма в конце срока)"
      />
    </div>
  </div>
</template>

<script>
import CalculationInput from "@/components/UI/CalculationInput.vue";
import ResultInput from "@/components/UI/ResultInput.vue";
import { PositiveValute, PositivePercent, PositiveFloat, YearFormat } from '@/types/types';
import {correctCalcDecorator} from "@/utils/correctCalcDecorator";

export default {
  name: "PageCompoundCategoryForm",
  components: {
    CalculationInput,
    ResultInput,
  },
  data() {
    return {
      value_p: new PositiveValute(100000),
      value_i: new PositivePercent(0.1),
      value_n: new YearFormat(5),
    }
  },
  computed: {
    compound_interest_factor: correctCalcDecorator(function () {
      return new PositiveFloat((1 + this.value_i) ** this.value_n);
    }),
    input_i_big: correctCalcDecorator(function () {
      return new PositiveValute(this.value_p * this.compound_interest_factor - this.value_p);
    }),
    input_i_big_p: correctCalcDecorator(function () {
      return new PositiveValute(this.value_p * (this.compound_interest_factor - (1 + this.value_n * this.value_i)));
    }),
    input_s: correctCalcDecorator(function () {
      return new PositiveValute(this.value_p * this.compound_interest_factor);
    }),
  },
}
</script>

<style scoped>

</style>
