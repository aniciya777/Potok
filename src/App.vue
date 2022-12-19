<template>
  <div class="wrapper">
    <header>
      <MainHeader />
    </header>
    <div class="wrapper-content">
      <main>
        <BreadCrumbs />
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
  import MainHeader from "@/components/UI/MainHeader.vue";
  import BreadCrumbs from "@/components/UI/BreadCrumbs.vue";
</script>

<style lang="scss">
  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"),
    url("@/assets/fonts/Montserrat-VariableFont_wght.ttf") format("truetype"),
    url("@/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf") format("truetype");
  }

  @font-face {
    font-family: "Strong";
    src: local("Strong"),
    url("@/assets/fonts/Strong-Regular.ttf") format("truetype")
  }

  html {
    background: #41213f;
    font-family: 'Montserrat', serif;
  }

  body {
    margin: 0;
  }

  main {
    margin: 55px 10px;
  }
</style>
