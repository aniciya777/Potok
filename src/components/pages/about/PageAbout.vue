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
</style>
