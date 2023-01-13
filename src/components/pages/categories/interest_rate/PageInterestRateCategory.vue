<template>
  <div class="page page-calculator">
    <ScrollToCalculator />
    <h1 class="page__title">
      Определение размера процентной ставки
    </h1>
    <div class="row">
      <div class="col-12">
        <p>
          Необходимость в определении величины процентной ставки возникает всякий раз,
          когда речь идет о выяснении эффективности (доходности) соответствующей финансово-банковской или коммерческой операции.
          Заметим, что расчет процентной ставки по остальным параметрам ренты не так прост,
          как это может показаться на первый взгляд.
          В простейшем случае задача ставится следующим образом: решить вышеприведённые уравнения относительно
          <vue-latex :expression="'i'" :fontsize="latex_fontsize"/>.
          Нетрудно убедиться в том, что алгебраического решении нет.
          Для получения искомой величины применяется метод последовательных итераций
          с использованием различных значений величины процентной ставки,
          в результате чего выбираются два значения величины процентной ставки таким образом, чтобы в интервале
          <vue-latex :expression="'(i_1, i_2)'" :fontsize="latex_fontsize"/>
          функция
          <vue-latex :expression="'f(i) = A - R a_{n;i}'" :fontsize="latex_fontsize"/>
          меняла свое значение с "+" на "-".
          Далее применяют формулу
          <i>линейной интерполяции</i>.
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'i = i_1 + \\frac{f(i_1)}{f(i_1) - f(i_2)} (i_2 - i_1)'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          где
        </p>
        <ul>
          <li>
            <vue-latex :expression="'i_1'" :fontsize="latex_fontsize"/>
            - значение величины процентной ставки, при котором
            <vue-latex :expression="'f(i_1) > 0'" :fontsize="latex_fontsize"/>;
          </li>
          <li>
            <vue-latex :expression="'i_2'" :fontsize="latex_fontsize"/>
            - значение величины процентной ставки, при котором
            <vue-latex :expression="'f(i_2) < 0'" :fontsize="latex_fontsize"/>.
          </li>
        </ul>
        <p>
          Точность вычислений обратно пропорциональна длине интервала
          <vue-latex :expression="'(i_1, i_2)'" :fontsize="latex_fontsize"/>,
          а наилучшая аппроксимация достигается в случае, когда длина интервала минимальна
          (равна <vue-latex :expression="'1 \\%'" :fontsize="latex_fontsize"/>),
          т.е.
          <vue-latex :expression="'i_1'" :fontsize="latex_fontsize"/>
          и
          <vue-latex :expression="'i_2'" :fontsize="latex_fontsize"/>
          - ближайшие друг к другу значения величины процентной ставки, удовлетворяющие условиям изменения знака функции
          <vue-latex :expression="'f(i)'" :fontsize="latex_fontsize"/>
          с "+" на "-".
        </p>
        <pageInterestRateCategoryForm/>
      </div>
    </div>
  </div>
</template>

<script>
import pageInterestRateCategoryForm from "@/components/pages/categories/interest_rate/PageInterestRateCategoryForm.vue";
import ScrollToCalculator from "@/components/UI/ScrollToCalculator.vue";
import {app} from "@/_config";

export default {
  name: "PageInterestRateCategory",
  components: {
    pageInterestRateCategoryForm,
    ScrollToCalculator,
  },
  data() {
    return {
      latex_fontsize: app.latex_fontsize,
    };
  },
}
</script>

<style scoped lang="scss">

</style>
