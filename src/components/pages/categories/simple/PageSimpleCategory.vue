<template>
  <div class="page page-calculator">
    <h1 class="page__title">
      Простые проценты
    </h1>
    <div class="row">
      <div class="col-12">
        <img src="@/assets/images/image_simple.png" class="figure-img rounded w-50 float-end" alt="Простые проценты" >
        <p>
          К наращению по простым процентам обычно прибегают при выдаче краткосрочных ссуд (на срок до 1 года)
          или в случаях, когда проценты не присоединяются к сумме долга, а периодически выплачиваются.
          Для записи формулы наращения простых процентов (<i>simple interest</i>) примем обозначения:
        </p>
        <ul>
          <li>
            <vue-latex :expression="'I'" :fontsize="latex_fontsize"/> - проценты за весь срок ссуды;
          </li>
          <li>
            <vue-latex :expression="'P'" :fontsize="latex_fontsize" strict="ignore"/> - первоначальная сумма долга;
          </li>
          <li>
            <vue-latex :expression="'S'" :fontsize="latex_fontsize"/> - наращенная сумма, т. е. сумма в конце срока;
          </li>
          <li>
            <vue-latex :expression="'i'" :fontsize="latex_fontsize"/> - ставка наращения процентов (десятичная дробь);
          </li>
          <li>
            <vue-latex :expression="'n'" :fontsize="latex_fontsize"/> - срок ссуды.
          </li>
        </ul>
        <p>
          Если срок измеряется в годах (как это обычно и бывает), то
          <vue-latex :expression="'i'" :fontsize="latex_fontsize" strict="ignore"/>
          означает годовую процентную ставку, Соответственно каждый год приносит проценты в сумме
          <vue-latex :expression="'P i'" :fontsize="latex_fontsize" strict="ignore"/>.
        </p>
        <p>
          Начисленные за весь срок проценты составят:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'I = P n i'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Нарощенная сумма, таким образом, находится как:
        </p>
        <p class="text-center">
          <i></i>
          <vue-latex
            :expression="'I = S = P + I = P + P n i = P (1 + n i)'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
      </div>
    </div>
    <PageSimpleCategoryForm />
  </div>
</template>

<script>
import PageSimpleCategoryForm from "@/components/pages/categories/simple/PageSimpleCategoryForm.vue";
import { app } from "@/_config.js";

export default {
  name: "PageSimpleCategory",
  components: {PageSimpleCategoryForm},
  data() {
    return {
      latex_fontsize: app.latex_fontsize,
    };
  },
}
</script>

<style scoped lang="scss">

</style>
