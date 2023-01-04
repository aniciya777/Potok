<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Инвестиционный проект
      </h3>
      <CalculationInput
        :value="value_i"
        label="Процентная ставка"
      />

      <hr>
      <CalculationInput
        :value="value_p_new"
        :label="'Платежи за ' + (value_n + 1) + ' год'"
      />
      <div class="mb-3">
        <button class="btn btn-primary w-100" @click="addNewP()">
          Добавить
        </button>
      </div>
      <div v-if="value_n > 0">
        <table class="table table_rents">
          <thead>
          <tr>
            <th>Год</th>
            <th>Платежи</th>
            <th>
              <button
                class="btn btn-remove btn-primary"
                @click="removeAllP()"
              >
                <span class="d-none d-lg-block">Удалить все</span>
                <i class="bi bi-eraser-fill d-block d-lg-none"></i>
              </button>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(p, index) in value_array_p" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ p }}</td>
            <td>
              <button
                class="btn btn-remove btn-primary"
                @click="removeP(index)"
              >
                <span class="d-none d-lg-block">Удалить</span>
                <i class="bi bi-x d-block d-lg-none"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>
          <i>
            Платежи не заданы
          </i>
        </p>
      </div>

      <hr>
      <h3 class="text-center">
        Результаты расчета
      </h3>
      <ResultInput
        :value="value_ic"
        label="Инвестиции"
      />
      <ResultInput
        :value="value_pv"
        label="Общая накопленная величина дисконтированных доходов"
      />
      <ResultInput
        :value="value_npv"
        label="Чистый дисконтированный доход"
      />
      <ResultInput
        :value="value_pi"
        label="Индекс рентабельности инвестиций"
      />
      <ResultInput
        :value="value_dpp"
        label="Дисконтированный срок окупаемости инвестиций, лет"
      />
      <ResultInput
        :value="value_dpp_years"
      />
      <ResultInput
        :value="value_irr"
        label="Внутренняя норма доходности"
      />

    </div>
  </div>
</template>

<script>
import CalculationInput from "@/components/UI/CalculationInput.vue";
import ResultInput from "@/components/UI/ResultInput.vue";
import {Valute, PositivePercent, PositiveValute, PositiveFloat, YearFormat} from '@/types/types';
import {correctCalcDecorator} from "@/utils/correctCalcDecorator";

export default {
  name: "PageInvestmentsCategoryForm",
  components: {
    CalculationInput,
    ResultInput,
  },
  data() {
    return {
      value_array_p: [
        new Valute(-100_000),
        new Valute(-150_000),
        new Valute(50_000),
        new Valute(150_000),
        new Valute(200_000),
        new Valute(200_000),
        new Valute(50_000),
      ],
      value_p_new: new Valute(100_000),
      value_i: new PositivePercent(0.1),
      step_irr: new PositivePercent(0.0001),
      max_irr: new PositivePercent(2),
      value_irr: new PositivePercent(NaN),
    };
  },
  methods: {
    addNewP() {
      try {
        let p = new Valute(this.value_p_new);
        this.value_array_p.push(p);
      } catch (e) { /* empty */
      }
    },
    removeP(index) {
      this.value_array_p.splice(index, 1);
    },
    removeAllP() {
      this.value_array_p = [];
    },
    calcPV: correctCalcDecorator(function (power) {
      let pv = new PositiveValute(0);
      for (let i = 0; i < this.value_n; i++) {
        if (this.value_array_p[i] > 0) {
          pv = new PositiveValute(pv + this.value_array_p[i] / (1 + power) ** (i + 1));
        }
      }
      return pv;
    }),
    calcIC: correctCalcDecorator(function (power) {
      let ic = new PositiveValute(0);
      for (let i = 0; i < this.value_n; i++) {
        if (this.value_array_p[i] < 0) {
          ic = new PositiveValute(ic + -this.value_array_p[i] / (1 + power) ** (i + 1));
        }
      }
      return ic;
    }),
    calcNPV: correctCalcDecorator(function (power) {
      return new Valute(this.calcPV(power) - this.calcIC(power));
    }),
    AsyncCalculateIRR() {
      return new Promise((resolve) => {
        setTimeout(() => {
          try {
            if (this.value_ic.value === 0) {
              this.value_irr = new PositivePercent(NaN);
              this.value_irr.error='Инвестиции не заданы';
              resolve();
            } else {
              this.value_irr = new PositivePercent(0);
              this.calculateIRR();
              resolve();
            }
          } catch (e) {
            this.value_irr = new PositivePercent(NaN);
            this.value_irr.error=e.message;
            resolve();
          }
        }, 0);
      });
    },
    calculateIRR() {
      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (this.value_irr.value > this.max_irr.value) {
          throw new Error('Не удалось найти внутреннюю норму доходности');
        }
        try {
          if (this.calcNPV(this.value_irr) <= 0) {
            if (this.value_irr >= this.step_irr) {
              this.value_irr = new PositivePercent(this.value_irr - this.step_irr);
            }
            break;
          } else {
            this.value_irr = new PositivePercent(this.value_irr + this.step_irr);
          }
        } catch (e) {
          this.value_irr = new PositiveFloat(NaN);
          this.value_irr.error = "Не удалось найти IRR";
          break;
        }
      }
    },
  },
  computed: {
    value_n() {
      return this.value_array_p.length;
    },
    value_pv() {
      return this.calcPV(this.value_i);
    },
    value_ic() {
      return this.calcIC(this.value_i);
    },
    value_npv: correctCalcDecorator(function () {
      this.AsyncCalculateIRR();
      return this.calcNPV(this.value_i);
    }),
    value_pi: correctCalcDecorator(function () {
      return new PositiveFloat(this.value_pv / this.value_ic);
    }),
    value_dpp: correctCalcDecorator(function () {
      if (this.value_npv < 0) {
        throw new Error("Инвестиции не окупаются");
      }
      let npv = 0;
      let old_npv = 0;
      let year = 0;
      for (; year < this.value_n; year++) {
        old_npv = npv;
        npv = old_npv + this.value_array_p[year] / (1 + this.value_i) ** (year + 1);
        if (npv === 0) {
          return new PositiveFloat(year + 1);
        }
        if (npv > 0) {
          break;
        }
      }
      return new PositiveFloat(year - old_npv / (npv - old_npv));
    }),
    value_dpp_years: correctCalcDecorator(function () {
      if (this.value_npv < 0) {
        throw new Error("Инвестиции не окупаются");
      }
      return new YearFormat(this.value_dpp);
    }),
  },
}
</script>

<style scoped lang="scss">

</style>
