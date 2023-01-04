<template>
  <div class="page page-calculator">
    <h1 class="page__title">
      Оценивание инвестиций
    </h1>
    <div class="row">
      <div class="col-12">
        <p>
          <strong>Методы расчетов.</strong>
          Пусть капиталовложения и доходы представлены в виде потока платежей, тогда искомая величина -
          стоимость объекта, приносящего доход, находится как современная стоимость этого потока,
          определенная на начало действия проекта.
        </p>
        <br>
        <p>
          Обычно, особенно в учебной, да и практической, финансовой литературе, годовые данные
          о размерах членов потока приурочиваются к окончаниям соответствующих дат. Однако зачастую
          отдельные компоненты потока можно с достаточным основанием рассматривать
          как равномерно распределенные затраты (поступления) в пределах года.
        </p>
        <br>
        <p>
          С учетом приведенных характеристик строится финансовый поток всех отрицательных (затраты) и
          положительных (доходы) платежей по рассматриваемому объекту недвижимости, который и является
          предметом анализа предлагаемых в данной главе математических методов.
        </p>
        <br>
        <p>
          Современная стоимость данного финансового потока принимается в качестве прогнозной оценки
          стоимости объекта. В ряде приложений современная стоимость данного финансового потока носит
          специфическое название, например, при оценке инвестиционного проекта его современная стоимость называется
          <span class="no-latex">ЧДД</span>
          (чистый дисконтированный доход), в иностранной литературе
          <vue-latex :expression="'NPV'" :fontsize="latex_fontsize"/>
          (Net Present Value).
        </p>
        <br>
        <p>
          Большую роль при оценке инвестиционного проекта играет пороговое значение процентной ставки
          <vue-latex :expression="'i'" :fontsize="latex_fontsize"/>,
          при котором современная стоимость финансового потока
          (т.е. <span class="no-latex">ЧДД</span>)
          равна нулю. В отечественной литературе этот показатель называется
          <span class="no-latex">ВНД</span>
          - внутренняя норма доходности, в зарубежной -
          <vue-latex :expression="'IRR'" :fontsize="latex_fontsize"/>
          (internal rate of return).
        </p>
        <br>
        <p>
          Кроме того, рассчитываются основанные на дисконтированных оценках
          <i>Индекс рентабельности инвестиций</i>
          -
          <vue-latex :expression="'PI'" :fontsize="latex_fontsize"/>
          (Profitability Index) и
          <i>Дисконтированный срок окупаемости инвестиций</i>
          -
          <vue-latex :expression="'DPP'" :fontsize="latex_fontsize"/>
          (Discounted Payback Period).
        </p>

        <h3 class="text-center">
          Чистая приведенная стоимость
          (<vue-latex :expression="'NPV'" :fontsize="latex_fontsize"/>)
        </h3>
        <p>
          Допустим, делается прогноз, что инвестиция
          (<vue-latex :expression="'IC'" :fontsize="latex_fontsize"/>)
          будет генерировать в течение
          <vue-latex :expression="'n'" :fontsize="latex_fontsize"/>
          лет годовые доходы в размере
          <vue-latex :expression="'P_1'" :fontsize="latex_fontsize"/>,
          <vue-latex :expression="'P_2'" :fontsize="latex_fontsize"/>,
          …
          <vue-latex :expression="'P_n'" :fontsize="latex_fontsize"/>.
          Общая накопленная величина дисконтированных доходов
          (<vue-latex :expression="'PV'" :fontsize="latex_fontsize"/>)
          и чистый приведенный эффект
          (<vue-latex :expression="'NPV'" :fontsize="latex_fontsize"/>)
          соответственно рассчитываются по формулам
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'PV = \\sum_{k}{\\frac{P_k}{(1 + i)^k}},'"
            display-mode :fontsize="latex_fontsize"/>
          <vue-latex
            :expression="'NPV = \\sum_{k}{\\frac{P_k}{(1 + i)^k}} - IC.'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          Если проект предполагает не разовую инвестицию, а последовательное инвестирование
          финансовых ресурсов в размере
          <vue-latex :expression="'IC_j'" :fontsize="latex_fontsize"/>
          (в отечественной литературе - капитальные вложения
          <vue-latex :expression="'K_j'" :fontsize="latex_fontsize"/>)
          в течение
          <vue-latex :expression="'m'" :fontsize="latex_fontsize"/>
          лет, а затем получение в течение
          <vue-latex :expression="'(n - m)'" :fontsize="latex_fontsize"/>
          лет годовых доходов в размере
          <vue-latex :expression="'P_{m + 1}'" :fontsize="latex_fontsize"/>,
          <vue-latex :expression="'P_{m + 2}'" :fontsize="latex_fontsize"/>,
          …
          <vue-latex :expression="'P_n'" :fontsize="latex_fontsize"/>,
          то формула для расчета
          <vue-latex :expression="'NPV'" :fontsize="latex_fontsize"/>
          модифицируется следующим образом:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'NPV = \\sum_{k = m + 1}^{n}{\\frac{P_k}{(1 + i)^k}} - \\sum_{j = 1}^{m}{\\frac{IC_j}{(1 + i)^j}},'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
        <p>
          где
          <vue-latex :expression="'i'" :fontsize="latex_fontsize"/>
          - должно учитывать прогнозируемый средний уровень инфляции.
        </p>

        <h3 class="text-center">
          Индекс рентабельности инвестиций
          (<vue-latex :expression="'PI'" :fontsize="latex_fontsize"/>)
        </h3>
        <p>
          Индекс рентабельности
          (<vue-latex :expression="'PI'" :fontsize="latex_fontsize"/>)
          рассчитывается по формуле:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'PI = \\frac{PV}{IC}.'"
            display-mode :fontsize="latex_fontsize"/>
        </p>

        <h3 class="text-center">
          Дисконтированный срок окупаемости инвестиций
          (<vue-latex :expression="'DPP'" :fontsize="latex_fontsize"/>)
        </h3>
        <p>
          Этот метод основан на дисконтированных оценках инвестиций и доходов. Подбирается
          <vue-latex :expression="'n\''" :fontsize="latex_fontsize"/>
          такое, что
          <vue-latex :expression="'NPV(n\') < 0'" :fontsize="latex_fontsize"/>,
          а
          <vue-latex :expression="'NPV(n\' + 1) > 0'" :fontsize="latex_fontsize"/>,
          затем пользуются приближенной формулой:
        </p>
        <p class="text-center">
          <vue-latex
            :expression="'DPP = n\' + \\frac{NPV(n\')}{NPV(n\' + 1) - NPV(n\')}.'"
            display-mode :fontsize="latex_fontsize"/>
        </p>
      </div>
    </div>
    <PageInvestmentsCategoryForm />
  </div>
</template>

<script>
import PageInvestmentsCategoryForm from "@/components/pages/categories/investments/PageInvestmentsCategoryForm.vue";
import {app} from "@/_config";

export default {
  name: "PageInvestmentsCategory",
  components: {
    PageInvestmentsCategoryForm,
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
