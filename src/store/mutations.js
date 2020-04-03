export default {
  getAllMovies(state, movies){
    state.movies = movies;
  },

  setSearchLetters(state, searchLetters){
    state.searchLetters = searchLetters;
  },

  selectedMovie(state, movie){
    state.selectedMovies.push(movie);
  }
}