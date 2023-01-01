<template>
  <div class="page">
    <h1 class="page__title">
      Контакты
    </h1>
    <div class="row">
      <div class="col-lg-6 col-sm-12">
        <p>
          <iframe :src="map_url" class="map-component__map-frame" frameborder="0"></iframe>
        </p>
      </div>
      <div class="col-lg-6 col-sm-12">
        <ContactsBlock address phone email opening_hours />
      </div>
    </div>
    <br>
    <div class="row row_quoted">
      <q>
        Экономист — это человек, который сам не знает, о чём говорит, но может заставить вас поверить, что это — ваша вина.
      </q>
    </div>
  </div>
</template>

<script>
import {app} from "@/_config";
import ContactsBlock from "@/components/UI/ContactsBlock.vue";

export default {
  name: "PageContacts",
  components: {
    ContactsBlock
  },
  data () {
    return {
      title: "Контакты",
      map_url: app.addresses[0].yandex_map_code.iframe,
      phone: app.phones[0].phone_number,
    };
  },
}
</script>

<style scoped>
.map-component__map-frame {
  width: 100%;
  min-height: 422px;
}
</style>
