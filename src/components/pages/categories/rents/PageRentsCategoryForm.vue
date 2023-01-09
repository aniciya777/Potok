<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Расчёт параметров рент
      </h3>
      <CalculationInput
        :value="this.value_rent.payment"
        label="Годовые платежи по ренте"
      />
      <CalculationInput
        :value="value_rent.interestRate"
        label="Ставка сложных процентов"
      />
      <CalculationInput
        :value="value_rent.duration"
        label="Срок ренты, лет"
      />
      <div class="mb-3">
        <select v-model="value_rent.type">
          <option v-for="option in Object.keys(rent_types)" :key="option" v-bind:value="option">
            {{ rent_types[option] }}
          </option>
        </select>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="has_m" v-model="value_rent.has_m">
        <label for="has_m" class="form-check-label">Начисление процентов несколько раз в году</label>
      </div>
      <div class="mb-3 form-check">
        <input class="form-check-input" type="checkbox" id="has_p" v-model="value_rent.has_p">
        <label for="has_p" class="form-check-label">Выплата ренты несколько раз в году равными суммами</label>
      </div>
      <CalculationInput
        v-if="value_rent.has_m"
        :value="value_rent.m"
        label="Количество выплат процентов в год"
      />
      <CalculationInput
        v-if="value_rent.has_p"
        :value="value_rent.p"
        label="Количество выплат рент в год"
      />



      <hr>
      <h3 class="text-center">
        Результаты расчета
      </h3>
      <ResultInput
        :value="value_rent.accruedRent"
        label="Наращенная сумма к концу срока"
      />
      <ResultInput
        :value="value_rent.rentAccumulationFactor"
        label="Коэффициент наращения ренты"
      />
      <hr>
      <ResultInput
        :value="value_rent.presentValueOfPermanentRent"
        label="Современная стоимость постоянной ренты"
      />
      <ResultInput
        :value="value_rent.rentReductionFactor"
        label="Коэффициент приведения ренты"
      />


    </div>
  </div>
</template>

<script>
import CalculationInput from "@/components/UI/CalculationInput.vue";
import ResultInput from "@/components/UI/ResultInput.vue";
import {Rent} from "@/classes/rent";
// import { PositivePercent, PositiveValute, PositiveFloat, NaturalNumber } from '@/types/types';
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
      value_rent: new Rent(),
      rent_types: Rent.types,
    };
  },
  beforeMount() {
    this.value_rent.payment.setValue(1000000);
    this.value_rent.interestRate.setValue(0.1);
    this.value_rent.duration.setValue(10);
    this.value_rent.m.setValue(12);
    this.value_rent.p.setValue(2);
  },
}
</script>

<style scoped lang="scss">

</style>
