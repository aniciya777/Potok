<template>
  <button @click="scroll_to_calc" class="button_scroll" ref="button_scroll">
    ↓ К калькулятору ↓
  </button>
</template>

<script>
export default {
  name: "ScrollToCalculator",
  methods: {
    scroll_to_calc() {
      // this.$refs.calc.scrollIntoView({behavior: "smooth"});
      // console.log(document.getElementsByClassName("form-calculator"));
      document.getElementsByClassName("form-calculator")[0].scrollIntoView({behavior: "smooth"});
      this.$refs.button_scroll.style.display = "none";
    },
  }
}
</script>

<style scoped lang="scss">
  .button_scroll {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: white;
    border: black solid 1px;
    font-size: 0.6rem;
    padding: 10px;
    z-index: 10;
    opacity: 0.3;
    border-radius: 10px;

    &:hover {
      opacity: 1;
    }
  }
</style>
