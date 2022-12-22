<template>
  <div class="page">
    <h1 class="page__title">
      Простые проценты
    </h1>
    <div class="row">
      <div class="col-12 d-md-none">
        <img src="@/assets/images/image_simple.png" class="figure-img rounded w-100" alt="Простые проценты">
      </div>
      <div class="col-12 col-md-6">
        <p>
          К наращению по простым процентам обычно прибегают при выдаче краткосрочных ссуд (на срок до 1 года)
          или в случаях, когда проценты не присоединяются к сумме долга, а периодически выплачиваются.
          Для записи формулы наращения простых процентов (<i>simple interest</i>) примем обозначения:
        </p>
        <ul>
          <li>
            <i>I</i> - проценты за весь срок ссуды:
          </li>
          <li>
            <i>Р</i> - первоначальная сумма долга;
          </li>
          <li>
            <i>S</i> - наращенная сумма, т. е. сумма в конце срока:
          </li>
          <li>
            <i>i</i> - ставка наращения процентов (десятичная дробь);
          </li>
          <li>
            <i>n</i> - срок ссуды.
          </li>
        </ul>
        <p>
          Если срок измеряется в годах (как это обычно и бывает),
          то <i>і</i> означает годовую процентную ставку, Соответственно каждый год приносит проценты в сумме
          <i>Рi</i>.
        </p>
        <p>
          Начисленные за весь срок проценты составят:
        </p>
        <p class="text-center">
          <i>I = Pni</i>
        </p>
        <p>
          Нарощенная сумма, таким образом, находится как:
        </p>
        <p class="text-center">
          <i>S = P + I = P + Pni = P(1 + ni)</i>
        </p>
      </div>
      <div class="d-none d-md-block col-6">
        <img src="@/assets/images/image_simple.png" class="figure-img rounded w-100" alt="Простые проценты">
      </div>
    </div>
    <PageSimpleCategoryForm />
  </div>
</template>

<script>
import PageSimpleCategoryForm from "@/components/pages/categories/simple/PageSimpleCategoryForm.vue";

export default {
  name: "PageSimpleCategory",
  components: {PageSimpleCategoryForm}
}
</script>

<style scoped lang="scss">
  p, ul li {
    font-family: 'Montserrat', serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
  }
</style>
