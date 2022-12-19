import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import PageMain from "@/components/pages/main/PageMain.vue";

const routers = createRouter({
    history: routerHistory,
    scrollBehavior() {
      document.getElementById('app').scrollIntoView({behavior: 'smooth'});
    },
    routes: [
      {
        path: '/',
        name: 'main',
        component: PageMain,
        meta: {
          breadcrumb: 'Главная',
        },
      },
    ],
  }
);

export default routers;
