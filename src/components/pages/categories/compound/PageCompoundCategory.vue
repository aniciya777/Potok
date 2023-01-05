<template>
  <div class="page page-calculator">
    <h1 class="page__title">
      Сложные проценты
    </h1>
    <div class="row">
      <div class="col-12">
        <img src="@/assets/images/image_compound.png" class="figure-img rounded w-50 float-end" alt="Сложные проценты" >
        <p>
          Для расчета наращенной суммы при условии, что проценты начисляются и
          капитализируются один раз в году (годовые проценты), применяется
          <i>сложная ставка </i>
          наращения. Применим те же обозначения, что и в формуле наращения по простым процентам.
        </p>
        <br>
        <p>
          В конце первого года проценты равны величине
          <vue-latex :expression="'P i'" :fontsize="latex_fontsize"/>
          , а наращенная сумма составит
          <vue-latex :expression="'P + P i = P (1 + i)'" :fontsize="latex_fontsize"/>
          . К концу второго года она достигнет величины
          <vue-latex :expression="'P (1 + i) + P (1 + i) i= P (1 + i) ^ 2'" :fontsize="latex_fontsize"/>
          и т.д. В конце <vue-latex :expression="'n'" :fontsize="latex_fontsize"/>-го года наращенная сумма будет равна
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'S = P (1 + i) ^ n'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Проценты за этот же срок в целом таковы:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'I = S - P = P ((1 + i) ^ n - 1)'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Часть из них получена за счет начисления процентов на проценты. Она составляет
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'I_p = P ((1 + i) ^ n - (1 + n i))'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Величину
          <vue-latex :expression="'(1 + i) ^ n'" :fontsize="latex_fontsize"/>
          называют
          <i>множителем наращения (compound interest factor)</i>
          по сложным процентам. Точность расчета множителя в практических расчетах
          определяется допустимой степенью округления наращенной суммы (до последней копейки, рубля и т.д.).
        </p>
      </div>
    </div>
    <PageCompoundCategoryForm />
  </div>
</template>

<script>
import PageCompoundCategoryForm from "@/components/pages/categories/compound/PageCompoundCategoryForm.vue";
import { app} from "@/_config";

export default {
  name: "PageCompoundCategory",
  components: {PageCompoundCategoryForm},
  data() {
    return {
      latex_fontsize: app.latex_fontsize,
    };
  },
}
</script>

<style scoped>

</style>
