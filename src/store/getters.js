export default {
  movies: state => state.movies,
  searchLetters: state => state.searchLetters,
  
  searchedMovies: state => {//searchedMovies function will actually return a complete new function.
    const movies = state.movies;//here we received the movies from the central store

    return (searchLetters) => {//here we are actually returning a new child function, which will be used in Movies.vue, and which will return all searched movies (ant these searchedMovies will be iterated with v-for) Motherfucker... WTF...

      return movies.filter(movie => movie.title.toLowerCase().includes(searchLetters.toLowerCase()));

      //WTF... Ok, we can have two return here, because they are actually in one line, and one return is returning the other return
    }
  },

  selectedMovies: state => state.selectedMovies,
  


}