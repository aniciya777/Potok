import PageSimpleCategory from "@/components/pages/categories/simple/PageSimpleCategory.vue";
import PageCompound from "@/components/pages/categories/compound/PageCompoundCategory.vue";
import PageRentConversionsCategory
  from "@/components/pages/categories/rent_conversions/PageRentConversionsCategory.vue";
import PageInvestmentsCategory from "@/components/pages/categories/investments/PageInvestmentsCategory.vue";
import PageRentsCategory from "@/components/pages/categories/rents/PageRentsCategory.vue";

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
    component: PageInvestmentsCategory,
    meta: {
      breadcrumb: 'Оценивание инвестиций',
    },
  },
  {
    path: '/categories/rents',
    name: 'rents',
    component: PageRentsCategory,
    meta: {
      breadcrumb: 'Расчёт параметров рент',
    },
  }
];
