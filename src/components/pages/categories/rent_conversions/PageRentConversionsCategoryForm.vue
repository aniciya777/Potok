<template>
  <div class="row">
    <div class="form-calculator">
      <hr>
      <h3 class="text-center">
        Параметры старых рент
      </h3>
      <CalculationInput
        :value="value_rent_new"
        label="Годовые платежи по ренте"
      />
      <CalculationInput
        :value="value_n_new"
        label="Срок ренты, лет"
      />
      <div class="mb-3">
        <button class="btn btn-primary w-100" @click="addNewRent()">
          Добавить ренту
        </button>
      </div>
      <div v-if="count_rents > 0">
        <table class="table table_rents">
          <thead>
            <tr>
              <th>#</th>
              <th>Годовой платёж</th>
              <th>Срок</th>
              <th>
                <button
                  class="btn btn-remove btn-primary"
                  @click="removeAllRents()"
                >
                  <span class="d-none d-lg-block">Удалить все</span>
                  <i class="bi bi-eraser-fill d-block d-lg-none"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(rent, index) in array_rent" :key="index">
              <td>{{ index + 1 }}.</td>
              <td>{{ rent }}</td>
              <td>{{ array_n[index] }}</td>
              <td>
                <button
                  class="btn btn-remove btn-primary"
                  @click="removeRent(index)"
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
            Нет рент, которые можно заменить
          </i>
        </p>
      </div>

      <hr>
      <h3 class="text-center">
        Параметры новой ренты
      </h3>
      <CalculationInput
        :value="value_i"
        label="Процентная ставка у заменяющей ренты"
      />

      <hr>
      <h3 class="text-center">
        Результаты расчета
      </h3>
      <ResultInput
        :value="total_r"
        label="Выплата по заменяющей ренте"
      />
      <ResultInput
        :value="total_n"
        label="Срок заменяющей ренты, лет"
      />
      <ResultInput
        :value="total_n_format"
      />
    </div>
  </div>
</template>

<script>
import CalculationInput from "@/components/UI/CalculationInput.vue";
import ResultInput from "@/components/UI/ResultInput.vue";
import { PositivePercent, PositiveValute, PositiveFloat, YearFormat } from '@/types/types';
import {correctCalcDecorator} from "@/utils/correctCalcDecorator";

export default {
  name: "PageRentConversionsCategoryForm",
  components: {
    CalculationInput,
    ResultInput,
  },
  data() {
    return {
      value_i: new PositivePercent(0.05),
      value_rent_new: new PositiveValute(1000),
      value_n_new: new YearFormat(10),
      array_rent: [
        new PositiveValute(500),
        new PositiveValute(1500),
        new PositiveValute(3000),
      ],
      array_n: [
        new YearFormat(10),
        new YearFormat(15),
        new YearFormat(12),
      ],
    };
  },
  methods: {
    addNewRent() {
      try {
        let rent = new PositiveValute(this.value_rent_new);
        let n = new YearFormat(this.value_n_new);
        this.array_rent.push(rent);
        this.array_n.push(n);
      } catch (e) { /* empty */ }
    },
    removeRent(index) {
      this.array_rent.splice(index, 1);
      this.array_n.splice(index, 1);
    },
    removeAllRents() {
      this.array_rent = [];
      this.array_n = [];
    },
  },
  computed: {
    count_rents() {
      return this.array_rent.length;
    },
    total_r: correctCalcDecorator(function () {
      let total = new PositiveValute(0);
      for (let i = 0; i < this.count_rents; i++) {
        total = new PositiveValute(total + this.array_rent[i]);
      }
      if (this.count_rents === 0) {
        throw new Error("Должна быть хотя бы одна рента");
      }
      return total;
    }),
    total_n: correctCalcDecorator(function () {
      let total = 0;
      for (let i = 0; i < this.count_rents; i++) {
        total += this.array_rent[i] * Math.pow(1 + this.value_i, -this.array_n[i]);
      }
      return new PositiveFloat((Math.log(this.total_r) - Math.log(total)) / Math.log(1 + this.value_i));
    }),
    total_n_format: correctCalcDecorator(function () {
      return new YearFormat(this.total_n);
    }),
  }
}
</script>

<style scoped lang="scss">

</style>
