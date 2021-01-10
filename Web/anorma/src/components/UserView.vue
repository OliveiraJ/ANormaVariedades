<template>
  <div>
    <h1>{{ msg }}</h1>
    <navBar />
    <sideBar />
    <products />
  </div>
</template>

<script>
import products from "./Products.vue";
import navBar from "./NavBar.vue";
import sideBar from "./SideBar.vue";

export default {
  name: "UserView",
  components: {
    products,
    navBar,
    sideBar,
  },
  data() {
    return {
      msg: "Começando o app com TDD",
    };
  },
};
</script>

<style></style>
