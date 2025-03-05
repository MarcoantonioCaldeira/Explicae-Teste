<template>
  <v-expansion-panel>
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus" class="texto-negrito titulo">
      {{ conteudo.nome }}
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <!-- Menu de Abas -->
      <div class="d-flex mb-4">
        <v-btn
          v-for="(opcao, index) in ['Aulas', 'Exercícios', 'Materiais']"
          :key="index"
          variant="flat"
          @click="setAbaAtiva({ categoriaIndex, topicoIndex, conteudoIndex, aba: opcao })"
          :class="{ 'text-secundary': conteudo.abaAtiva === opcao }"
          class="mr-2"
        >
          {{ opcao }}
        </v-btn>
      </div>

      <!-- Conteúdo da Aba Ativa -->
      <v-card variant="tonal" class="pa-4">
        <template v-if="conteudo.abaAtiva === 'Aulas'">
          <!-- Título da Seção -->
          <div class="text-uppercase font-weight-bold mb-4">
            TEORIA + QUESTÕES ORIENTADAS
          </div>

          <v-checkbox
            v-for="(opcaoCheckbox, checkboxIndex) in conteudo.opcoesCheckbox"
            :key="checkboxIndex"
            :label="opcaoCheckbox.nome"
            :input-value="opcaoCheckbox.selecionada"
            @change="toggleCheckbox({ categoriaIndex, topicoIndex, conteudoIndex, checkboxIndex })"
            class="texto-negrito mb-2"
            density="compact"
          ></v-checkbox>

          <div class="d-flex align-center mt-4">
            <span class="text-h6 mr-2">4 aulas | 03:05:29 </span>
            <v-chip-group>
              <v-chip
                v-for="(time, index) in conteudo.horasAulas"
                :key="index"
                class="ma-1"
                color="primary"
              >
                {{ time }}
              </v-chip>
            </v-chip-group>
          </div>
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

<style scoped>
.texto-negrito {
  font-weight: bold;
}

.titulo:hover {
  background-color: #eccbfc;
}

.v-btn {
  text-transform: capitalize;
  font-weight: bold;
}

.v-chip {
  font-weight: bold;
}
</style>