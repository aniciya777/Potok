<template>
  <div class="page">
    <div class="row">
      <div class="col-12 col-md-5 d-flex align-items-center">
        <p class="main-page__slogan">
          Делаем расчёты проще
        </p>
      </div>
      <div class="col-12 col-md-7">
        <img src="@/assets/images/image1.png" class="figure-img rounded w-100" alt="figure">
      </div>
    </div>
    <div class="row">
      <p class="text-center main-page__paragraph">
        Проконсультироваться с ведущим экономистом проекта можно по телефону
        <br>
        <a class="main-page__phone-link" :href="`tel:${phone}`">
          {{ phone}}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import { app } from "@/_config";

export default {
  name: "PageMain",
  data () {
    return {
      phone: app.phones[0].phone_number,
    };
  },
}
</script>

<style scoped>
  .main-page__slogan {
    font-size: 64px;
    line-height: 78px;
    text-align: center;
  }

  .main-page__paragraph {
    margin-top: 45px;
  }
</style>
