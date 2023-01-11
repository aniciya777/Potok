<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Расчёт параметров рент
      </h3>
      <div class="mb-3">
        <label for="rent_types" class="form-label">Расчёт по параметру:</label>
        <div>
          <input type="radio" id="calc_parameter__value_accruedRent" value="value_accruedRent" v-model="calc_parameter" />
          <label for="calc_parameter__value_accruedRent">наращенной сумме к концу срока</label>
        </div>
        <div>
          <input type="radio" id="calc_parameter__value_presentValueOfPermanentRent" value="value_presentValueOfPermanentRent" v-model="calc_parameter" />
          <label for="calc_parameter__value_presentValueOfPermanentRent">современной стоимости постоянной ренты</label>
        </div>
      </div>

      <hr>
      <CalculationInput
        v-if="calc_parameter === 'value_accruedRent'"
        :value="value_accruedRent"
        label="Наращенная сумма к концу срока"
      />
      <CalculationInput
        v-if="calc_parameter === 'value_presentValueOfPermanentRent'"
        :value="value_presentValueOfPermanentRent"
        label="Современная стоимость постоянной ренты"
      />
      <CalculationInput
        :value="this.value_rent.payment"
        label="Годовые платежи по ренте"
      />
      <CalculationInput
        :value="value_rent.duration"
        label="Срок ренты, лет"
      />
      <div class="mb-3">
        <label for="rent_types" class="form-label">Момент выплат платежей</label>
        <select id="rent_types" class="overflow-hidden" v-model="value_rent.type" :size="Object.keys(rent_types).length">
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
        :value="interestRate"
        label="Процентная ставка"
      />
    </div>
  </div>
</template>

<script>
import CalculationInput from "@/components/UI/CalculationInput.vue";
import ResultInput from "@/components/UI/ResultInput.vue";
import {PositivePercent, PositiveValute, Valute} from '@/types/types';
import {Rent} from "@/classes/rent";
import {correctCalcDecorator} from "@/utils/correctCalcDecorator";

export default {
  name: "PageInterestRateCategoryForm",
  components: {
    CalculationInput,
    ResultInput,
  },
  data: function () {
    return {
      value_accruedRent: new PositiveValute(20_000_000),
      value_presentValueOfPermanentRent: new PositiveValute(6_000_000),
      value_rent: new Rent(),
      rent_types: Rent.types,
      calc_parameter: 'value_accruedRent',
      interestRate: new PositivePercent(NaN),
      step_interestRate_default: new PositivePercent(0.0001),
      max_interestRate: new PositivePercent(2),
    };
  },
  beforeMount() {
    this.value_rent.payment.setValue(1000000);
    this.value_rent.interestRate.setValue(0);
    this.value_rent.duration.setValue(10);
    this.value_rent.m.setValue(12);
    this.value_rent.p.setValue(2);
    this.interestRate.error = ' ';
    this.interestRate.wait = true;
  },
  methods: {
    calculateInterestRate() {
      let old_errorFunctionality = undefined;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (this.value_rent.interestRate > this.max_interestRate) {
          throw new Error('Не удалось найти процентную ставку');
        }
        if (this.errorFunctionality <= 0) {
          if (old_errorFunctionality !== undefined) {
            this.value_rent.interestRate.load(new PositivePercent(this.value_rent.interestRate
              + this.step_interestRate * this.errorFunctionality / (old_errorFunctionality - this.errorFunctionality)));
          }
          break;
        }
        old_errorFunctionality = new Valute(+this.errorFunctionality);
        this.value_rent.interestRate.load(new PositivePercent(this.value_rent.interestRate + this.step_interestRate));
      }
    },
    AsyncCalculateInterestRate() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            if (+this.value_rent.payment === 0) {
              return reject(new Error("Платежи не заданы"));
            }
            if (+this.value_rent.duration === 0) {
              return reject(new Error("Срок ренты не задан"));
            }
            this.value_rent.interestRate = new PositivePercent(+this.step_interestRate);
            console.log('this.value_rent.interestRate', this.value_rent.interestRate, this.errorFunctionality);
            if (this.errorFunctionality < 0) {
              if (this.calc_parameter.toString() === 'value_accruedRent') {
                return reject(new Error("Слишком низкая наращенная сумма к концу срока"));
              } else if (this.calc_parameter.toString() === 'value_presentValueOfPermanentRent') {
                return reject(new Error("Слишком высокая современная стоимость постоянной ренты"));
              } else {
                return reject(new Error("Некорректный результат"));
              }
            }
            this.calculateInterestRate();
            return resolve();
          } catch (e) {
            return reject(e);
          }
        }, 0);
      });
    },
    watchHandler() {
      this.interestRate = new PositivePercent(NaN);
      this.interestRate.error = '...';
      this.interestRate.wait = true;
      this.AsyncCalculateInterestRate()
        .finally(() => {
          this.interestRate.wait = false;
        })
        .then(
          () => {
            this.interestRate = new PositivePercent(this.value_rent.interestRate);
          },
          (e) => {
            this.interestRate.error = e.message;
          }
        );
    }
  },
  watch: {
    value_accruedRent: {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
    value_presentValueOfPermanentRent: {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
    'value_rent.payment': {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
    'value_rent.duration': {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
    'value_rent.type': {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
    'value_rent.numberOfPaymentsPerYear': {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
    'value_rent.numberOfInterestPerYear': {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
    calc_parameter: {
      handler: function () {
        this.watchHandler();
      },
      deep: true,
      immediate: false,
    },
  },
  computed: {
    errorFunctionality: correctCalcDecorator(function () {
      if (this.calc_parameter.toString() === 'value_accruedRent') {
        return new Valute(this.value_accruedRent - this.value_rent.accruedRent);
      } else if (this.calc_parameter.toString() === 'value_presentValueOfPermanentRent') {
        return new Valute(this.value_rent.presentValueOfPermanentRent - this.value_presentValueOfPermanentRent);
      } else {
        throw new Error("Неизвестный параметр");
      }
    }),
    step_interestRate: correctCalcDecorator(function () {
      return new PositivePercent(this.step_interestRate_default * this.value_rent.numberOfInterestPerYear);
    }),
  },
}
</script>

<style scoped lang="scss">

</style>
