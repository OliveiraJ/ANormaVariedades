<template>
  <div
    class="p-6 max-w-sm mx-auto bg-pink-700 rounded-xl shadow-md flex items-center space-x-4 text-white text-lg font-bold"
  >
    {{ navBarMsg }}
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      navBarMsg: "NavBar",
    };
  },
};
</script>

<style></style>
