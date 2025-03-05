<template>
    <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-menu-down" class="texto-negrito titulo">
        {{ categoria.titulo }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="detalhes d-flex align-center">
          <span class="mr-4 texto-negrito">Aulas {{ categoria.aulas }}</span>
          <span class="mr-4 texto-negrito">Exercícios {{ categoria.exercicios }}</span>
          <span class="mr-4 texto-negrito">Materiais {{ categoria.materiais }}</span>
        </div>
        <v-expansion-panels multiple variant="accordion">
          <TopicoAcordeon
            v-for="(topico, topicoIndex) in categoria.topicos"
            :key="topicoIndex"
            :topico="topico"
            :categoriaIndex="categoriaIndex"
            :topicoIndex="topicoIndex"
          />
        </v-expansion-panels>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </template>
  
  <script setup>
  import TopicoAcordeon from './TopicoAcordeon.vue';
  import { defineProps } from 'vue';
  
  defineProps({
    categoria: Object,
    categoriaIndex: Number,
  });
  </script>
  
  <style src="../assets/estilo/estilo.css">

  </style>
  