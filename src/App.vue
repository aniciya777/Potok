<template>
  <div class="wrapper">
    <header>
      <MainHeader />
    </header>
    <div class="wrapper-content">
      <main class="container">
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
    font-style: normal;
    font-weight: 400;
  }

  body {
    margin: 0;
  }

  main {
    margin: 18px 10px;
    padding: 30px;
    box-sizing: border-box;
    background: rgba(30, 255, 188, 0.5);
    border: 5px solid #1EFFBC;
    border-radius: 20px;
  }
</style>
