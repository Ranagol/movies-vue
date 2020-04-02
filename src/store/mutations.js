export default {
  getAllMovies(state, movies){
    state.movies = movies;
  },

  setSearchLetters(state, searchLetters){
    state.searchLetters = searchLetters;
  }
}