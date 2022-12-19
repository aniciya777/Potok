<template>
  <div class="container breadcrumbs-component">
  <p class="m-0">
    <span v-for="(crumb, index) in breadcrumbs" :key="crumb.link">
      <span v-if="index > 0" class="breadcrumbs-component__separator">/</span>
      <router-link v-if="index < (breadcrumbs.length - 1)" class="breadcrumbs-component__item" :to="crumb.link">
        {{ crumb.label }}
      </router-link>
      <span v-else class="breadcrumbs-component__item_last">
        {{ crumb.label }}
      </span>
    </span>
  </p>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  data () {
    return {
      breadcrumbs: this.$breadcrumbs.value,
    };
  },
}
</script>

<style scoped lang="scss">
  .breadcrumbs-component {
    padding: 5px 19px;
    text-align: right;
    //margin-bottom: -$header-footer-margin;
  }

  .breadcrumbs-component__item {
    //color: $breadcrumbs_gray;
    text-decoration: underline;
  }

  .breadcrumbs-component__separator {
    padding: 0 5px;
    //color: $breadcrumbs_gray;
  }

  .breadcrumbs-component__item_last {
    //color: $mainFontColor;
  }
</style>
