<template>
  <div class="page">
    <h1 class="page__title">
      Категории
    </h1>
    <div class="row">
      <h2 class="text-center">
        Выберите категорию расчётов
      </h2>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6" v-for="category in categories" :key="category.name">
        <router-link class='category-item' :to="category.path">
          <div class="btn btn-primary btn-lg btn-block text-center">
            {{ category.meta.breadcrumb }}
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <p class="text-center text-footer">
        Получить лучшие консультации по инвестициям и процентам Вы можете получить на нашем сайте.
        Квалифицированные экономисты окажут помощь Вашим денежным средствам.
      </p>
    </div>
  </div>
</template>

<script>
import {categories} from "@/components/categories";

export default {
  name: "PageCategories",
  data() {
    return {
      categories
    }
  }
}
</script>

<style scoped lang="scss">
  h2 {
    font-size: 1.2rem;
  }

  .category-item {
    font-family: 'Roboto', 'Montserrat', serif;
    font-size: 1.3rem;
    color: #000000;
    background: #FFFFFF;
    border-radius: 25px;
    margin: 20px 34px;
    padding: 18px 34px;
    height: calc(100% - 36px);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p.text-footer {
    margin-top: 81px - 34px;
    margin-bottom: 40px;
  }
</style>
