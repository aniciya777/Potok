<template>
  <nav class="navbar sticky-top">
    <div class="container-fluid h-100 w-auto">
      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/logo.svg"
          alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <span>{{ title }}</span>
      </router-link>
      <div class="navbar-items d-none d-lg-block">
        <router-link class="navbar-link" v-for="link in links" :key="link.alias" :to="link.url">
          {{ link.title }}
        </router-link>
      </div>
      <button class="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list"></i>
      </button>
    </div>
    <div class="collapse menu-collapse" id="navbarToggleExternalContent">
      <ul class="nav flex-column">
        <li class="nav-item" v-for="link in links" :key="link.alias" @click="toggleMenu">
          <router-link class="navbar-link" :to="link.url">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
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
  methods: {
    toggleMenu() {
      const menu = document.querySelector('#navbarToggleExternalContent');
      menu.classList.toggle('show');
    }
  }
}
</script>

<style scoped lang="scss">
$header_color: #67235E;

nav {
  height: 70px;
  background: $header_color;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;

  .navbar-brand {
    font-family: 'Strong', serif;
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

  .menu-collapse {
    background: $header_color;
    width: 100%;

    ul.nav {
      list-style: none;
      padding-inline-start: unset;

      .nav-item {
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 40px;

        &:hover {
          background: #5A1F4F;
        }
      }
    }
  }

  .navbar-toggler {
    background: white;
    height: 48px;
    width: 48px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    margin: 10px;
    float: right;
  }
}
</style>
