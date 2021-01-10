<template>
  <div id="app" class="bg-gray-100 w-full h-screen">
    <UserView />
    <router-view />
  </div>
</template>

<script>
import UserView from "./components/UserView";
export default {
  components: {
    UserView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
