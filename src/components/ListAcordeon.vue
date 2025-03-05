<template>
  <v-container>
    <v-expansion-panels multiple class="aba" variant="accordion">
      <CategoriaAcordeon
        v-for="(categoria, categoriaIndex) in categorias"
        :key="categoriaIndex"
        :categoria="categoria"
        :categoriaIndex="categoriaIndex"
      />
    </v-expansion-panels>
  </v-container>
</template>

<script setup>
import { useStore } from 'vuex';
import CategoriaAcordeon from './CategoriaAcordeon.vue';

const store = useStore();
const categorias = store.getters.categorias;
</script>

<style src="../assets/estilo/estilo.css">

</style>
