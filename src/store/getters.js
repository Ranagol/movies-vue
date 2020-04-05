export default {
  movies: state => state.movies,
  searchLetters: state => state.searchLetters,
  
  searchedMovies: state => {//searchedMovies function will actually return a complete new function.
    const movies = state.movies;//here we received the movies from the central store
   
    return (searchParam) => {//here we are actually returning a new child function, which will be used in Movies.vue, and which will return all searched movies (ant these searchedMovies will be iterated with v-for) Motherfucker... WTF...
      
      
      if(Array.isArray(movies)){
        return movies.filter(movie => movie.title.toLowerCase().includes(searchParam.toLowerCase()));
      }
      

      //WTF... Ok, we can have two return here, because they are actually in one line, and one return is returning the other return
    }
  },

  selectedMovies: state => state.selectedMovies,

  //pagination in getters
  currentPage: state => state.currentPage,
  moviesForCurrentPage: (state, { searchedMovies }) => {//beside the state argument, it is taking the searchedMovies function as an argument
    
    if(Array.isArray(state.movies)){
      
      const movies = searchedMovies(state.searchLetters);//using the searchedMovies() the same way as in the Movies.vue
      const startIndex = (state.currentPage - 1) * 5;

      const endIndex = startIndex + 5;//here we have +5 instead of +4. That is because of the way how slice operate. We still need for the first page movies with 0-4 keyes.

      return movies.slice(startIndex, endIndex);//we need only 5 movies for one page. 1. page: 0-4. 2. page: 5-9.... And slice is creating these 5 movies from the movies array.
    }
    
  }
  


}