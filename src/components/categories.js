import PageSimpleCategory from "@/components/pages/categories/simple/PageSimpleCategory.vue";
import PageCompound from "@/components/pages/categories/compound/PageCompoundCategory.vue";
import PageRentConversionsCategory
  from "@/components/pages/categories/rent_conversions/PageRentConversionsCategory.vue";

export const categories = [
  {
    path: '/categories/simple',
    name: 'simple',
    component: PageSimpleCategory,
    meta: {
      breadcrumb: 'Простые проценты',
    },
  },
  {
    path: '/categories/compound',
    name: 'compound',
    component: PageCompound,
    meta: {
      breadcrumb: 'Сложные проценты',
    },
  },
  {
    path: '/categories/rentconversions',
    name: 'rentconversions',
    component: PageRentConversionsCategory,
    meta: {
      breadcrumb: 'Конверсии рент',
    },
  },
  {
    path: '/categories/investments',
    name: 'investments',
    component: PageSimpleCategory,
    meta: {
      breadcrumb: 'Оценивание инвестиций',
    },
  },
  {
    path: '/categories/permanentstreams',
    name: 'permanentstreams',
    component: PageSimpleCategory,
    meta: {
      breadcrumb: 'Постоянные потоки',
    },
  },
  {
    path: '/categories/specialstreams',
    name: 'specialstreams',
    component: PageSimpleCategory,
    meta: {
      breadcrumb: 'Специальные потоки',
    },
  },
];
