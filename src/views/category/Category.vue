<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Category",
    components: {NavBar}
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>