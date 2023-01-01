<template>
  <div class="page">
    <div class="row page-error">
      <div class="col-lg-5 col-sm-12">
        <h1 class="page__title error_code">404</h1>
        <p class="m-0">
          Ой, такой страницы нет!
        </p>
        <p>
          Наш экономист ещё не посчитал её :)
        </p>
        <br>
        <p>
          <router-link class="navbar-link" to="/">
            Перейти <u>на главную →</u>
          </router-link>
        </p>
        <br>
      </div>
      <div class="col-lg-7 col-sm-12">
        <img src="@/assets/images/error_404.png" alt="404 - Page Not Found" class="w-100">
      </div>
    </div>
    <div class="row page-error row_quoted">
      <q>
        Это не я так придумал. Это у Вас в платёжке так написано!!!!
      </q>
      <p>
        © Тот Самый Экономист
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageError_404"
}
</script>

<style scoped lang="scss">
  .row_quoted {
    margin-top: 20px;

    p, q {
      font-size: 30px;
      text-align: center;
    }
  }
</style>
