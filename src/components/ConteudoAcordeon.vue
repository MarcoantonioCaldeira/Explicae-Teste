<template>
    <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="texto-negrito titulo">
        {{ conteudo.nome }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <div class="d-flex mb-4">
          <v-btn
            v-for="(opcao, index) in ['Aulas', 'Exercícios', 'Materiais']"
            :key="index"
            variant="flat"
            @click="setAbaAtiva({ categoriaIndex, topicoIndex, conteudoIndex, aba: opcao })"
            :class="{ 'text-secundary': conteudo.abaAtiva === opcao }"
          >
            {{ opcao }}
          </v-btn>
        </div>
        <v-card variant="tonal">
            <template v-if="conteudo.abaAtiva === 'Aulas'">
              <div class="text-uppercase font-weight-bold mb-2">
                TEORIA + QUESTÕES ORIENTADAS
              </div>
              <v-checkbox density="compact"
                v-for="(opcaoCheckbox, checkboxIndex) in conteudo.opcoesCheckbox"
                :key="checkboxIndex"
                :label="opcaoCheckbox.nome"
                :input-value="opcaoCheckbox.selecionada"
                @change="toggleCheckbox({ categoriaIndex, topicoIndex, conteudoIndex, checkboxIndex })"
                class="texto-negrito"
              ></v-checkbox>
            </template>
            <template v-else-if="conteudo.abaAtiva === 'Exercícios'">
              <span class="texto-negrito">Conteúdo dos Exercícios: {{ conteudo.exercicios }}</span>
            </template>
            <template v-else-if="conteudo.abaAtiva === 'Materiais'">
              <span class="texto-negrito">Conteúdo dos Materiais: {{ conteudo.materiais }}</span>
            </template>
        </v-card>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  
  defineProps({
    conteudo: Object,
    categoriaIndex: Number,
    topicoIndex: Number,
    conteudoIndex: Number,
  });
  
  const setAbaAtiva = (payload) => store.dispatch('setAbaAtiva', payload);
  const toggleCheckbox = (payload) => store.dispatch('toggleCheckbox', payload);
  </script>