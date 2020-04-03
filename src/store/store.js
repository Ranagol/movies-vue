import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
Vue.use(Vuex);

export const store = new Vuex.Store({
  getters,
  state: {
    movies: [],//this is the list of movies
    searchLetters: '',//...used for searching function
    selectedMovies: [],//the selected movies will be stored here

  },
  mutations,
  actions
});

