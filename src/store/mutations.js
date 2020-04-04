export default {
  getAllMovies(state, movies){
    state.movies = movies;
  },

  setSearchLetters(state, searchLetters){
    state.searchLetters = searchLetters;
  },

  selectedMovie(state, movie){
    if(state.selectedMovies.indexOf(movie) === -1) {//if movie is not already in the selectedMovies array...
      state.selectedMovies.push(movie);//...then push the movie into the selectedMovies array
    }
  },

  selectAll(state){
    state.selectedMovies = state.movies;
  },

  unSelectAll(state){
    state.selectedMovies = [];
  }

 
}