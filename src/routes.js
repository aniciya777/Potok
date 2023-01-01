import {createRouter, createWebHashHistory} from "vue-router";

const routerHistory = createWebHashHistory();

import PageMain from "@/components/pages/main/PageMain.vue";
import PageAbout from "@/components/pages/about/PageAbout.vue";
import PageCategories from "@/components/pages/categories/PageCategories.vue";
import PageError_404 from "@/components/pages/_errors/PageError_404.vue";

import {categories} from "@/components/categories";

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
      {
        path: '/about',
        name: 'about',
        component: PageAbout,
        meta: {
          breadcrumb: 'О нас',
        },
      },
      {
        path: '/categories',
        name: 'categories',
        component: PageCategories,
        meta: {
          breadcrumb: 'Категории',
        },
      },
      {
        path: '/404',
        name: 'error_404',
        component: PageError_404,
        meta: {
          breadcrumb: false,
        },
      },
      {
        path: '/:CatchAll(.*)',
        redirect: {
          name: 'error_404',
        }
      },
    ].concat(categories),
  }
);

export default routers;
