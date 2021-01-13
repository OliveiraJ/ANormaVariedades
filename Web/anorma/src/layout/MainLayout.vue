<template>
  <div>
    <!-- inicio da Barra superior -->
    <div
      class="p-6 mx-auto bg-pink-700 shadow-md flex items-center space-x-4 text-white text-lg font-bold w-full"
    >
      <div class="-ml-3">
        <!-- botão da barra lateral -->
        <button
          @click="openDrawer = !openDrawer"
          class="outline-none focus:outline-none shadow-none"
        >
          <fa-icon :icon="['fas', 'bars']" class="fa-2x" />
        </button>
      </div>
      <!-- fim da barra superior -->
    </div>
    <!-- Container -->
    <div class="grid grid-cols">
      <!-- inicio da barra lateral -->
      <div class="bg-gray-300 absolute h-screen w-full">Container</div>
      <div v-if="openDrawer == true" class="bg-red-300 w-40 z-10">
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
        Barra lateral<br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDrawer: false,
    };
  },
};
</script>
