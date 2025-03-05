import { createStore } from 'vuex';
import { dadosIniciais } from './data';

export default createStore({
  state: {
    categorias: dadosIniciais,
  },
  mutations: {
    SET_ABA_ATIVA(state, { categoriaIndex, topicoIndex, conteudoIndex, aba }) {
      state.categorias[categoriaIndex].topicos[topicoIndex].conteudos[conteudoIndex].abaAtiva = aba;
    },
    TOGGLE_CHECKBOX(state, { categoriaIndex, topicoIndex, conteudoIndex, checkboxIndex }) {
      const checkbox = state.categorias[categoriaIndex].topicos[topicoIndex].conteudos[conteudoIndex].opcoesCheckbox[checkboxIndex];
      checkbox.selecionada = !checkbox.selecionada;
    },
  },
  actions: {
    setAbaAtiva({ commit }, payload) {
      commit('SET_ABA_ATIVA', payload);
    },
    toggleCheckbox({ commit }, payload) {
      commit('TOGGLE_CHECKBOX', payload);
    },
  },
  getters: {
    categorias: (state) => state.categorias,
  },
});