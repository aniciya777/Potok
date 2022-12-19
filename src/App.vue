<template>
  <header>
    <MainHeader />
  </header>

  <main>

  </main>
</template>

<script setup>
  import MainHeader from "@/components/UI/MainHeader.vue";
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
  }

  body {
    margin: 0;
  }

  main {
    margin: 55px 10px;
  }
</style>
