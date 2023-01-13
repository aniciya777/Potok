<template>
  <div class="page page-calculator">
    <ScrollToCalculator />
    <h1 class="page__title">
      Конверсии рент
    </h1>
    <div class="row">
      <div class="col-12">
        <p>
          Рассмотрим один частный случай. Пусть член заменяющей ренты равен сумме членов заменяемых рент:
          <vue-latex :expression="'R = \\sum{R_q}'" :fontsize="latex_fontsize"/>.
          Все ренты годовые, постнумерандо. Если процентная ставка у всех рент одинаковая, то получим
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'R \\frac{1 - (1 + i)^{-n}}{i} = \\frac{\\sum{R_q (1 - (1 + i)^{-n_q})}}{i}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          где
        </p>
        <ul>
          <li>
            <vue-latex :expression="'n'" :fontsize="latex_fontsize"/> - срок заменяющей ренты;
          </li>
          <li>
            <vue-latex :expression="'R_q'" :fontsize="latex_fontsize"/> - величина отдельного платежа (члена ренты);
          </li>
          <li>
            <vue-latex :expression="'i'" :fontsize="latex_fontsize"/> - процентная ставка (десятичная дробь);
          </li>
          <li>
            <vue-latex :expression="'n_q'" :fontsize="latex_fontsize"/> - срок в годах.
          </li>
        </ul>
        <p>
          После преобразований находим
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'n = \\frac{\\ln{R} - \\ln{\\sum{R_q (1 + i)^{-n_q}}}}{\\ln{(1 + i)}}'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
      </div>
    </div>
    <PageRentConversionsCategoryForm />
  </div>
</template>

<script>
import { app} from "@/_config";
import PageRentConversionsCategoryForm
  from "@/components/pages/categories/rent_conversions/PageRentConversionsCategoryForm.vue";
import ScrollToCalculator from "@/components/UI/ScrollToCalculator.vue";

export default {
  name: "PageRentConversionsCategory",
  components: {
    PageRentConversionsCategoryForm,
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
