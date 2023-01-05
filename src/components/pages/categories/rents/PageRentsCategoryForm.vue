<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Расчёт параметров рент
      </h3>
      <CalculationInput
        :value="value_rent"
        label="Годовые платежи по ренте"
      />
      <CalculationInput
        :value="value_i"
        label="Ставка сложных процентов"
      />
      <CalculationInput
        :value="value_n"
        label="Срок ренты, лет"
      />

      <CalculationInput
        :value="value_m"
        label="Количество выплат процентов в год"
      />
      <CalculationInput
        :value="value_p"
        label="Количество выплат рент в год"
      />

      <hr>
      <h3 class="text-center">
        Результаты расчета
      </h3>
<!--      <ResultInput-->
<!--        :value="total_r"-->
<!--        label="Выплата по заменяющей ренте"-->
<!--      />-->

    </div>
  </div>
</template>

<script>
import CalculationInput from "@/components/UI/CalculationInput.vue";
import ResultInput from "@/components/UI/ResultInput.vue";
import { PositivePercent, PositiveValute, PositiveFloat, NaturalNumber } from '@/types/types';
// eslint-disable-next-line no-unused-vars
import {correctCalcDecorator} from "@/utils/correctCalcDecorator";

export default {
  name: "PageRentConversionsCategoryForm",
  components: {
    CalculationInput,
    // eslint-disable-next-line vue/no-unused-components
    ResultInput,
  },
  data() {
    return {
      value_i: new PositivePercent(0.05),
      value_rent: new PositiveValute(1000),
      value_n: new PositiveFloat(10),
      value_m: new NaturalNumber(12),
      value_p: new NaturalNumber(2),
    };
  },
}
</script>

<style scoped lang="scss">

</style>
