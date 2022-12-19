<template>
  <nav class="navbar sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
            src="@/assets/logo.svg"
            alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        <span>ПОТОК</span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MainHeader"
}
</script>

<style scoped lang="scss">
  nav {
    height: 70px;
    background: #67235E;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;

    a.navbar-brand {
      font-family: 'Strong';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 57px;
      text-align: justify;
      text-transform: uppercase;
      text-decoration: none;
      color: inherit;

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
  }
</style>