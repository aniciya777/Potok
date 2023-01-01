<template>
  <div class="wrapper">
    <MainHeader/>
    <div class="wrapper-content">
      <main class="container">
        <BreadCrumbs/>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script setup>
import MainHeader from "@/components/UI/MainHeader.vue";
import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

main.container {
  margin-top: 18px;
  margin-bottom: 32px;
  padding: 30px;
  box-sizing: border-box;
  background: rgba(30, 255, 188, 0.5);
  border: 5px solid #1EFFBC;
  border-radius: 20px;
}
</style>
