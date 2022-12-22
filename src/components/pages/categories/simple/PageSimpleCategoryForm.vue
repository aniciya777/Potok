<template>
  <div class="row">
    <div class="form">
      <hr>
      <p class="text-center">
        Расчет простых процентов
      </p>
      <div class="mb-3">
        <label for="input-p" class="form-label">
          Первоначальная сумма долга
        </label>
        <input type="number" class="form-control" id="input-p" v-model="input_p">
      </div>
      <div class="mb-3">
        <label for="input-i" class="form-label">
          Ставка наращения процентов, %
        </label>
        <input type="number" class="form-control" id="input-i" v-model="input_i">
      </div>
      <div class="mb-3">
        <label for="input-n" class="form-label">
          Срок ссуды, лет
        </label>
        <input type="number" class="form-control" id="input-n" v-model="input_n">
      </div>
      <hr>
      <p class="text-center">
        Результаты расчета
      </p>
      <div class="mb-3">
        <label for="input-i-big" class="form-label">
          Проценты за весь период
        </label>
        <input type="number" class="form-control" id="input-i-big" v-model="input_i_big" readonly>
      </div>
      <div class="mb-3">
        <label for="input-s" class="form-label">
          Наращенная сумма долга (сумма в конце срока)
        </label>
        <input type="number" class="form-control" id="input-s" v-model="input_s" readonly>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageSimpleCategoryForm",
  data() {
    return {
      input_p: 100000,
      input_i: 10,
      input_n: 5,
      input_i_big: 0,
      input_s: 0,
    }
  },
  watch: {
    input_p() {
        this.getAnswer()
    }
  },
  methods: {
    async getAnswer() {
      this.input_i_big = this.input_p * this.input_i / 100 * this.input_n;
      this.input_s = this.input_p + this.input_i_big;
    }
  },
  mounted() {
    window.addEventListener("load", () => this.getAnswer());
  }
}
</script>

<style scoped lang="scss">
.form {
  margin-top: 30px;
  font-family: 'Montserrat', serif;
  font-size: 40px;
  font-weight: 400;
  color: white;

  input {
    background: #FFFFFF;
    border-radius: 10px;
    font-size: inherit;
    color: black;
    width: 100%;
  }
}
</style>
