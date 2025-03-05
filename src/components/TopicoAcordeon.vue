<template>
    <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="texto-negrito titulo">
        {{ topico.nome }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex align-center">
          <span class="mr-4 texto-negrito">Aulas {{ topico.aulas }}</span>
          <span class="mr-4 texto-negrito">Exercícios {{ topico.exercicios }}</span>
          <span class="mr-4 texto-negrito">Materiais {{ topico.materiais }}</span>
        </div>
        <v-expansion-panels multiple variant="accordion">
          <ConteudoAcordeon
            v-for="(conteudo, conteudoIndex) in topico.conteudos"
            :key="conteudoIndex"
            :conteudo="conteudo"
            :categoriaIndex="categoriaIndex"
            :topicoIndex="topicoIndex"
          />
        </v-expansion-panels>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </template>
  
  <script setup>
  import ConteudoAcordeon from './ConteudoAcordeon.vue';
  import { defineProps } from 'vue';
  
  defineProps({
    topico: Object,
    categoriaIndex: Number,
  });
  </script>
  