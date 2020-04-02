import movieService from '../services/movieService';
export default {
  async getAllMovies({commit}){//{commit} is the commit method, that is from store.commit object
    const movies = await movieService.getAll();
    commit('getAllMovies', movies);
  },

  setSearchLetters( {commit }, searchLetters){
    commit('setSearchLetters', searchLetters);
  }
}