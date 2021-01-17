<template>
  <div>
    <div
      class="bg-pink-700 shadow-md w-auto h-auto p-4 m-3 rounded-2xl relative pb-2"
    >
      <div
        class="rounded-3xl overflow-hidden shadow-md relative -mt-7 -ml-4 h-32"
      >
        <img src="../imagens/papel-oficio.jpg" class="w-auto h-auto" alt="" />
      </div>
      <div class="overflow-hidden">
        <p class="text-gray-100 font-bold">
          Papel Oficio branco chamex 500 fls.
        </p>
      </div>
      <div class="text-white font-extrabold text-xl">
        <p>R$ 29,90</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {};
  },
  props: {
    preco: Number,
    nome: String,
    desc: String,
    categoria: String,
    emEstoque: Boolean,
    imgMin: Image,
  },
  methods: {},
};
</script>

<style></style>
