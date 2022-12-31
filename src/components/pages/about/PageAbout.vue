<template>
  <div class="page">
    <h1 class="page__title">
      О нас
    </h1>
    <div class="row">
      <div class="col-12 col-md-4 employee-card" v-for="employee in staff" :key="employee.name">
        <div class="row">
          <img :src="employee.photo" alt="" class="rounded-circle employee-card__avatar">
        </div>
        <div class="row employee-card__text-name">
          <p>
            {{ employee.surname }} {{ employee.name }}
          </p>
        </div>
        <div class="row employee-card__text-position">
          <p>
            {{ employee.position }}
          </p>
        </div>
      </div>
    </div>
    <div class="row banda">
      <div class="col-12 col-md-6 employee-card">
        <img src="@/assets/images/band1.jpg" alt="банда 1" class="w-100">
      </div>
      <div class="col-12 col-md-6 employee-card">
        <img src="@/assets/images/band2.jpg" alt="банда 2" class="w-100">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staff: [
        {
          name: 'Дмитрий',
          surname: 'Катунов',
          position: 'Экономист',
          photo: '/assets/images/avatars/Dmitrii.jpg'
        },
        {
          name: 'Маргарита',
          surname: 'Ушакова',
          position: 'Пиар-менеджер',
          photo: '/assets/images/avatars/Margarita.jpg'
        },
        {
          name: 'Анастасия',
          surname: 'Остапчук',
          position: 'Программист',
          photo: '/assets/images/avatars/Anastasiia.jpg',
        }
      ]
    }
  },
  name: "PageAbout",
}
</script>

<style scoped lang="scss">
.employee-card {
  padding: 0 36px;
  padding-bottom: 50px;

  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 33px;
  text-align: center;
  color: #FFFFFF;

  .employee-card__avatar {
    padding-bottom: 34px;
  }
}

.banda {

  .employee-card {

    img {
      border: 1px solid #000000;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 25px;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
