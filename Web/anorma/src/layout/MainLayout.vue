<template>
  <div>
    <!-- inicio da Barra superior -->
    <div
      class="p-6 mx-auto bg-pink-700 shadow-md flex items-center space-x-4 w-full z-10 sticky top-0 mb-8"
    >
      <div class="w-full relative flex flex-wrap items-stretch">
        <!-- icone Search -->
        <span
          class="z-20 h-full leading-normal flex font-normal absolute text-center text-base items-center justify-center w-8 pl-3 py-3"
        >
          <fa-icon
            :icon="['fas', 'search']"
            class="text-gray-200 fa-rotate-90"
          />
        </span>
        <!-- campo de pesquisa -->
        <input
          type="search"
          placeholder="Procure seu produto"
          class="rounded-2xl justify-center p-2 text-sm outline-none bg-pink-800 placeholder-gray-200 pl-10 relative w-full text-white font-semibold shadow-sm"
        />
      </div>
    </div>
    <!-- Container -->
    <div class="overflow-auto overscroll-none relative grid grid-cols-2">
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Products />
      </div>
    </div>

    <!-- barra inferior -->
    <div
      class="fixed inset-x-0 bottom-0 h-16 bg-gray-100 grid grid-cols-3 gap-4 pt-4 shadow-2xl"
    >
      <div>
        <button class="outline-none focus:outline-none">
          <fa-icon :icon="['fas', 'home']" class="text-pink-700" size="2x" />
        </button>
      </div>
      <div>
        <button class="focus:outline-none outline-none">
          <fa-icon :icon="['fas', 'bars']" class="text-pink-700" size="2x" />
        </button>
      </div>
      <div>
        <button class="focus:outline-none">
          <fa-icon
            :icon="['fas', 'question-circle']"
            class="text-pink-700"
            size="2x"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "../components/Products";
export default {
  components: {
    Products,
  },
  data() {
    return {};
  },
};
</script>
