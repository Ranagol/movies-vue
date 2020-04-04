import movieService from '../services/movieService';
export default {
  async getAllMovies({commit}){//{commit} is the commit method, that is from store.commit object
    const movies = await movieService.getAll();
    commit('getAllMovies', movies);
  },

  setSearchLetters( {commit }, searchLetters){
    commit('setSearchLetters', searchLetters);
  },

  selectedMovie({commit}, movie){
    commit('selectedMovie', movie);
  },

  selectAll( {commit}){
    commit('selectAll');
  },

  unSelectAll({commit}){
    commit('unSelectAll');
  },

  sortMovies({commit}, howToSort){//remember, howToSort is an object, like this: {type: 'duration', isAsc: true}
    commit('sortMovies', howToSort);
  }
  
}