<template>
  <nav class="navbar sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
            src="@/assets/logo.svg"
            alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <span>{{ title }}</span>
      </router-link>
      <div class="navbar-items">
        <router-link class="navbar-link" v-for="link in links" :key="link.alias" :to="link.url">
          {{ link.title }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import {app, links} from "@/_config";

export default {
  name: "MainHeader",
  data() {
    return {
      title: app.title,
      links,
    }
  },
}
</script>

<style scoped lang="scss">
  nav {
    height: 70px;
    background: #67235E;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;

    .navbar-brand {
      font-family: 'Strong',serif;
      font-size: 48px;
      line-height: 57px;
      text-align: justify;
      text-transform: uppercase;
      text-decoration: none;
      color: inherit;
      float: left;

      img {
        width: 70px;
        height: 70px;
        position: relative;
        top: -6px;
        margin: 0 14px;
      }

      span {
        padding-top: 6px;
        display: inline-block;
      }
    }

    .navbar-items {
      padding: 20px;
      margin: auto 0;
      float: right;

      .navbar-link {
        font-size: 25px;
        line-height: 30px;
        margin: 0 25px;
        text-decoration: none;
        color: inherit;
      }
    }
  }
</style>
